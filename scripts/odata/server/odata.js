"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./lib/Reflect");
const edm = require("./edm");
const utils = require("./lib/utils");
class ODataMethodType {}
ODataMethodType.GET = "GET";
ODataMethodType.POST = "POST";
ODataMethodType.PUT = "PUT";
ODataMethodType.PATCH = "PATCH";
ODataMethodType.DELETE = "DELETE";
exports.ODataMethodType = ODataMethodType;
const ODataEntitySets = "odata:entitysets";
const ODataMethod = "odata:method";
const ODataKeyParameters = "odata:keyparameters";
const ODataLinkParameters = "odata:linkparameters";
const ODataQueryParameter = "odata:queryparameter";
const ODataFilterParameter = "odata:filterparameter";
const ODataBodyParameter = "odata:bodyparameter";
const ODataContextParameter = "odata:contextparameter";
const ODataStreamParameter = "odata:streamparameter";
const ODataResultParameter = "odata:resultparameter";
const ODataIdParameter = "odata:idparameter";
const ODataTypeParameter = "odata:typeparameter";
const ODataNamespace = "odata:namespace";

/**
 * 返回一个修饰器，修饰器会在修饰一个控制器类型，注入元素类型设置
 * 修改类型时，会返回一个新的修饰器。
 * @param {object} elementType 元素类型
 * @param {string} targetKey 目标KEY
 * @param {number|null} parameterIndex 参数索引
 * @returns 返回修饰器
 */
function type(elementType, targetKey, parameterIndex) {
  if (typeof parameterIndex == "number") {
    let target = elementType;
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataTypeParameter, paramName, target, targetKey);
  } else {
    return function (constructor) {
      constructor.prototype.elementType = elementType;
    };
  }
}
exports.type = type;
/** Set namespace
 * @param namespace Namespace to be set
 */
function namespace(namespace) {
  return function (target, targetKey) {
    if (targetKey) {
      if (target[targetKey]) {
        target[targetKey].namespace = namespace;
      } else {
        Reflect.defineMetadata(ODataNamespace, namespace, target, targetKey);
      }
    } else target.namespace = namespace;
  };
}
exports.namespace = namespace;
function getNamespace(target, targetKey) {
  return (
    Reflect.getMetadata(ODataNamespace, target.prototype, targetKey) ||
    (target[targetKey] || target).namespace
  );
}
exports.getNamespace = getNamespace;
/** Set container
 * @param name  Name of the container
 */
function container(name) {
  return function (target, targetKey) {
    if (targetKey) target[targetKey].containerName = name;
    else target.containerName = name;
  };
}
exports.container = container;
/** Set parser
 * @param parser Parser to use (odata-v4-parser compatible functional parser)
 */
function parser(parser) {
  return function (target) {
    target.parser = parser;
  };
}
exports.parser = parser;
/** Attach connector
 * @param connector Connector to use
 */
function connector(connector) {
  return function (target) {
    target.connector = connector;
  };
}
exports.connector = connector;
/** Attach validator
 * @param connector Connector to use
 */
function validation(validator, options) {
  return function (target) {
    target.validator = function (odataQuery) {
      return validator.validate(odataQuery, options);
    };
  };
}
exports.validation = validation;
/** Set error handler
 * @param errorHandler Error request handler to use
 */
function error(errorHandler) {
  return function (target) {
    target.errorHandler = errorHandler;
  };
}
exports.error = error;
/** Class decorator for server that binds the given controller to the server.
 * 类修饰器，把控制器绑定到server上。
 * @param controller    Controller to be bind to the server.
 * @param entitySetName The name of the entity set.
 * entityset的名称或是true,如果是true，使用控制器的名称作为entityset的名称
 * @param elementType   Type of the element.
 * @returns 返回类型修饰器
 */
function controller(controller, entitySetName, elementType) {
  //向server注入controller相关的信息
  //server代表一个odata服务
  //controller代表一个entityset的操作，使用controller作了entity的处理响应主体。
  return function (server) {
    //控件器与server关连
    //可以有多个控制器原型
    server.prototype[controller.name] = controller;
    entitySetName =
      (typeof entitySetName == "string" ? entitySetName : "") ||
      controller.prototype.entitySetName ||
      (entitySetName === true
        ? controller.name.replace("Controller", "")
        : false);
    if (entitySetName) {
      //同时把控制器作为entityset注入到server的元数据中
      let entitySets = Reflect.getOwnMetadata(ODataEntitySets, server) || {};
      entitySets[entitySetName] = controller;
      Reflect.defineMetadata(ODataEntitySets, entitySets, server);
    }
    //初始化控制器elementType的对象。
    if (elementType) {
      controller.prototype.elementType = elementType;
    }
    if (!controller.prototype.elementType) {
      controller.prototype.elementType = Object;
    }
    edm.EntityType(controller.prototype.elementType)(
      server.prototype,
      controller.name
    );
  };
}
exports.controller = controller;
/** Gives the public controllers of the given server
 * @param server
 */
function getPublicControllers(server) {
  return Reflect.getOwnMetadata(ODataEntitySets, server) || {};
}
exports.getPublicControllers = getPublicControllers;
/** Enables CORS on your server
 * @param server The server where you turn the CORS on
 * */
exports.cors = (function cors() {
  return function (server) {
    server.cors = true;
  };
})();

/**
 *
 * @param {string} type HTTP请求方法
 * @param {*} navigationProperty,
 * 有可能有参数@odata.POST("Data")
 * @returns 修饰器
 */
function odataMethodFactory(type, navigationProperty) {
  if (type.indexOf("/") < 0) type = type.toLowerCase();

  /**
   * 修饰一个类型定义，给函数增加额外的定义
   * @param {class} target 类型对象
   * @param {string} targetKey 函数名
   */
  let decorator = function (target, targetKey) {
    // 根据函数名称读取到现有的方法定义。
    let existingMethods =
      Reflect.getMetadata(ODataMethod, target, targetKey) || [];
    existingMethods.unshift(type);
    Reflect.defineMetadata(ODataMethod, existingMethods, target, targetKey);
  };

  let createRefFn = function (navigationProperty) {
    let fn = odataMethodFactory(`${type}/${navigationProperty}`);

    fn.$ref = function (target, targetKey) {
      let existingMethods =
        Reflect.getMetadata(ODataMethod, target, targetKey) || [];
      existingMethods.unshift(`${type}/${navigationProperty}/$ref`);
      Reflect.defineMetadata(ODataMethod, existingMethods, target, targetKey);
    };
    return fn;
  };
  //如果是子节点
  if (typeof navigationProperty == "string")
    return createRefFn(navigationProperty);

  let fn = function (target, targetKey) {
    if (typeof target == "string") return createRefFn(target);
    if (arguments.length == 0) return fn;
    else decorator(target, targetKey);
  };

  // 如果是定义了$value，也是一个修饰器，对应路径请求/$value
  // @odata.POST("Data2").$value
  fn.$value = function (target, targetKey) {
    let existingMethods =
      Reflect.getMetadata(ODataMethod, target, targetKey) || [];
    existingMethods.unshift(`${type}/$value`);
    Reflect.defineMetadata(ODataMethod, existingMethods, target, targetKey);
  };
  return fn;
}
/** Annotate function for OData GET operation */
exports.GET = odataMethodFactory("GET");
/** Annotate function for OData POST operation */
exports.POST = odataMethodFactory("POST");
/** Annotate function for OData PUT operation */
exports.PUT = odataMethodFactory("PUT");
/** Annotate function for OData PATCH operation */
exports.PATCH = odataMethodFactory("PATCH");
/** Annotate function for OData DELETE operation */
exports.DELETE = odataMethodFactory("DELETE");
/** Create reference for OData POST operation
 * @param navigationProperty Navigation property name to handle
 */
function createRef(navigationProperty) {
  return exports.POST(navigationProperty).$ref;
}
exports.createRef = createRef;
/** Update reference for OData PUT operation
 * @param navigationProperty Navigation property name to handle
 */
function updateRef(navigationProperty) {
  return exports.PUT(navigationProperty).$ref;
}
exports.updateRef = updateRef;
/** Delete reference for OData DELETE operation
 * @param navigationProperty Navigation property name to handle
 */
function deleteRef(navigationProperty) {
  return exports.DELETE(navigationProperty).$ref;
}
exports.deleteRef = deleteRef;

/**
 * Annotate function for a specified OData method operation
 * @param {*} method 调用方法
 * @param {*} navigationProperty
 * @returns
 */
function method(method, navigationProperty) {
  return odataMethodFactory(method.toUpperCase(), navigationProperty);
}
exports.method = method;
/** get metadata value of ODataMethod on the prototype chain of target or targetKey
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getMethod(target, targetKey) {
  return Reflect.getMetadata(ODataMethod, target.prototype, targetKey);
}
exports.getMethod = getMethod;
/** Gives the entity key
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
function key(target, targetKey, parameterIndex) {
  let name;
  let decorator = function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let existingParameters =
      Reflect.getOwnMetadata(ODataKeyParameters, target, targetKey) || [];
    let paramName = parameterNames[parameterIndex];
    existingParameters.push({
      from: name || paramName,
      to: paramName,
    });
    Reflect.defineMetadata(
      ODataKeyParameters,
      existingParameters,
      target,
      targetKey
    );
  };
  if (typeof target == "string" || typeof target == "undefined" || !target) {
    name = target;
    return decorator;
  } else return decorator(target, targetKey, parameterIndex);
}
exports.key = key;
/** Gives the decorated key parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getKeys(target, targetKey) {
  return (
    Reflect.getMetadata(ODataKeyParameters, target.prototype, targetKey) || []
  );
}
exports.getKeys = getKeys;
/** Gives the identifier of the referenced entity.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
function link(target, targetKey, parameterIndex) {
  let name;
  let decorator = function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let existingParameters =
      Reflect.getOwnMetadata(ODataLinkParameters, target, targetKey) || [];
    let paramName = parameterNames[parameterIndex];
    existingParameters.push({
      from: name || paramName,
      to: paramName,
    });
    Reflect.defineMetadata(
      ODataLinkParameters,
      existingParameters,
      target,
      targetKey
    );
  };
  if (typeof target == "string" || typeof target == "undefined" || !target) {
    name = target;
    return decorator;
  } else return decorator(target, targetKey, parameterIndex);
}
exports.link = link;
/** Gives the decorated link parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getLinks(target, targetKey) {
  return (
    Reflect.getMetadata(ODataLinkParameters, target.prototype, targetKey) || []
  );
}
exports.getLinks = getLinks;

/** Finds the given OData method
 * 在目标类型上查找http请求方法，会在processor中用到。
 * @param {any} target
 * @param {any} method
 * @param {any} keys
 */
function findODataMethod(target, method, keys) {
  keys = keys || [];
  let propNames = utils.getAllPropertyNames(target.prototype);
  for (let prop of propNames) {
    if (
      getMethod(target, prop) &&
      getMethod(target, prop).indexOf(method) >= 0
    ) {
      let fnKeys = getKeys(target, prop);
      if (keys.length == fnKeys.length) {
        return {
          call: prop,
          key: fnKeys,
          link: getLinks(target, prop),
        };
      }
    }
  }
  for (let prop of propNames) {
    if (prop == method.toLowerCase()) {
      let fnKeys = getKeys(target, prop);
      if (keys.length == fnKeys.length) {
        return {
          call: prop,
          key: fnKeys,
          link: getLinks(target, prop),
        };
      }
    }
  }
  for (let prop of propNames) {
    if (
      getMethod(target, prop) &&
      getMethod(target, prop).indexOf(method) >= 0
    ) {
      return {
        call: prop,
        key: [],
        link: getLinks(target, prop),
      };
    }
  }
  for (let prop of propNames) {
    if (prop == method.toLowerCase()) {
      return {
        call: prop,
        key: [],
        link: getLinks(target, prop),
      };
    }
  }
  return null;
}
exports.findODataMethod = findODataMethod;
/** Provides access to all OData query options.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
exports.query = (function query() {
  return function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataQueryParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated query parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getQueryParameter(target, targetKey) {
  return Reflect.getMetadata(ODataQueryParameter, target.prototype, targetKey);
}
exports.getQueryParameter = getQueryParameter;
/** Gives filter information and provides the AST tree of the OData $filter.
 * @param target            The prototype of the class for an instance member,实例的原型
 * @param targetKey         The name of the class method，方法
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list，参数的索引
 */
exports.filter = (function filter() {
  // 修改对象方法的参数
  // parameterIndex 参数的位置，框架传入
  return function (target, targetKey, parameterIndex) {
    //
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataFilterParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated filter parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getFilterParameter(target, targetKey) {
  return Reflect.getMetadata(ODataFilterParameter, target.prototype, targetKey);
}
exports.getFilterParameter = getFilterParameter;
/** Gives the body of the OData request.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
exports.body = (function body() {
  return function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataBodyParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated body parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getBodyParameter(target, targetKey) {
  return Reflect.getMetadata(ODataBodyParameter, target.prototype, targetKey);
}
exports.getBodyParameter = getBodyParameter;
/** Gives the current execution context.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
exports.context = (function context() {
  return function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataContextParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated context parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getContextParameter(target, targetKey) {
  return Reflect.getMetadata(
    ODataContextParameter,
    target.prototype,
    targetKey
  );
}
exports.getContextParameter = getContextParameter;
/** Gives a writable stream that will perform OData result transformation on the result and then sends it forward to your response stream.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
exports.stream = (function stream() {
  return function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataStreamParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated stream parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getStreamParameter(target, targetKey) {
  return Reflect.getMetadata(ODataStreamParameter, target.prototype, targetKey);
}
exports.getStreamParameter = getStreamParameter;
/** Gives the result from the last part from the resource path of the OData URL. This ensures the access to an entity in context of your action or function.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
exports.result = (function result() {
  return function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataResultParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated result parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getResultParameter(target, targetKey) {
  return Reflect.getMetadata(ODataResultParameter, target.prototype, targetKey);
}
exports.getResultParameter = getResultParameter;
/** Gives the url that was provided either in request body as @odata.id or in query parameters as $id.
 * @param target            The prototype of the class for an instance member
 * @param targetKey         The name of the class method
 * @param parameterIndex    The ordinal index of the parameter in the function’s parameter list
 */
exports.id = (function id() {
  return function (target, targetKey, parameterIndex) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let paramName = parameterNames[parameterIndex];
    Reflect.defineMetadata(ODataIdParameter, paramName, target, targetKey);
  };
})();
/** Gives the decorated id parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getIdParameter(target, targetKey) {
  return Reflect.getMetadata(ODataIdParameter, target.prototype, targetKey);
}
exports.getIdParameter = getIdParameter;
/** Gives the decorated type parameter.
 * @param target    The prototype of the class for an instance member
 * @param targetKey The name of the class method
 */
function getTypeParameter(target, targetKey) {
  return Reflect.getMetadata(ODataTypeParameter, target.prototype, targetKey);
}
exports.getTypeParameter = getTypeParameter;
/** Sets a parameter decorator for the given parameter.
 * @param name The name of the parameter.
 * @param type OData decorator type.
 */
function parameter(name, type) {
  return function (target, targetKey) {
    let parameterNames = utils.getFunctionParameters(target, targetKey);
    let parameterIndex = parameterNames.indexOf(name);
    if (parameterIndex >= 0) {
      type(target, targetKey, parameterIndex);
    }
  };
}
exports.parameter = parameter;
/** Sets parameter decorators for the given parameters.
 * @param parameters Object that contains the name of the parameter as key and the type of the parameter as value.
 */
function parameters(parameters) {
  return function (target, targetKey) {
    for (let prop in parameters) {
      parameter(prop, parameters[prop])(target, targetKey);
    }
  };
}
exports.parameters = parameters;

/**
 * 增强一个类型，目标类型增强后可以使用调用方法define批量应用修饰器。
 * @param {class} Base 基类
 * @returns 扩展后的类型
 */
function ODataBase(Base) {
  class ODataBaseClass extends Base {
    /** Define class, properties and parameters with decorators */
    /**
     * 批量给对象应用修饰器对象，可以在es6 js脚本中应用。
     * controller与dataserver都继续了这个类，
     * @param  {...any} decorators 修饰器列表
     * @returns
     */
    static define(...decorators) {
      decorators.forEach((decorator) => {
        if (typeof decorator == "function") {
          decorator(this);
        } else if (typeof decorator == "object") {
          let props = Object.keys(decorator);
          props.forEach((prop) => {
            let propDecorators = decorator[prop];
            if (!Array.isArray(propDecorators))
              propDecorators = [propDecorators];
            propDecorators.forEach((propDecorator) => {
              if (typeof propDecorator == "function") {
                propDecorator(this.prototype, prop);
              } else if (typeof propDecorator == "object") {
                let params = Object.keys(propDecorator);
                let parameterNames = utils.getFunctionParameters(
                  this.prototype[prop]
                );
                params.forEach((param) => {
                  let paramDecorators = propDecorator[param];
                  if (!Array.isArray(paramDecorators))
                    paramDecorators = [paramDecorators];
                  paramDecorators.forEach((paramDecorator) => {
                    if (typeof paramDecorator == "function") {
                      paramDecorator(
                        this.prototype,
                        prop,
                        parameterNames.indexOf(param)
                      );
                    } else {
                      throw new Error(
                        `Unsupported parameter decorator on ${
                          this.name || this
                        } at ${prop}.${param} using ${paramDecorator}`
                      );
                    }
                  });
                });
              } else {
                throw new Error(
                  `Unsupported member decorator on ${
                    this.name || this
                  } at ${prop} using ${propDecorator}`
                );
              }
            });
          });
        } else {
          throw new Error(
            `Unsupported decorator on ${this.name || this} using ${decorator}`
          );
        }
      });
      return this;
    }
  }
  return ODataBaseClass;
}
exports.ODataBase = ODataBase;

class ODataEntityBase {}

exports.ODataEntityBase = ODataEntityBase;

class ODataEntity extends ODataBase(ODataEntityBase) {}
exports.ODataEntity = ODataEntity;
