class Metadata {
  constructor(models) {
    this.models = models;
  }
  visitProperty(node, root) {
    const result = {};

    const type = node.type.toUpperCase();

    switch (type) {
      case "ID":
      case "TINYINCREMENTS":
      case "SMALLINCREMENTS":
      case "INCREMENTS":
        result.$Type = "Edm.Int32";
        break;

      case "FLOAT":
      case "DOUBLE":
      case "DEMICAL":
      case "UNSIGNEDFLOAT":
      case "UNSIGNEDDOUBLE":
      case "UNSIGNEDDECIMAL":
        result.$Type = "Edm.Double";
        break;

      case "DATE":
      case "DATETIME":
      case "DATETIMETZ":
      case "TIME":
      case "TIMETZ":
        result.$Type = "Edm.DateTimeOffset";
        break;

      case "STRING":
      case "CHAR":
      case "TEXT":
      case "MEDIUMTEXT":
      case "LONGTEXT":
      case "JSON":
      case "JSONB":
        result.$Type = "Edm.String";
        break;

      case "Array": // node.path = p1; node.schema.paths
        result.$Collection = true;
        if (node.schema && node.schema.paths) {
          this._count += 1;
          const notClassifiedName = `${node.path}Child${this._count}`;
          // Array of complex type
          result.$Type = `OdataService.${notClassifiedName}`;
          root(
            notClassifiedName,
            this.visitor("ComplexType", node.schema.paths, root)
          );
        } else {
          const arrayItemType = this.visitor(
            "Property",
            { instance: node.options.type[0].name },
            root
          );

          result.$Type = arrayItemType.$Type;
        }
        break;

      default:
        return null;
    }

    return result;
  }

  visitEntityType(node, root) {
    const properties = Object.keys(node)
      .filter((path) => path !== "id")
      .reduce((previousProperty, curentProperty) => {
        const result = {
          ...previousProperty,
          [curentProperty]: this.visitor(
            "Property",
            node[curentProperty],
            root
          ),
        };

        return result;
      }, {});

    return {
      $Kind: "EntityType",
      $Key: ["id"],
      id: {
        $Type: "Edm.Int32",
        $Nullable: false,
      },
      ...properties,
    };
  }

  visitComplexType(node, root) {
    const properties = Object.keys(node)
      .filter((item) => item !== "id")
      .reduce((previousProperty, curentProperty) => {
        const result = {
          ...previousProperty,
          [curentProperty]: this.visitor(
            "Property",
            node[curentProperty],
            root
          ),
        };

        return result;
      }, {});

    return {
      $Kind: "ComplexType",
      ...properties,
    };
  }

  static visitAction(node) {
    return {
      $Kind: "Action",
      $IsBound: true,
      $Parameter: [
        {
          $Name: node.resource,
          $Type: `OdataService.${node.resource}`,
          $Collection: node.binding === "collection" ? true : undefined,
        },
      ],
    };
  }

  static visitFunction(node) {
    return {
      $Kind: "Function",
      ...node.params,
    };
  }

  visitor(type, node, root) {
    switch (type) {
      case "Property":
        return this.visitProperty(node, root);

      case "ComplexType":
        return this.visitComplexType(node, root);

      case "Action":
        return Metadata.visitAction(node);

      case "Function":
        return Metadata.visitFunction(node, root);

      default:
        return this.visitEntityType(node, root);
    }
  }

  //入口
  ctrl() {
    const entityTypeNames = Object.keys(this.models);
    const entityTypes = entityTypeNames.reduce(
      (previousResource, currentResource) => {
        const resource = this.models[currentResource];
        const result = { ...previousResource };
        const attachToRoot = (name, value) => {
          result[name] = value;
        };

        // if (resource instanceof Resource) {
        const { columns } = resource;

        result[currentResource] = this.visitor(
          "EntityType",
          columns,
          attachToRoot
        );
        if (resource.actions) {
          const actions = Object.keys(resource.actions);
          if (actions && actions.length) {
            actions.forEach((action) => {
              result[action] = this.visitor(
                "Action",
                resource.actions[action],
                attachToRoot
              );
            });
          }
        }

        // } else {
        //   result[currentResource] = this.visitor(
        //     "Function",
        //     resource,
        //     attachToRoot
        //   );
        // }

        return result;
      },
      {}
    );

    const entitySetNames = Object.keys(this.models);
    const entitySets = entitySetNames.reduce(
      (previousResource, currentResource) => {
        const result = { ...previousResource };
        result[currentResource] =
          //   this.models[currentResource] instanceof Resource
          //     ?
          {
            $Collection: true,
            $Type: `OdataService.${currentResource}`,
          };
        // : {
        //     $Function: `OdataService.${currentResource}`,
        //   };

        return result;
      },
      {}
    );

    //创建document

    const document = {
      $Version: "4.0",
      //   ObjectId: {
      //     $Kind: "TypeDefinition",
      //     $UnderlyingType: "Edm.String",
      //     $MaxLength: 24,
      //   },
      ...entityTypes,
      $EntityContainer: "OdataService",
      ["OdataService"]: {
        // eslint-disable-line no-useless-computed-key
        $Kind: "EntityContainer",
        ...entitySets,
      },
    };

    return document;
  }
}

module.exports = { Metadata };
