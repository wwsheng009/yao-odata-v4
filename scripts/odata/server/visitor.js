const { Token, TokenType } = require("./lib/parser");
const { Literal } = require("./lib/literal");
const qs = require("./lib/qs");
// import { ODataServer } from "./server";
// import { ODataController } from "./controller";
const Edm = require("./edm");

// export interface KeyValuePair {
//     name: string
//     value,
//     raw?: string
//     node
// }

// export interface NavigationPart {
//     name: string
//     type: TokenType
//     key?: KeyValuePair[]
//     params?
//     node
// }

// export interface ISelect {
//     [property: string]: ISelect
// }

const ODATA_TYPE = "@odata.type";
const ODATA_TYPENAME = "@odata.type.name";
class ResourcePathVisitor {
  constructor(serverType, entitySets) {
    this.navigation = [];
    this.path = "";
    this.alias = {};
    this.serverType = serverType;
    this.entitySets = entitySets;
    this.includes = {};
  }

  /**
   * 解析ast语法树，
   * @param {object} node ast node
   * 由parser解析出来的ast语法树结构，node.type是ast解析标识的节点类型。
   * @param {object} context visit context
   * 遍历对象时的上下方对象，visit是一个循环递归函数，使用context可以在递归中传递参数
   * @param {string} type 基类是ODataServer/ODataServerBase的对象
   * @returns
   */
  Visit(node, context, type) {
    this.ast = this.ast || node;
    if (!type) type = this.serverType;
    context = context || {};

    //根据不同的节点类型，选择不同的处理函数。
    if (node) {
      node[ODATA_TYPE] = type;
      let visitor;
      switch (node.type) {
        case "PrimitiveFunctionImportCall":
        case "PrimitiveCollectionFunctionImportCall":
        case "ComplexFunctionImportCall":
        case "ComplexCollectionFunctionImportCall":
        case "EntityFunctionImportCall":
        case "EntityCollectionFunctionImportCall":
          visitor = this.VisitFunctionImportCall;
          break;
        case "BoundPrimitiveFunctionCall":
        case "BoundPrimitiveCollectionFunctionCall":
        case "BoundComplexFunctionCall":
        case "BoundComplexCollectionFunctionCall":
        case "BoundEntityFunctionCall":
        case "BoundEntityCollectionFunctionCall":
          visitor = this.VisitBoundFunctionCall;
          break;
        case "PrimitiveProperty":
        case "PrimitiveKeyProperty":
        case "PrimitiveCollectionProperty":
        case "ComplexProperty":
        case "ComplexCollectionProperty":
        case "EntityNavigationProperty":
        case "EntityCollectionNavigationProperty":
          visitor = this.VisitProperty;
          break;
        case "QualifiedEntityTypeName":
        case "QualifiedComplexTypeName":
          visitor = this.VisitQualifiedTypeName;
          break;
        default:
          //默认选择节点类型对应的处理函数。
          visitor = this[`Visit${node.type}`];
      }

      if (visitor) visitor.call(this, node, context, type);
    }

    return this;
  }

  VisitODataUri(node, context) {
    this.Visit(node.value.resource, context);
    this.Visit(
      node.value.query,
      context,
      this.navigation[this.navigation.length - 1].node[ODATA_TYPE]
    );
    this.navigation.forEach((it) => {
      if (it.params) {
        for (let prop in it.params) {
          if (typeof it.params[prop] == "function") {
            it.params[prop] = it.params[prop]();
          }
        }
      }
    });
  }

  VisitQueryOptions(node, context, type) {
    // Promise.all(
    node.value.options.map((option) =>
      this.Visit(option, Object.assign({}, context), type)
    );
    // );
  }

  VisitSelect(node, context, type) {
    this.select = {};
    node.value.items.forEach((item) => this.Visit(item, context));
  }

  VisitSelectItem(node, context, type) {
    let select = this.select;
    node.raw.split("/").forEach((part) => {
      select = select[part] = select[part] || {};
    });
  }

  VisitFilter(node, context, type) {
    context = Object.assign({ filter: true }, context);
    this.Visit(node.value, context, type);
  }

  VisitAndExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitOrExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitBoolParenExpression(node, context, type) {
    this.Visit(node.value, context, type);
  }

  VisitCommonExpression(node, context, type) {
    this.Visit(node.value, context, type);
  }

  VisitFirstMemberExpression(node, context, type) {
    const firstMemberContext = { ...context, isFirstMemberExpression: true };
    this.Visit(node.value, firstMemberContext, type);
    if (
      firstMemberContext.qualifiedType &&
      firstMemberContext.qualifiedTypeName
    ) {
      type = firstMemberContext.qualifiedType || type;
      node.raw = node.raw.split("/").pop();
    }
    context.type = Edm.getType(type, node.raw, this.serverType.container);
    context.typeName = Edm.getTypeName(
      type,
      node.raw,
      this.serverType.container
    );
    context.deserializer = Edm.getURLDeserializer(
      type,
      node.raw,
      context.type,
      this.serverType.container
    );
    if (Edm.isEnumType(type, node.raw)) {
      const containerType = Object.getPrototypeOf(
        this.serverType.container
      ).constructor;
      const enumType = context.type;
      const prop = node.raw;
      let enumName = context.typeName;
      let enumNamespace = containerType.namespace;

      if (enumName.indexOf(".") > 0) {
        enumNamespace = enumName.slice(0, enumName.lastIndexOf("."));
        enumName = enumName.slice(enumName.lastIndexOf(".") + 1);
      }
      context.typeName =
        Edm.getTypeName(containerType, enumName, this.serverType.container) ||
        Edm.getTypeName(
          containerType,
          `${enumNamespace}.${enumName}`,
          this.serverType.container
        ) ||
        "Edm.Int32";
    }
  }

  VisitMemberExpression(node, context, type) {
    if (node.value && node.value.name && node.value.value) {
      this.Visit(node.value.name, context, type);
      this.Visit(node.value.value, context, type);
    } else this.Visit(node.value, context, type);
  }

  VisitPropertyPathExpression(node, context, type) {
    if (node.value.current && node.value.next) {
      this.Visit(node.value.current, context, type);
      this.Visit(node.value.next, context, type);
    } else this.Visit(node.value, context, type);
  }

  VisitNotExpression(node, context, type) {
    this.Visit(node.value, context, type);
  }

  VisitEqualsExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitNotEqualsExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitLesserThanExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitLesserOrEqualsExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitGreaterThanExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitGreaterOrEqualsExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitHasExpression(node, context, type) {
    this.Visit(node.value.left, context, type);
    this.Visit(node.value.right, context, type);
  }

  VisitExpand(node, context, type) {
    // Promise.all(
    node.value.items.map((item) => {
      let expandPath = item.value.path.raw;
      let visitor = this.includes[expandPath];
      if (!visitor) {
        visitor = new ResourcePathVisitor(node[ODATA_TYPE], this.entitySets);
        this.includes[expandPath] = visitor;
      }
      visitor.Visit(item, Object.assign({}, context), type);
    });
    // );
  }

  VisitExpandItem(node, context, type) {
    this.Visit(node.value.path, context, type);
    type = this.navigation[this.navigation.length - 1].node[ODATA_TYPE] || type;
    if (node.value.options) {
      this.ast = new Token(node);
      this.ast.type = TokenType.QueryOptions;
      this.ast.raw = node.value.options.map((n) => n.raw).join("&");
      this.query = qs.parse(this.ast.raw);
      // Promise.all(
      node.value.options.map((item) =>
        this.Visit(item, Object.assign({}, context), type)
      );
      // );
    }
    if (node.value.ref)
      this.Visit(node.value.ref, Object.assign({}, context), type);
    if (node.value.count)
      this.Visit(node.value.count, Object.assign({}, context), type);
  }

  VisitExpandPath(node, context, type) {
    for (let item of node.value) {
      this.Visit(item, Object.assign({}, context), type);
      type = item[ODATA_TYPE] || type;
    }
    for (let i = this.navigation.length - 1; i >= 0; i--) {
      let nav = this.navigation[i];
      if (
        nav.type == TokenType.EntityCollectionNavigationProperty ||
        nav.type == TokenType.EntityNavigationProperty
      ) {
        this.navigationProperty = nav.name;
        break;
      }
    }
  }

  VisitId(node) {
    this.id = node.value;
  }

  VisitInlineCount(node) {
    this.inlinecount = Literal.convert(node.value.value, node.value.raw);
  }

  VisitAliasAndValue(node, context) {
    this.Visit(node.value.value.value, context);
    this.alias[node.value.alias.value.name] = context.literal;
    delete context.literal;
  }

  VisitResourcePath(node, context) {
    this.Visit(node.value.resource, context);
    this.Visit(node.value.navigation, context, context[ODATA_TYPE]);
    delete context[ODATA_TYPE];
  }

  VisitSingletonEntity(node) {
    this.singleton = node.raw;
  }

  VisitEntitySetName(node, context) {
    node[ODATA_TYPE] = context[ODATA_TYPE] =
      this.entitySets[node.value.name].prototype.elementType;

    this.navigation.push({ name: node.value.name, type: node.type, node });
    this.path += "/" + node.value.name;
  }

  VisitCountExpression(node) {
    this.navigation.push({
      name: "$count",
      type: node.type,
      params: {},
      node,
    });
    this.path += "/$count";
  }

  VisitCollectionNavigation(node, context, type) {
    context.isCollection = true;
    this.Visit(node.value.name, context, type);
    this.Visit(node.value.path, context, type);
    delete context.isCollection;
  }

  VisitCollectionNavigationPath(node, context, type) {
    this.Visit(node.value.predicate, context, type);
    this.Visit(node.value.navigation, context, type);
  }

  VisitSimpleKey(node, _, type) {
    let lastNavigationPart = this.navigation[this.navigation.length - 1];
    node[ODATA_TYPENAME] = Edm.getTypeName(
      type,
      node.value.key,
      this.serverType.container
    );
    node[ODATA_TYPE] = Edm.getType(
      type,
      node.value.key,
      this.serverType.container
    );
    let value = Literal.convert(node.value.value.value, node.value.value.raw);
    let deserializer = Edm.getURLDeserializer(
      type,
      node.value.key,
      node[ODATA_TYPE],
      this.serverType.container
    );
    if (typeof deserializer == "function") value = deserializer(value);
    lastNavigationPart.key = [
      {
        name: node.value.key,
        value,
        raw: node.value.value.raw,
        node,
      },
    ];
    this.path += "(\\(([^,]+)\\))";
  }

  VisitCompoundKey(node, _, type) {
    this.path += "(\\(";
    let lastNavigationPart = this.navigation[this.navigation.length - 1];
    lastNavigationPart.key =
      // Promise.all <
      // KeyValuePair >
      node.value.map((pair, i) => {
        this.path += i == node.value.length - 1 ? "([^,]+)" : "([^,]+,)";
        node[ODATA_TYPENAME] = Edm.getTypeName(
          type,
          pair.value.key.value.name,
          this.serverType.container
        );
        node[ODATA_TYPE] = Edm.getType(
          type,
          pair.value.key.value.name,
          this.serverType.container
        );
        let value = Literal.convert(
          pair.value.value.value,
          pair.value.value.raw
        );
        let deserializer = Edm.getURLDeserializer(
          type,
          pair.value.key.value.name,
          node[ODATA_TYPE],
          this.serverType.container
        );
        if (typeof deserializer == "function") value = deserializer(value);
        return {
          name: pair.value.key.value.name,
          value,
          raw: pair.value.value.raw,
          node,
        };
      });
    this.path += "\\))";
  }

  VisitQualifiedTypeName(node, context, type) {
    const children = Edm.getChildren(node[ODATA_TYPE]);
    const child = children.find((t) => `${t.namespace}.${t.name}` == node.raw);
    if (child) {
      node[ODATA_TYPE] = child;
      node[ODATA_TYPENAME] = node.raw;
      if (context.isFirstMemberExpression) {
        context.qualifiedType = child;
        context.qualifiedTypeName = node.raw;
      } else {
        this.navigation.push({
          name: node.raw,
          type: node.type,
          node,
        });
        this.path += `/${node.raw}`;
      }
    }
  }

  VisitSingleNavigation(node, context, type) {
    context.isCollection = false;
    if (node.value.name) this.Visit(node.value.name, context, type);
    this.Visit(node.value.path, context, type);
    delete context.isCollection;
  }

  VisitPropertyPath(node, context, type) {
    this.Visit(node.value.path, context, type);
    this.Visit(node.value.navigation, context, type);
  }

  VisitProperty(node, _) {
    node[ODATA_TYPENAME] = Edm.getTypeName(
      node[ODATA_TYPE],
      node.value.name,
      this.serverType.container
    );
    node[ODATA_TYPE] = Edm.getType(
      node[ODATA_TYPE],
      node.value.name,
      this.serverType.container
    );
    this.navigation.push({ name: node.value.name, type: node.type, node });
    this.path += "/" + node.value.name;
  }

  VisitValueExpression(node) {
    this.navigation.push({
      name: "$value",
      type: node.type,
      params: {},
      node,
    });
    this.path += "/$value";
  }

  VisitRefExpression(node) {
    this.navigation.push({
      name: "$ref",
      type: node.type,
      params: {},
      node,
    });
    this.path += "/$ref";
  }

  VisitBoundOperation(node, context, type) {
    this.Visit(node.value.operation, context, type);
    this.Visit(node.value.navigation, context, type);
  }

  VisitBoundActionCall(node) {
    let part = {
      type: node.type,
      name: node.raw,
      node,
    };
    this.navigation.push(part);
    this.path += "/" + part.name;
  }

  VisitBoundFunctionCall(node, context, type) {
    let part = {
      type: node.type,
      name: node.value.call.value.namespace + "." + node.value.call.value.name,
      params: {},
      node,
    };
    this.navigation.push(part);
    this.path += "/" + part.name;
    this.path += "(\\(";
    if (context.isCollection) {
      //获取server中的控制器，控制器
      type = this.serverType.getController(type);
    }
    context.parameters = Edm.getParameters(type, part.name.split(".").pop());
    // Promise.all(
    node.value.params.value.map((param, i) => {
      this.Visit(param, context);
      if (i < node.value.params.value.length - 1) this.path += ",";
    });
    // );
    delete context.parameters;
    this.path += "\\))";
  }

  VisitFunctionImportCall(node, context) {
    let part = {
      type: node.type,
      name: node.value.import.value.name,
      params: {},
      node,
    };
    this.navigation.push(part);
    this.path += "/" + part.name;
    this.path += "(\\(";
    context.parameters = Edm.getParameters(node[ODATA_TYPE], part.name);
    // Promise.all(
    node.value.params.map((param) =>
      this.Visit(param, Object.assign({}, context))
    );
    // );
    delete context.parameters;
    this.path += "\\))";
  }

  VisitFunctionParameter(node, context) {
    let edmParam = context.parameters.find(
      (p) => p.name == [node.value.name.value.name]
    );
    let deserializer =
      (edmParam &&
        Edm.getURLDeserializer(
          node[ODATA_TYPE],
          edmParam.name,
          edmParam.type,
          this.serverType.container
        )) ||
      ((_) => _);

    context = Object.assign({}, context);
    this.Visit(node.value.value, context, edmParam && edmParam.type);

    let params = this.navigation[this.navigation.length - 1].params;
    params[node.value.name.value.name] = (
      (literal) => (_) =>
        deserializer(typeof literal == "function" ? literal() : literal)
    )(context.literal);
    this.path += node.value.name.value.name + "=([^,]+)";
    delete context.literal;
  }

  VisitActionImportCall(node) {
    let part = {
      type: node.value.type,
      name: node.value.value.name,
      node,
    };
    this.navigation.push(part);
    this.path += "/" + part.name;
  }

  VisitParameterAlias(node, context) {
    context.literal = (
      (name) => (_) =>
        this.alias[name]
    )(node.value.name);
  }

  VisitLiteral(node, context, type) {
    let literal = Literal.convert(node.value, node.raw);
    if (node.value != context.typeName) {
      node.raw = (context.deserializer || ((_) => _))(literal);
      node.value = context.typeName;
      literal = node.raw;
    }
    context.literal = literal;
  }

  VisitObject(node, context, type) {
    context.literal = JSON.parse(node.raw);
  }

  VisitEnum(node, context, type) {
    const enumName = node.value.name.raw.split(".");
    context.enumName = enumName.pop();
    context.enumNamespace = enumName.join(".");
    this.Visit(node.value.value, context, type);
  }

  VisitEnumValue(node, context, type) {
    this.Visit(node.value.values[0], context, type);
  }

  VisitEnumerationMember(node, context, type) {
    if (context.filter && type) {
      node.type = TokenType.EnumMemberValue;
      const deserializer = Edm.getURLDeserializer(
        type,
        context.typeName,
        context.type,
        this.serverType.container
      );
      if (deserializer) {
        node.raw = deserializer(node.value.name);
        node.value = node.raw;
      } else {
        const { enumNamespace, enumName } = context;
        const qualifiedEnumTypeName = `${enumNamespace}.${enumName}`;
        if (!(context.type || context.typeName) && enumNamespace && enumName) {
          context.type =
            this.serverType.container[qualifiedEnumTypeName] ||
            this.serverType.container[context.enumName];
          const containerType = Object.getPrototypeOf(
            this.serverType.container
          ).constructor;
          context.typeName =
            Edm.getTypeName(
              containerType,
              qualifiedEnumTypeName,
              this.serverType.container
            ) ||
            Edm.getTypeName(
              containerType,
              enumName,
              this.serverType.container
            ) ||
            "Edm.Int32";
        }
        node[ODATA_TYPE] = context.type;
        node[ODATA_TYPENAME] = context.typeName;
        node.raw = `${context.type && context.type[node.value.name]}`;
        node.value = context.typeName;
      }
    } else {
      context.literal = (type && type[node.value.name]) || node.value.name;
    }
  }

  VisitEnumMemberValue(node, context, type) {
    context.literal = Literal.convert(node.value, node.raw);
  }

  VisitRootExpression(node, context, type) {
    let rootValue = this.serverType.execute(
      node.raw.replace("$root/", ""),
      "GET"
    );
    node.type = TokenType.Literal;
    node.value = rootValue.elementType;
    node.raw = Edm.escape(rootValue.body.value, node.value);
    this.Visit(node, context, type);
  }
}
exports.ResourcePathVisitor = ResourcePathVisitor;
