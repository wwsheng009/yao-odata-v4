"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const odata = require("./odata");
const utils = require("./lib/utils");
class ODataControllerBase {
  static on(method, fn, ...keys) {
    let fnName = fn.name || fn;
    odata.method(method)(this.prototype, fnName);
    if (keys && keys.length > 0) {
      fn = this.prototype[fnName];
      let parameterNames = utils.getFunctionParameters(fn);
      keys.forEach((key) => {
        odata.key(this.prototype, fnName, parameterNames.indexOf(key));
      });
    }
  }
  /** Enables the filtering
   * @param fn
   * @param param
   */
  static enableFilter(fn, param) {
    let fnName = fn.name || fn;
    fn = this.prototype[fnName];
    let parameterNames = utils.getFunctionParameters(fn);
    odata.filter(
      this.prototype,
      fnName,
      parameterNames.indexOf(param || parameterNames[0])
    );
  }
}
exports.ODataControllerBase = ODataControllerBase;
//增加define能力
class ODataController extends odata.ODataBase(ODataControllerBase) {}

exports.ODataController = ODataController;
