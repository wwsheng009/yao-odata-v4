var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/odata-v4-metadata/lib/metacode.js
var require_metacode = __commonJS({
  "node_modules/odata-v4-metadata/lib/metacode.js"(exports) {
    "use strict";
    var __extends =
      (exports && exports.__extends) ||
      (function () {
        var extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b;
            }) ||
          function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
          };
        return function (d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        };
      })();
    Object.defineProperty(exports, "__esModule", { value: true });
    function isUndefined(o) {
      return o === void 0;
    }
    var definitionPropName = "definition";
    var MemberAttribute = (function () {
      function MemberAttribute2(attributeName) {
        this.attributeName = attributeName;
      }
      MemberAttribute2.prototype.registerMember = function (target, key) {
        var def = (target[definitionPropName] =
          target[definitionPropName] || {});
        var md = def.members || [];
        if (md.indexOf(key) < 0) {
          md.push(key);
        }
        def.members = md;
      };
      MemberAttribute2.prototype.getDecoratorValue = function (
        target,
        key,
        presentedValue
      ) {
        return presentedValue;
      };
      MemberAttribute2.prototype.decorate = function (value) {
        var _this = this;
        return function (target, key, descriptor) {
          _this.registerMember(target, key);
          var decoratorValue = _this.getDecoratorValue(target, key, value);
          target[definitionPropName][_this.attributeName] =
            target[definitionPropName][_this.attributeName] || {};
          target[definitionPropName][_this.attributeName][key] = decoratorValue;
        };
      };
      Object.defineProperty(MemberAttribute2.prototype, "decorator", {
        get: function () {
          return this.decorate();
        },
        enumerable: true,
        configurable: true,
      });
      MemberAttribute2.getMembers = function (target) {
        return target[definitionPropName].members;
      };
      MemberAttribute2.getAttributeValue = function (
        target,
        memberName,
        attributeName
      ) {
        return ((target[definitionPropName] || {})[attributeName] || {})[
          memberName
        ];
      };
      return MemberAttribute2;
    })();
    exports.MemberAttribute = MemberAttribute;
    var AttributeFunctionChain = (function () {
      function AttributeFunctionChain2() {
        var steps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          steps[_i] = arguments[_i];
        }
        this.steps = [];
        this.steps = steps;
      }
      AttributeFunctionChain2.prototype.invoke = function (
        definition,
        instance
      ) {
        var result = definition;
        this.steps.forEach(function (fn) {
          result = fn(result, instance);
        });
        return result;
      };
      return AttributeFunctionChain2;
    })();
    exports.AttributeFunctionChain = AttributeFunctionChain;
    var ParseAttribute = (function (_super) {
      __extends(ParseAttribute2, _super);
      function ParseAttribute2() {
        return _super.call(this, "serialize") || this;
      }
      ParseAttribute2.prototype.getDecoratorValue = function (
        target,
        key,
        presentedValue
      ) {
        if (!isUndefined(presentedValue)) {
          return presentedValue;
        }
        return new AttributeFunctionChain(function (d) {
          return d[key];
        });
      };
      return ParseAttribute2;
    })(MemberAttribute);
    exports.ParseAttribute = ParseAttribute;
    exports.required = new MemberAttribute("required").decorate(true);
    exports.defaultValueAttribute = new MemberAttribute("defaultValue");
    exports.defaultValue = exports.defaultValueAttribute.decorate.bind(
      exports.defaultValueAttribute
    );
    exports.parseAttribute = new ParseAttribute();
    exports.parse = exports.parseAttribute.decorator;
    exports.parseAs = exports.parseAttribute.decorate.bind(
      exports.parseAttribute
    );
    exports.typeArgument = new MemberAttribute("typeArgument");
  },
});

// node_modules/odata-v4-metadata/lib/edm.js
var require_edm = __commonJS({
  "node_modules/odata-v4-metadata/lib/edm.js"(exports) {
    "use strict";
    var __extends =
      (exports && exports.__extends) ||
      (function () {
        var extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b;
            }) ||
          function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
          };
        return function (d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        };
      })();
    var __decorate =
      (exports && exports.__decorate) ||
      function (decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
              ? (desc = Object.getOwnPropertyDescriptor(target, key))
              : desc,
          d;
        if (
          typeof Reflect === "object" &&
          typeof Reflect.decorate === "function"
        )
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata =
      (exports && exports.__metadata) ||
      function (k, v) {
        if (
          typeof Reflect === "object" &&
          typeof Reflect.metadata === "function"
        )
          return Reflect.metadata(k, v);
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var metacode = require_metacode();
    var Edm3;
    (function (Edm4) {
      var PrimitiveType = (function () {
        function PrimitiveType2(className) {
          this.className = className;
        }
        PrimitiveType2.prototype.toString = function () {
          return this.className;
        };
        return PrimitiveType2;
      })();
      Edm4.PrimitiveType = PrimitiveType;
      Edm4.Binary = new PrimitiveType("Edm.Binary");
      Edm4.Boolean = new PrimitiveType("Edm.Boolean");
      Edm4.Byte = new PrimitiveType("Edm.Byte");
      Edm4.Date = new PrimitiveType("Edm.Date");
      Edm4.DateTimeOffset = new PrimitiveType("Edm.DateTimeOffset");
      Edm4.Decimal = new PrimitiveType("Edm.Decimal");
      Edm4.Double = new PrimitiveType("Edm.Double");
      Edm4.Duration = new PrimitiveType("Edm.Duration");
      Edm4.Guid = new PrimitiveType("Edm.Guid");
      Edm4.Int16 = new PrimitiveType("Edm.Int16");
      Edm4.Int32 = new PrimitiveType("Edm.Int32");
      Edm4.Int64 = new PrimitiveType("Edm.Int64");
      Edm4.SByte = new PrimitiveType("Edm.SByte");
      Edm4.Single = new PrimitiveType("Edm.Single");
      Edm4.Stream = new PrimitiveType("Edm.Stream");
      Edm4.String = new PrimitiveType("Edm.String");
      Edm4.TimeOfDay = new PrimitiveType("Edm.TimeOfDay");
      Edm4.Geography = new PrimitiveType("Edm.Geography");
      Edm4.GeographyPoint = new PrimitiveType("Edm.GeographyPoint");
      Edm4.GeographyLineString = new PrimitiveType("Edm.GeographyLineString");
      Edm4.GeographyPolygon = new PrimitiveType("Edm.GeographyPolygon");
      Edm4.GeographyMultiPoint = new PrimitiveType("Edm.GeographyMultiPoint");
      Edm4.GeographyMultiLineString = new PrimitiveType(
        "Edm.GeographyMultiLineString"
      );
      Edm4.GeographyMultiPolygon = new PrimitiveType(
        "Edm.GeographyMultiPolygon"
      );
      Edm4.GeographyCollection = new PrimitiveType("Edm.GeographyCollection");
      Edm4.Geometry = new PrimitiveType("Edm.Geometry");
      Edm4.GeometryPoint = new PrimitiveType("Edm.GeometryPoint");
      Edm4.GeometryLineString = new PrimitiveType("Edm.GeometryLineString");
      Edm4.GeometryPolygon = new PrimitiveType("Edm.GeometryPolygon");
      Edm4.GeometryMultiPoint = new PrimitiveType("Edm.GeometryMultiPoint");
      Edm4.GeometryMultiLineString = new PrimitiveType(
        "Edm.GeometryMultiLineString"
      );
      Edm4.GeometryMultiPolygon = new PrimitiveType("Edm.GeometryMultiPolygon");
      Edm4.GeometryCollection = new PrimitiveType("Edm.GeometryCollection");
      var MemberAttribute = metacode.MemberAttribute;
      var parse = metacode.parse;
      var required = metacode.required;
      var defaultValue = metacode.defaultValue;
      var parseAs = metacode.parseAs;
      var AttributeFunctionChain = metacode.AttributeFunctionChain;
      var mapArray = function (sourceField, factory) {
        return new metacode.AttributeFunctionChain(
          function (d, i) {
            return d[sourceField];
          },
          function (props, i) {
            return Array.isArray(props) ? props : props ? [props] : [];
          },
          function (props, i) {
            return props.map(function (prop) {
              return factory(prop, i);
            });
          }
        );
      };
      var primitiveAnnotationValue = function (sourceField) {
        return new metacode.AttributeFunctionChain(function (d, i) {
          if (
            d["collection"] &&
            d["collection"][0] &&
            Array.isArray(d["collection"][0][sourceField]) &&
            !d[sourceField]
          ) {
            return d["collection"][0][sourceField].map(function (x) {
              return x.text;
            });
          }
          var props = d[sourceField];
          if (Array.isArray(props)) {
            return props
              .filter(function (x) {
                return "text" in x;
              })
              .map(function (x) {
                return x.text;
              })[0];
          } else {
            return props;
          }
        });
      };
      var annotationTypeSelector = function (source) {
        for (var i in Edm4.AnnotationTypes) {
          if (
            i in source ||
            (source["collection"] &&
              source["collection"][0] &&
              i in source["collection"][0])
          ) {
            return Edm4.AnnotationTypes[i];
          }
        }
        return Annotation;
      };
      var EdmItemBase = (function () {
        function EdmItemBase2(definition, parent) {
          this.parent = parent;
          definition && this.loadFrom(definition);
        }
        EdmItemBase2.prototype.loadFrom = function (definition) {
          var _this = this;
          var proto = Object.getPrototypeOf(this);
          MemberAttribute.getMembers(proto).forEach(function (membername) {
            var parser = MemberAttribute.getAttributeValue(
              proto,
              membername,
              "serialize"
            );
            if (parser) {
              var v = parser.invoke(definition, _this);
              _this[membername] = v;
            }
          });
        };
        return EdmItemBase2;
      })();
      Edm4.EdmItemBase = EdmItemBase;
      var Property = (function (_super) {
        __extends(Property2, _super);
        function Property2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Property2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Property2.prototype,
          "type",
          void 0
        );
        __decorate(
          [parse, defaultValue(true), __metadata("design:type", Boolean)],
          Property2.prototype,
          "nullable",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Property2.prototype,
          "maxLength",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Property2.prototype,
          "precision",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Property2.prototype,
          "scale",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          Property2.prototype,
          "unicode",
          void 0
        );
        __decorate(
          [parse, defaultValue(0), __metadata("design:type", Number)],
          Property2.prototype,
          "SRID",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Object)],
          Property2.prototype,
          "defaultValue",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Object)],
          Property2.prototype,
          "concurrencyMode",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Property2.prototype,
          "annotations",
          void 0
        );
        return Property2;
      })(EdmItemBase);
      Edm4.Property = Property;
      var NavigationProperty = (function (_super) {
        __extends(NavigationProperty2, _super);
        function NavigationProperty2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          NavigationProperty2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          NavigationProperty2.prototype,
          "type",
          void 0
        );
        __decorate(
          [parse, defaultValue(true), __metadata("design:type", Boolean)],
          NavigationProperty2.prototype,
          "nullable",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          NavigationProperty2.prototype,
          "partner",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          NavigationProperty2.prototype,
          "containsTarget",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("referentialConstraint", function (prop, i) {
                return new ReferentialConstraint(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          NavigationProperty2.prototype,
          "referentialConstraints",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          NavigationProperty2.prototype,
          "annotations",
          void 0
        );
        return NavigationProperty2;
      })(EdmItemBase);
      Edm4.NavigationProperty = NavigationProperty;
      var ReferentialConstraint = (function (_super) {
        __extends(ReferentialConstraint2, _super);
        function ReferentialConstraint2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          ReferentialConstraint2.prototype,
          "property",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          ReferentialConstraint2.prototype,
          "referencedProperty",
          void 0
        );
        return ReferentialConstraint2;
      })(EdmItemBase);
      Edm4.ReferentialConstraint = ReferentialConstraint;
      var PropertyRef = (function (_super) {
        __extends(PropertyRef2, _super);
        function PropertyRef2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          PropertyRef2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          PropertyRef2.prototype,
          "alias",
          void 0
        );
        return PropertyRef2;
      })(EdmItemBase);
      Edm4.PropertyRef = PropertyRef;
      var Key = (function (_super) {
        __extends(Key2, _super);
        function Key2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [
            parseAs(
              mapArray("propertyRef", function (prop, i) {
                return new PropertyRef(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Key2.prototype,
          "propertyRefs",
          void 0
        );
        return Key2;
      })(EdmItemBase);
      Edm4.Key = Key;
      var EntityType = (function (_super) {
        __extends(EntityType2, _super);
        function EntityType2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          EntityType2.prototype,
          "name",
          void 0
        );
        __decorate(
          [
            parseAs(
              new AttributeFunctionChain(
                function (d, i) {
                  return d.key;
                },
                function (props, i) {
                  return props || [];
                },
                function (props, i) {
                  return props.map(function (prop) {
                    return new Key(prop, i);
                  });
                },
                function (props) {
                  return props[0];
                }
              )
            ),
            __metadata("design:type", Key),
          ],
          EntityType2.prototype,
          "key",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          EntityType2.prototype,
          "baseType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          EntityType2.prototype,
          "abstract",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          EntityType2.prototype,
          "openType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          EntityType2.prototype,
          "hasStream",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("property", function (prop, i) {
                return new Property(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntityType2.prototype,
          "properties",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("navigationProperty", function (prop, i) {
                return new NavigationProperty(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntityType2.prototype,
          "navigationProperties",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntityType2.prototype,
          "annotations",
          void 0
        );
        return EntityType2;
      })(EdmItemBase);
      Edm4.EntityType = EntityType;
      var ComplexType = (function (_super) {
        __extends(ComplexType2, _super);
        function ComplexType2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          ComplexType2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          ComplexType2.prototype,
          "baseType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          ComplexType2.prototype,
          "abstract",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          ComplexType2.prototype,
          "openType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          ComplexType2.prototype,
          "hasStream",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("property", function (prop, i) {
                return new Property(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          ComplexType2.prototype,
          "properties",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("navigationProperty", function (prop, i) {
                return new NavigationProperty(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          ComplexType2.prototype,
          "navigationProperties",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          ComplexType2.prototype,
          "annotations",
          void 0
        );
        return ComplexType2;
      })(EdmItemBase);
      Edm4.ComplexType = ComplexType;
      var Parameter = (function (_super) {
        __extends(Parameter2, _super);
        function Parameter2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Parameter2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Parameter2.prototype,
          "type",
          void 0
        );
        __decorate(
          [parse, defaultValue(true), __metadata("design:type", Boolean)],
          Parameter2.prototype,
          "nullable",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Parameter2.prototype,
          "maxLength",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Parameter2.prototype,
          "precision",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Parameter2.prototype,
          "scale",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          Parameter2.prototype,
          "unicode",
          void 0
        );
        __decorate(
          [parse, defaultValue(0), __metadata("design:type", Number)],
          Parameter2.prototype,
          "SRID",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Parameter2.prototype,
          "annotations",
          void 0
        );
        return Parameter2;
      })(EdmItemBase);
      Edm4.Parameter = Parameter;
      var ReturnType = (function (_super) {
        __extends(ReturnType2, _super);
        function ReturnType2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, __metadata("design:type", String)],
          ReturnType2.prototype,
          "type",
          void 0
        );
        __decorate(
          [parse, defaultValue(true), __metadata("design:type", Boolean)],
          ReturnType2.prototype,
          "nullable",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          ReturnType2.prototype,
          "annotations",
          void 0
        );
        return ReturnType2;
      })(EdmItemBase);
      Edm4.ReturnType = ReturnType;
      var Invokable = (function (_super) {
        __extends(Invokable2, _super);
        function Invokable2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        return Invokable2;
      })(EdmItemBase);
      Edm4.Invokable = Invokable;
      var Action = (function (_super) {
        __extends(Action2, _super);
        function Action2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Action2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          Action2.prototype,
          "isBound",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          Action2.prototype,
          "entitySetPath",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("parameter", function (prop, i) {
                return new Parameter(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Action2.prototype,
          "parameters",
          void 0
        );
        __decorate(
          [
            parseAs(
              new AttributeFunctionChain(
                function (d, i) {
                  return d.returnType;
                },
                function (rt, i) {
                  return new ReturnType(rt, i);
                }
              )
            ),
            __metadata("design:type", ReturnType),
          ],
          Action2.prototype,
          "returnType",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Action2.prototype,
          "annotations",
          void 0
        );
        return Action2;
      })(Invokable);
      Edm4.Action = Action;
      var Function = (function (_super) {
        __extends(Function2, _super);
        function Function2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Function2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          Function2.prototype,
          "isBound",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          Function2.prototype,
          "entitySetPath",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("parameter", function (prop, i) {
                return new Parameter(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Function2.prototype,
          "parameters",
          void 0
        );
        __decorate(
          [
            parseAs(
              new AttributeFunctionChain(
                function (d, i) {
                  return d.returnType;
                },
                function (rt, i) {
                  return new ReturnType(rt, i);
                }
              )
            ),
            __metadata("design:type", ReturnType),
          ],
          Function2.prototype,
          "returnType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          Function2.prototype,
          "isComposable",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Function2.prototype,
          "annotations",
          void 0
        );
        return Function2;
      })(Invokable);
      Edm4.Function = Function;
      var Member = (function (_super) {
        __extends(Member2, _super);
        function Member2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Member2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          Member2.prototype,
          "value",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Member2.prototype,
          "annotations",
          void 0
        );
        return Member2;
      })(EdmItemBase);
      Edm4.Member = Member;
      var EnumType = (function (_super) {
        __extends(EnumType2, _super);
        function EnumType2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          EnumType2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          EnumType2.prototype,
          "namespace",
          void 0
        );
        __decorate(
          [
            parse,
            defaultValue(Edm4.Int32),
            __metadata("design:type", PrimitiveType),
          ],
          EnumType2.prototype,
          "underlyingType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          EnumType2.prototype,
          "isFlags",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("member", function (prop, i) {
                return new Member(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EnumType2.prototype,
          "members",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EnumType2.prototype,
          "annotations",
          void 0
        );
        return EnumType2;
      })(EdmItemBase);
      Edm4.EnumType = EnumType;
      var EntitySet = (function (_super) {
        __extends(EntitySet2, _super);
        function EntitySet2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          EntitySet2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          EntitySet2.prototype,
          "entityType",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntitySet2.prototype,
          "annotations",
          void 0
        );
        return EntitySet2;
      })(EdmItemBase);
      Edm4.EntitySet = EntitySet;
      var ActionImport = (function (_super) {
        __extends(ActionImport2, _super);
        function ActionImport2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          ActionImport2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          ActionImport2.prototype,
          "action",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          ActionImport2.prototype,
          "annotations",
          void 0
        );
        return ActionImport2;
      })(EdmItemBase);
      Edm4.ActionImport = ActionImport;
      var FunctionImport = (function (_super) {
        __extends(FunctionImport2, _super);
        function FunctionImport2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          FunctionImport2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, required, __metadata("design:type", String)],
          FunctionImport2.prototype,
          "function",
          void 0
        );
        __decorate(
          [parse, defaultValue(false), __metadata("design:type", Boolean)],
          FunctionImport2.prototype,
          "includeInServiceDocument",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          FunctionImport2.prototype,
          "annotations",
          void 0
        );
        return FunctionImport2;
      })(EdmItemBase);
      Edm4.FunctionImport = FunctionImport;
      var EntityContainer = (function (_super) {
        __extends(EntityContainer2, _super);
        function EntityContainer2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, __metadata("design:type", String)],
          EntityContainer2.prototype,
          "name",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("entitySet", function (prop, i) {
                return new EntitySet(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntityContainer2.prototype,
          "entitySets",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("actionImport", function (prop, i) {
                return new ActionImport(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntityContainer2.prototype,
          "actionImports",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("functionImport", function (prop, i) {
                return new FunctionImport(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          EntityContainer2.prototype,
          "functionImports",
          void 0
        );
        return EntityContainer2;
      })(EdmItemBase);
      Edm4.EntityContainer = EntityContainer;
      var TypeDefinition = (function (_super) {
        __extends(TypeDefinition2, _super);
        function TypeDefinition2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, __metadata("design:type", String)],
          TypeDefinition2.prototype,
          "name",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", PrimitiveType)],
          TypeDefinition2.prototype,
          "underlyingType",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          TypeDefinition2.prototype,
          "maxLength",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Boolean)],
          TypeDefinition2.prototype,
          "unicode",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          TypeDefinition2.prototype,
          "precision",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", Number)],
          TypeDefinition2.prototype,
          "scale",
          void 0
        );
        __decorate(
          [parse, defaultValue(0), __metadata("design:type", Number)],
          TypeDefinition2.prototype,
          "SRID",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          TypeDefinition2.prototype,
          "annotations",
          void 0
        );
        return TypeDefinition2;
      })(EdmItemBase);
      Edm4.TypeDefinition = TypeDefinition;
      var Schema = (function (_super) {
        __extends(Schema2, _super);
        function Schema2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Schema2.prototype,
          "namespace",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          Schema2.prototype,
          "alias",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("enumType", function (prop, i) {
                return new EnumType(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "enumTypes",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("typeDefinition", function (prop, i) {
                return new TypeDefinition(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "typeDefinitions",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("complexType", function (prop, i) {
                return new ComplexType(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "complexTypes",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("entityType", function (prop, i) {
                return new EntityType(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "entityTypes",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("action", function (prop, i) {
                return new Action(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "actions",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("function", function (prop, i) {
                return new Edm4.Function(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "functions",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("entityContainer", function (prop, i) {
                return new Edm4.EntityContainer(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "entityContainer",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotations", function (prop, i) {
                return new Edm4.Annotations(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Schema2.prototype,
          "annotations",
          void 0
        );
        return Schema2;
      })(EdmItemBase);
      Edm4.Schema = Schema;
      var DataServices = (function (_super) {
        __extends(DataServices2, _super);
        function DataServices2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [
            parseAs(
              mapArray("schema", function (prop, i) {
                return new Schema(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          DataServices2.prototype,
          "schemas",
          void 0
        );
        return DataServices2;
      })(EdmItemBase);
      Edm4.DataServices = DataServices;
      var Reference = (function (_super) {
        __extends(Reference2, _super);
        function Reference2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, __metadata("design:type", String)],
          Reference2.prototype,
          "uri",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("include", function (prop, i) {
                return new ReferenceInclude(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Reference2.prototype,
          "includes",
          void 0
        );
        return Reference2;
      })(EdmItemBase);
      Edm4.Reference = Reference;
      var ReferenceInclude = (function (_super) {
        __extends(ReferenceInclude2, _super);
        function ReferenceInclude2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, __metadata("design:type", String)],
          ReferenceInclude2.prototype,
          "namespace",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          ReferenceInclude2.prototype,
          "alias",
          void 0
        );
        return ReferenceInclude2;
      })(EdmItemBase);
      Edm4.ReferenceInclude = ReferenceInclude;
      var Edmx = (function (_super) {
        __extends(Edmx2, _super);
        function Edmx2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.version = "4.0";
          return _this;
        }
        __decorate(
          [
            parseAs(
              new AttributeFunctionChain(function (edm) {
                return new Edm4.DataServices(edm.dataServices);
              })
            ),
            __metadata("design:type", DataServices),
          ],
          Edmx2.prototype,
          "dataServices",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("reference", function (prop, i) {
                return new Reference(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Edmx2.prototype,
          "references",
          void 0
        );
        return Edmx2;
      })(EdmItemBase);
      Edm4.Edmx = Edmx;
      var Annotations = (function (_super) {
        __extends(Annotations2, _super);
        function Annotations2() {
          return (_super !== null && _super.apply(this, arguments)) || this;
        }
        __decorate(
          [parse, required, __metadata("design:type", String)],
          Annotations2.prototype,
          "target",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          Annotations2.prototype,
          "qualifier",
          void 0
        );
        __decorate(
          [
            parseAs(
              mapArray("annotation", function (prop, i) {
                return new (annotationTypeSelector(prop))(prop, i);
              })
            ),
            __metadata("design:type", Array),
          ],
          Annotations2.prototype,
          "annotations",
          void 0
        );
        return Annotations2;
      })(EdmItemBase);
      Edm4.Annotations = Annotations;
      var Annotation = (function (_super) {
        __extends(Annotation2, _super);
        function Annotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Unknown";
          return _this;
        }
        __decorate(
          [parse, __metadata("design:type", String)],
          Annotation2.prototype,
          "term",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          Annotation2.prototype,
          "qualifier",
          void 0
        );
        __decorate(
          [parse, __metadata("design:type", String)],
          Annotation2.prototype,
          "path",
          void 0
        );
        return Annotation2;
      })(EdmItemBase);
      Edm4.Annotation = Annotation;
      var BinaryAnnotation = (function (_super) {
        __extends(BinaryAnnotation2, _super);
        function BinaryAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Binary";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("binary")),
            __metadata("design:type", Object),
          ],
          BinaryAnnotation2.prototype,
          "binary",
          void 0
        );
        return BinaryAnnotation2;
      })(Annotation);
      Edm4.BinaryAnnotation = BinaryAnnotation;
      var BoolAnnotation = (function (_super) {
        __extends(BoolAnnotation2, _super);
        function BoolAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Bool";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("bool")),
            __metadata("design:type", Object),
          ],
          BoolAnnotation2.prototype,
          "bool",
          void 0
        );
        return BoolAnnotation2;
      })(Annotation);
      Edm4.BoolAnnotation = BoolAnnotation;
      var DateAnnotation = (function (_super) {
        __extends(DateAnnotation2, _super);
        function DateAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Date";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("date")),
            __metadata("design:type", Object),
          ],
          DateAnnotation2.prototype,
          "date",
          void 0
        );
        return DateAnnotation2;
      })(Annotation);
      Edm4.DateAnnotation = DateAnnotation;
      var DateTimeOffsetAnnotation = (function (_super) {
        __extends(DateTimeOffsetAnnotation2, _super);
        function DateTimeOffsetAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "DateTimeOffset";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("dateTimeOffset")),
            __metadata("design:type", Object),
          ],
          DateTimeOffsetAnnotation2.prototype,
          "dateTimeOffset",
          void 0
        );
        return DateTimeOffsetAnnotation2;
      })(Annotation);
      Edm4.DateTimeOffsetAnnotation = DateTimeOffsetAnnotation;
      var DecimalAnnotation = (function (_super) {
        __extends(DecimalAnnotation2, _super);
        function DecimalAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Decimal";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("decimal")),
            __metadata("design:type", Object),
          ],
          DecimalAnnotation2.prototype,
          "decimal",
          void 0
        );
        return DecimalAnnotation2;
      })(Annotation);
      Edm4.DecimalAnnotation = DecimalAnnotation;
      var DurationAnnotation = (function (_super) {
        __extends(DurationAnnotation2, _super);
        function DurationAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Duration";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("duration")),
            __metadata("design:type", Object),
          ],
          DurationAnnotation2.prototype,
          "duration",
          void 0
        );
        return DurationAnnotation2;
      })(Annotation);
      Edm4.DurationAnnotation = DurationAnnotation;
      var EnumMemberAnnotation = (function (_super) {
        __extends(EnumMemberAnnotation2, _super);
        function EnumMemberAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "EnumMember";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("enumMember")),
            __metadata("design:type", Object),
          ],
          EnumMemberAnnotation2.prototype,
          "enumMember",
          void 0
        );
        return EnumMemberAnnotation2;
      })(Annotation);
      Edm4.EnumMemberAnnotation = EnumMemberAnnotation;
      var FloatAnnotation = (function (_super) {
        __extends(FloatAnnotation2, _super);
        function FloatAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Float";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("float")),
            __metadata("design:type", Object),
          ],
          FloatAnnotation2.prototype,
          "float",
          void 0
        );
        return FloatAnnotation2;
      })(Annotation);
      Edm4.FloatAnnotation = FloatAnnotation;
      var GuidAnnotation = (function (_super) {
        __extends(GuidAnnotation2, _super);
        function GuidAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Guid";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("guid")),
            __metadata("design:type", Object),
          ],
          GuidAnnotation2.prototype,
          "guid",
          void 0
        );
        return GuidAnnotation2;
      })(Annotation);
      Edm4.GuidAnnotation = GuidAnnotation;
      var IntAnnotation = (function (_super) {
        __extends(IntAnnotation2, _super);
        function IntAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Int";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("int")),
            __metadata("design:type", Object),
          ],
          IntAnnotation2.prototype,
          "int",
          void 0
        );
        return IntAnnotation2;
      })(Annotation);
      Edm4.IntAnnotation = IntAnnotation;
      var StringAnnotation = (function (_super) {
        __extends(StringAnnotation2, _super);
        function StringAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "String";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("string")),
            __metadata("design:type", Object),
          ],
          StringAnnotation2.prototype,
          "string",
          void 0
        );
        return StringAnnotation2;
      })(Annotation);
      Edm4.StringAnnotation = StringAnnotation;
      var TimeOfDayAnnotation = (function (_super) {
        __extends(TimeOfDayAnnotation2, _super);
        function TimeOfDayAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "TimeOfDay";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("timeOfDay")),
            __metadata("design:type", Object),
          ],
          TimeOfDayAnnotation2.prototype,
          "timeOfDay",
          void 0
        );
        return TimeOfDayAnnotation2;
      })(Annotation);
      Edm4.TimeOfDayAnnotation = TimeOfDayAnnotation;
      var PropertyPathAnnotation = (function (_super) {
        __extends(PropertyPathAnnotation2, _super);
        function PropertyPathAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "PropertyPath";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("propertyPath")),
            __metadata("design:type", Object),
          ],
          PropertyPathAnnotation2.prototype,
          "propertyPaths",
          void 0
        );
        return PropertyPathAnnotation2;
      })(Annotation);
      Edm4.PropertyPathAnnotation = PropertyPathAnnotation;
      var NavigationPropertyPathAnnotation = (function (_super) {
        __extends(NavigationPropertyPathAnnotation2, _super);
        function NavigationPropertyPathAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "NavigationPropertyPath";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("propertyPath")),
            __metadata("design:type", Object),
          ],
          NavigationPropertyPathAnnotation2.prototype,
          "navigationPropertyPaths",
          void 0
        );
        return NavigationPropertyPathAnnotation2;
      })(Annotation);
      Edm4.NavigationPropertyPathAnnotation = NavigationPropertyPathAnnotation;
      var AnnotationPathAnnotation = (function (_super) {
        __extends(AnnotationPathAnnotation2, _super);
        function AnnotationPathAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "AnnotationPath";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("annotationPath")),
            __metadata("design:type", Object),
          ],
          AnnotationPathAnnotation2.prototype,
          "annotationPaths",
          void 0
        );
        return AnnotationPathAnnotation2;
      })(Annotation);
      Edm4.AnnotationPathAnnotation = AnnotationPathAnnotation;
      var NullAnnotation = (function (_super) {
        __extends(NullAnnotation2, _super);
        function NullAnnotation2() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.annotationType = "Null";
          return _this;
        }
        __decorate(
          [
            parseAs(primitiveAnnotationValue("null")),
            __metadata("design:type", Array),
          ],
          NullAnnotation2.prototype,
          "null",
          void 0
        );
        return NullAnnotation2;
      })(Annotation);
      Edm4.NullAnnotation = NullAnnotation;
      Edm4.AnnotationTypes = {
        binary: BinaryAnnotation,
        bool: BoolAnnotation,
        date: DateAnnotation,
        dateTimeOffset: DateTimeOffsetAnnotation,
        decimal: DecimalAnnotation,
        duration: DurationAnnotation,
        enumMember: EnumMemberAnnotation,
        float: FloatAnnotation,
        guid: GuidAnnotation,
        int: IntAnnotation,
        string: StringAnnotation,
        timeOfDay: TimeOfDayAnnotation,
        propertyPath: PropertyPathAnnotation,
        navigationPropertyPath: NavigationPropertyPathAnnotation,
        annotationPath: AnnotationPathAnnotation,
        null: NullAnnotation,
      };
    })((Edm3 = exports.Edm || (exports.Edm = {})));
  },
});

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module2) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject = function isPlainObject2(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf =
        obj.constructor &&
        obj.constructor.prototype &&
        hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true,
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module2.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (
        target == null ||
        (typeof target !== "object" && typeof target !== "function")
      ) {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (
                deep &&
                copy &&
                (isPlainObject(copy) || (copyIsArray = isArray(copy)))
              ) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, {
                  name,
                  newValue: extend2(deep, clone, copy),
                });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  },
});

// src/metadata.ts
var metadata_exports = {};
__export(metadata_exports, {
  ServiceMetadata: () => ServiceMetadata,
});
module.exports = __toCommonJS(metadata_exports);
var import_odata_v4_metadata2 = __toESM(require_edm());

// src/xmlMetadata.ts
var import_odata_v4_metadata = __toESM(require_edm());
var extend = __toESM(require_extend()).default;

// src/XmlCreator.ts
var Xml;
((Xml2) => {
  class XmlCreator {
    constructor() {
      this.startDocument();
    }
    startDocument() {
      this.elements = [];
      this.namespaces = {};
      this.currentElement = void 0;
      this.xmlPart = "";
      return this;
    }
    endDocument() {
      if (this.elements.length !== 0) {
        this.xmlPart = "<error>invalidXml</error>";
      }
      return this;
    }
    getXmlString() {
      if (this.elements.length !== 0) {
        return "<error>invalidXml</error>";
      }
      return this.xmlPart;
    }
    startElement(element) {
      if (this.currentElement) {
        this.currentElement.HasChild = true;
        this.elements.push(this.currentElement);
        if (!this.currentElement.PersistStarted)
          this.persistNode(this.currentElement, true);
      }
      var inheritedNamespaces = this.currentElement
        ? [].concat(
            this.currentElement.InheritedNamespaces,
            this.currentElement.Namespaces
          )
        : [];
      this.currentElement = new XmlNode(element, inheritedNamespaces);
      if (
        element.Namespace &&
        this.currentElement.InheritedNamespaces.indexOf(
          element.Namespace.Name
        ) === -1
      ) {
        this.currentElement.Namespaces.push(element.Namespace.Name);
        this.namespaces[element.Namespace.Name] = element.Namespace;
      }
      return this;
    }
    endElement(isInline = false) {
      this.persistNode(this.currentElement, isInline);
      this.currentElement = this.elements.pop();
      return this;
    }
    endElementInline() {
      return this.endElement(true);
    }
    addAttribute(attr, value) {
      attr.Value = value;
      var key = attr.Namespace
        ? attr.Name + "_" + attr.Namespace.Name
        : attr.Name;
      this.currentElement.Attributes.push(key);
      this.currentElement.Attributes[key] = attr;
      if (
        attr.Namespace &&
        this.currentElement.InheritedNamespaces.indexOf(attr.Namespace.Name) ===
          -1 &&
        this.currentElement.Namespaces.indexOf(attr.Namespace.Name) === -1
      ) {
        this.currentElement.Namespaces.push(attr.Namespace.Name);
        this.namespaces[attr.Namespace.Name] = attr.Namespace;
      }
      return this;
    }
    addNamespace(namespace) {
      if (
        this.currentElement.InheritedNamespaces.indexOf(namespace.Name) ===
          -1 &&
        this.currentElement.Namespaces.indexOf(namespace.Name) === -1
      ) {
        this.currentElement.Namespaces.push(namespace.Name);
        this.namespaces[namespace.Name] = namespace;
      }
      return this;
    }
    addText(text) {
      this.currentElement.Text += text;
      return this;
    }
    declareNamespace(schema, schemaName) {
      return new XmlNamespace(schema, schemaName);
    }
    declareElement(namespaceOrName, name) {
      if (typeof namespaceOrName === "string") {
        return new XmlElement(namespaceOrName);
      } else {
        return new XmlElement(name, namespaceOrName);
      }
    }
    declareAttribute(namespaceOrName, name) {
      if (typeof namespaceOrName === "string") {
        return new XmlAttribute(namespaceOrName);
      } else {
        return new XmlAttribute(name, namespaceOrName);
      }
    }
    persistNode(node, isInline) {
      if (!node.PersistStarted) {
        if (node.Element.Namespace) {
          var ns = node.Element.Namespace;
          this.xmlPart += "<" + ns.Name + ":" + node.Element.Name;
        } else {
          this.xmlPart += "<" + node.Element.Name;
        }
        for (var i = 0; i < node.Namespaces.length; i++) {
          var ns = this.namespaces[node.Namespaces[i]];
          this.xmlPart += " xmlns:" + ns.Name + '="' + ns.Schema + '"';
        }
        var attrs = node.Attributes;
        for (var i = 0; i < attrs.length; i++) {
          var attrName = node.Attributes[i];
          var attr = node.Attributes[attrName];
          if (attr.Namespace) {
            this.xmlPart +=
              " " +
              attr.Namespace.Name +
              ":" +
              attr.Name +
              '="' +
              attr.Value +
              '"';
          } else {
            this.xmlPart += " " + attr.Name + '="' + attr.Value + '"';
          }
        }
        if (node.HasChild) {
          this.xmlPart += ">";
          node.PersistStarted = true;
        } else {
          if (isInline && !node.Text) {
            this.xmlPart += "/>";
          } else {
            this.xmlPart += ">" + this.escapeText(node.Text);
            if (node.Element.Namespace) {
              var ns = node.Element.Namespace;
              this.xmlPart += "</" + ns.Name + ":" + node.Element.Name + ">";
            } else {
              this.xmlPart += "</" + node.Element.Name + ">";
            }
          }
        }
      } else {
        if (node.Element.Namespace) {
          var ns = node.Element.Namespace;
          this.xmlPart += "</" + ns.Name + ":" + node.Element.Name + ">";
        } else {
          this.xmlPart += "</" + node.Element.Name + ">";
        }
      }
    }
    escapeText(text) {
      if (text) {
        text = text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      return text;
    }
  }
  Xml2.XmlCreator = XmlCreator;
  class XmlElement {
    constructor(name, ns = void 0) {
      this.Name = name;
      this.Namespace = ns;
    }
  }
  Xml2.XmlElement = XmlElement;
  class XmlNamespace {
    constructor(schema, name = void 0) {
      this.Schema = schema;
      this.Name = name;
    }
  }
  Xml2.XmlNamespace = XmlNamespace;
  class XmlAttribute {
    constructor(name, ns = void 0, value = void 0) {
      this.Name = name;
      this.Namespace = ns;
      this.Value = value;
    }
  }
  Xml2.XmlAttribute = XmlAttribute;
  class XmlNode {
    constructor(element, inherited) {
      this.Element = element;
      this.Attributes = [];
      this.Namespaces = [];
      this.InheritedNamespaces = inherited;
      this.Text = "";
    }
  }
  Xml2.XmlNode = XmlNode;
})(Xml || (Xml = {}));

// src/xmlMetadata.ts
var XmlMetadata = class {
  constructor(options, edmx) {
    this.typePropertyAttributes = {
      name: { name: "Name" },
      type: { name: "Type" },
      nullable: { name: "Nullable" },
      maxLength: { name: "MaxLength" },
      precision: { name: "Precision" },
      scale: { name: "Scale" },
      unicode: { name: "Unicode" },
      SRID: { name: "SRID" },
      defaultValue: { name: "DefaultValue" },
    };
    this.typeNavigationPropertyAttributes = {
      name: { name: "Name" },
      type: { name: "Type" },
      nullable: { name: "Nullable" },
      containsTarget: { name: "ContainsTarget" },
      partner: { name: "Partner" },
    };
    this.typeMemberAttributes = {
      name: { name: "Name" },
      value: { name: "Value" },
    };
    this.parameterAttributes = {
      name: { name: "Name" },
      type: { name: "Type" },
      nullable: { name: "Nullable" },
      maxLength: { name: "MaxLength" },
      precision: { name: "Precision" },
      scale: { name: "Scale" },
      unicode: { name: "Unicode" },
      SRID: { name: "SRID" },
    };
    this.annotationAttributes = {
      term: { name: "Term" },
      qualifier: { name: "Qualifier" },
      path: { name: "Path" },
    };
    this.annotationTypes = {
      Binary: { name: "Binary", valueField: "binary" },
      Bool: { name: "Bool", valueField: "bool" },
      Date: { name: "Date", valueField: "date" },
      DateTimeOffset: { name: "DateTimeOffset", valueField: "dateTimeOffset" },
      Decimal: { name: "Decimal", valueField: "decimal" },
      Duration: { name: "Duration", valueField: "duration" },
      EnumMember: { name: "EnumMember", valueField: "enumMember" },
      Float: { name: "Float", valueField: "float" },
      Guid: { name: "Guid", valueField: "guid" },
      Int: { name: "Int", valueField: "int" },
      String: { name: "String", valueField: "string" },
      TimeOfDay: { name: "TimeOfDay", valueField: "timeOfDay" },
      PropertyPath: { name: "PropertyPath", valueField: "propertyPaths" },
      NavigationPropertyPath: {
        name: "NavigationPropertyPath",
        valueField: "navigationPropertyPaths",
      },
      AnnotationPath: { name: "AnnotationPath", valueField: "annotationPaths" },
      Null: {
        name: "Null",
        handler: (xml) => {
          var nullElement = xml.declareElement("Null");
          xml.startElement(nullElement);
          xml.endElementInline();
        },
      },
    };
    this.options = extend(
      {
        edmx: "http://docs.oasis-open.org/odata/ns/edmx",
        m: "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
        d: "http://schemas.microsoft.com/ado/2007/08/dataservices",
        namespace: "http://docs.oasis-open.org/odata/ns/edm",
        edmxVersion: "4.0",
        xmlHead: '<?xml version="1.0" encoding="UTF-8"?>',
        contextNamespace: "MyContext",
      },
      options
    );
    this.metadata = edmx;
  }
  processMetadata() {
    var xml = new Xml.XmlCreator();
    var xmlResult = this.options.xmlHead;
    xml.startDocument();
    this.buildEdmx(xml, this.metadata);
    xml.endDocument();
    xmlResult += xml.getXmlString();
    return xmlResult;
  }
  buildEdmx(xml, edmx) {
    var ns = xml.declareNamespace(this.options.edmx, "edmx");
    var edmxElement = xml.declareElement(ns, "Edmx");
    var version = xml.declareAttribute("Version");
    xml
      .startElement(edmxElement)
      .addAttribute(version, edmx.version || this.options.edmxVersion);
    this.buildDataServices(xml, edmx.dataServices);
    xml.endElement();
  }
  buildDataServices(xml, dataservices) {
    var ns = xml.declareNamespace(this.options.edmx, "edmx");
    var dataservicesElement = xml.declareElement(ns, "DataServices");
    xml.startElement(dataservicesElement);
    this.buildSchema(xml, dataservices.schemas);
    xml.endElement();
  }
  buildSchema(xml, schemas) {
    schemas &&
      schemas.forEach((schema) => {
        var xmlns = xml.declareAttribute("xmlns");
        var schemaElement = xml.declareElement("Schema");
        var ns = xml.declareAttribute("Namespace");
        xml
          .startElement(schemaElement)
          .addAttribute(xmlns, this.options.namespace)
          .addAttribute(ns, schema.namespace || this.options.contextNamespace);
        if (schema.alias)
          xml.addAttribute(xml.declareAttribute("Alias"), schema.alias);
        this.buildEntityTypes(xml, schema.entityTypes);
        this.buildComplexTypes(xml, schema.complexTypes);
        this.buildTypeDefinitions(xml, schema.typeDefinitions);
        this.buildEnumTypes(xml, schema.enumTypes);
        this.buildActions(xml, schema.actions);
        this.buildFunctions(xml, schema.functions);
        this.buildEntityContainer(xml, schema.entityContainer);
        this.buildSchemaAnnotations(xml, schema.annotations);
        xml.endElement();
      });
  }
  buildTypeDefinitions(xml, typeDefinitions) {
    typeDefinitions &&
      typeDefinitions.forEach((typeDefinition) => {
        var rootElement = xml.declareElement("TypeDefinition");
        var name = xml.declareAttribute("Name");
        xml.startElement(rootElement).addAttribute(name, typeDefinition.name);
        if (typeDefinition.underlyingType)
          xml.addAttribute(
            xml.declareAttribute("UnderlyingType"),
            typeDefinition.underlyingType
          );
        this.buildAnnotations(xml, typeDefinition.annotations);
        xml.endElement();
      });
  }
  buildEnumTypes(xml, enumTypes) {
    enumTypes &&
      enumTypes.forEach((enumType) => {
        var rootElement = xml.declareElement("EnumType");
        var name = xml.declareAttribute("Name");
        xml.startElement(rootElement).addAttribute(name, enumType.name);
        if (enumType.namespace)
          xml.addAttribute(
            xml.declareAttribute("Namespace"),
            enumType.namespace
          );
        if (enumType.underlyingType)
          xml.addAttribute(
            xml.declareAttribute("UnderlyingType"),
            enumType.underlyingType
          );
        if (enumType.isFlags)
          xml.addAttribute(xml.declareAttribute("IsFlags"), enumType.isFlags);
        this.buildEnumMembers(xml, enumType.members);
        this.buildAnnotations(xml, enumType.annotations);
        xml.endElement();
      });
  }
  buildEntityTypes(xml, entityTypes) {
    entityTypes &&
      entityTypes.forEach((entityType) => {
        this.buildType(xml, entityType, "EntityType");
      });
  }
  buildComplexTypes(xml, complexTypes) {
    complexTypes &&
      complexTypes.forEach((complexType) => {
        this.buildType(xml, complexType, "ComplexType");
      });
  }
  buildType(xml, type, xmlElementName) {
    var rootElement = xml.declareElement(xmlElementName);
    var name = xml.declareAttribute("Name");
    xml.startElement(rootElement).addAttribute(name, type.name);
    if (type.baseType)
      xml.addAttribute(xml.declareAttribute("BaseType"), type.baseType);
    if (type.abstract)
      xml.addAttribute(xml.declareAttribute("Abstract"), type.abstract);
    if (type.openType)
      xml.addAttribute(xml.declareAttribute("OpenType"), type.openType);
    if (type.hasStream)
      xml.addAttribute(xml.declareAttribute("HasStream"), type.hasStream);
    if (type instanceof import_odata_v4_metadata.Edm.EntityType) {
      this.buildTypeKeys(xml, type.key);
    }
    this.buildTypeProperties(xml, type.properties);
    this.buildTypeNavigationProperties(xml, type.navigationProperties);
    this.buildAnnotations(xml, type.annotations);
    xml.endElement();
  }
  buildTypeKeys(xml, key) {
    if (!key) return;
    var keyElement = xml.declareElement("Key");
    var propRef = xml.declareElement("PropertyRef");
    var name = xml.declareAttribute("Name");
    var keys = key.propertyRefs;
    if (keys.length > 0) {
      xml.startElement(keyElement);
      keys.forEach((keyDef) => {
        xml.startElement(propRef).addAttribute(name, keyDef.name);
        if (keyDef.alias)
          xml.addAttribute(xml.declareAttribute("Alias"), keyDef.alias);
        xml.endElementInline();
      });
      xml.endElement();
    }
  }
  buildTypeProperties(xml, properties) {
    properties &&
      properties.forEach((property) => {
        var propertyElement = xml.declareElement("Property");
        xml.startElement(propertyElement);
        this.buildAttributes(xml, property, this.typePropertyAttributes);
        this.buildAnnotations(xml, property.annotations);
        xml.endElementInline();
      });
  }
  buildTypeNavigationProperties(xml, navigationProperties) {
    navigationProperties &&
      navigationProperties.forEach((navigationProperty) => {
        var navigationPropertyElement =
          xml.declareElement("NavigationProperty");
        xml.startElement(navigationPropertyElement);
        this.buildAttributes(
          xml,
          navigationProperty,
          this.typeNavigationPropertyAttributes
        );
        this.buildNavPropertyReferentialConstraints(
          xml,
          navigationProperty.referentialConstraints
        );
        this.buildAnnotations(xml, navigationProperty.annotations);
        xml.endElementInline();
      });
  }
  buildNavPropertyReferentialConstraints(xml, referentialConstraints) {
    referentialConstraints &&
      referentialConstraints.forEach((referentialConstraint) => {
        var referentialConstraintElement = xml.declareElement(
          "ReferentialConstraint"
        );
        xml.startElement(referentialConstraintElement);
        if (referentialConstraint.property)
          xml.addAttribute(
            xml.declareAttribute("Property"),
            referentialConstraint.property
          );
        if (referentialConstraint.referencedProperty)
          xml.addAttribute(
            xml.declareAttribute("ReferencedProperty"),
            referentialConstraint.referencedProperty
          );
        xml.endElementInline();
      });
  }
  buildEnumMembers(xml, members) {
    members &&
      members.forEach((member) => {
        var memberElement = xml.declareElement("Member");
        xml.startElement(memberElement);
        this.buildAttributes(xml, member, this.typeMemberAttributes);
        this.buildAnnotations(xml, member.annotations);
        xml.endElementInline();
      });
  }
  buildAttributes(xml, object, mappings) {
    var attributes = mappings && Object.keys(mappings);
    object &&
      attributes &&
      attributes.forEach((prop) => {
        if (typeof object[prop] !== "undefined" && object[prop] !== null) {
          var attr = xml.declareAttribute(mappings[prop].name);
          xml.addAttribute(attr, object[prop].toString());
        }
      });
  }
  buildActions(xml, actions) {
    actions &&
      actions.forEach((action) => {
        var actionElement = xml.declareElement("Action");
        var name = xml.declareAttribute("Name");
        xml.startElement(actionElement).addAttribute(name, action.name);
        if (typeof action.isBound !== "undefined")
          xml.addAttribute(
            xml.declareAttribute("IsBound"),
            action.isBound.toString()
          );
        if (action.entitySetPath)
          xml.addAttribute(
            xml.declareAttribute("EntitySetPath"),
            action.entitySetPath
          );
        this.buildParameters(xml, action.parameters);
        this.buildReturnType(xml, action.returnType);
        this.buildAnnotations(xml, action.annotations);
        xml.endElementInline();
      });
  }
  buildFunctions(xml, functions) {
    functions &&
      functions.forEach((func) => {
        var funcElement = xml.declareElement("Function");
        var name = xml.declareAttribute("Name");
        xml.startElement(funcElement).addAttribute(name, func.name);
        if (typeof func.isBound !== "undefined")
          xml.addAttribute(
            xml.declareAttribute("IsBound"),
            func.isBound.toString()
          );
        if (func.entitySetPath)
          xml.addAttribute(
            xml.declareAttribute("EntitySetPath"),
            func.entitySetPath
          );
        if (typeof func.isComposable !== "undefined")
          xml.addAttribute(
            xml.declareAttribute("IsComposable"),
            func.isComposable.toString()
          );
        this.buildParameters(xml, func.parameters);
        this.buildReturnType(xml, func.returnType);
        this.buildAnnotations(xml, func.annotations);
        xml.endElementInline();
      });
  }
  buildParameters(xml, parameters) {
    parameters &&
      parameters.forEach((parameter) => {
        var parameterElement = xml.declareElement("Parameter");
        xml.startElement(parameterElement);
        this.buildAttributes(xml, parameter, this.parameterAttributes);
        this.buildAnnotations(xml, parameter.annotations);
        xml.endElementInline();
      });
  }
  buildReturnType(xml, returnType) {
    if (!returnType || typeof returnType.type === "undefined") return;
    var parameterElement = xml.declareElement("ReturnType");
    var type = xml.declareAttribute("Type");
    var nullable = xml.declareAttribute("Nullable");
    xml.startElement(parameterElement).addAttribute(type, returnType.type);
    if (typeof returnType.nullable !== "undefined")
      xml.addAttribute(nullable, returnType.nullable.toString());
    this.buildAnnotations(xml, returnType.annotations);
    xml.endElementInline();
  }
  buildEntityContainer(xml, entityContainers) {
    entityContainers &&
      entityContainers.forEach((entityContainer) => {
        var entityContainerElement = xml.declareElement("EntityContainer");
        var name = xml.declareAttribute("Name");
        xml
          .startElement(entityContainerElement)
          .addAttribute(name, entityContainer.name);
        this.buildEntitySets(xml, entityContainer.entitySets);
        this.buildActionImports(xml, entityContainer.actionImports);
        this.buildFunctionImports(xml, entityContainer.functionImports);
        xml.endElement();
      });
  }
  buildEntitySets(xml, entitySets) {
    entitySets &&
      entitySets.forEach((entitySet) => {
        var entitySetElement = xml.declareElement("EntitySet");
        var name = xml.declareAttribute("Name");
        var entityType = xml.declareAttribute("EntityType");
        xml
          .startElement(entitySetElement)
          .addAttribute(name, entitySet.name)
          .addAttribute(entityType, entitySet.entityType);
        this.buildAnnotations(xml, entitySet.annotations);
        xml.endElementInline();
      });
  }
  buildActionImports(xml, actionImports) {
    actionImports &&
      actionImports.forEach((actionImport) => {
        var actionImportElement = xml.declareElement("ActionImport");
        var name = xml.declareAttribute("Name");
        var action = xml.declareAttribute("Action");
        xml
          .startElement(actionImportElement)
          .addAttribute(name, actionImport.name)
          .addAttribute(action, actionImport.action);
        this.buildAnnotations(xml, actionImport.annotations);
        xml.endElementInline();
      });
  }
  buildFunctionImports(xml, functionImports) {
    functionImports &&
      functionImports.forEach((functionImport) => {
        var FunctionImportElement = xml.declareElement("FunctionImport");
        var name = xml.declareAttribute("Name");
        var func = xml.declareAttribute("Function");
        xml
          .startElement(FunctionImportElement)
          .addAttribute(name, functionImport.name)
          .addAttribute(func, functionImport["function"]);
        if (typeof functionImport.includeInServiceDocument !== "undefined")
          xml.addAttribute(
            xml.declareAttribute("IncludeInServiceDocument"),
            functionImport.includeInServiceDocument.toString()
          );
        this.buildAnnotations(xml, functionImport.annotations);
        xml.endElementInline();
      });
  }
  buildSchemaAnnotations(xml, schemaAnnotations) {
    schemaAnnotations &&
      schemaAnnotations.forEach((schemaAnnotation) => {
        var target = xml.declareAttribute("Target");
        var AnnotationsElement = xml.declareElement("Annotations");
        xml
          .startElement(AnnotationsElement)
          .addAttribute(target, schemaAnnotation.target);
        if (schemaAnnotation.qualifier)
          xml.addAttribute(
            xml.declareAttribute("Qualifier"),
            schemaAnnotation.qualifier
          );
        this.buildAnnotations(xml, schemaAnnotation.annotations);
        xml.endElementInline();
      });
  }
  buildAnnotations(xml, annotations) {
    annotations &&
      annotations.forEach((annotation) => {
        var AnnotationElement = xml.declareElement("Annotation");
        xml.startElement(AnnotationElement);
        var attributes = Object.keys(this.annotationAttributes);
        attributes.forEach((prop) => {
          if (
            typeof annotation[prop] !== "undefined" &&
            annotation[prop] !== null
          ) {
            var attr2 = xml.declareAttribute(
              this.annotationAttributes[prop].name
            );
            xml.addAttribute(attr2, annotation[prop].toString());
          }
        });
        var annotConfig = this.annotationTypes[annotation.annotationType];
        if (annotConfig) {
          if (annotConfig.handler) {
            annotConfig.handler(xml, annotation);
          } else if (annotConfig.valueField) {
            var value = annotation[annotConfig.valueField];
            if (Array.isArray(value)) {
              this.buildCollectionAnnotation(
                xml,
                value,
                annotConfig,
                annotation
              );
            } else if (typeof value !== "undefined" && value !== null) {
              var attr = xml.declareAttribute(annotConfig.name);
              xml.addAttribute(attr, value.toString());
            }
          }
        }
        xml.endElementInline();
      });
  }
  buildCollectionAnnotation(xml, value, annotConfig, _) {
    var collectionElement = xml.declareElement("Collection");
    xml.startElement(collectionElement);
    value.forEach((v) => {
      var valueElement = xml.declareElement(annotConfig.name);
      xml.startElement(valueElement).addText(v.toString()).endElementInline();
    });
    xml.endElementInline();
  }
};

// src/defineEntities.ts
var defineEntities = (entityConfig) => {
  var annotations = {};
  var edmx = {
    dataServices: {
      schema: [
        {
          namespace: entityConfig.namespace,
          annotations: [],
          entityType:
            entityConfig.entities &&
            entityConfig.entities.map((e) => {
              var def = {
                name: e.name,
                property: [],
              };
              e.keys &&
                (def["key"] = [
                  {
                    propertyRef: e.keys.map((k) => {
                      return { name: k };
                    }),
                  },
                ]);
              e.properties &&
                Object.keys(e.properties).forEach((p) => {
                  def.property.push({
                    name: p,
                    type: e.properties[p],
                  });
                });
              e.annotations &&
                e.annotations.forEach((a) => {
                  if (typeof a.value === "undefined" || a.value == null) return;
                  var target =
                    (entityConfig.namespace
                      ? entityConfig.namespace + "."
                      : "") + e.name;
                  if (a.property) target += "/" + a.property;
                  annotations[target] = annotations[target] || {
                    target,
                    annotation: [],
                  };
                  annotations[target].annotation.push({
                    term: a.name,
                    string: a.value.toString(),
                  });
                });
              return def;
            }),
          action:
            entityConfig.actions &&
            entityConfig.actions.map((a) => {
              var def = {
                name: a.name,
                isBound: void 0,
                parameter: void 0,
                returnType: void 0,
              };
              if ("isBound" in a) def.isBound = a.isBound;
              if ("parameters" in a) def.parameter = a.parameters;
              if ("returnType" in a) {
                if (typeof a.returnType == "string") {
                  def.returnType = { type: a.returnType };
                } else {
                  def.returnType = a.returnType;
                }
              }
              return def;
            }),
          function:
            entityConfig.functions &&
            entityConfig.functions.map((a) => {
              var def = {
                name: a.name,
                isBound: void 0,
                parameter: void 0,
                returnType: void 0,
              };
              if ("isBound" in a) def.isBound = a.isBound;
              if ("parameters" in a) def.parameter = a.parameters;
              if ("returnType" in a) {
                if (typeof a.returnType == "string") {
                  def.returnType = { type: a.returnType };
                } else {
                  def.returnType = a.returnType;
                }
              }
              return def;
            }),
          entityContainer: {
            name: entityConfig.containerName,
            entitySet:
              entityConfig.entities &&
              entityConfig.entities.map((e) => {
                return {
                  name: e.collectionName,
                  entityType:
                    (entityConfig.namespace
                      ? entityConfig.namespace + "."
                      : "") + e.name,
                };
              }),
            actionImport:
              entityConfig.actions &&
              entityConfig.actions
                .filter((a) => !a.isBound)
                .map((a) => {
                  var def = {
                    name: a.name,
                    action:
                      (entityConfig.namespace
                        ? entityConfig.namespace + "."
                        : "") + a.name,
                    entitySet: void 0,
                  };
                  if ("entitySet" in a) def.entitySet = a.entitySet;
                  return def;
                }),
            functionImport:
              entityConfig.functions &&
              entityConfig.functions
                .filter((a) => !a.isBound)
                .map((a) => {
                  var def = {
                    name: a.name,
                    function:
                      (entityConfig.namespace
                        ? entityConfig.namespace + "."
                        : "") + a.name,
                    includeInServiceDocument: void 0,
                    entitySet: void 0,
                  };
                  if ("includeInServiceDocument" in a)
                    def.includeInServiceDocument = a.includeInServiceDocument;
                  if ("entitySet" in a) def.entitySet = a.entitySet;
                  return def;
                }),
          },
        },
      ],
    },
  };
  entityConfig.entities &&
    entityConfig.entities.map((e) => {
      if (!e.computedKey || !e.keys || e.keys.length !== 1) return;
      var target =
        (entityConfig.namespace ? entityConfig.namespace + "." : "") +
        e.name +
        "/" +
        e.keys[0];
      if (!annotations[target])
        annotations[target] = { target, annotation: [] };
      annotations[target].annotation.push({
        term: "Org.OData.Core.V1.Computed",
        bool: "true",
      });
    });
  edmx.dataServices.schema[0].annotations = Object.keys(annotations).map(
    (a) => {
      return annotations[a];
    }
  );
  return edmx;
};

// src/metadata.ts
var ServiceMetadata = class {
  static processMetadataJson(json, options) {
    var edmx = new import_odata_v4_metadata2.Edm.Edmx(json);
    return new this(edmx, options);
  }
  static processEdmx(edmx, options) {
    return new this(edmx, options);
  }
  static defineEntities(entityConfig, options) {
    var json = defineEntities(entityConfig);
    var edmx = new import_odata_v4_metadata2.Edm.Edmx(json);
    return new this(edmx, options);
  }
  constructor(edmx, options) {
    this.edmx = edmx;
    this.process(edmx, options);
  }
  document(format) {
    switch (format) {
      case "json":
      case "application/json":
        throw new Error("Not implemented");
      default:
        return this.data;
    }
  }
  process(edmx, options) {
    var xmlMetadata = new XmlMetadata(options, edmx);
    this.data = xmlMetadata.processMetadata();
  }
  requestHandler(format) {
    return (_, res, __) => {
      res.set("Content-Type", "application/xml");
      res.send(this.document(format));
    };
  }
  valueOf() {
    return this.data;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    ServiceMetadata,
  });
