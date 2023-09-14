var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/edm.ts
var edm_exports = {};
__export(edm_exports, {
  Edm: () => Edm
});
module.exports = __toCommonJS(edm_exports);

// src/metacode.ts
function isUndefined(o) {
  return o === void 0;
}
var definitionPropName = "definition";
var MemberAttribute = class {
  constructor(attributeName) {
    this.attributeName = attributeName;
  }
  registerMember(target, key) {
    var def = target[definitionPropName] = target[definitionPropName] || {};
    let md = def.members || [];
    if (md.indexOf(key) < 0) {
      md.push(key);
    }
    def.members = md;
  }
  getDecoratorValue(target, key, presentedValue) {
    return presentedValue;
  }
  decorate(value) {
    return (target, key, descriptor) => {
      this.registerMember(target, key);
      var decoratorValue = this.getDecoratorValue(target, key, value);
      target[definitionPropName][this.attributeName] = target[definitionPropName][this.attributeName] || {};
      target[definitionPropName][this.attributeName][key] = decoratorValue;
    };
  }
  get decorator() {
    return this.decorate();
  }
  static getMembers(target) {
    return target[definitionPropName].members;
  }
  static getAttributeValue(target, memberName, attributeName) {
    return ((target[definitionPropName] || {})[attributeName] || {})[memberName];
  }
};
var AttributeFunctionChain = class {
  constructor(...steps) {
    this.steps = [];
    this.steps = steps;
  }
  invoke(definition, instance) {
    var result = definition;
    this.steps.forEach((fn) => {
      result = fn(result, instance);
    });
    return result;
  }
};
var ParseAttribute = class extends MemberAttribute {
  constructor() {
    super("serialize");
  }
  getDecoratorValue(target, key, presentedValue) {
    if (!isUndefined(presentedValue)) {
      return presentedValue;
    }
    return new AttributeFunctionChain(
      (d) => d[key]
    );
  }
};
var required = new MemberAttribute("required").decorate(true);
var defaultValueAttribute = new MemberAttribute("defaultValue");
var defaultValue = defaultValueAttribute.decorate.bind(defaultValueAttribute);
var parseAttribute = new ParseAttribute();
var parse = parseAttribute.decorator;
var parseAs = parseAttribute.decorate.bind(parseAttribute);
var typeArgument = new MemberAttribute("typeArgument");

// src/edm.ts
var Edm;
((Edm2) => {
  class PrimitiveType {
    constructor(className) {
      this.className = className;
    }
    toString() {
      return this.className;
    }
  }
  Edm2.PrimitiveType = PrimitiveType;
  Edm2.Binary = new PrimitiveType("Edm.Binary");
  Edm2.Boolean = new PrimitiveType("Edm.Boolean");
  Edm2.Byte = new PrimitiveType("Edm.Byte");
  Edm2.Date = new PrimitiveType("Edm.Date");
  Edm2.DateTimeOffset = new PrimitiveType("Edm.DateTimeOffset");
  Edm2.Decimal = new PrimitiveType("Edm.Decimal");
  Edm2.Double = new PrimitiveType("Edm.Double");
  Edm2.Duration = new PrimitiveType("Edm.Duration");
  Edm2.Guid = new PrimitiveType("Edm.Guid");
  Edm2.Int16 = new PrimitiveType("Edm.Int16");
  Edm2.Int32 = new PrimitiveType("Edm.Int32");
  Edm2.Int64 = new PrimitiveType("Edm.Int64");
  Edm2.SByte = new PrimitiveType("Edm.SByte");
  Edm2.Single = new PrimitiveType("Edm.Single");
  Edm2.Stream = new PrimitiveType("Edm.Stream");
  Edm2.String = new PrimitiveType("Edm.String");
  Edm2.TimeOfDay = new PrimitiveType("Edm.TimeOfDay");
  Edm2.Geography = new PrimitiveType("Edm.Geography");
  Edm2.GeographyPoint = new PrimitiveType("Edm.GeographyPoint");
  Edm2.GeographyLineString = new PrimitiveType("Edm.GeographyLineString");
  Edm2.GeographyPolygon = new PrimitiveType("Edm.GeographyPolygon");
  Edm2.GeographyMultiPoint = new PrimitiveType("Edm.GeographyMultiPoint");
  Edm2.GeographyMultiLineString = new PrimitiveType("Edm.GeographyMultiLineString");
  Edm2.GeographyMultiPolygon = new PrimitiveType("Edm.GeographyMultiPolygon");
  Edm2.GeographyCollection = new PrimitiveType("Edm.GeographyCollection");
  Edm2.Geometry = new PrimitiveType("Edm.Geometry");
  Edm2.GeometryPoint = new PrimitiveType("Edm.GeometryPoint");
  Edm2.GeometryLineString = new PrimitiveType("Edm.GeometryLineString");
  Edm2.GeometryPolygon = new PrimitiveType("Edm.GeometryPolygon");
  Edm2.GeometryMultiPoint = new PrimitiveType("Edm.GeometryMultiPoint");
  Edm2.GeometryMultiLineString = new PrimitiveType("Edm.GeometryMultiLineString");
  Edm2.GeometryMultiPolygon = new PrimitiveType("Edm.GeometryMultiPolygon");
  Edm2.GeometryCollection = new PrimitiveType("Edm.GeometryCollection");
  let MemberAttribute2 = MemberAttribute;
  let parse2 = parse;
  let required2 = required;
  let defaultValue2 = defaultValue;
  let parseAs2 = parseAs;
  let AttributeFunctionChain2 = AttributeFunctionChain;
  let mapArray = (sourceField, factory) => new AttributeFunctionChain(
    (d, i) => d[sourceField],
    (props, i) => Array.isArray(props) ? props : props ? [props] : [],
    (props, i) => props.map((prop) => factory(prop, i))
  );
  let primitiveAnnotationValue = (sourceField) => new AttributeFunctionChain(
    (d, i) => {
      if (d["collection"] && d["collection"][0] && Array.isArray(d["collection"][0][sourceField]) && !d[sourceField]) {
        return d["collection"][0][sourceField].map((x) => x.text);
      }
      var props = d[sourceField];
      if (Array.isArray(props)) {
        return props.filter((x) => "text" in x).map((x) => x.text)[0];
      } else {
        return props;
      }
    }
  );
  let annotationTypeSelector = (source) => {
    for (var i in Edm2.AnnotationTypes) {
      if (i in source || source["collection"] && source["collection"][0] && i in source["collection"][0]) {
        return Edm2.AnnotationTypes[i];
      }
    }
    return Annotation;
  };
  class EdmItemBase {
    constructor(definition, parent) {
      this.parent = parent;
      definition && this.loadFrom(definition);
    }
    loadFrom(definition) {
      var proto = Object.getPrototypeOf(this);
      MemberAttribute2.getMembers(proto).forEach((membername) => {
        var parser = MemberAttribute2.getAttributeValue(proto, membername, "serialize");
        if (parser) {
          var v = parser.invoke(definition, this);
          this[membername] = v;
        }
      });
    }
  }
  Edm2.EdmItemBase = EdmItemBase;
  class Property extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], Property.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], Property.prototype, "type", 2);
  __decorateClass([
    parse2,
    defaultValue2(true)
  ], Property.prototype, "nullable", 2);
  __decorateClass([
    parse2
  ], Property.prototype, "maxLength", 2);
  __decorateClass([
    parse2
  ], Property.prototype, "precision", 2);
  __decorateClass([
    parse2
  ], Property.prototype, "scale", 2);
  __decorateClass([
    parse2
  ], Property.prototype, "unicode", 2);
  __decorateClass([
    parse2,
    defaultValue2(0)
  ], Property.prototype, "SRID", 2);
  __decorateClass([
    parse2
  ], Property.prototype, "defaultValue", 2);
  __decorateClass([
    parse2
  ], Property.prototype, "concurrencyMode", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], Property.prototype, "annotations", 2);
  Edm2.Property = Property;
  class NavigationProperty extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], NavigationProperty.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], NavigationProperty.prototype, "type", 2);
  __decorateClass([
    parse2,
    defaultValue2(true)
  ], NavigationProperty.prototype, "nullable", 2);
  __decorateClass([
    parse2
  ], NavigationProperty.prototype, "partner", 2);
  __decorateClass([
    parse2
  ], NavigationProperty.prototype, "containsTarget", 2);
  __decorateClass([
    parseAs2(mapArray("referentialConstraint", (prop, i) => new ReferentialConstraint(prop, i)))
  ], NavigationProperty.prototype, "referentialConstraints", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], NavigationProperty.prototype, "annotations", 2);
  Edm2.NavigationProperty = NavigationProperty;
  class ReferentialConstraint extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], ReferentialConstraint.prototype, "property", 2);
  __decorateClass([
    parse2,
    required2
  ], ReferentialConstraint.prototype, "referencedProperty", 2);
  Edm2.ReferentialConstraint = ReferentialConstraint;
  class PropertyRef extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], PropertyRef.prototype, "name", 2);
  __decorateClass([
    parse2
  ], PropertyRef.prototype, "alias", 2);
  Edm2.PropertyRef = PropertyRef;
  class Key extends EdmItemBase {
    //@arrayMinLength(1)    
  }
  __decorateClass([
    parseAs2(mapArray("propertyRef", (prop, i) => new PropertyRef(prop, i)))
  ], Key.prototype, "propertyRefs", 2);
  Edm2.Key = Key;
  class EntityType extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], EntityType.prototype, "name", 2);
  __decorateClass([
    parseAs2(new AttributeFunctionChain2(
      (d, i) => d.key,
      (props, i) => props || [],
      (props, i) => props.map((prop) => new Key(prop, i)),
      (props) => props[0]
    ))
  ], EntityType.prototype, "key", 2);
  __decorateClass([
    parse2
  ], EntityType.prototype, "baseType", 2);
  __decorateClass([
    parse2
  ], EntityType.prototype, "abstract", 2);
  __decorateClass([
    parse2
  ], EntityType.prototype, "openType", 2);
  __decorateClass([
    parse2
  ], EntityType.prototype, "hasStream", 2);
  __decorateClass([
    parseAs2(mapArray("property", (prop, i) => new Property(prop, i)))
  ], EntityType.prototype, "properties", 2);
  __decorateClass([
    parseAs2(mapArray("navigationProperty", (prop, i) => new NavigationProperty(prop, i)))
  ], EntityType.prototype, "navigationProperties", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], EntityType.prototype, "annotations", 2);
  Edm2.EntityType = EntityType;
  class ComplexType extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], ComplexType.prototype, "name", 2);
  __decorateClass([
    parse2
  ], ComplexType.prototype, "baseType", 2);
  __decorateClass([
    parse2
  ], ComplexType.prototype, "abstract", 2);
  __decorateClass([
    parse2
  ], ComplexType.prototype, "openType", 2);
  __decorateClass([
    parse2
  ], ComplexType.prototype, "hasStream", 2);
  __decorateClass([
    parseAs2(mapArray("property", (prop, i) => new Property(prop, i)))
  ], ComplexType.prototype, "properties", 2);
  __decorateClass([
    parseAs2(mapArray("navigationProperty", (prop, i) => new NavigationProperty(prop, i)))
  ], ComplexType.prototype, "navigationProperties", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], ComplexType.prototype, "annotations", 2);
  Edm2.ComplexType = ComplexType;
  class Parameter extends EdmItemBase {
    // according to specs there is no default value for params. but is that right?
    // @parse
    // public defaultValue: any;
  }
  __decorateClass([
    parse2,
    required2
  ], Parameter.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], Parameter.prototype, "type", 2);
  __decorateClass([
    parse2,
    defaultValue2(true)
  ], Parameter.prototype, "nullable", 2);
  __decorateClass([
    parse2
  ], Parameter.prototype, "maxLength", 2);
  __decorateClass([
    parse2
  ], Parameter.prototype, "precision", 2);
  __decorateClass([
    parse2
  ], Parameter.prototype, "scale", 2);
  __decorateClass([
    parse2
  ], Parameter.prototype, "unicode", 2);
  __decorateClass([
    parse2,
    defaultValue2(0)
  ], Parameter.prototype, "SRID", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], Parameter.prototype, "annotations", 2);
  Edm2.Parameter = Parameter;
  class ReturnType extends EdmItemBase {
  }
  __decorateClass([
    parse2
  ], ReturnType.prototype, "type", 2);
  __decorateClass([
    parse2,
    defaultValue2(true)
  ], ReturnType.prototype, "nullable", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], ReturnType.prototype, "annotations", 2);
  Edm2.ReturnType = ReturnType;
  class Invokable extends EdmItemBase {
  }
  Edm2.Invokable = Invokable;
  class Action extends Invokable {
  }
  __decorateClass([
    parse2,
    required2
  ], Action.prototype, "name", 2);
  __decorateClass([
    parse2
  ], Action.prototype, "isBound", 2);
  __decorateClass([
    parse2
  ], Action.prototype, "entitySetPath", 2);
  __decorateClass([
    parseAs2(mapArray("parameter", (prop, i) => new Parameter(prop, i)))
  ], Action.prototype, "parameters", 2);
  __decorateClass([
    parseAs2(new AttributeFunctionChain2(
      (d, i) => d.returnType,
      (rt, i) => new ReturnType(rt, i)
    ))
  ], Action.prototype, "returnType", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], Action.prototype, "annotations", 2);
  Edm2.Action = Action;
  class Function extends Invokable {
  }
  __decorateClass([
    parse2,
    required2
  ], Function.prototype, "name", 2);
  __decorateClass([
    parse2
  ], Function.prototype, "isBound", 2);
  __decorateClass([
    parse2
  ], Function.prototype, "entitySetPath", 2);
  __decorateClass([
    parseAs2(mapArray("parameter", (prop, i) => new Parameter(prop, i)))
  ], Function.prototype, "parameters", 2);
  __decorateClass([
    parseAs2(new AttributeFunctionChain2(
      (d, i) => d.returnType,
      (rt, i) => new ReturnType(rt, i)
    ))
  ], Function.prototype, "returnType", 2);
  __decorateClass([
    parse2
  ], Function.prototype, "isComposable", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], Function.prototype, "annotations", 2);
  Edm2.Function = Function;
  class Member extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], Member.prototype, "name", 2);
  __decorateClass([
    parse2
  ], Member.prototype, "value", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], Member.prototype, "annotations", 2);
  Edm2.Member = Member;
  class EnumType extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], EnumType.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], EnumType.prototype, "namespace", 2);
  __decorateClass([
    parse2,
    defaultValue2(Edm2.Int32)
  ], EnumType.prototype, "underlyingType", 2);
  __decorateClass([
    parse2
  ], EnumType.prototype, "isFlags", 2);
  __decorateClass([
    parseAs2(mapArray("member", (prop, i) => new Member(prop, i)))
  ], EnumType.prototype, "members", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], EnumType.prototype, "annotations", 2);
  Edm2.EnumType = EnumType;
  class EntitySet extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], EntitySet.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], EntitySet.prototype, "entityType", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], EntitySet.prototype, "annotations", 2);
  Edm2.EntitySet = EntitySet;
  class ActionImport extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], ActionImport.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], ActionImport.prototype, "action", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], ActionImport.prototype, "annotations", 2);
  Edm2.ActionImport = ActionImport;
  class FunctionImport extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], FunctionImport.prototype, "name", 2);
  __decorateClass([
    parse2,
    required2
  ], FunctionImport.prototype, "function", 2);
  __decorateClass([
    parse2,
    defaultValue2(false)
  ], FunctionImport.prototype, "includeInServiceDocument", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], FunctionImport.prototype, "annotations", 2);
  Edm2.FunctionImport = FunctionImport;
  class EntityContainer extends EdmItemBase {
  }
  __decorateClass([
    parse2
  ], EntityContainer.prototype, "name", 2);
  __decorateClass([
    parseAs2(mapArray("entitySet", (prop, i) => new EntitySet(prop, i)))
  ], EntityContainer.prototype, "entitySets", 2);
  __decorateClass([
    parseAs2(mapArray("actionImport", (prop, i) => new ActionImport(prop, i)))
  ], EntityContainer.prototype, "actionImports", 2);
  __decorateClass([
    parseAs2(mapArray("functionImport", (prop, i) => new FunctionImport(prop, i)))
  ], EntityContainer.prototype, "functionImports", 2);
  Edm2.EntityContainer = EntityContainer;
  class TypeDefinition extends EdmItemBase {
  }
  __decorateClass([
    parse2
  ], TypeDefinition.prototype, "name", 2);
  __decorateClass([
    parse2
  ], TypeDefinition.prototype, "underlyingType", 2);
  __decorateClass([
    parse2
  ], TypeDefinition.prototype, "maxLength", 2);
  __decorateClass([
    parse2
  ], TypeDefinition.prototype, "unicode", 2);
  __decorateClass([
    parse2
  ], TypeDefinition.prototype, "precision", 2);
  __decorateClass([
    parse2
  ], TypeDefinition.prototype, "scale", 2);
  __decorateClass([
    parse2,
    defaultValue2(0)
  ], TypeDefinition.prototype, "SRID", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], TypeDefinition.prototype, "annotations", 2);
  Edm2.TypeDefinition = TypeDefinition;
  class Schema extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], Schema.prototype, "namespace", 2);
  __decorateClass([
    parse2
  ], Schema.prototype, "alias", 2);
  __decorateClass([
    parseAs2(mapArray("enumType", (prop, i) => new EnumType(prop, i)))
  ], Schema.prototype, "enumTypes", 2);
  __decorateClass([
    parseAs2(mapArray("typeDefinition", (prop, i) => new TypeDefinition(prop, i)))
  ], Schema.prototype, "typeDefinitions", 2);
  __decorateClass([
    parseAs2(mapArray("complexType", (prop, i) => new ComplexType(prop, i)))
  ], Schema.prototype, "complexTypes", 2);
  __decorateClass([
    parseAs2(mapArray("entityType", (prop, i) => new EntityType(prop, i)))
  ], Schema.prototype, "entityTypes", 2);
  __decorateClass([
    parseAs2(mapArray("action", (prop, i) => new Action(prop, i)))
  ], Schema.prototype, "actions", 2);
  __decorateClass([
    parseAs2(mapArray("function", (prop, i) => new Edm2.Function(prop, i)))
  ], Schema.prototype, "functions", 2);
  __decorateClass([
    parseAs2(mapArray("entityContainer", (prop, i) => new Edm2.EntityContainer(prop, i)))
  ], Schema.prototype, "entityContainer", 2);
  __decorateClass([
    parseAs2(mapArray("annotations", (prop, i) => new Edm2.Annotations(prop, i)))
  ], Schema.prototype, "annotations", 2);
  Edm2.Schema = Schema;
  class DataServices extends EdmItemBase {
  }
  __decorateClass([
    parseAs2(mapArray("schema", (prop, i) => new Schema(prop, i)))
  ], DataServices.prototype, "schemas", 2);
  Edm2.DataServices = DataServices;
  class Reference extends EdmItemBase {
  }
  __decorateClass([
    parse2
  ], Reference.prototype, "uri", 2);
  __decorateClass([
    parseAs2(mapArray("include", (prop, i) => new ReferenceInclude(prop, i)))
  ], Reference.prototype, "includes", 2);
  Edm2.Reference = Reference;
  class ReferenceInclude extends EdmItemBase {
  }
  __decorateClass([
    parse2
  ], ReferenceInclude.prototype, "namespace", 2);
  __decorateClass([
    parse2
  ], ReferenceInclude.prototype, "alias", 2);
  Edm2.ReferenceInclude = ReferenceInclude;
  class Edmx extends EdmItemBase {
    constructor() {
      super(...arguments);
      this.version = "4.0";
    }
  }
  __decorateClass([
    parseAs2(new AttributeFunctionChain2(
      (edm) => new Edm2.DataServices(edm.dataServices)
    ))
  ], Edmx.prototype, "dataServices", 2);
  __decorateClass([
    parseAs2(mapArray("reference", (prop, i) => new Reference(prop, i)))
  ], Edmx.prototype, "references", 2);
  Edm2.Edmx = Edmx;
  class Annotations extends EdmItemBase {
  }
  __decorateClass([
    parse2,
    required2
  ], Annotations.prototype, "target", 2);
  __decorateClass([
    parse2
  ], Annotations.prototype, "qualifier", 2);
  __decorateClass([
    parseAs2(mapArray("annotation", (prop, i) => new (annotationTypeSelector(prop))(prop, i)))
  ], Annotations.prototype, "annotations", 2);
  Edm2.Annotations = Annotations;
  class Annotation extends EdmItemBase {
    constructor() {
      super(...arguments);
      this.annotationType = "Unknown";
    }
  }
  __decorateClass([
    parse2
  ], Annotation.prototype, "term", 2);
  __decorateClass([
    parse2
  ], Annotation.prototype, "qualifier", 2);
  __decorateClass([
    parse2
  ], Annotation.prototype, "path", 2);
  Edm2.Annotation = Annotation;
  class BinaryAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Binary";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("binary"))
  ], BinaryAnnotation.prototype, "binary", 2);
  Edm2.BinaryAnnotation = BinaryAnnotation;
  class BoolAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Bool";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("bool"))
  ], BoolAnnotation.prototype, "bool", 2);
  Edm2.BoolAnnotation = BoolAnnotation;
  class DateAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Date";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("date"))
  ], DateAnnotation.prototype, "date", 2);
  Edm2.DateAnnotation = DateAnnotation;
  class DateTimeOffsetAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "DateTimeOffset";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("dateTimeOffset"))
  ], DateTimeOffsetAnnotation.prototype, "dateTimeOffset", 2);
  Edm2.DateTimeOffsetAnnotation = DateTimeOffsetAnnotation;
  class DecimalAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Decimal";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("decimal"))
  ], DecimalAnnotation.prototype, "decimal", 2);
  Edm2.DecimalAnnotation = DecimalAnnotation;
  class DurationAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Duration";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("duration"))
  ], DurationAnnotation.prototype, "duration", 2);
  Edm2.DurationAnnotation = DurationAnnotation;
  class EnumMemberAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "EnumMember";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("enumMember"))
  ], EnumMemberAnnotation.prototype, "enumMember", 2);
  Edm2.EnumMemberAnnotation = EnumMemberAnnotation;
  class FloatAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Float";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("float"))
  ], FloatAnnotation.prototype, "float", 2);
  Edm2.FloatAnnotation = FloatAnnotation;
  class GuidAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Guid";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("guid"))
  ], GuidAnnotation.prototype, "guid", 2);
  Edm2.GuidAnnotation = GuidAnnotation;
  class IntAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Int";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("int"))
  ], IntAnnotation.prototype, "int", 2);
  Edm2.IntAnnotation = IntAnnotation;
  class StringAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "String";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("string"))
  ], StringAnnotation.prototype, "string", 2);
  Edm2.StringAnnotation = StringAnnotation;
  class TimeOfDayAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "TimeOfDay";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("timeOfDay"))
  ], TimeOfDayAnnotation.prototype, "timeOfDay", 2);
  Edm2.TimeOfDayAnnotation = TimeOfDayAnnotation;
  class PropertyPathAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "PropertyPath";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("propertyPath"))
  ], PropertyPathAnnotation.prototype, "propertyPaths", 2);
  Edm2.PropertyPathAnnotation = PropertyPathAnnotation;
  class NavigationPropertyPathAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "NavigationPropertyPath";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("propertyPath"))
  ], NavigationPropertyPathAnnotation.prototype, "navigationPropertyPaths", 2);
  Edm2.NavigationPropertyPathAnnotation = NavigationPropertyPathAnnotation;
  class AnnotationPathAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "AnnotationPath";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("annotationPath"))
  ], AnnotationPathAnnotation.prototype, "annotationPaths", 2);
  Edm2.AnnotationPathAnnotation = AnnotationPathAnnotation;
  class NullAnnotation extends Annotation {
    constructor() {
      super(...arguments);
      this.annotationType = "Null";
    }
  }
  __decorateClass([
    parseAs2(primitiveAnnotationValue("null"))
  ], NullAnnotation.prototype, "null", 2);
  Edm2.NullAnnotation = NullAnnotation;
  Edm2.AnnotationTypes = {
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
    null: NullAnnotation
  };
})(Edm || (Edm = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Edm
});
