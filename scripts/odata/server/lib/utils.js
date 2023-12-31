"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const stream_1 = require("stream");
const result = require("./result");
const patternSource = "[^(]*\\(([^)]*)\\)";
const pattern = new RegExp(patternSource);
/**
 * 根据函数名称读取对象中函数的参数列表。
 * @param {object} 类型定义对象
 * @param {string} name 函数名称
 * @returns
 */
exports.getFunctionParameters = function (fn, name) {
  let params =
    typeof name == "string" && typeof fn[name] == "function"
      ? fn[name].toString().match(new RegExp(`(?:${name})?` + patternSource))
      : fn.toString().match(pattern);
  return params[1].split(/,(?:\s)?/).map((p) => p.split(" ")[0]);
};
exports.getAllPropertyNames = function (proto) {
  let propNames = Object.getOwnPropertyNames(proto);
  proto = Object.getPrototypeOf(proto);
  if (proto !== Object.prototype)
    //&& proto !== stream_1.Transform.prototype)
    propNames = propNames.concat(exports.getAllPropertyNames(proto));
  return propNames;
};
let GeneratorFunction;
try {
  GeneratorFunction = eval("(function*() {}).constructor");
} catch (err) {}
function isIterator(value) {
  return value instanceof GeneratorFunction;
}
exports.isIterator = isIterator;
function isPromise(value) {
  return value && typeof value.then == "function";
}
exports.isPromise = isPromise;
function isStream(stream) {
  return (
    stream !== null &&
    typeof stream == "object" &&
    typeof stream.pipe == "function" &&
    !(stream instanceof result.ODataStream)
  );
}
exports.isStream = isStream;
