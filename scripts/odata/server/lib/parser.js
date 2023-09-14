var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@newdash/newdash/.internal/arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/@newdash/newdash/.internal/arrayMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arrayMap(array, iteratee) {
      var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    exports.default = arrayMap;
  },
});

// node_modules/@newdash/newdash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/@newdash/newdash/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFunction = void 0;
    function isFunction(value) {
      return typeof value === "function";
    }
    exports.isFunction = isFunction;
    exports.default = isFunction;
  },
});

// node_modules/@newdash/newdash/isLength.js
var require_isLength = __commonJS({
  "node_modules/@newdash/newdash/isLength.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isLength = void 0;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    function isLength(value) {
      return (
        typeof value === "number" &&
        value > -1 &&
        value % 1 == 0 &&
        value <= MAX_SAFE_INTEGER
      );
    }
    exports.isLength = isLength;
    exports.default = isLength;
  },
});

// node_modules/@newdash/newdash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/@newdash/newdash/isArrayLike.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArrayLike = void 0;
    var isFunction_1 = __importDefault(require_isFunction());
    var isLength_1 = __importDefault(require_isLength());
    function isArrayLike(value) {
      return (
        value != null &&
        (0, isLength_1.default)(value.length) &&
        !(0, isFunction_1.default)(value)
      );
    }
    exports.isArrayLike = isArrayLike;
    exports.default = isArrayLike;
  },
});

// node_modules/@newdash/newdash/.internal/baseFor.js
var require_baseFor = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseFor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function baseFor(object, iteratee, keysFunc) {
      const iterable = Object(object);
      const props = keysFunc(object);
      let { length } = props;
      let index = -1;
      while (length--) {
        const key = props[++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    }
    exports.default = baseFor;
  },
});

// node_modules/@newdash/newdash/.internal/CONSTANTS.js
var require_CONSTANTS = __commonJS({
  "node_modules/@newdash/newdash/.internal/CONSTANTS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HALF_MAX_ARRAY_LENGTH =
      exports.MAX_ARRAY_INDEX =
      exports.MAX_ARRAY_LENGTH =
      exports.NAN =
      exports.MAX_INTEGER =
      exports.MAX_SAFE_INTEGER =
      exports.INFINITY =
      exports.LAZY_WHILE_FLAG =
      exports.LAZY_MAP_FLAG =
      exports.LAZY_FILTER_FLAG =
      exports.HOT_SPAN =
      exports.HOT_COUNT =
      exports.DEFAULT_TRUNC_OMISSION =
      exports.DEFAULT_TRUNC_LENGTH =
      exports.WRAP_FLIP_FLAG =
      exports.WRAP_REARG_FLAG =
      exports.WRAP_ARY_FLAG =
      exports.WRAP_PARTIAL_RIGHT_FLAG =
      exports.WRAP_PARTIAL_FLAG =
      exports.WRAP_CURRY_RIGHT_FLAG =
      exports.WRAP_CURRY_FLAG =
      exports.WRAP_CURRY_BOUND_FLAG =
      exports.WRAP_BIND_KEY_FLAG =
      exports.WRAP_BIND_FLAG =
      exports.COMPARE_UNORDERED_FLAG =
      exports.COMPARE_PARTIAL_FLAG =
      exports.CLONE_SYMBOLS_FLAG =
      exports.CLONE_FLAT_FLAG =
      exports.CLONE_DEEP_FLAG =
      exports.PLACEHOLDER =
      exports.MAX_MEMOIZE_SIZE =
      exports.HASH_UNDEFINED =
      exports.FUNC_ERROR_TEXT =
      exports.CORE_ERROR_TEXT =
      exports.LARGE_ARRAY_SIZE =
        void 0;
    exports.LARGE_ARRAY_SIZE = 200;
    exports.CORE_ERROR_TEXT =
      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
    exports.FUNC_ERROR_TEXT = "Expected a function";
    exports.HASH_UNDEFINED = "__lodash_hash_undefined__";
    exports.MAX_MEMOIZE_SIZE = 500;
    exports.PLACEHOLDER = "__lodash_placeholder__";
    exports.CLONE_DEEP_FLAG = 1;
    exports.CLONE_FLAT_FLAG = 2;
    exports.CLONE_SYMBOLS_FLAG = 4;
    exports.COMPARE_PARTIAL_FLAG = 1;
    exports.COMPARE_UNORDERED_FLAG = 2;
    exports.WRAP_BIND_FLAG = 1;
    exports.WRAP_BIND_KEY_FLAG = 2;
    exports.WRAP_CURRY_BOUND_FLAG = 4;
    exports.WRAP_CURRY_FLAG = 8;
    exports.WRAP_CURRY_RIGHT_FLAG = 16;
    exports.WRAP_PARTIAL_FLAG = 32;
    exports.WRAP_PARTIAL_RIGHT_FLAG = 64;
    exports.WRAP_ARY_FLAG = 128;
    exports.WRAP_REARG_FLAG = 256;
    exports.WRAP_FLIP_FLAG = 512;
    exports.DEFAULT_TRUNC_LENGTH = 30;
    exports.DEFAULT_TRUNC_OMISSION = "...";
    exports.HOT_COUNT = 800;
    exports.HOT_SPAN = 16;
    exports.LAZY_FILTER_FLAG = 1;
    exports.LAZY_MAP_FLAG = 2;
    exports.LAZY_WHILE_FLAG = 3;
    exports.INFINITY = 1 / 0;
    exports.MAX_SAFE_INTEGER = 9007199254740991;
    exports.MAX_INTEGER = 17976931348623157e292;
    exports.NAN = 0 / 0;
    exports.MAX_ARRAY_LENGTH = 4294967295;
    exports.MAX_ARRAY_INDEX = exports.MAX_ARRAY_LENGTH - 1;
    exports.HALF_MAX_ARRAY_LENGTH = exports.MAX_ARRAY_LENGTH >>> 1;
  },
});

// node_modules/@newdash/newdash/.internal/toSource.js
var require_toSource = __commonJS({
  "node_modules/@newdash/newdash/.internal/toSource.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GLOBAL_1 = require_GLOBAL();
    function toSource(func) {
      if (func != null) {
        try {
          return GLOBAL_1.funcToString.call(func);
        } catch (e) {}
        try {
          return func + "";
        } catch (e) {}
      }
      return "";
    }
    exports.default = toSource;
  },
});

// node_modules/@newdash/newdash/.internal/overArg.js
var require_overArg = __commonJS({
  "node_modules/@newdash/newdash/.internal/overArg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg));
      };
    }
    exports.default = overArg;
  },
});

// node_modules/@newdash/newdash/.internal/GLOBAL.js
var require_GLOBAL = __commonJS({
  "node_modules/@newdash/newdash/.internal/GLOBAL.js"(exports, module2) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reTrim =
      exports.reHasRegExpChar =
      exports.reRegExpChar =
      exports.rePropName =
      exports.reIsPlainProp =
      exports.reIsDeepProp =
      exports.reInterpolate =
      exports.reEvaluate =
      exports.reEscape =
      exports.reHasUnescapedHtml =
      exports.reHasEscapedHtml =
      exports.reUnescapedHtml =
      exports.reEscapedHtml =
      exports.reEmptyStringTrailing =
      exports.reEmptyStringMiddle =
      exports.reEmptyStringLeading =
      exports.uint32Tag =
      exports.uint16Tag =
      exports.uint8ClampedTag =
      exports.uint8Tag =
      exports.int32Tag =
      exports.int16Tag =
      exports.int8Tag =
      exports.float64Tag =
      exports.float32Tag =
      exports.dataViewTag =
      exports.arrayBufferTag =
      exports.weakSetTag =
      exports.weakMapTag =
      exports.undefinedTag =
      exports.symbolTag =
      exports.stringTag =
      exports.setTag =
      exports.regexpTag =
      exports.proxyTag =
      exports.promiseTag =
      exports.objectTag =
      exports.nullTag =
      exports.numberTag =
      exports.mapTag =
      exports.genTag =
      exports.funcTag =
      exports.errorTag =
      exports.domExcTag =
      exports.dateTag =
      exports.boolTag =
      exports.asyncTag =
      exports.arrayTag =
      exports.argsTag =
      exports.wrapFlags =
        void 0;
    exports.rsOptContrUpper =
      exports.rsOptContrLower =
      exports.rsMiscUpper =
      exports.rsMiscLower =
      exports.rsZWJ =
      exports.rsUpper =
      exports.rsSurrPair =
      exports.rsRegional =
      exports.rsNonAstral =
      exports.rsModifier =
      exports.rsFitz =
      exports.rsMisc =
      exports.rsLower =
      exports.rsDingbat =
      exports.rsDigits =
      exports.rsCombo =
      exports.rsBreak =
      exports.rsAstral =
      exports.rsApos =
      exports.rsBreakRange =
      exports.rsVarRange =
      exports.rsUpperRange =
      exports.rsSpaceRange =
      exports.rsPunctuationRange =
      exports.rsNonCharRange =
      exports.rsMathOpRange =
      exports.rsLowerRange =
      exports.rsDingbatRange =
      exports.rsComboRange =
      exports.rsComboSymbolsRange =
      exports.reComboHalfMarksRange =
      exports.rsComboMarksRange =
      exports.rsAstralRange =
      exports.reUnescapedString =
      exports.reNoMatch =
      exports.reLatin =
      exports.reIsUint =
      exports.reIsOctal =
      exports.reIsHostCtor =
      exports.reIsBinary =
      exports.reIsBadHex =
      exports.reFlags =
      exports.reEsTemplate =
      exports.reEscapeChar =
      exports.reAsciiWord =
      exports.reSplitDetails =
      exports.reWrapDetails =
      exports.reWrapComment =
      exports.reTrimEnd =
      exports.reTrimStart =
        void 0;
    exports.objectCreate =
      exports.getPrototype =
      exports.allocUnsafe =
      exports.objectCtorString =
      exports.nativeObjectToString =
      exports.maskSrcKey =
      exports.idCounter =
      exports.hasOwnProperty =
      exports.funcToString =
      exports.objectProto =
      exports.funcProto =
      exports.arrayProto =
      exports.nodeIsTypedArray =
      exports.nodeIsSet =
      exports.nodeIsRegExp =
      exports.nodeIsMap =
      exports.nodeIsDate =
      exports.nodeIsArrayBuffer =
      exports.nodeUtil =
      exports.freeProcess =
      exports.moduleExports =
      exports.freeModule =
      exports.freeExports =
      exports.root =
      exports.freeSelf =
      exports.freeGlobal =
      exports.freeParseInt =
      exports.freeParseFloat =
      exports.stringEscapes =
      exports.htmlUnescapes =
      exports.htmlEscapes =
      exports.deburredLetters =
      exports.cloneableTags =
      exports.typedArrayTags =
      exports.templateCounter =
      exports.contextProps =
      exports.reHasUnicodeWord =
      exports.reHasUnicode =
      exports.reUnicodeWord =
      exports.reUnicode =
      exports.reComboMark =
      exports.reApos =
      exports.rsSymbol =
      exports.rsEmoji =
      exports.rsSeq =
      exports.rsOrdUpper =
      exports.rsOrdLower =
      exports.rsOptJoin =
      exports.rsOptVar =
      exports.reOptMod =
        void 0;
    exports.symbolToString =
      exports.symbolValueOf =
      exports.symbolProto =
      exports.weakMapCtorString =
      exports.setCtorString =
      exports.promiseCtorString =
      exports.mapCtorString =
      exports.dataViewCtorString =
      exports.realNames =
      exports.metaMap =
      exports.nativeCreate =
      exports.nativeReverse =
      exports.nativeRandom =
      exports.nativeParseInt =
      exports.nativeNow =
      exports.nativeMin =
      exports.nativeMax =
      exports.nativeKeys =
      exports.nativeJoin =
      exports.nativeIsFinite =
      exports.nativeIsBuffer =
      exports.nativeGetSymbols =
      exports.nativeFloor =
      exports.nativeCeil =
      exports.ctxSetTimeout =
      exports.ctxNow =
      exports.ctxClearTimeout =
      exports.defineProperty =
      exports.symToStringTag =
      exports.symIterator =
      exports.spreadableSymbol =
      exports.splice =
      exports.propertyIsEnumerable =
        void 0;
    var CONSTANTS_1 = require_CONSTANTS();
    var toSource_1 = __importDefault(require_toSource());
    var overArg_1 = __importDefault(require_overArg());
    exports.wrapFlags = [
      ["ary", CONSTANTS_1.WRAP_ARY_FLAG],
      ["bind", CONSTANTS_1.WRAP_BIND_FLAG],
      ["bindKey", CONSTANTS_1.WRAP_BIND_KEY_FLAG],
      ["curry", CONSTANTS_1.WRAP_CURRY_FLAG],
      ["curryRight", CONSTANTS_1.WRAP_CURRY_RIGHT_FLAG],
      ["flip", CONSTANTS_1.WRAP_FLIP_FLAG],
      ["partial", CONSTANTS_1.WRAP_PARTIAL_FLAG],
      ["partialRight", CONSTANTS_1.WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", CONSTANTS_1.WRAP_REARG_FLAG],
    ];
    (exports.argsTag = "[object Arguments]"),
      (exports.arrayTag = "[object Array]"),
      (exports.asyncTag = "[object AsyncFunction]"),
      (exports.boolTag = "[object Boolean]"),
      (exports.dateTag = "[object Date]"),
      (exports.domExcTag = "[object DOMException]"),
      (exports.errorTag = "[object Error]"),
      (exports.funcTag = "[object Function]"),
      (exports.genTag = "[object GeneratorFunction]"),
      (exports.mapTag = "[object Map]"),
      (exports.numberTag = "[object Number]"),
      (exports.nullTag = "[object Null]"),
      (exports.objectTag = "[object Object]"),
      (exports.promiseTag = "[object Promise]"),
      (exports.proxyTag = "[object Proxy]"),
      (exports.regexpTag = "[object RegExp]"),
      (exports.setTag = "[object Set]"),
      (exports.stringTag = "[object String]"),
      (exports.symbolTag = "[object Symbol]"),
      (exports.undefinedTag = "[object Undefined]"),
      (exports.weakMapTag = "[object WeakMap]"),
      (exports.weakSetTag = "[object WeakSet]");
    (exports.arrayBufferTag = "[object ArrayBuffer]"),
      (exports.dataViewTag = "[object DataView]"),
      (exports.float32Tag = "[object Float32Array]"),
      (exports.float64Tag = "[object Float64Array]"),
      (exports.int8Tag = "[object Int8Array]"),
      (exports.int16Tag = "[object Int16Array]"),
      (exports.int32Tag = "[object Int32Array]"),
      (exports.uint8Tag = "[object Uint8Array]"),
      (exports.uint8ClampedTag = "[object Uint8ClampedArray]"),
      (exports.uint16Tag = "[object Uint16Array]"),
      (exports.uint32Tag = "[object Uint32Array]");
    (exports.reEmptyStringLeading = /\b__p \+= '';/g),
      (exports.reEmptyStringMiddle = /\b(__p \+=) '' \+/g),
      (exports.reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g);
    (exports.reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g),
      (exports.reUnescapedHtml = /[&<>"']/g),
      (exports.reHasEscapedHtml = RegExp(exports.reEscapedHtml.source)),
      (exports.reHasUnescapedHtml = RegExp(exports.reUnescapedHtml.source));
    (exports.reEscape = /<%-([\s\S]+?)%>/g),
      (exports.reEvaluate = /<%([\s\S]+?)%>/g),
      (exports.reInterpolate = /<%=([\s\S]+?)%>/g);
    (exports.reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/),
      (exports.reIsPlainProp = /^\w*$/),
      (exports.rePropName =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g);
    (exports.reRegExpChar = /[\\^$.*+?()[\]{}|]/g),
      (exports.reHasRegExpChar = RegExp(exports.reRegExpChar.source));
    (exports.reTrim = /^\s+|\s+$/g),
      (exports.reTrimStart = /^\s+/),
      (exports.reTrimEnd = /\s+$/);
    (exports.reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/),
      (exports.reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/),
      (exports.reSplitDetails = /,? & /);
    exports.reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    exports.reEscapeChar = /\\(\\)?/g;
    exports.reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    exports.reFlags = /\w*$/;
    exports.reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    exports.reIsBinary = /^0b[01]+$/i;
    exports.reIsHostCtor = /^\[object .+?Constructor\]$/;
    exports.reIsOctal = /^0o[0-7]+$/i;
    exports.reIsUint = /^(?:0|[1-9]\d*)$/;
    exports.reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    exports.reNoMatch = /($^)/;
    exports.reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    (exports.rsAstralRange = "\\ud800-\\udfff"),
      (exports.rsComboMarksRange = "\\u0300-\\u036f"),
      (exports.reComboHalfMarksRange = "\\ufe20-\\ufe2f"),
      (exports.rsComboSymbolsRange = "\\u20d0-\\u20ff"),
      (exports.rsComboRange =
        exports.rsComboMarksRange +
        exports.reComboHalfMarksRange +
        exports.rsComboSymbolsRange),
      (exports.rsDingbatRange = "\\u2700-\\u27bf"),
      (exports.rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff"),
      (exports.rsMathOpRange = "\\xac\\xb1\\xd7\\xf7"),
      (exports.rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"),
      (exports.rsPunctuationRange = "\\u2000-\\u206f"),
      (exports.rsSpaceRange =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"),
      (exports.rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde"),
      (exports.rsVarRange = "\\ufe0e\\ufe0f"),
      (exports.rsBreakRange =
        exports.rsMathOpRange +
        exports.rsNonCharRange +
        exports.rsPunctuationRange +
        exports.rsSpaceRange);
    (exports.rsApos = "['\u2019]"),
      (exports.rsAstral = "[" + exports.rsAstralRange + "]"),
      (exports.rsBreak = "[" + exports.rsBreakRange + "]"),
      (exports.rsCombo = "[" + exports.rsComboRange + "]"),
      (exports.rsDigits = "\\d+"),
      (exports.rsDingbat = "[" + exports.rsDingbatRange + "]"),
      (exports.rsLower = "[" + exports.rsLowerRange + "]"),
      (exports.rsMisc =
        "[^" +
        exports.rsAstralRange +
        exports.rsBreakRange +
        exports.rsDigits +
        exports.rsDingbatRange +
        exports.rsLowerRange +
        exports.rsUpperRange +
        "]"),
      (exports.rsFitz = "\\ud83c[\\udffb-\\udfff]"),
      (exports.rsModifier =
        "(?:" + exports.rsCombo + "|" + exports.rsFitz + ")"),
      (exports.rsNonAstral = "[^" + exports.rsAstralRange + "]"),
      (exports.rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}"),
      (exports.rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]"),
      (exports.rsUpper = "[" + exports.rsUpperRange + "]"),
      (exports.rsZWJ = "\\u200d");
    (exports.rsMiscLower =
      "(?:" + exports.rsLower + "|" + exports.rsMisc + ")"),
      (exports.rsMiscUpper =
        "(?:" + exports.rsUpper + "|" + exports.rsMisc + ")"),
      (exports.rsOptContrLower =
        "(?:" + exports.rsApos + "(?:d|ll|m|re|s|t|ve))?"),
      (exports.rsOptContrUpper =
        "(?:" + exports.rsApos + "(?:D|LL|M|RE|S|T|VE))?"),
      (exports.reOptMod = exports.rsModifier + "?"),
      (exports.rsOptVar = "[" + exports.rsVarRange + "]?"),
      (exports.rsOptJoin =
        "(?:" +
        exports.rsZWJ +
        "(?:" +
        [exports.rsNonAstral, exports.rsRegional, exports.rsSurrPair].join(
          "|"
        ) +
        ")" +
        exports.rsOptVar +
        exports.reOptMod +
        ")*"),
      (exports.rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])"),
      (exports.rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])"),
      (exports.rsSeq = exports.rsOptVar + exports.reOptMod + exports.rsOptJoin),
      (exports.rsEmoji =
        "(?:" +
        [exports.rsDingbat, exports.rsRegional, exports.rsSurrPair].join("|") +
        ")" +
        exports.rsSeq),
      (exports.rsSymbol =
        "(?:" +
        [
          exports.rsNonAstral + exports.rsCombo + "?",
          exports.rsCombo,
          exports.rsRegional,
          exports.rsSurrPair,
          exports.rsAstral,
        ].join("|") +
        ")");
    exports.reApos = RegExp(exports.rsApos, "g");
    exports.reComboMark = RegExp(exports.rsCombo, "g");
    exports.reUnicode = RegExp(
      exports.rsFitz +
        "(?=" +
        exports.rsFitz +
        ")|" +
        exports.rsSymbol +
        exports.rsSeq,
      "g"
    );
    exports.reUnicodeWord = RegExp(
      [
        exports.rsUpper +
          "?" +
          exports.rsLower +
          "+" +
          exports.rsOptContrLower +
          "(?=" +
          [exports.rsBreak, exports.rsUpper, "$"].join("|") +
          ")",
        exports.rsMiscUpper +
          "+" +
          exports.rsOptContrUpper +
          "(?=" +
          [exports.rsBreak, exports.rsUpper + exports.rsMiscLower, "$"].join(
            "|"
          ) +
          ")",
        exports.rsUpper +
          "?" +
          exports.rsMiscLower +
          "+" +
          exports.rsOptContrLower,
        exports.rsUpper + "+" + exports.rsOptContrUpper,
        exports.rsOrdUpper,
        exports.rsOrdLower,
        exports.rsDigits,
        exports.rsEmoji,
      ].join("|"),
      "g"
    );
    exports.reHasUnicode = RegExp(
      "[" +
        exports.rsZWJ +
        exports.rsAstralRange +
        exports.rsComboRange +
        exports.rsVarRange +
        "]"
    );
    exports.reHasUnicodeWord =
      /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    exports.contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout",
    ];
    exports.templateCounter = -1;
    exports.typedArrayTags = {};
    exports.typedArrayTags[exports.float32Tag] =
      exports.typedArrayTags[exports.float64Tag] =
      exports.typedArrayTags[exports.int8Tag] =
      exports.typedArrayTags[exports.int16Tag] =
      exports.typedArrayTags[exports.int32Tag] =
      exports.typedArrayTags[exports.uint8Tag] =
      exports.typedArrayTags[exports.uint8ClampedTag] =
      exports.typedArrayTags[exports.uint16Tag] =
      exports.typedArrayTags[exports.uint32Tag] =
        true;
    exports.typedArrayTags[exports.argsTag] =
      exports.typedArrayTags[exports.arrayTag] =
      exports.typedArrayTags[exports.arrayBufferTag] =
      exports.typedArrayTags[exports.boolTag] =
      exports.typedArrayTags[exports.dataViewTag] =
      exports.typedArrayTags[exports.dateTag] =
      exports.typedArrayTags[exports.errorTag] =
      exports.typedArrayTags[exports.funcTag] =
      exports.typedArrayTags[exports.mapTag] =
      exports.typedArrayTags[exports.numberTag] =
      exports.typedArrayTags[exports.objectTag] =
      exports.typedArrayTags[exports.regexpTag] =
      exports.typedArrayTags[exports.setTag] =
      exports.typedArrayTags[exports.stringTag] =
      exports.typedArrayTags[exports.weakMapTag] =
        false;
    exports.cloneableTags = {};
    exports.cloneableTags[exports.argsTag] =
      exports.cloneableTags[exports.arrayTag] =
      exports.cloneableTags[exports.arrayBufferTag] =
      exports.cloneableTags[exports.dataViewTag] =
      exports.cloneableTags[exports.boolTag] =
      exports.cloneableTags[exports.dateTag] =
      exports.cloneableTags[exports.float32Tag] =
      exports.cloneableTags[exports.float64Tag] =
      exports.cloneableTags[exports.int8Tag] =
      exports.cloneableTags[exports.int16Tag] =
      exports.cloneableTags[exports.int32Tag] =
      exports.cloneableTags[exports.mapTag] =
      exports.cloneableTags[exports.numberTag] =
      exports.cloneableTags[exports.objectTag] =
      exports.cloneableTags[exports.regexpTag] =
      exports.cloneableTags[exports.setTag] =
      exports.cloneableTags[exports.stringTag] =
      exports.cloneableTags[exports.symbolTag] =
      exports.cloneableTags[exports.uint8Tag] =
      exports.cloneableTags[exports.uint8ClampedTag] =
      exports.cloneableTags[exports.uint16Tag] =
      exports.cloneableTags[exports.uint32Tag] =
        true;
    exports.cloneableTags[exports.errorTag] =
      exports.cloneableTags[exports.funcTag] =
      exports.cloneableTags[exports.weakMapTag] =
        false;
    exports.deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s",
    };
    exports.htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    exports.htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    };
    exports.stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029",
    };
    (exports.freeParseFloat = parseFloat), (exports.freeParseInt = parseInt);
    exports.freeGlobal =
      typeof global == "object" && global && global.Object === Object && global;
    exports.freeSelf =
      typeof self == "object" && self && self.Object === Object && self;
    exports.root =
      exports.freeGlobal || exports.freeSelf || Function("return this")();
    exports.freeExports =
      typeof exports == "object" && exports && !exports.nodeType && exports;
    exports.freeModule =
      exports.freeExports &&
      typeof module2 == "object" &&
      module2 &&
      !module2.nodeType &&
      module2;
    exports.moduleExports =
      exports.freeModule && exports.freeModule.exports === exports.freeExports;
    exports.freeProcess = exports.moduleExports && exports.freeGlobal.process;
    exports.nodeUtil = (function () {
      try {
        var types =
          exports.freeModule &&
          exports.freeModule.require &&
          exports.freeModule.require("util").types;
        if (types) {
          return types;
        }
        return (
          exports.freeProcess &&
          exports.freeProcess.binding &&
          exports.freeProcess.binding("util")
        );
      } catch (e) {}
    })();
    (exports.nodeIsArrayBuffer =
      exports.nodeUtil && exports.nodeUtil.isArrayBuffer),
      (exports.nodeIsDate = exports.nodeUtil && exports.nodeUtil.isDate),
      (exports.nodeIsMap = exports.nodeUtil && exports.nodeUtil.isMap),
      (exports.nodeIsRegExp = exports.nodeUtil && exports.nodeUtil.isRegExp),
      (exports.nodeIsSet = exports.nodeUtil && exports.nodeUtil.isSet),
      (exports.nodeIsTypedArray =
        exports.nodeUtil && exports.nodeUtil.isTypedArray);
    (exports.arrayProto = Array.prototype),
      (exports.funcProto = Function.prototype),
      (exports.objectProto = Object.prototype);
    exports.funcToString = exports.funcProto.toString;
    exports.hasOwnProperty = exports.objectProto.hasOwnProperty;
    exports.idCounter = 0;
    exports.maskSrcKey = "";
    exports.nativeObjectToString = exports.objectProto.toString;
    exports.objectCtorString = exports.funcToString.call(Object);
    (exports.allocUnsafe =
      typeof Buffer == "object" ? Buffer.allocUnsafe : void 0),
      (exports.getPrototype = (0, overArg_1.default)(
        Object.getPrototypeOf,
        Object
      )),
      (exports.objectCreate = Object.create),
      (exports.propertyIsEnumerable = exports.objectProto.propertyIsEnumerable),
      (exports.splice = exports.arrayProto.splice),
      (exports.spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0),
      (exports.symIterator = Symbol ? Symbol.iterator : void 0),
      (exports.symToStringTag = Symbol ? Symbol.toStringTag : void 0);
    exports.defineProperty = Object.defineProperty;
    exports.ctxClearTimeout = null; //clearTimeout;
    exports.ctxNow = Date.now;
    exports.ctxSetTimeout = null; //setTimeout;
    (exports.nativeCeil = Math.ceil),
      (exports.nativeFloor = Math.floor),
      (exports.nativeGetSymbols = Object.getOwnPropertySymbols),
      (exports.nativeIsBuffer =
        typeof Buffer == "object" ? Buffer.isBuffer : void 0),
      (exports.nativeIsFinite = isFinite),
      (exports.nativeJoin = exports.arrayProto.join),
      (exports.nativeKeys = (0, overArg_1.default)(Object.keys, Object)),
      (exports.nativeMax = Math.max),
      (exports.nativeMin = Math.min),
      (exports.nativeNow = Date.now),
      (exports.nativeParseInt = parseInt),
      (exports.nativeRandom = Math.random),
      (exports.nativeReverse = exports.arrayProto.reverse);
    exports.nativeCreate = Object.create;
    exports.metaMap = WeakMap && /* @__PURE__ */ new WeakMap();
    exports.realNames = {};
    (exports.dataViewCtorString = (0, toSource_1.default)(DataView)),
      (exports.mapCtorString = (0, toSource_1.default)(Map)),
      (exports.promiseCtorString = (0, toSource_1.default)(Promise)),
      (exports.setCtorString = (0, toSource_1.default)(Set)),
      (exports.weakMapCtorString = (0, toSource_1.default)(WeakMap));
    (exports.symbolProto = Symbol ? Symbol.prototype : void 0),
      (exports.symbolValueOf = exports.symbolProto
        ? exports.symbolProto.valueOf
        : void 0),
      (exports.symbolToString = exports.symbolProto
        ? exports.symbolProto.toString
        : void 0);
  },
});

// node_modules/@newdash/newdash/.internal/getTag.js
var require_getTag = __commonJS({
  "node_modules/@newdash/newdash/.internal/getTag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTag = void 0;
    var GLOBAL_1 = require_GLOBAL();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    function getRawTag(value) {
      var isOwn = Object.prototype.hasOwnProperty.call(
        value,
        Symbol.toStringTag
      );
      const tag = value[Symbol.toStringTag];
      try {
        value[Symbol.toStringTag] = void 0;
        var unmasked = true;
      } catch (e) {}
      var result = Object.prototype.toString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[GLOBAL_1.symToStringTag] = tag;
        } else {
          delete value[GLOBAL_1.symToStringTag];
        }
      }
      return result;
    }
    function getTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return GLOBAL_1.symToStringTag && GLOBAL_1.symToStringTag in Object(value)
        ? getRawTag(value)
        : Object.prototype.toString.call(value);
    }
    exports.getTag = getTag;
    exports.default = getTag;
  },
});

// node_modules/@newdash/newdash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/@newdash/newdash/isObjectLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObjectLike = void 0;
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    exports.isObjectLike = isObjectLike;
    exports.default = isObjectLike;
  },
});

// node_modules/@newdash/newdash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/@newdash/newdash/isArguments.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArguments = void 0;
    var getTag_1 = __importDefault(require_getTag());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    function isArguments(value) {
      return (
        (0, isObjectLike_1.default)(value) &&
        (0, getTag_1.default)(value) == "[object Arguments]"
      );
    }
    exports.isArguments = isArguments;
    exports.default = isArguments;
  },
});

// node_modules/@newdash/newdash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/@newdash/newdash/isBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBuffer = void 0;
    function isBuffer(value) {
      var _a;
      if (typeof Buffer == "function") {
        const nativeIsBuffer =
          Buffer === null || Buffer === void 0 ? void 0 : Buffer.isBuffer;
        if (nativeIsBuffer) {
          return nativeIsBuffer(value);
        }
      }
      const className =
        (_a =
          value === null || value === void 0 ? void 0 : value.constructor) ===
          null || _a === void 0
          ? void 0
          : _a.name;
      return className == "Buffer";
    }
    exports.isBuffer = isBuffer;
    exports.default = isBuffer;
  },
});

// node_modules/@newdash/newdash/.internal/isIndex.js
var require_isIndex = __commonJS({
  "node_modules/@newdash/newdash/.internal/isIndex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      const type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return (
        !!length &&
        (type === "number" || (type !== "symbol" && reIsUint.test(value))) &&
        value > -1 &&
        value % 1 == 0 &&
        value < length
      );
    }
    exports.default = isIndex;
  },
});

// node_modules/@newdash/newdash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/@newdash/newdash/isTypedArray.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTypedArray = void 0;
    var getTag_1 = __importDefault(require_getTag());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    var reTypedTag =
      /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;
    function isTypedArray(value) {
      return (
        (0, isObjectLike_1.default)(value) &&
        reTypedTag.test((0, getTag_1.default)(value))
      );
    }
    exports.isTypedArray = isTypedArray;
    exports.default = isTypedArray;
  },
});

// node_modules/@newdash/newdash/.internal/arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/@newdash/newdash/.internal/arrayLikeKeys.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArguments_1 = __importDefault(require_isArguments());
    var isBuffer_1 = __importDefault(require_isBuffer());
    var isIndex_1 = __importDefault(require_isIndex());
    var isTypedArray_1 = __importDefault(require_isTypedArray());
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function arrayLikeKeys(value, inherited = false) {
      const isArr = Array.isArray(value);
      const isArg = !isArr && (0, isArguments_1.default)(value);
      const isBuff = !isArr && !isArg && (0, isBuffer_1.default)(value);
      const isType =
        !isArr && !isArg && !isBuff && (0, isTypedArray_1.default)(value);
      const skipIndexes = isArr || isArg || isBuff || isType;
      const length = value.length;
      const result = new Array(skipIndexes ? length : 0);
      let index = skipIndexes ? -1 : length;
      while (++index < length) {
        result[index] = `${index}`;
      }
      for (const key in value) {
        if (
          (inherited || hasOwnProperty.call(value, key)) &&
          !(
            skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key === "length" || // Skip index properties.
              (0, isIndex_1.default)(key, length))
          )
        ) {
          result.push(key);
        }
      }
      return result;
    }
    exports.default = arrayLikeKeys;
  },
});

// node_modules/@newdash/newdash/keys.js
var require_keys = __commonJS({
  "node_modules/@newdash/newdash/keys.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keys = void 0;
    var arrayLikeKeys_1 = __importDefault(require_arrayLikeKeys());
    var isArrayLike_1 = __importDefault(require_isArrayLike());
    function keys(object) {
      return (0, isArrayLike_1.default)(object)
        ? (0, arrayLikeKeys_1.default)(object)
        : Object.keys(Object(object));
    }
    exports.keys = keys;
    exports.default = keys;
  },
});

// node_modules/@newdash/newdash/.internal/baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseForOwn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseFor_1 = __importDefault(require_baseFor());
    var keys_1 = __importDefault(require_keys());
    function baseForOwn(object, iteratee) {
      return object && (0, baseFor_1.default)(object, iteratee, keys_1.default);
    }
    exports.default = baseForOwn;
  },
});

// node_modules/@newdash/newdash/.internal/baseEach.js
var require_baseEach = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseEach.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseForOwn_1 = __importDefault(require_baseForOwn());
    var isArrayLike_1 = __importDefault(require_isArrayLike());
    function baseEach(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!(0, isArrayLike_1.default)(collection)) {
        return (0, baseForOwn_1.default)(collection, iteratee);
      }
      const length = collection.length;
      const iterable = Object(collection);
      let index = -1;
      while (++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    }
    exports.default = baseEach;
  },
});

// node_modules/@newdash/newdash/.internal/baseMap.js
var require_baseMap = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseMap.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArrayLike_1 = __importDefault(require_isArrayLike());
    var baseEach_1 = __importDefault(require_baseEach());
    function baseMap(collection, iteratee) {
      var index = -1,
        result = (0, isArrayLike_1.default)(collection)
          ? Array(collection.length)
          : [];
      (0, baseEach_1.default)(collection, function (value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    exports.default = baseMap;
  },
});

// node_modules/@newdash/newdash/isArray.js
var require_isArray = __commonJS({
  "node_modules/@newdash/newdash/isArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = void 0;
    function isArray3(value) {
      return Array.isArray(value);
    }
    exports.isArray = isArray3;
    exports.default = isArray3;
  },
});

// node_modules/@newdash/newdash/eq.js
var require_eq = __commonJS({
  "node_modules/@newdash/newdash/eq.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.eq = void 0;
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }
    exports.eq = eq;
    exports.default = eq;
  },
});

// node_modules/@newdash/newdash/.internal/assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/@newdash/newdash/.internal/assocIndexOf.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var eq_1 = __importDefault(require_eq());
    function assocIndexOf(array, key) {
      let { length } = array;
      while (length--) {
        if ((0, eq_1.default)(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    exports.default = assocIndexOf;
  },
});

// node_modules/@newdash/newdash/.internal/ListCache.js
var require_ListCache = __commonJS({
  "node_modules/@newdash/newdash/.internal/ListCache.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListCache = void 0;
    var assocIndexOf_1 = __importDefault(require_assocIndexOf());
    var ListCache = class {
      /**
       * Creates an list cache object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      constructor(entries) {
        let index = -1;
        const length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          const entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      /**
       * Removes all key-value entries from the list cache.
       *
       * @memberOf ListCache
       */
      clear() {
        this.__data__ = [];
        this.size = 0;
      }
      /**
       * Removes `key` and its value from the list cache.
       *
       * @memberOf ListCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      delete(key) {
        const data = this.__data__;
        const index = (0, assocIndexOf_1.default)(data, key);
        if (index < 0) {
          return false;
        }
        const lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          data.splice(index, 1);
        }
        --this.size;
        return true;
      }
      /**
       * Gets the list cache value for `key`.
       *
       * @memberOf ListCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      get(key) {
        const data = this.__data__;
        const index = (0, assocIndexOf_1.default)(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      /**
       * Checks if a list cache value for `key` exists.
       *
       * @memberOf ListCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      has(key) {
        return (0, assocIndexOf_1.default)(this.__data__, key) > -1;
      }
      /**
       * Sets the list cache `key` to `value`.
       *
       * @memberOf ListCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the list cache instance.
       */
      set(key, value) {
        const data = this.__data__;
        const index = (0, assocIndexOf_1.default)(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
    };
    exports.ListCache = ListCache;
    exports.default = ListCache;
  },
});

// node_modules/@newdash/newdash/.internal/Hash.js
var require_Hash = __commonJS({
  "node_modules/@newdash/newdash/.internal/Hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = void 0;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var Hash = class {
      /**
       * Creates a hash object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      constructor(entries) {
        let index = -1;
        const length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          const entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      /**
       * Removes all key-value entries from the hash.
       *
       * @memberOf Hash
       */
      clear() {
        this.__data__ = /* @__PURE__ */ Object.create(null);
        this.size = 0;
      }
      /**
       * Removes `key` and its value from the hash.
       *
       * @memberOf Hash
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      delete(key) {
        const result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      /**
       * Gets the hash value for `key`.
       *
       * @memberOf Hash
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      get(key) {
        const data = this.__data__;
        const result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      /**
       * Checks if a hash value for `key` exists.
       *
       * @memberOf Hash
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      has(key) {
        const data = this.__data__;
        return data[key] !== void 0;
      }
      /**
       * Sets the hash `key` to `value`.
       *
       * @memberOf Hash
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the hash instance.
       */
      set(key, value) {
        const data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
    };
    exports.Hash = Hash;
    exports.default = Hash;
  },
});

// node_modules/@newdash/newdash/.internal/MapCache.js
var require_MapCache = __commonJS({
  "node_modules/@newdash/newdash/.internal/MapCache.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hash_1 = __importDefault(require_Hash());
    function getMapData({ __data__ }, key) {
      const data = __data__;
      return isKeyable(key)
        ? data[typeof key === "string" ? "string" : "hash"]
        : data.map;
    }
    function isKeyable(value) {
      const type = typeof value;
      return type === "string" ||
        type === "number" ||
        type === "symbol" ||
        type === "boolean"
        ? value !== "__proto__"
        : value === null;
    }
    var MapCache = class {
      /**
       * Creates a map cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      constructor(entries) {
        let index = -1;
        const length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          const entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      /**
       * Removes all key-value entries from the map.
       *
       * @memberOf MapCache
       */
      clear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash_1.default(),
          map: /* @__PURE__ */ new Map(),
          string: new Hash_1.default(),
        };
      }
      /**
       * Removes `key` and its value from the map.
       *
       * @memberOf MapCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      delete(key) {
        const result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      /**
       * Gets the map value for `key`.
       *
       * @memberOf MapCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      get(key) {
        return getMapData(this, key).get(key);
      }
      /**
       * Checks if a map value for `key` exists.
       *
       * @memberOf MapCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      has(key) {
        return getMapData(this, key).has(key);
      }
      /**
       * Sets the map `key` to `value`.
       *
       * @memberOf MapCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the map cache instance.
       */
      set(key, value) {
        const data = getMapData(this, key);
        const size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
    };
    exports.default = MapCache;
  },
});

// node_modules/@newdash/newdash/.internal/Stack.js
var require_Stack = __commonJS({
  "node_modules/@newdash/newdash/.internal/Stack.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListCache_1 = __importDefault(require_ListCache());
    var MapCache_1 = __importDefault(require_MapCache());
    var LARGE_ARRAY_SIZE = 200;
    var Stack = class {
      /**
       * Creates a stack cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      constructor(entries) {
        const data = (this.__data__ = new ListCache_1.default(entries));
        this.size = data.size;
      }
      /**
       * Removes all key-value entries from the stack.
       *
       * @memberOf Stack
       */
      clear() {
        this.__data__ = new ListCache_1.default();
        this.size = 0;
      }
      /**
       * Removes `key` and its value from the stack.
       *
       * @memberOf Stack
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      delete(key) {
        const data = this.__data__;
        const result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      /**
       * Gets the stack value for `key`.
       *
       * @memberOf Stack
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      get(key) {
        return this.__data__.get(key);
      }
      /**
       * Checks if a stack value for `key` exists.
       *
       * @memberOf Stack
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      has(key) {
        return this.__data__.has(key);
      }
      /**
       * Sets the stack `key` to `value`.
       *
       * @memberOf Stack
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the stack cache instance.
       */
      set(key, value) {
        let data = this.__data__;
        if (data instanceof ListCache_1.default) {
          const pairs = data.__data__;
          if (pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache_1.default(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
    };
    exports.default = Stack;
  },
});

// node_modules/@newdash/newdash/.internal/SetCache.js
var require_SetCache = __commonJS({
  "node_modules/@newdash/newdash/.internal/SetCache.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapCache_1 = __importDefault(require_MapCache());
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var SetCache = class {
      /**
       * Creates an array cache object to store unique values.
       *
       * @private
       * @constructor
       * @param {Array} [values] The values to cache.
       */
      constructor(values) {
        let index = -1;
        const length = values == null ? 0 : values.length;
        this.__data__ = new MapCache_1.default();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      /**
       * Adds `value` to the array cache.
       *
       * @memberOf SetCache
       * @alias push
       * @param {*} value The value to cache.
       * @returns {Object} Returns the cache instance.
       */
      add(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      /**
       * Checks if `value` is in the array cache.
       *
       * @memberOf SetCache
       * @param {*} value The value to search for.
       * @returns {boolean} Returns `true` if `value` is found, else `false`.
       */
      has(value) {
        return this.__data__.has(value);
      }
    };
    SetCache.prototype.push = SetCache.prototype.add;
    exports.default = SetCache;
  },
});

// node_modules/@newdash/newdash/isObject.js
var require_isObject = __commonJS({
  "node_modules/@newdash/newdash/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObject = void 0;
    function isObject(value) {
      const type = typeof value;
      return value != null && (type === "object" || type === "function");
    }
    exports.isObject = isObject;
    exports.default = isObject;
  },
});

// node_modules/@newdash/newdash/.internal/isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/@newdash/newdash/.internal/isIterateeCall.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIterateeCall = void 0;
    var eq_1 = __importDefault(require_eq());
    var isArrayLike_1 = __importDefault(require_isArrayLike());
    var isObject_1 = __importDefault(require_isObject());
    var isIndex_1 = __importDefault(require_isIndex());
    function isIterateeCall(value, index, object) {
      if (!(0, isObject_1.default)(object)) {
        return false;
      }
      const type = typeof index;
      if (
        type === "number"
          ? (0, isArrayLike_1.default)(object) &&
            (0, isIndex_1.default)(index, object.length)
          : type === "string" && index in object
      ) {
        return (0, eq_1.default)(object[index], value);
      }
      return false;
    }
    exports.isIterateeCall = isIterateeCall;
    exports.default = isIterateeCall;
  },
});

// node_modules/@newdash/newdash/some.js
var require_some = __commonJS({
  "node_modules/@newdash/newdash/some.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.some = void 0;
    var isArray_1 = __importDefault(require_isArray());
    var isIterateeCall_1 = __importDefault(require_isIterateeCall());
    var getIteratee_1 = __importDefault(require_getIteratee());
    var baseEach_1 = __importDefault(require_baseEach());
    function arraySome(array, predicate) {
      let index = -1;
      const length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseSome(collection, predicate) {
      let result;
      (0, baseEach_1.default)(collection, (value, index, collection2) => {
        result = predicate(value, index, collection2);
        return !result;
      });
      return !!result;
    }
    function some(collection, predicate, guard) {
      const func = (0, isArray_1.default)(collection) ? arraySome : baseSome;
      if (
        guard &&
        (0, isIterateeCall_1.default)(collection, predicate, guard)
      ) {
        predicate = void 0;
      }
      return func(collection, (0, getIteratee_1.default)(predicate, 3));
    }
    exports.some = some;
    exports.default = some;
  },
});

// node_modules/@newdash/newdash/.internal/cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/@newdash/newdash/.internal/cacheHas.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    exports.default = cacheHas;
  },
});

// node_modules/@newdash/newdash/.internal/equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/@newdash/newdash/.internal/equalArrays.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var SetCache_1 = __importDefault(require_SetCache());
    var some_1 = __importDefault(require_some());
    var cacheHas_1 = __importDefault(require_cacheHas());
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      const arrLength = array.length;
      const othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      const stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      let index = -1;
      let result = true;
      const seen =
        bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_1.default() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        let compared;
        const arrValue = array[index];
        const othValue = other[index];
        if (customizer) {
          compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (
            !(0, some_1.default)(other, (othValue2, othIndex) => {
              if (
                !(0, cacheHas_1.default)(seen, othIndex) &&
                (arrValue === othValue2 ||
                  equalFunc(arrValue, othValue2, bitmask, customizer, stack))
              ) {
                return seen.push(othIndex);
              }
            })
          ) {
            result = false;
            break;
          }
        } else if (
          !(
            arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )
        ) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    exports.default = equalArrays;
  },
});

// node_modules/@newdash/newdash/.internal/mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/@newdash/newdash/.internal/mapToArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mapToArray(map2) {
      let index = -1;
      const result = new Array(map2.size);
      map2.forEach((value, key) => {
        result[++index] = [key, value];
      });
      return result;
    }
    exports.default = mapToArray;
  },
});

// node_modules/@newdash/newdash/.internal/setToArray.js
var require_setToArray = __commonJS({
  "node_modules/@newdash/newdash/.internal/setToArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function setToArray(set) {
      let index = -1;
      const result = new Array(set.size);
      set.forEach((value) => {
        result[++index] = value;
      });
      return result;
    }
    exports.default = setToArray;
  },
});

// node_modules/@newdash/newdash/.internal/equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/@newdash/newdash/.internal/equalByTag.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var eq_1 = __importDefault(require_eq());
    var equalArrays_1 = __importDefault(require_equalArrays());
    var mapToArray_1 = __importDefault(require_mapToArray());
    var setToArray_1 = __importDefault(require_setToArray());
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolValueOf = Symbol.prototype.valueOf;
    function equalByTag(
      object,
      other,
      tag,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      let convert;
      switch (tag) {
        case dataViewTag:
          if (
            object.byteLength != other.byteLength ||
            object.byteOffset != other.byteOffset
          ) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (
            object.byteLength != other.byteLength ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))
          ) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return (0, eq_1.default)(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == `${other}`;
        case mapTag:
          convert = mapToArray_1.default;
        case setTag:
          const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray_1.default);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          const stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          const result = (0, equalArrays_1.default)(
            convert(object),
            convert(other),
            bitmask,
            customizer,
            equalFunc,
            stack
          );
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    exports.default = equalByTag;
  },
});

// node_modules/@newdash/newdash/.internal/getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/@newdash/newdash/.internal/getSymbols.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    function getSymbols(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return nativeGetSymbols(object).filter((symbol) =>
        propertyIsEnumerable.call(object, symbol)
      );
    }
    exports.default = getSymbols;
  },
});

// node_modules/@newdash/newdash/.internal/getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/@newdash/newdash/.internal/getAllKeys.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var getSymbols_1 = __importDefault(require_getSymbols());
    var keys_1 = __importDefault(require_keys());
    function getAllKeys(object) {
      const result = (0, keys_1.default)(object);
      if (!Array.isArray(object)) {
        result.push(...(0, getSymbols_1.default)(object));
      }
      return result;
    }
    exports.default = getAllKeys;
  },
});

// node_modules/@newdash/newdash/.internal/equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/@newdash/newdash/.internal/equalObjects.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var getAllKeys_1 = __importDefault(require_getAllKeys());
    var COMPARE_PARTIAL_FLAG = 1;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function equalObjects(
      object,
      other,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      const isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      const objProps = (0, getAllKeys_1.default)(object);
      const objLength = objProps.length;
      const othProps = (0, getAllKeys_1.default)(other);
      const othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      let key;
      let index = objLength;
      while (index--) {
        key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      const stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      let result = true;
      stack.set(object, other);
      stack.set(other, object);
      let compared;
      let skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        const objValue = object[key];
        const othValue = other[key];
        if (customizer) {
          compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        if (
          !(compared === void 0
            ? objValue === othValue ||
              equalFunc(objValue, othValue, bitmask, customizer, stack)
            : compared)
        ) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        const objCtor = object.constructor;
        const othCtor = other.constructor;
        if (
          objCtor != othCtor &&
          "constructor" in object &&
          "constructor" in other &&
          !(
            typeof objCtor === "function" &&
            objCtor instanceof objCtor &&
            typeof othCtor === "function" &&
            othCtor instanceof othCtor
          )
        ) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    exports.default = equalObjects;
  },
});

// node_modules/@newdash/newdash/.internal/baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseIsEqualDeep.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Stack_1 = __importDefault(require_Stack());
    var equalArrays_1 = __importDefault(require_equalArrays());
    var equalByTag_1 = __importDefault(require_equalByTag());
    var equalObjects_1 = __importDefault(require_equalObjects());
    var getTag_1 = __importDefault(require_getTag());
    var isBuffer_1 = __importDefault(require_isBuffer());
    var isTypedArray_1 = __importDefault(require_isTypedArray());
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function baseIsEqualDeep(
      object,
      other,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      let objIsArr = Array.isArray(object);
      const othIsArr = Array.isArray(other);
      let objTag = objIsArr ? arrayTag : (0, getTag_1.default)(object);
      let othTag = othIsArr ? arrayTag : (0, getTag_1.default)(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      let objIsObj = objTag == objectTag;
      const othIsObj = othTag == objectTag;
      const isSameTag = objTag == othTag;
      if (isSameTag && (0, isBuffer_1.default)(object)) {
        if (!(0, isBuffer_1.default)(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack_1.default());
        return objIsArr || (0, isTypedArray_1.default)(object)
          ? (0, equalArrays_1.default)(
              object,
              other,
              bitmask,
              customizer,
              equalFunc,
              stack
            )
          : (0, equalByTag_1.default)(
              object,
              other,
              objTag,
              bitmask,
              customizer,
              equalFunc,
              stack
            );
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        const objIsWrapped =
          objIsObj && hasOwnProperty.call(object, "__wrapped__");
        const othIsWrapped =
          othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          const objUnwrapped = objIsWrapped ? object.value() : object;
          const othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack_1.default());
          return equalFunc(
            objUnwrapped,
            othUnwrapped,
            bitmask,
            customizer,
            stack
          );
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack_1.default());
      return (0, equalObjects_1.default)(
        object,
        other,
        bitmask,
        customizer,
        equalFunc,
        stack
      );
    }
    exports.default = baseIsEqualDeep;
  },
});

// node_modules/@newdash/newdash/.internal/baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseIsEqual.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseIsEqualDeep_1 = __importDefault(require_baseIsEqualDeep());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (
        value == null ||
        other == null ||
        (!(0, isObjectLike_1.default)(value) &&
          !(0, isObjectLike_1.default)(other))
      ) {
        return value !== value && other !== other;
      }
      return (0, baseIsEqualDeep_1.default)(
        value,
        other,
        bitmask,
        customizer,
        baseIsEqual,
        stack
      );
    }
    exports.default = baseIsEqual;
  },
});

// node_modules/@newdash/newdash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/@newdash/newdash/isSymbol.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSymbol = void 0;
    var getTag_1 = __importDefault(require_getTag());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return (
        typeof value == "symbol" ||
        ((0, isObjectLike_1.default)(value) &&
          (0, getTag_1.default)(value) == symbolTag)
      );
    }
    exports.isSymbol = isSymbol;
    exports.default = isSymbol;
  },
});

// node_modules/@newdash/newdash/.internal/isKey.js
var require_isKey = __commonJS({
  "node_modules/@newdash/newdash/.internal/isKey.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isSymbol_1 = __importDefault(require_isSymbol());
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (Array.isArray(value)) {
        return false;
      }
      const type = typeof value;
      if (
        type === "number" ||
        type === "boolean" ||
        value == null ||
        (0, isSymbol_1.default)(value)
      ) {
        return true;
      }
      return (
        reIsPlainProp.test(value) ||
        !reIsDeepProp.test(value) ||
        (object != null && value in Object(object))
      );
    }
    exports.default = isKey;
  },
});

// node_modules/@newdash/newdash/assert/index.js
var require_assert = __commonJS({
  "node_modules/@newdash/newdash/assert/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mustProvide = void 0;
    function mustProvide(value, fieldName, type) {
      if (value === void 0 || value === null || typeof value !== type) {
        throw new TypeError(
          `must provide '${fieldName}' value with type '${type}', given: '${value}'/'${type}'`
        );
      }
    }
    exports.mustProvide = mustProvide;
  },
});

// node_modules/@newdash/newdash/assert/errors.js
var require_errors = __commonJS({
  "node_modules/@newdash/newdash/assert/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeoutError =
      exports.InValidParameterError =
      exports.NewDashBaseError =
        void 0;
    var NewDashBaseError = class extends Error {};
    exports.NewDashBaseError = NewDashBaseError;
    var InValidParameterError = class extends NewDashBaseError {};
    exports.InValidParameterError = InValidParameterError;
    var TimeoutError = class extends NewDashBaseError {};
    exports.TimeoutError = TimeoutError;
  },
});

// node_modules/@newdash/newdash/functional/LRUMap.js
var require_LRUMap = __commonJS({
  "node_modules/@newdash/newdash/functional/LRUMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUMap = void 0;
    var assert_1 = require_assert();
    var errors_1 = require_errors();
    var LRUMap = class extends Map {
      /**
       * LRU (Least Recently Used) Map implementation
       *
       * will remove the oldest item when reach the size limit
       *
       * @category Functional
       * @since 5.15.0
       * @param maxSize maximum cache item number, default is 1024
       * @example
       *
       * ```ts
       * const m = new LRUMap(1)
       * m.set('a','v') // {'a':'v'}
       * m.set('b','c') // {'b':'c'}
       * ```
       */
      constructor(maxSize = 1024) {
        super();
        (0, assert_1.mustProvide)(maxSize, "maxSize", "number");
        if (maxSize < 1) {
          throw new errors_1.InValidParameterError(
            `for LRUMap, must provide a positive value which >=1, giving ${maxSize}`
          );
        }
        this._maxSize = maxSize;
      }
      get(key) {
        if (super.has(key)) {
          const item = super.get(key);
          super.delete(key);
          super.set(key, item);
        }
        return super.get(key);
      }
      set(key, val) {
        if (super.has(key)) {
          super.delete(key);
        } else if (this.size >= this._maxSize) {
          super.delete(this.first());
        }
        super.set(key, val);
        return this;
      }
      clear() {
        super.clear();
      }
      first() {
        return super.keys().next().value;
      }
      setMaxSize(maxSize) {
        this._maxSize = maxSize;
      }
      getMaxSize() {
        return this._maxSize;
      }
    };
    exports.LRUMap = LRUMap;
    exports.default = LRUMap;
  },
});

// node_modules/@newdash/newdash/memoize.js
var require_memoize = __commonJS({
  "node_modules/@newdash/newdash/memoize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memoize = void 0;
    var LRUMap_1 = require_LRUMap();
    function memoize(func, resolver) {
      if (
        typeof func !== "function" ||
        (resolver != null && typeof resolver !== "function")
      ) {
        throw new TypeError("Expected a function");
      }
      const memoized = function (...args) {
        const key = resolver ? resolver.apply(this, args) : args[0];
        const cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        const result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || LRUMap_1.LRUMap)();
      return memoized;
    }
    exports.memoize = memoize;
    memoize.Cache = Map;
    exports.default = memoize;
  },
});

// node_modules/@newdash/newdash/.internal/memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/@newdash/newdash/.internal/memoizeCapped.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var memoize_1 = __importDefault(require_memoize());
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      const result = (0, memoize_1.default)(func, (key) => {
        const { cache } = result;
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      return result;
    }
    exports.default = memoizeCapped;
  },
});

// node_modules/@newdash/newdash/.internal/stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/@newdash/newdash/.internal/stringToPath.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var memoizeCapped_1 = __importDefault(require_memoizeCapped());
    var charCodeOfDot = ".".charCodeAt(0);
    var reEscapeChar = /\\(\\)?/g;
    var rePropName = RegExp(
      // Match anything that isn't a dot or bracket.
      `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
      "g"
    );
    var stringToPath = (0, memoizeCapped_1.default)(function (string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function (match, number, quote, subString) {
        result.push(
          quote ? subString.replace(reEscapeChar, "$1") : number || match
        );
      });
      return result;
    });
    exports.default = stringToPath;
  },
});

// node_modules/@newdash/newdash/toString.js
var require_toString = __commonJS({
  "node_modules/@newdash/newdash/toString.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toString = void 0;
    var isSymbol_1 = __importDefault(require_isSymbol());
    var isArray_1 = __importDefault(require_isArray());
    var arrayMap_1 = __importDefault(require_arrayMap());
    var symbolToString =
      (_a =
        Symbol === null || Symbol === void 0 ? void 0 : Symbol.prototype) ===
        null || _a === void 0
        ? void 0
        : _a.toString;
    var INFINITY = Infinity;
    function toString(value) {
      if (value == null) {
        return "";
      }
      if (typeof value == "string") {
        return value;
      }
      if ((0, isArray_1.default)(value)) {
        return `${(0, arrayMap_1.default)(value, toString)}`;
      }
      if ((0, isSymbol_1.default)(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      const result = `${value}`;
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    exports.toString = toString;
    exports.default = toString;
  },
});

// node_modules/@newdash/newdash/.internal/castPath.js
var require_castPath = __commonJS({
  "node_modules/@newdash/newdash/.internal/castPath.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isKey_1 = __importDefault(require_isKey());
    var stringToPath_1 = __importDefault(require_stringToPath());
    var isArray_1 = __importDefault(require_isArray());
    var toString_1 = __importDefault(require_toString());
    function castPath(value, object) {
      if ((0, isArray_1.default)(value)) {
        return value;
      }
      return (0, isKey_1.default)(value, object)
        ? [value]
        : (0, stringToPath_1.default)((0, toString_1.default)(value));
    }
    exports.default = castPath;
  },
});

// node_modules/@newdash/newdash/.internal/toKey.js
var require_toKey = __commonJS({
  "node_modules/@newdash/newdash/.internal/toKey.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isSymbol_1 = __importDefault(require_isSymbol());
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value === "string" || (0, isSymbol_1.default)(value)) {
        return value;
      }
      const result = `${value}`;
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    exports.default = toKey;
  },
});

// node_modules/@newdash/newdash/.internal/baseGet.js
var require_baseGet = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseGet.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var castPath_1 = __importDefault(require_castPath());
    var toKey_1 = __importDefault(require_toKey());
    function baseGet(object, path) {
      path = (0, castPath_1.default)(path, object);
      let index = 0;
      const length = path.length;
      while (object != null && index < length) {
        object = object[(0, toKey_1.default)(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    exports.default = baseGet;
  },
});

// node_modules/@newdash/newdash/get.js
var require_get = __commonJS({
  "node_modules/@newdash/newdash/get.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.get = void 0;
    var baseGet_1 = __importDefault(require_baseGet());
    function get(object, path, defaultValue) {
      const result =
        object == null ? void 0 : (0, baseGet_1.default)(object, path);
      return result === void 0 ? defaultValue : result;
    }
    exports.get = get;
    exports.default = get;
  },
});

// node_modules/@newdash/newdash/hasPath.js
var require_hasPath = __commonJS({
  "node_modules/@newdash/newdash/hasPath.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasPath = void 0;
    var castPath_1 = __importDefault(require_castPath());
    var isArguments_1 = __importDefault(require_isArguments());
    var isIndex_1 = __importDefault(require_isIndex());
    var isLength_1 = __importDefault(require_isLength());
    var toKey_1 = __importDefault(require_toKey());
    var isArray_1 = __importDefault(require_isArray());
    function hasPath(object, path, hasFunc) {
      path = (0, castPath_1.default)(path, object);
      let index = -1,
        length = path.length,
        result = false;
      let key;
      while (++index < length) {
        key = (0, toKey_1.default)(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return (
        !!length &&
        (0, isLength_1.default)(length) &&
        (0, isIndex_1.default)(key, length) &&
        ((0, isArray_1.default)(object) || (0, isArguments_1.default)(object))
      );
    }
    exports.hasPath = hasPath;
    exports.default = hasPath;
  },
});

// node_modules/@newdash/newdash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/@newdash/newdash/hasIn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var hasPath_1 = __importDefault(require_hasPath());
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    function hasIn(object, key) {
      return object != null && (0, hasPath_1.default)(object, key, baseHasIn);
    }
    exports.default = hasIn;
  },
});

// node_modules/@newdash/newdash/.internal/isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/@newdash/newdash/.internal/isStrictComparable.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isObject_1 = __importDefault(require_isObject());
    function isStrictComparable(value) {
      return value === value && !(0, isObject_1.default)(value);
    }
    exports.default = isStrictComparable;
  },
});

// node_modules/@newdash/newdash/.internal/matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/@newdash/newdash/.internal/matchesStrictComparable.js"(
    exports
  ) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function matchesStrictComparable(key, srcValue) {
      return function (object) {
        if (object == null) {
          return false;
        }
        return (
          object[key] === srcValue &&
          (srcValue !== void 0 || key in Object(object))
        );
      };
    }
    exports.default = matchesStrictComparable;
  },
});

// node_modules/@newdash/newdash/.internal/baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseMatchesProperty.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseIsEqual_1 = __importDefault(require_baseIsEqual());
    var get_1 = __importDefault(require_get());
    var hasIn_1 = __importDefault(require_hasIn());
    var isKey_1 = __importDefault(require_isKey());
    var isStrictComparable_1 = __importDefault(require_isStrictComparable());
    var matchesStrictComparable_1 = __importDefault(
      require_matchesStrictComparable()
    );
    var toKey_1 = __importDefault(require_toKey());
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (
        (0, isKey_1.default)(path) &&
        (0, isStrictComparable_1.default)(srcValue)
      ) {
        return (0, matchesStrictComparable_1.default)(
          (0, toKey_1.default)(path),
          srcValue
        );
      }
      return function (object) {
        var objValue = (0, get_1.default)(object, path);
        return objValue === void 0 && objValue === srcValue
          ? (0, hasIn_1.default)(object, path)
          : (0, baseIsEqual_1.default)(
              srcValue,
              objValue,
              COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
            );
      };
    }
    exports.default = baseMatchesProperty;
  },
});

// node_modules/@newdash/newdash/.internal/baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseIsMatch.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Stack_1 = __importDefault(require_Stack());
    var baseIsEqual_1 = __importDefault(require_baseIsEqual());
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      let index = matchData.length;
      const length = index;
      const noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      let data;
      let result;
      object = Object(object);
      while (index--) {
        data = matchData[index];
        if (
          noCustomizer && data[2]
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
        ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        const key = data[0];
        const objValue = object[key];
        const srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          const stack = new Stack_1.default();
          if (customizer) {
            result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (
            !(result === void 0
              ? (0, baseIsEqual_1.default)(
                  srcValue,
                  objValue,
                  COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
                  customizer,
                  stack
                )
              : result)
          ) {
            return false;
          }
        }
      }
      return true;
    }
    exports.default = baseIsMatch;
  },
});

// node_modules/@newdash/newdash/.internal/getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/@newdash/newdash/.internal/getMatchData.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isStrictComparable_1 = __importDefault(require_isStrictComparable());
    var keys_1 = __importDefault(require_keys());
    function getMatchData(object) {
      const result = (0, keys_1.default)(object);
      let length = result.length;
      while (length--) {
        const key = result[length];
        const value = object[key];
        result[length] = [key, value, (0, isStrictComparable_1.default)(value)];
      }
      return result;
    }
    exports.default = getMatchData;
  },
});

// node_modules/@newdash/newdash/.internal/baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseMatches.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseIsMatch_1 = __importDefault(require_baseIsMatch());
    var getMatchData_1 = __importDefault(require_getMatchData());
    var matchesStrictComparable_1 = __importDefault(
      require_matchesStrictComparable()
    );
    function baseMatches(source) {
      const matchData = (0, getMatchData_1.default)(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return (0, matchesStrictComparable_1.default)(
          matchData[0][0],
          matchData[0][1]
        );
      }
      return function (object) {
        return (
          object === source ||
          (0, baseIsMatch_1.default)(object, source, matchData)
        );
      };
    }
    exports.default = baseMatches;
  },
});

// node_modules/@newdash/newdash/.internal/baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseProperty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function baseProperty(key) {
      return (object) => (object == null ? void 0 : object[key]);
    }
    exports.default = baseProperty;
  },
});

// node_modules/@newdash/newdash/.internal/basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/@newdash/newdash/.internal/basePropertyDeep.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseGet_1 = __importDefault(require_baseGet());
    function basePropertyDeep(path) {
      return function (object) {
        return (0, baseGet_1.default)(object, path);
      };
    }
    exports.default = basePropertyDeep;
  },
});

// node_modules/@newdash/newdash/property.js
var require_property = __commonJS({
  "node_modules/@newdash/newdash/property.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.property = void 0;
    var baseProperty_1 = __importDefault(require_baseProperty());
    var basePropertyDeep_1 = __importDefault(require_basePropertyDeep());
    var isKey_1 = __importDefault(require_isKey());
    var toKey_1 = __importDefault(require_toKey());
    function property(path) {
      return (0, isKey_1.default)(path)
        ? (0, baseProperty_1.default)((0, toKey_1.default)(path))
        : (0, basePropertyDeep_1.default)(path);
    }
    exports.property = property;
    exports.default = property;
  },
});

// node_modules/@newdash/newdash/.internal/identity.js
var require_identity = __commonJS({
  "node_modules/@newdash/newdash/.internal/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.identity = void 0;
    function identity(value) {
      return value;
    }
    exports.identity = identity;
    exports.default = identity;
  },
});

// node_modules/@newdash/newdash/.internal/baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseIteratee.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = __importDefault(require_isArray());
    var baseMatchesProperty_1 = __importDefault(require_baseMatchesProperty());
    var baseMatches_1 = __importDefault(require_baseMatches());
    var property_1 = __importDefault(require_property());
    var identity_1 = __importDefault(require_identity());
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity_1.default;
      }
      if (typeof value == "object") {
        return (0, isArray_1.default)(value)
          ? (0, baseMatchesProperty_1.default)(value[0], value[1])
          : (0, baseMatches_1.default)(value);
      }
      return (0, property_1.default)(value);
    }
    exports.default = baseIteratee;
  },
});

// node_modules/@newdash/newdash/isMap.js
var require_isMap = __commonJS({
  "node_modules/@newdash/newdash/isMap.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isMap = void 0;
    var getTag_1 = __importDefault(require_getTag());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    function isMap(value) {
      return (
        (0, isObjectLike_1.default)(value) &&
        (0, getTag_1.default)(value) == "[object Map]"
      );
    }
    exports.isMap = isMap;
    exports.default = isMap;
  },
});

// node_modules/@newdash/newdash/isSet.js
var require_isSet = __commonJS({
  "node_modules/@newdash/newdash/isSet.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSet = void 0;
    var getTag_1 = __importDefault(require_getTag());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    function isSet(value) {
      return (
        (0, isObjectLike_1.default)(value) &&
        (0, getTag_1.default)(value) == "[object Set]"
      );
    }
    exports.isSet = isSet;
    exports.default = isSet;
  },
});

// node_modules/@newdash/newdash/.internal/isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/@newdash/newdash/.internal/isPrototype.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var objectProto = Object.prototype;
    function isPrototype(value) {
      const Ctor = value && value.constructor;
      const proto =
        (typeof Ctor === "function" && Ctor.prototype) || objectProto;
      return value === proto;
    }
    exports.default = isPrototype;
  },
});

// node_modules/@newdash/newdash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/@newdash/newdash/keysIn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keysIn = void 0;
    var isArrayLike_1 = __importDefault(require_isArrayLike());
    var arrayLikeKeys_1 = __importDefault(require_arrayLikeKeys());
    var isObject_1 = __importDefault(require_isObject());
    var isPrototype_1 = __importDefault(require_isPrototype());
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function nativeKeysIn(object) {
      const result = [];
      if (object != null) {
        for (const key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function baseKeysIn(object) {
      if (!(0, isObject_1.default)(object)) {
        return nativeKeysIn(object);
      }
      const isProto = (0, isPrototype_1.default)(object);
      const result = [];
      for (const key in object) {
        if (
          !(
            key == "constructor" &&
            (isProto || !hasOwnProperty.call(object, key))
          )
        ) {
          result.push(key);
        }
      }
      return result;
    }
    function keysIn(object) {
      return (0, isArrayLike_1.default)(object)
        ? (0, arrayLikeKeys_1.default)(object, true)
        : baseKeysIn(object);
    }
    exports.keysIn = keysIn;
    exports.default = keysIn;
  },
});

// node_modules/@newdash/newdash/.internal/arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/@newdash/newdash/.internal/arrayEach.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arrayEach(array, iteratee) {
      let index = -1;
      const length = array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    exports.default = arrayEach;
  },
});

// node_modules/@newdash/newdash/.internal/baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseAssignValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function baseAssignValue(object, key, value) {
      if (key == "__proto__") {
        Object.defineProperty(object, key, {
          configurable: true,
          enumerable: true,
          value: value,
          writable: true,
        });
      } else {
        object[key] = value;
      }
    }
    exports.default = baseAssignValue;
  },
});

// node_modules/@newdash/newdash/.internal/assignValue.js
var require_assignValue = __commonJS({
  "node_modules/@newdash/newdash/.internal/assignValue.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseAssignValue_1 = __importDefault(require_baseAssignValue());
    var eq_1 = __importDefault(require_eq());
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (
        !(
          hasOwnProperty.call(object, key) && (0, eq_1.default)(objValue, value)
        ) ||
        (value === void 0 && !(key in object))
      ) {
        (0, baseAssignValue_1.default)(object, key, value);
      }
    }
    exports.default = assignValue;
  },
});

// node_modules/@newdash/newdash/.internal/copyObject.js
var require_copyObject = __commonJS({
  "node_modules/@newdash/newdash/.internal/copyObject.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var assignValue_1 = __importDefault(require_assignValue());
    var baseAssignValue_1 = __importDefault(require_baseAssignValue());
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1,
        length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          (0, baseAssignValue_1.default)(object, key, newValue);
        } else {
          (0, assignValue_1.default)(object, key, newValue);
        }
      }
      return object;
    }
    exports.default = copyObject;
  },
});

// node_modules/@newdash/newdash/.internal/baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseAssign.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var copyObject_1 = __importDefault(require_copyObject());
    var keys_1 = __importDefault(require_keys());
    function baseAssign(object, source) {
      return (
        object &&
        (0, copyObject_1.default)(source, (0, keys_1.default)(source), object)
      );
    }
    exports.default = baseAssign;
  },
});

// node_modules/@newdash/newdash/.internal/baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseAssignIn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var copyObject_1 = __importDefault(require_copyObject());
    var keysIn_1 = __importDefault(require_keysIn());
    function baseAssignIn(object, source) {
      return (
        object &&
        (0, copyObject_1.default)(source, (0, keysIn_1.default)(source), object)
      );
    }
    exports.default = baseAssignIn;
  },
});

// node_modules/@newdash/newdash/.internal/cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/@newdash/newdash/.internal/cloneArrayBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cloneArrayBuffer(arrayBuffer) {
      const result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    exports.default = cloneArrayBuffer;
  },
});

// node_modules/@newdash/newdash/.internal/freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/@newdash/newdash/.internal/freeGlobal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var freeGlobal =
      typeof global === "object" &&
      global !== null &&
      global.Object === Object &&
      global;
    exports.default = freeGlobal;
  },
});

// node_modules/@newdash/newdash/.internal/root.js
var require_root = __commonJS({
  "node_modules/@newdash/newdash/.internal/root.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var freeGlobal_1 = __importDefault(require_freeGlobal());
    var freeGlobalThis =
      typeof globalThis === "object" &&
      globalThis !== null &&
      globalThis.Object == Object &&
      globalThis;
    var freeSelf =
      typeof self === "object" &&
      self !== null &&
      self.Object === Object &&
      self;
    var root =
      freeGlobalThis ||
      freeGlobal_1.default ||
      freeSelf ||
      Function("return this")();
    exports.default = root;
  },
});

// node_modules/@newdash/newdash/.internal/cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/@newdash/newdash/.internal/cloneBuffer.js"(exports, module2) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var root_1 = __importDefault(require_root());
    var freeExports =
      typeof exports === "object" &&
      exports !== null &&
      !exports.nodeType &&
      exports;
    var freeModule =
      freeExports &&
      typeof module2 === "object" &&
      module2 !== null &&
      !module2.nodeType &&
      module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root_1.default.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      const length = buffer.length;
      const result = allocUnsafe
        ? allocUnsafe(length)
        : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    exports.default = cloneBuffer;
  },
});

// node_modules/@newdash/newdash/.internal/cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/@newdash/newdash/.internal/cloneDataView.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var cloneArrayBuffer_1 = __importDefault(require_cloneArrayBuffer());
    function cloneDataView(dataView, isDeep) {
      const buffer = isDeep
        ? (0, cloneArrayBuffer_1.default)(dataView.buffer)
        : dataView.buffer;
      return new dataView.constructor(
        buffer,
        dataView.byteOffset,
        dataView.byteLength
      );
    }
    exports.default = cloneDataView;
  },
});

// node_modules/@newdash/newdash/.internal/cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/@newdash/newdash/.internal/cloneRegExp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      const result = new regexp.constructor(
        regexp.source,
        reFlags.exec(regexp)
      );
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    exports.default = cloneRegExp;
  },
});

// node_modules/@newdash/newdash/.internal/cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/@newdash/newdash/.internal/cloneSymbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var symbolValueOf = Symbol.prototype.valueOf;
    function cloneSymbol(symbol) {
      return Object(symbolValueOf.call(symbol));
    }
    exports.default = cloneSymbol;
  },
});

// node_modules/@newdash/newdash/.internal/cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/@newdash/newdash/.internal/cloneTypedArray.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var cloneArrayBuffer_1 = __importDefault(require_cloneArrayBuffer());
    function cloneTypedArray(typedArray, isDeep) {
      const buffer = isDeep
        ? (0, cloneArrayBuffer_1.default)(typedArray.buffer)
        : typedArray.buffer;
      return new typedArray.constructor(
        buffer,
        typedArray.byteOffset,
        typedArray.length
      );
    }
    exports.default = cloneTypedArray;
  },
});

// node_modules/@newdash/newdash/.internal/copyArray.js
var require_copyArray = __commonJS({
  "node_modules/@newdash/newdash/.internal/copyArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function copyArray(source, array) {
      let index = -1;
      const length = source.length;
      array || (array = new Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    exports.default = copyArray;
  },
});

// node_modules/@newdash/newdash/.internal/copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/@newdash/newdash/.internal/copySymbols.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var copyObject_1 = __importDefault(require_copyObject());
    var getSymbols_1 = __importDefault(require_getSymbols());
    function copySymbols(source, object) {
      return (0, copyObject_1.default)(
        source,
        (0, getSymbols_1.default)(source),
        object
      );
    }
    exports.default = copySymbols;
  },
});

// node_modules/@newdash/newdash/.internal/getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/@newdash/newdash/.internal/getSymbolsIn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var getSymbols_1 = __importDefault(require_getSymbols());
    function getSymbolsIn(object) {
      const result = [];
      while (object) {
        result.push(...(0, getSymbols_1.default)(object));
        object = Object.getPrototypeOf(Object(object));
      }
      return result;
    }
    exports.default = getSymbolsIn;
  },
});

// node_modules/@newdash/newdash/.internal/copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/@newdash/newdash/.internal/copySymbolsIn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var copyObject_1 = __importDefault(require_copyObject());
    var getSymbolsIn_1 = __importDefault(require_getSymbolsIn());
    function copySymbolsIn(source, object) {
      return (0, copyObject_1.default)(
        source,
        (0, getSymbolsIn_1.default)(source),
        object
      );
    }
    exports.default = copySymbolsIn;
  },
});

// node_modules/@newdash/newdash/.internal/getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/@newdash/newdash/.internal/getAllKeysIn.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var getSymbolsIn_1 = __importDefault(require_getSymbolsIn());
    function getAllKeysIn(object) {
      const result = [];
      for (const key in object) {
        result.push(key);
      }
      if (!Array.isArray(object)) {
        result.push(...(0, getSymbolsIn_1.default)(object));
      }
      return result;
    }
    exports.default = getAllKeysIn;
  },
});

// node_modules/@newdash/newdash/.internal/initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/@newdash/newdash/.internal/initCloneObject.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isPrototype_1 = __importDefault(require_isPrototype());
    function initCloneObject(object) {
      return typeof object.constructor === "function" &&
        !(0, isPrototype_1.default)(object)
        ? Object.create(Object.getPrototypeOf(object))
        : {};
    }
    exports.default = initCloneObject;
  },
});

// node_modules/@newdash/newdash/.internal/baseClone.js
var require_baseClone = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseClone.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = __importDefault(require_isArray());
    var isBuffer_1 = __importDefault(require_isBuffer());
    var isMap_1 = __importDefault(require_isMap());
    var isObject_1 = __importDefault(require_isObject());
    var isSet_1 = __importDefault(require_isSet());
    var keys_1 = __importDefault(require_keys());
    var keysIn_1 = __importDefault(require_keysIn());
    var arrayEach_1 = __importDefault(require_arrayEach());
    var assignValue_1 = __importDefault(require_assignValue());
    var baseAssign_1 = __importDefault(require_baseAssign());
    var baseAssignIn_1 = __importDefault(require_baseAssignIn());
    var cloneArrayBuffer_1 = __importDefault(require_cloneArrayBuffer());
    var cloneBuffer_1 = __importDefault(require_cloneBuffer());
    var cloneDataView_1 = __importDefault(require_cloneDataView());
    var cloneRegExp_1 = __importDefault(require_cloneRegExp());
    var cloneSymbol_1 = __importDefault(require_cloneSymbol());
    var cloneTypedArray_1 = __importDefault(require_cloneTypedArray());
    var copyArray_1 = __importDefault(require_copyArray());
    var copySymbols_1 = __importDefault(require_copySymbols());
    var copySymbolsIn_1 = __importDefault(require_copySymbolsIn());
    var getAllKeys_1 = __importDefault(require_getAllKeys());
    var getAllKeysIn_1 = __importDefault(require_getAllKeysIn());
    var getTag_1 = __importDefault(require_getTag());
    var GLOBAL_1 = require_GLOBAL();
    var initCloneObject_1 = __importDefault(require_initCloneObject());
    var Stack_1 = __importDefault(require_Stack());
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] =
      cloneableTags[arrayTag] =
      cloneableTags[arrayBufferTag] =
      cloneableTags[dataViewTag] =
      cloneableTags[boolTag] =
      cloneableTags[dateTag] =
      cloneableTags[float32Tag] =
      cloneableTags[float64Tag] =
      cloneableTags[int8Tag] =
      cloneableTags[int16Tag] =
      cloneableTags[int32Tag] =
      cloneableTags[mapTag] =
      cloneableTags[numberTag] =
      cloneableTags[objectTag] =
      cloneableTags[regexpTag] =
      cloneableTags[setTag] =
      cloneableTags[stringTag] =
      cloneableTags[symbolTag] =
      cloneableTags[uint8Tag] =
      cloneableTags[uint8ClampedTag] =
      cloneableTags[uint16Tag] =
      cloneableTags[uint32Tag] =
        true;
    cloneableTags[errorTag] = cloneableTags[weakMapTag] = false;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function initCloneByTag(object, tag, isDeep) {
      const Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return (0, cloneArrayBuffer_1.default)(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return (0, cloneDataView_1.default)(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return (0, cloneTypedArray_1.default)(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return (0, cloneRegExp_1.default)(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return (0, cloneSymbol_1.default)(object);
      }
    }
    function initCloneArray(array) {
      const { length } = array;
      const result = new array.constructor(length);
      if (
        length &&
        typeof array[0] === "string" &&
        hasOwnProperty.call(array, "index")
      ) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object
          ? customizer(value, key, object, stack)
          : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!(0, isObject_1.default)(value)) {
        return value;
      }
      var isArr = (0, isArray_1.default)(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return (0, copyArray_1.default)(value, result);
        }
      } else {
        var tag = (0, getTag_1.default)(value),
          isFunc = tag == GLOBAL_1.funcTag || tag == GLOBAL_1.genTag;
        if ((0, isBuffer_1.default)(value)) {
          return (0, cloneBuffer_1.default)(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result =
            isFlat || isFunc ? {} : (0, initCloneObject_1.default)(value);
          if (!isDeep) {
            return isFlat
              ? (0, copySymbolsIn_1.default)(
                  value,
                  (0, baseAssignIn_1.default)(result, value)
                )
              : (0, copySymbols_1.default)(
                  value,
                  (0, baseAssign_1.default)(result, value)
                );
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack_1.default());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if ((0, isSet_1.default)(value)) {
        value.forEach(function (subValue) {
          result.add(
            baseClone(subValue, bitmask, customizer, subValue, value, stack)
          );
        });
      } else if ((0, isMap_1.default)(value)) {
        value.forEach(function (subValue, key2) {
          result.set(
            key2,
            baseClone(subValue, bitmask, customizer, key2, value, stack)
          );
        });
      }
      var keysFunc = isFull
        ? isFlat
          ? getAllKeysIn_1.default
          : getAllKeys_1.default
        : isFlat
        ? keysIn_1.default
        : keys_1.default;
      var props = isArr ? void 0 : keysFunc(value);
      (0, arrayEach_1.default)(props || value, function (subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        (0,
        assignValue_1.default)(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    exports.default = baseClone;
  },
});

// node_modules/@newdash/newdash/iteratee.js
var require_iteratee = __commonJS({
  "node_modules/@newdash/newdash/iteratee.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseIteratee_1 = __importDefault(require_baseIteratee());
    var baseClone_1 = __importDefault(require_baseClone());
    var CLONE_DEEP_FLAG = 1;
    function iteratee(func) {
      return (0, baseIteratee_1.default)(
        typeof func == "function"
          ? func
          : (0, baseClone_1.default)(func, CLONE_DEEP_FLAG)
      );
    }
    exports.default = iteratee;
  },
});

// node_modules/@newdash/newdash/.internal/getIteratee.js
var require_getIteratee = __commonJS({
  "node_modules/@newdash/newdash/.internal/getIteratee.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getIteratee = void 0;
    var iteratee_1 = __importDefault(require_iteratee());
    var baseIteratee_1 = __importDefault(require_baseIteratee());
    function getIteratee() {
      var result = iteratee_1.default;
      result = result === iteratee_1.default ? baseIteratee_1.default : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }
    exports.getIteratee = getIteratee;
    exports.default = getIteratee;
  },
});

// node_modules/@newdash/newdash/map.js
var require_map = __commonJS({
  "node_modules/@newdash/newdash/map.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.map = void 0;
    var arrayMap_1 = __importDefault(require_arrayMap());
    var baseMap_1 = __importDefault(require_baseMap());
    var getIteratee_1 = __importDefault(require_getIteratee());
    var isArray_1 = __importDefault(require_isArray());
    function map2(collection, iteratee) {
      const oIteratee = (0, getIteratee_1.default)(iteratee, 3);
      if ((0, isArray_1.default)(collection)) {
        return (0, arrayMap_1.default)(collection, oIteratee);
      }
      return (0, baseMap_1.default)(collection, oIteratee);
    }
    exports.map = map2;
    exports.default = map2;
  },
});

// node_modules/@newdash/newdash/forEach.js
var require_forEach = __commonJS({
  "node_modules/@newdash/newdash/forEach.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.forEach = void 0;
    var arrayEach_1 = __importDefault(require_arrayEach());
    var baseEach_1 = __importDefault(require_baseEach());
    function forEach2(collection, iteratee) {
      const func = Array.isArray(collection)
        ? arrayEach_1.default
        : baseEach_1.default;
      return func(collection, iteratee);
    }
    exports.forEach = forEach2;
    exports.default = forEach2;
  },
});

// node_modules/@newdash/newdash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/@newdash/newdash/isPlainObject.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPlainObject = void 0;
    var getTag_1 = __importDefault(require_getTag());
    var isObjectLike_1 = __importDefault(require_isObjectLike());
    var objectTag = "[object Object]";
    var objectCtorString = Function.prototype.toString.call(Object);
    function isPlainObject2(value) {
      if (
        !(0, isObjectLike_1.default)(value) ||
        (0, getTag_1.default)(value) != objectTag
      ) {
        return false;
      }
      const proto = Object.getPrototypeOf(value);
      if (proto === null) {
        return true;
      }
      const Ctor =
        Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return (
        typeof Ctor == "function" &&
        Ctor instanceof Ctor &&
        Function.prototype.toString.call(Ctor) == objectCtorString
      );
    }
    exports.isPlainObject = isPlainObject2;
    exports.default = isPlainObject2;
  },
});

// node_modules/@odata/metadata/lib/enum.js
var require_enum = __commonJS({
  "node_modules/@odata/metadata/lib/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrimitiveTypeEnum = void 0;
    var PrimitiveTypeEnum;
    (function (PrimitiveTypeEnum2) {
      PrimitiveTypeEnum2["Binary"] = "Edm.Binary";
      PrimitiveTypeEnum2["Boolean"] = "Edm.Boolean";
      PrimitiveTypeEnum2["Byte"] = "Edm.Byte";
      PrimitiveTypeEnum2["Date"] = "Edm.Date";
      PrimitiveTypeEnum2["DateTime"] = "Edm.DateTime";
      PrimitiveTypeEnum2["DateTimeOffset"] = "Edm.DateTimeOffset";
      PrimitiveTypeEnum2["Decimal"] = "Edm.Decimal";
      PrimitiveTypeEnum2["Double"] = "Edm.Double";
      PrimitiveTypeEnum2["Duration"] = "Edm.Duration";
      PrimitiveTypeEnum2["Guid"] = "Edm.Guid";
      PrimitiveTypeEnum2["Int16"] = "Edm.Int16";
      PrimitiveTypeEnum2["Int32"] = "Edm.Int32";
      PrimitiveTypeEnum2["Int64"] = "Edm.Int64";
      PrimitiveTypeEnum2["SByte"] = "Edm.SByte";
      PrimitiveTypeEnum2["Single"] = "Edm.Single";
      PrimitiveTypeEnum2["Stream"] = "Edm.Stream";
      PrimitiveTypeEnum2["String"] = "Edm.String";
      PrimitiveTypeEnum2["TimeOfDay"] = "Edm.TimeOfDay";
      PrimitiveTypeEnum2["Geography"] = "Edm.Geography";
      PrimitiveTypeEnum2["GeographyPoint"] = "Edm.GeographyPoint";
      PrimitiveTypeEnum2["GeographyLineString"] = "Edm.GeographyLineString";
      PrimitiveTypeEnum2["GeographyPolygon"] = "Edm.GeographyPolygon";
      PrimitiveTypeEnum2["GeographyMultiPoint"] = "Edm.GeographyMultiPoint";
      PrimitiveTypeEnum2["GeographyMultiLineString"] =
        "Edm.GeographyMultiLineString";
      PrimitiveTypeEnum2["GeographyMultiPolygon"] = "Edm.GeographyMultiPolygon";
      PrimitiveTypeEnum2["GeographyCollection"] = "Edm.GeographyCollection";
      PrimitiveTypeEnum2["Geometry"] = "Edm.Geometry";
      PrimitiveTypeEnum2["GeometryPoint"] = "Edm.GeometryPoint";
      PrimitiveTypeEnum2["GeometryLineString"] = "Edm.GeometryLineString";
      PrimitiveTypeEnum2["GeometryPolygon"] = "Edm.GeometryPolygon";
      PrimitiveTypeEnum2["GeometryMultiPoint"] = "Edm.GeometryMultiPoint";
      PrimitiveTypeEnum2["GeometryMultiLineString"] =
        "Edm.GeometryMultiLineString";
      PrimitiveTypeEnum2["GeometryMultiPolygon"] = "Edm.GeometryMultiPolygon";
      PrimitiveTypeEnum2["GeometryCollection"] = "Edm.GeometryCollection";
    })(
      (PrimitiveTypeEnum =
        exports.PrimitiveTypeEnum || (exports.PrimitiveTypeEnum = {}))
    );
  },
});

// node_modules/reflect-metadata/Reflect.js
var require_Reflect = __commonJS({
  "node_modules/reflect-metadata/Reflect.js"() {
    var Reflect2;
    (function (Reflect3) {
      (function (factory) {
        var root =
          typeof global === "object"
            ? global
            : typeof self === "object"
            ? self
            : typeof this === "object"
            ? this
            : Function("return this;")();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        } else {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
          return function (key, value) {
            if (typeof target[key] !== "function") {
              Object.defineProperty(target, key, {
                configurable: true,
                writable: true,
                value,
              });
            }
            if (previous) previous(key, value);
          };
        }
      })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol =
          supportsSymbol && typeof Symbol.toPrimitive !== "undefined"
            ? Symbol.toPrimitive
            : "@@toPrimitive";
        var iteratorSymbol =
          supportsSymbol && typeof Symbol.iterator !== "undefined"
            ? Symbol.iterator
            : "@@iterator";
        var supportsCreate = typeof Object.create === "function";
        var supportsProto = { __proto__: [] } instanceof Array;
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
          // create an object in dictionary mode (a.k.a. "slow" mode in v8)
          create: supportsCreate
            ? function () {
                return MakeDictionary(/* @__PURE__ */ Object.create(null));
              }
            : supportsProto
            ? function () {
                return MakeDictionary({ __proto__: null });
              }
            : function () {
                return MakeDictionary({});
              },
          has: downLevel
            ? function (map2, key) {
                return hasOwn.call(map2, key);
              }
            : function (map2, key) {
                return key in map2;
              },
          get: downLevel
            ? function (map2, key) {
                return hasOwn.call(map2, key) ? map2[key] : void 0;
              }
            : function (map2, key) {
                return map2[key];
              },
        };
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill =
          typeof process === "object" &&
          process.env &&
          process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map =
          !usePolyfill &&
          typeof Map === "function" &&
          typeof Map.prototype.entries === "function"
            ? Map
            : CreateMapPolyfill();
        var _Set =
          !usePolyfill &&
          typeof Set === "function" &&
          typeof Set.prototype.entries === "function"
            ? Set
            : CreateSetPolyfill();
        var _WeakMap =
          !usePolyfill && typeof WeakMap === "function"
            ? WeakMap
            : CreateWeakMapPolyfill();
        var Metadata = new _WeakMap();
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators)) throw new TypeError();
            if (!IsObject(target)) throw new TypeError();
            if (
              !IsObject(attributes) &&
              !IsUndefined(attributes) &&
              !IsNull(attributes)
            )
              throw new TypeError();
            if (IsNull(attributes)) attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(
              decorators,
              target,
              propertyKey,
              attributes
            );
          } else {
            if (!IsArray(decorators)) throw new TypeError();
            if (!IsConstructor(target)) throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        exporter("decorate", decorate);
        function metadata2(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
              throw new TypeError();
            OrdinaryDefineOwnMetadata(
              metadataKey,
              metadataValue,
              target,
              propertyKey
            );
          }
          return decorator;
        }
        exporter("metadata", metadata2);
        function defineMetadata(
          metadataKey,
          metadataValue,
          target,
          propertyKey
        ) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(
            metadataKey,
            metadataValue,
            target,
            propertyKey
          );
        }
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) {
            throw new TypeError();
          }
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          var metadataMap = GetOrCreateMetadataMap(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return false;
          if (!metadataMap.delete(metadataKey)) return false;
          if (metadataMap.size > 0) return true;
          var targetMetadata = Metadata.get(target);
          targetMetadata.delete(propertyKey);
          if (targetMetadata.size > 0) return true;
          Metadata.delete(target);
          return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated)) throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated)) throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = Metadata.get(O);
          if (IsUndefined(targetMetadata)) {
            if (!Create) return void 0;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create) return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
          }
          return metadataMap;
        }
        function OrdinaryHasMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2) return true;
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
          return false;
        }
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
          return void 0;
        }
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryMetadataKeys(O, P) {
          var ownKeys = OrdinaryOwnMetadataKeys(O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (parent === null) return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P);
          if (parentKeys.length <= 0) return ownKeys;
          if (ownKeys.length <= 0) return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (
            var _a = 0, parentKeys_1 = parentKeys;
            _a < parentKeys_1.length;
            _a++
          ) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        function OrdinaryOwnMetadataKeys(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function Type(x) {
          if (x === null) return 1;
          switch (typeof x) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x) {
          return x === void 0;
        }
        function IsNull(x) {
          return x === null;
        }
        function IsSymbol(x) {
          return typeof x === "symbol";
        }
        function IsObject(x) {
          return typeof x === "object" ? x !== null : typeof x === "function";
        }
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint =
            PreferredType === 3
              ? "string"
              : PreferredType === 5
              ? "number"
              : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result)) throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(
            input,
            hint === "default" ? "number" : hint
          );
        }
        function OrdinaryToPrimitive(O, hint) {
          if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O);
              if (!IsObject(result)) return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result)) return result;
            }
          } else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result)) return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O);
              if (!IsObject(result)) return result;
            }
          }
          throw new TypeError();
        }
        function ToBoolean(argument) {
          return !!argument;
        }
        function ToString(argument) {
          return "" + argument;
        }
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key)) return key;
          return ToString(key);
        }
        function IsArray(argument) {
          return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
            ? argument instanceof Array
            : Object.prototype.toString.call(argument) === "[object Array]";
        }
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function GetMethod(V, P) {
          var func = V[P];
          if (func === void 0 || func === null) return void 0;
          if (!IsCallable(func)) throw new TypeError();
          return func;
        }
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method)) throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator)) throw new TypeError();
          return iterator;
        }
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        function IteratorClose(iterator) {
          var f = iterator["return"];
          if (f) f.call(iterator);
        }
        function OrdinaryGetPrototypeOf(O) {
          var proto = Object.getPrototypeOf(O);
          if (typeof O !== "function" || O === functionPrototype) return proto;
          if (proto !== functionPrototype) return proto;
          var prototype = O.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function") return proto;
          if (constructor === O) return proto;
          return constructor;
        }
        function CreateMapPolyfill() {
          var cacheSentinel = {};
          var arraySentinel = [];
          var MapIterator =
            /** @class */
            (function () {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function () {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function () {
                return this;
              };
              MapIterator2.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(
                    this._keys[index],
                    this._values[index]
                  );
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function (error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function (value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            })();
          return (
            /** @class */
            (function () {
              function Map2() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map2.prototype, "size", {
                get: function () {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true,
              });
              Map2.prototype.has = function (key) {
                return (
                  this._find(
                    key,
                    /*insert*/
                    false
                  ) >= 0
                );
              };
              Map2.prototype.get = function (key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                return index >= 0 ? this._values[index] : void 0;
              };
              Map2.prototype.set = function (key, value) {
                var index = this._find(
                  key,
                  /*insert*/
                  true
                );
                this._values[index] = value;
                return this;
              };
              Map2.prototype.delete = function (key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (key === this._cacheKey) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map2.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map2.prototype.keys = function () {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map2.prototype.values = function () {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map2.prototype.entries = function () {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map2.prototype["@@iterator"] = function () {
                return this.entries();
              };
              Map2.prototype[iteratorSymbol] = function () {
                return this.entries();
              };
              Map2.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                  this._cacheIndex = this._keys.indexOf((this._cacheKey = key));
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map2;
            })()
          );
          function getKey(key, _) {
            return key;
          }
          function getValue(_, value) {
            return value;
          }
          function getEntry(key, value) {
            return [key, value];
          }
        }
        function CreateSetPolyfill() {
          return (
            /** @class */
            (function () {
              function Set2() {
                this._map = new _Map();
              }
              Object.defineProperty(Set2.prototype, "size", {
                get: function () {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true,
              });
              Set2.prototype.has = function (value) {
                return this._map.has(value);
              };
              Set2.prototype.add = function (value) {
                return this._map.set(value, value), this;
              };
              Set2.prototype.delete = function (value) {
                return this._map.delete(value);
              };
              Set2.prototype.clear = function () {
                this._map.clear();
              };
              Set2.prototype.keys = function () {
                return this._map.keys();
              };
              Set2.prototype.values = function () {
                return this._map.values();
              };
              Set2.prototype.entries = function () {
                return this._map.entries();
              };
              Set2.prototype["@@iterator"] = function () {
                return this.keys();
              };
              Set2.prototype[iteratorSymbol] = function () {
                return this.keys();
              };
              return Set2;
            })()
          );
        }
        function CreateWeakMapPolyfill() {
          var UUID_SIZE = 16;
          var keys = HashMap.create();
          var rootKey = CreateUniqueKey();
          return (
            /** @class */
            (function () {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0
                  ? HashMap.get(table, this._key)
                  : void 0;
              };
              WeakMap2.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  true
                );
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function () {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            })()
          );
          function CreateUniqueKey() {
            var key;
            do key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
          }
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create) return void 0;
              Object.defineProperty(target, rootKey, {
                value: HashMap.create(),
              });
            }
            return target[rootKey];
          }
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
              buffer[i] = (Math.random() * 255) | 0;
            return buffer;
          }
          function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
              if (typeof crypto !== "undefined")
                return crypto.getRandomValues(new Uint8Array(size));
              if (typeof msCrypto !== "undefined")
                return msCrypto.getRandomValues(new Uint8Array(size));
              return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
          }
          function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            data[6] = (data[6] & 79) | 64;
            data[8] = (data[8] & 191) | 128;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
              var byte = data[offset];
              if (offset === 4 || offset === 6 || offset === 8) result += "-";
              if (byte < 16) result += "0";
              result += byte.toString(16).toLowerCase();
            }
            return result;
          }
        }
        function MakeDictionary(obj) {
          obj.__ = void 0;
          delete obj.__;
          return obj;
        }
      });
    })(Reflect2 || (Reflect2 = {}));
  },
});

// node_modules/@newdash/newdash/isUndefined.js
var require_isUndefined = __commonJS({
  "node_modules/@newdash/newdash/isUndefined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUndefined = void 0;
    function isUndefined(value) {
      return value === void 0;
    }
    exports.isUndefined = isUndefined;
    exports.default = isUndefined;
  },
});

// node_modules/@odata/metadata/lib/metacode.js
var require_metacode = __commonJS({
  "node_modules/@odata/metadata/lib/metacode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getJsonProperty =
      exports.jsonProperty =
      exports.typeArgument =
      exports.parseAs =
      exports.parse =
      exports.parseAttribute =
      exports.defaultValue =
      exports.defaultValueAttribute =
      exports.required =
      exports.ParseAttribute =
      exports.AttributeFunctionChain =
      exports.MemberAttribute =
        void 0;
    require_Reflect();
    var isUndefined_1 = require_isUndefined();
    var definitionPropName = "definition";
    var MemberAttribute = class {
      constructor(attributeName) {
        this.attributeName = attributeName;
      }
      registerMember(target, key) {
        const def = (target[definitionPropName] =
          target[definitionPropName] || {});
        const md = def.members || [];
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
          const decoratorValue = this.getDecoratorValue(target, key, value);
          target[definitionPropName][this.attributeName] =
            target[definitionPropName][this.attributeName] || {};
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
        return ((target[definitionPropName] || {})[attributeName] || {})[
          memberName
        ];
      }
    };
    exports.MemberAttribute = MemberAttribute;
    var AttributeFunctionChain = class {
      constructor(...steps) {
        this.steps = [];
        this.steps = steps;
      }
      invoke(definition, instance) {
        let result = definition;
        this.steps.forEach((fn) => {
          result = fn(result, instance);
        });
        return result;
      }
    };
    exports.AttributeFunctionChain = AttributeFunctionChain;
    var ParseAttribute = class extends MemberAttribute {
      constructor() {
        super("serialize");
      }
      getDecoratorValue(target, key, presentedValue) {
        if (!(0, isUndefined_1.isUndefined)(presentedValue)) {
          return presentedValue;
        }
        return new AttributeFunctionChain((d) => d[key]);
      }
    };
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
    var KEY_JSON_PROP = "KEY_JSON_PROP";
    var jsonProperty = function (propertyName, toJson) {
      return function (target, targetKey) {
        Reflect.defineMetadata(
          KEY_JSON_PROP,
          { propertyName, toJson },
          target,
          targetKey
        );
      };
    };
    exports.jsonProperty = jsonProperty;
    function getJsonProperty(target, targetKey) {
      return Reflect.getMetadata(KEY_JSON_PROP, target, targetKey);
    }
    exports.getJsonProperty = getJsonProperty;
  },
});

// node_modules/@odata/metadata/lib/edm.js
var require_edm = __commonJS({
  "node_modules/@odata/metadata/lib/edm.js"(exports) {
    "use strict";
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
    exports.Edm = void 0;
    var LRUMap_1 = require_LRUMap();
    var enum_1 = require_enum();
    var metacode = require_metacode();
    var { jsonProperty } = metacode;
    var Edm4;
    (function (Edm5) {
      class PrimitiveType {
        constructor(className) {
          this.className = className;
        }
        /**
         * @returns edm type code
         */
        toString() {
          return this.className;
        }
        /**
         * create value based current type
         *
         * @param value
         * @returns
         */
        createValue(value) {
          return new PrimitiveTypeValue(value, this);
        }
      }
      Edm5.PrimitiveType = PrimitiveType;
      class PrimitiveTypeValue {
        constructor(value, type) {
          this.value = value;
          this.type = type;
        }
        /**
         * get the primitive literal type
         *
         * @returns
         */
        getType() {
          return this.type;
        }
        getValue() {
          return this.value;
        }
      }
      Edm5.PrimitiveTypeValue = PrimitiveTypeValue;
      Edm5.Binary = new PrimitiveType(enum_1.PrimitiveTypeEnum.Binary);
      Edm5.Boolean = new PrimitiveType(enum_1.PrimitiveTypeEnum.Boolean);
      Edm5.Byte = new PrimitiveType("Edm.Byte");
      Edm5.Date = new PrimitiveType("Edm.Date");
      Edm5.DateTime = new PrimitiveType("Edm.DateTime");
      Edm5.DateTimeOffset = new PrimitiveType("Edm.DateTimeOffset");
      Edm5.Decimal = new PrimitiveType("Edm.Decimal");
      Edm5.Double = new PrimitiveType("Edm.Double");
      Edm5.Duration = new PrimitiveType("Edm.Duration");
      Edm5.Guid = new PrimitiveType("Edm.Guid");
      Edm5.Int16 = new PrimitiveType("Edm.Int16");
      Edm5.Int32 = new PrimitiveType("Edm.Int32");
      Edm5.Int64 = new PrimitiveType("Edm.Int64");
      Edm5.SByte = new PrimitiveType("Edm.SByte");
      Edm5.Single = new PrimitiveType("Edm.Single");
      Edm5.Stream = new PrimitiveType("Edm.Stream");
      Edm5.String = new PrimitiveType("Edm.String");
      Edm5.TimeOfDay = new PrimitiveType("Edm.TimeOfDay");
      Edm5.Geography = new PrimitiveType("Edm.Geography");
      Edm5.GeographyPoint = new PrimitiveType("Edm.GeographyPoint");
      Edm5.GeographyLineString = new PrimitiveType("Edm.GeographyLineString");
      Edm5.GeographyPolygon = new PrimitiveType("Edm.GeographyPolygon");
      Edm5.GeographyMultiPoint = new PrimitiveType("Edm.GeographyMultiPoint");
      Edm5.GeographyMultiLineString = new PrimitiveType(
        "Edm.GeographyMultiLineString"
      );
      Edm5.GeographyMultiPolygon = new PrimitiveType(
        "Edm.GeographyMultiPolygon"
      );
      Edm5.GeographyCollection = new PrimitiveType("Edm.GeographyCollection");
      Edm5.Geometry = new PrimitiveType("Edm.Geometry");
      Edm5.GeometryPoint = new PrimitiveType("Edm.GeometryPoint");
      Edm5.GeometryLineString = new PrimitiveType("Edm.GeometryLineString");
      Edm5.GeometryPolygon = new PrimitiveType("Edm.GeometryPolygon");
      Edm5.GeometryMultiPoint = new PrimitiveType("Edm.GeometryMultiPoint");
      Edm5.GeometryMultiLineString = new PrimitiveType(
        "Edm.GeometryMultiLineString"
      );
      Edm5.GeometryMultiPolygon = new PrimitiveType("Edm.GeometryMultiPolygon");
      Edm5.GeometryCollection = new PrimitiveType("Edm.GeometryCollection");
      const MemberAttribute = metacode.MemberAttribute;
      const parse = metacode.parse;
      const required2 = metacode.required;
      const defaultValue = metacode.defaultValue;
      const parseAs = metacode.parseAs;
      const AttributeFunctionChain = metacode.AttributeFunctionChain;
      const mapArray = (sourceField, factory) =>
        new metacode.AttributeFunctionChain(
          (d, i) => d[sourceField],
          (props, i) => (Array.isArray(props) ? props : props ? [props] : []),
          (props, i) => props.map((prop) => factory(prop, i))
        );
      const primitiveAnnotationValue = (sourceField) =>
        new metacode.AttributeFunctionChain((d, i) => {
          if (
            d["collection"] &&
            d["collection"][0] &&
            Array.isArray(d["collection"][0][sourceField]) &&
            !d[sourceField]
          ) {
            return d["collection"][0][sourceField].map((x) => x.text);
          }
          const props = d[sourceField];
          if (Array.isArray(props)) {
            return props.filter((x) => "text" in x).map((x) => x.text)[0];
          }
          return props;
        });
      const annotationTypeSelector = (source) => {
        for (const i in Edm5.AnnotationTypes) {
          if (
            i in source ||
            (source["collection"] &&
              source["collection"][0] &&
              i in source["collection"][0])
          ) {
            return Edm5.AnnotationTypes[i];
          }
        }
        return Annotation;
      };
      class EdmItemBase {
        constructor(definition, parent) {
          this.parent = parent;
          definition && this.loadFrom(definition);
        }
        _tryGetCache(key, producer) {
          if (this._cache === void 0) {
            this._cache = new LRUMap_1.LRUMap();
          }
          if (!this._cache.has(key)) {
            this._cache.set(key, producer());
          }
          return this._cache.get(key);
        }
        getAnnotationsByTerm(term) {
          return this._tryGetCache(`_type_${term}_`, () => {
            var _a, _b;
            const rt = [];
            (_b =
              (_a = this["annotations"]) === null || _a === void 0
                ? void 0
                : _a.map) === null || _b === void 0
              ? void 0
              : _b.call(_a, (annotation) => {
                  if (annotation.term === term) {
                    rt.push(rt);
                  }
                });
            return rt;
          });
        }
        loadFrom(definition) {
          const proto = Object.getPrototypeOf(this);
          MemberAttribute.getMembers(proto).forEach((membername) => {
            const parser = MemberAttribute.getAttributeValue(
              proto,
              membername,
              "serialize"
            );
            if (parser) {
              const v = parser.invoke(definition, this);
              this[membername] = v;
            }
          });
        }
      }
      Edm5.EdmItemBase = EdmItemBase;
      class Property extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Property.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Property.prototype,
        "type",
        void 0
      );
      __decorate(
        [parse, defaultValue(true), __metadata("design:type", Boolean)],
        Property.prototype,
        "nullable",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Property.prototype,
        "maxLength",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Property.prototype,
        "precision",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Property.prototype,
        "scale",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        Property.prototype,
        "unicode",
        void 0
      );
      __decorate(
        [parse, defaultValue(0), __metadata("design:type", Number)],
        Property.prototype,
        "SRID",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Object)],
        Property.prototype,
        "defaultValue",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Object)],
        Property.prototype,
        "concurrencyMode",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Property.prototype,
        "annotations",
        void 0
      );
      Edm5.Property = Property;
      class NavigationProperty extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        NavigationProperty.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        NavigationProperty.prototype,
        "type",
        void 0
      );
      __decorate(
        [parse, defaultValue(true), __metadata("design:type", Boolean)],
        NavigationProperty.prototype,
        "nullable",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        NavigationProperty.prototype,
        "partner",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        NavigationProperty.prototype,
        "containsTarget",
        void 0
      );
      __decorate(
        [
          jsonProperty("referentialConstraint"),
          parseAs(
            mapArray(
              "referentialConstraint",
              (prop, i) => new ReferentialConstraint(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        NavigationProperty.prototype,
        "referentialConstraints",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        NavigationProperty.prototype,
        "annotations",
        void 0
      );
      Edm5.NavigationProperty = NavigationProperty;
      class ReferentialConstraint extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        ReferentialConstraint.prototype,
        "property",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        ReferentialConstraint.prototype,
        "referencedProperty",
        void 0
      );
      Edm5.ReferentialConstraint = ReferentialConstraint;
      class PropertyRef extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        PropertyRef.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        PropertyRef.prototype,
        "alias",
        void 0
      );
      Edm5.PropertyRef = PropertyRef;
      class Key extends EdmItemBase {}
      __decorate(
        [
          jsonProperty("propertyRef"),
          parseAs(
            mapArray("propertyRef", (prop, i) => new PropertyRef(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        Key.prototype,
        "propertyRefs",
        void 0
      );
      Edm5.Key = Key;
      class EntityType extends EdmItemBase {
        getPropertyByName(propertyName) {
          return this._tryGetCache(`_prop_${propertyName}_`, () => {
            for (const property of this.properties) {
              if (property.name === propertyName) {
                return property;
              }
              return null;
            }
          });
        }
      }
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        EntityType.prototype,
        "name",
        void 0
      );
      __decorate(
        [
          parseAs(
            new AttributeFunctionChain(
              (d, i) => d.key,
              (props, i) => (props !== null && props !== void 0 ? props : []),
              (props, i) => {
                var _a;
                return (_a =
                  props === null || props === void 0 ? void 0 : props.map) ===
                  null || _a === void 0
                  ? void 0
                  : _a.call(props, (prop) => new Key(prop, i));
              },
              (props) =>
                props === null || props === void 0 ? void 0 : props[0]
            )
          ),
          jsonProperty("key", (instance) => [instance.key]),
          __metadata("design:type", Key),
        ],
        EntityType.prototype,
        "key",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        EntityType.prototype,
        "baseType",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        EntityType.prototype,
        "abstract",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        EntityType.prototype,
        "openType",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        EntityType.prototype,
        "hasStream",
        void 0
      );
      __decorate(
        [
          jsonProperty("property"),
          parseAs(mapArray("property", (prop, i) => new Property(prop, i))),
          __metadata("design:type", Array),
        ],
        EntityType.prototype,
        "properties",
        void 0
      );
      __decorate(
        [
          jsonProperty("navigationProperty"),
          parseAs(
            mapArray(
              "navigationProperty",
              (prop, i) => new NavigationProperty(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        EntityType.prototype,
        "navigationProperties",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        EntityType.prototype,
        "annotations",
        void 0
      );
      Edm5.EntityType = EntityType;
      class ComplexType extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        ComplexType.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        ComplexType.prototype,
        "baseType",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        ComplexType.prototype,
        "abstract",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        ComplexType.prototype,
        "openType",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        ComplexType.prototype,
        "hasStream",
        void 0
      );
      __decorate(
        [
          jsonProperty("property"),
          parseAs(mapArray("property", (prop, i) => new Property(prop, i))),
          __metadata("design:type", Array),
        ],
        ComplexType.prototype,
        "properties",
        void 0
      );
      __decorate(
        [
          jsonProperty("navigationProperty"),
          parseAs(
            mapArray(
              "navigationProperty",
              (prop, i) => new NavigationProperty(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        ComplexType.prototype,
        "navigationProperties",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        ComplexType.prototype,
        "annotations",
        void 0
      );
      Edm5.ComplexType = ComplexType;
      class Parameter extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Parameter.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Parameter.prototype,
        "type",
        void 0
      );
      __decorate(
        [parse, defaultValue(true), __metadata("design:type", Boolean)],
        Parameter.prototype,
        "nullable",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Parameter.prototype,
        "maxLength",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Parameter.prototype,
        "precision",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Parameter.prototype,
        "scale",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        Parameter.prototype,
        "unicode",
        void 0
      );
      __decorate(
        [parse, defaultValue(0), __metadata("design:type", Number)],
        Parameter.prototype,
        "SRID",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Parameter.prototype,
        "annotations",
        void 0
      );
      Edm5.Parameter = Parameter;
      class ReturnType extends EdmItemBase {}
      __decorate(
        [parse, __metadata("design:type", String)],
        ReturnType.prototype,
        "type",
        void 0
      );
      __decorate(
        [parse, defaultValue(true), __metadata("design:type", Boolean)],
        ReturnType.prototype,
        "nullable",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        ReturnType.prototype,
        "annotations",
        void 0
      );
      Edm5.ReturnType = ReturnType;
      class Invokable extends EdmItemBase {}
      Edm5.Invokable = Invokable;
      class Action extends Invokable {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Action.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        Action.prototype,
        "isBound",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        Action.prototype,
        "entitySetPath",
        void 0
      );
      __decorate(
        [
          jsonProperty("parameter"),
          parseAs(mapArray("parameter", (prop, i) => new Parameter(prop, i))),
          __metadata("design:type", Array),
        ],
        Action.prototype,
        "parameters",
        void 0
      );
      __decorate(
        [
          parseAs(
            new AttributeFunctionChain(
              (d, i) => d.returnType,
              (rt, i) => new ReturnType(rt, i)
            )
          ),
          __metadata("design:type", ReturnType),
        ],
        Action.prototype,
        "returnType",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Action.prototype,
        "annotations",
        void 0
      );
      Edm5.Action = Action;
      class Function2 extends Invokable {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
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
          jsonProperty("parameter"),
          parseAs(mapArray("parameter", (prop, i) => new Parameter(prop, i))),
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
              (d, i) => d.returnType,
              (rt, i) => new ReturnType(rt, i)
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
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Function2.prototype,
        "annotations",
        void 0
      );
      Edm5.Function = Function2;
      class Member extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Member.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        Member.prototype,
        "value",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Member.prototype,
        "annotations",
        void 0
      );
      Edm5.Member = Member;
      class EnumType extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        EnumType.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        EnumType.prototype,
        "namespace",
        void 0
      );
      __decorate(
        [
          parse,
          defaultValue(Edm5.Int32),
          __metadata("design:type", PrimitiveType),
        ],
        EnumType.prototype,
        "underlyingType",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        EnumType.prototype,
        "isFlags",
        void 0
      );
      __decorate(
        [
          jsonProperty("member"),
          parseAs(mapArray("member", (prop, i) => new Member(prop, i))),
          __metadata("design:type", Array),
        ],
        EnumType.prototype,
        "members",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        EnumType.prototype,
        "annotations",
        void 0
      );
      Edm5.EnumType = EnumType;
      class EntitySet extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        EntitySet.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        EntitySet.prototype,
        "entityType",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        EntitySet.prototype,
        "annotations",
        void 0
      );
      Edm5.EntitySet = EntitySet;
      class ActionImport extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        ActionImport.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        ActionImport.prototype,
        "action",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        ActionImport.prototype,
        "annotations",
        void 0
      );
      Edm5.ActionImport = ActionImport;
      class FunctionImport extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        FunctionImport.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        FunctionImport.prototype,
        "function",
        void 0
      );
      __decorate(
        [parse, defaultValue(false), __metadata("design:type", Boolean)],
        FunctionImport.prototype,
        "includeInServiceDocument",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        FunctionImport.prototype,
        "annotations",
        void 0
      );
      Edm5.FunctionImport = FunctionImport;
      class EntityContainer extends EdmItemBase {}
      __decorate(
        [parse, __metadata("design:type", String)],
        EntityContainer.prototype,
        "name",
        void 0
      );
      __decorate(
        [
          jsonProperty("entitySet"),
          parseAs(mapArray("entitySet", (prop, i) => new EntitySet(prop, i))),
          __metadata("design:type", Array),
        ],
        EntityContainer.prototype,
        "entitySets",
        void 0
      );
      __decorate(
        [
          jsonProperty("actionImport"),
          parseAs(
            mapArray("actionImport", (prop, i) => new ActionImport(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        EntityContainer.prototype,
        "actionImports",
        void 0
      );
      __decorate(
        [
          jsonProperty("functionImport"),
          parseAs(
            mapArray("functionImport", (prop, i) => new FunctionImport(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        EntityContainer.prototype,
        "functionImports",
        void 0
      );
      Edm5.EntityContainer = EntityContainer;
      class TypeDefinition extends EdmItemBase {}
      __decorate(
        [parse, __metadata("design:type", String)],
        TypeDefinition.prototype,
        "name",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", PrimitiveType)],
        TypeDefinition.prototype,
        "underlyingType",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        TypeDefinition.prototype,
        "maxLength",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Boolean)],
        TypeDefinition.prototype,
        "unicode",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        TypeDefinition.prototype,
        "precision",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", Number)],
        TypeDefinition.prototype,
        "scale",
        void 0
      );
      __decorate(
        [parse, defaultValue(0), __metadata("design:type", Number)],
        TypeDefinition.prototype,
        "SRID",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        TypeDefinition.prototype,
        "annotations",
        void 0
      );
      Edm5.TypeDefinition = TypeDefinition;
      class Schema extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Schema.prototype,
        "namespace",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        Schema.prototype,
        "alias",
        void 0
      );
      __decorate(
        [
          jsonProperty("enumType"),
          parseAs(mapArray("enumType", (prop, i) => new EnumType(prop, i))),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "enumTypes",
        void 0
      );
      __decorate(
        [
          jsonProperty("typeDefinition"),
          parseAs(
            mapArray("typeDefinition", (prop, i) => new TypeDefinition(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "typeDefinitions",
        void 0
      );
      __decorate(
        [
          jsonProperty("complexType"),
          parseAs(
            mapArray("complexType", (prop, i) => new ComplexType(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "complexTypes",
        void 0
      );
      __decorate(
        [
          jsonProperty("entityType"),
          parseAs(mapArray("entityType", (prop, i) => new EntityType(prop, i))),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "entityTypes",
        void 0
      );
      __decorate(
        [
          jsonProperty("action"),
          parseAs(mapArray("action", (prop, i) => new Action(prop, i))),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "actions",
        void 0
      );
      __decorate(
        [
          jsonProperty("function"),
          parseAs(
            mapArray("function", (prop, i) => new Edm5.Function(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "functions",
        void 0
      );
      __decorate(
        [
          jsonProperty("entityContainer"),
          parseAs(
            mapArray(
              "entityContainer",
              (prop, i) => new Edm5.EntityContainer(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "entityContainer",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotations"),
          parseAs(
            mapArray("annotations", (prop, i) => new Edm5.Annotations(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        Schema.prototype,
        "annotations",
        void 0
      );
      Edm5.Schema = Schema;
      class DataServices extends EdmItemBase {}
      __decorate(
        [
          jsonProperty("schema"),
          parseAs(mapArray("schema", (prop, i) => new Schema(prop, i))),
          __metadata("design:type", Array),
        ],
        DataServices.prototype,
        "schemas",
        void 0
      );
      Edm5.DataServices = DataServices;
      class Reference extends EdmItemBase {}
      __decorate(
        [parse, __metadata("design:type", String)],
        Reference.prototype,
        "uri",
        void 0
      );
      __decorate(
        [
          jsonProperty("include"),
          parseAs(
            mapArray("include", (prop, i) => new ReferenceInclude(prop, i))
          ),
          __metadata("design:type", Array),
        ],
        Reference.prototype,
        "includes",
        void 0
      );
      Edm5.Reference = Reference;
      class ReferenceInclude extends EdmItemBase {}
      __decorate(
        [parse, __metadata("design:type", String)],
        ReferenceInclude.prototype,
        "namespace",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        ReferenceInclude.prototype,
        "alias",
        void 0
      );
      Edm5.ReferenceInclude = ReferenceInclude;
      class Edmx extends EdmItemBase {
        constructor() {
          super(...arguments);
          this.version = "4.0";
        }
      }
      __decorate(
        [
          parseAs(
            new AttributeFunctionChain(
              (edm) => new Edm5.DataServices(edm.dataServices)
            )
          ),
          __metadata("design:type", DataServices),
        ],
        Edmx.prototype,
        "dataServices",
        void 0
      );
      __decorate(
        [
          jsonProperty("reference"),
          parseAs(mapArray("reference", (prop, i) => new Reference(prop, i))),
          __metadata("design:type", Array),
        ],
        Edmx.prototype,
        "references",
        void 0
      );
      Edm5.Edmx = Edmx;
      class Annotations extends EdmItemBase {}
      __decorate(
        [parse, required2, __metadata("design:type", String)],
        Annotations.prototype,
        "target",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        Annotations.prototype,
        "qualifier",
        void 0
      );
      __decorate(
        [
          jsonProperty("annotation"),
          parseAs(
            mapArray(
              "annotation",
              (prop, i) => new (annotationTypeSelector(prop))(prop, i)
            )
          ),
          __metadata("design:type", Array),
        ],
        Annotations.prototype,
        "annotations",
        void 0
      );
      Edm5.Annotations = Annotations;
      class Annotation extends EdmItemBase {
        constructor() {
          super(...arguments);
          this.annotationType = "Unknown";
        }
      }
      __decorate(
        [parse, __metadata("design:type", String)],
        Annotation.prototype,
        "term",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        Annotation.prototype,
        "qualifier",
        void 0
      );
      __decorate(
        [parse, __metadata("design:type", String)],
        Annotation.prototype,
        "path",
        void 0
      );
      Edm5.Annotation = Annotation;
      class BinaryAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Binary";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("binary")),
          __metadata("design:type", Object),
        ],
        BinaryAnnotation.prototype,
        "binary",
        void 0
      );
      Edm5.BinaryAnnotation = BinaryAnnotation;
      class BoolAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Bool";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("bool")),
          __metadata("design:type", Object),
        ],
        BoolAnnotation.prototype,
        "bool",
        void 0
      );
      Edm5.BoolAnnotation = BoolAnnotation;
      class DateAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Date";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("date")),
          __metadata("design:type", Object),
        ],
        DateAnnotation.prototype,
        "date",
        void 0
      );
      Edm5.DateAnnotation = DateAnnotation;
      class DateTimeOffsetAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "DateTimeOffset";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("dateTimeOffset")),
          __metadata("design:type", Object),
        ],
        DateTimeOffsetAnnotation.prototype,
        "dateTimeOffset",
        void 0
      );
      Edm5.DateTimeOffsetAnnotation = DateTimeOffsetAnnotation;
      class DecimalAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Decimal";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("decimal")),
          __metadata("design:type", Object),
        ],
        DecimalAnnotation.prototype,
        "decimal",
        void 0
      );
      Edm5.DecimalAnnotation = DecimalAnnotation;
      class DurationAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Duration";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("duration")),
          __metadata("design:type", Object),
        ],
        DurationAnnotation.prototype,
        "duration",
        void 0
      );
      Edm5.DurationAnnotation = DurationAnnotation;
      class EnumMemberAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "EnumMember";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("enumMember")),
          __metadata("design:type", Object),
        ],
        EnumMemberAnnotation.prototype,
        "enumMember",
        void 0
      );
      Edm5.EnumMemberAnnotation = EnumMemberAnnotation;
      class FloatAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Float";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("float")),
          __metadata("design:type", Object),
        ],
        FloatAnnotation.prototype,
        "float",
        void 0
      );
      Edm5.FloatAnnotation = FloatAnnotation;
      class GuidAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Guid";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("guid")),
          __metadata("design:type", Object),
        ],
        GuidAnnotation.prototype,
        "guid",
        void 0
      );
      Edm5.GuidAnnotation = GuidAnnotation;
      class IntAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Int";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("int")),
          __metadata("design:type", Object),
        ],
        IntAnnotation.prototype,
        "int",
        void 0
      );
      Edm5.IntAnnotation = IntAnnotation;
      class StringAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "String";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("string")),
          __metadata("design:type", Object),
        ],
        StringAnnotation.prototype,
        "string",
        void 0
      );
      Edm5.StringAnnotation = StringAnnotation;
      class TimeOfDayAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "TimeOfDay";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("timeOfDay")),
          __metadata("design:type", Object),
        ],
        TimeOfDayAnnotation.prototype,
        "timeOfDay",
        void 0
      );
      Edm5.TimeOfDayAnnotation = TimeOfDayAnnotation;
      class PropertyPathAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "PropertyPath";
        }
        toJson() {
          var _a;
          return {
            term: this.annotationType,
            collection: [
              {
                propertyPath:
                  (_a = this.propertyPaths) === null || _a === void 0
                    ? void 0
                    : _a.map((s) => ({ text: s })),
              },
            ],
          };
        }
      }
      __decorate(
        [
          jsonProperty("propertyPath"),
          parseAs(primitiveAnnotationValue("propertyPath")),
          __metadata("design:type", Array),
        ],
        PropertyPathAnnotation.prototype,
        "propertyPaths",
        void 0
      );
      Edm5.PropertyPathAnnotation = PropertyPathAnnotation;
      class NavigationPropertyPathAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "NavigationPropertyPath";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("propertyPath")),
          __metadata("design:type", Object),
        ],
        NavigationPropertyPathAnnotation.prototype,
        "navigationPropertyPaths",
        void 0
      );
      Edm5.NavigationPropertyPathAnnotation = NavigationPropertyPathAnnotation;
      class AnnotationPathAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "AnnotationPath";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("annotationPath")),
          __metadata("design:type", Object),
        ],
        AnnotationPathAnnotation.prototype,
        "annotationPaths",
        void 0
      );
      Edm5.AnnotationPathAnnotation = AnnotationPathAnnotation;
      class NullAnnotation extends Annotation {
        constructor() {
          super(...arguments);
          this.annotationType = "Null";
        }
      }
      __decorate(
        [
          parseAs(primitiveAnnotationValue("null")),
          __metadata("design:type", Array),
        ],
        NullAnnotation.prototype,
        "null",
        void 0
      );
      Edm5.NullAnnotation = NullAnnotation;
      Edm5.AnnotationTypes = {
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
      Edm5.toAnnotationTypeKey = (value) => {
        for (const [key, type] of Object.entries(Edm5.AnnotationTypes)) {
          if (value instanceof type) {
            return key;
          }
        }
      };
    })((Edm4 = exports.Edm || (exports.Edm = {})));
  },
});

// node_modules/@odata/metadata/lib/service/defineEntities.js
var require_defineEntities = __commonJS({
  "node_modules/@odata/metadata/lib/service/defineEntities.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defineEntities = void 0;
    var defineEntities = (entityConfig) => {
      const annotations = {};
      const edmx = {
        dataServices: {
          schema: [
            {
              namespace: entityConfig.namespace,
              annotations: [],
              entityType:
                entityConfig.entities &&
                entityConfig.entities.map((e) => {
                  const def = {
                    name: e.name,
                    property: [],
                  };
                  e.keys &&
                    (def["key"] = [
                      { propertyRef: e.keys.map((k) => ({ name: k })) },
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
                      if (typeof a.value === "undefined" || a.value == null) {
                        return;
                      }
                      let target =
                        (entityConfig.namespace
                          ? `${entityConfig.namespace}.`
                          : "") + e.name;
                      if (a.property) {
                        target += `/${a.property}`;
                      }
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
                  const def = {
                    name: a.name,
                    isBound: void 0,
                    parameter: void 0,
                    returnType: void 0,
                  };
                  if ("isBound" in a) {
                    def.isBound = a.isBound;
                  }
                  if ("parameters" in a) {
                    def.parameter = a.parameters;
                  }
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
                  const def = {
                    name: a.name,
                    isBound: void 0,
                    parameter: void 0,
                    returnType: void 0,
                  };
                  if ("isBound" in a) {
                    def.isBound = a.isBound;
                  }
                  if ("parameters" in a) {
                    def.parameter = a.parameters;
                  }
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
                  entityConfig.entities.map((e) => ({
                    name: e.collectionName,
                    entityType:
                      (entityConfig.namespace
                        ? `${entityConfig.namespace}.`
                        : "") + e.name,
                  })),
                actionImport:
                  entityConfig.actions &&
                  entityConfig.actions
                    .filter((a) => !a.isBound)
                    .map((a) => {
                      const def = {
                        name: a.name,
                        action:
                          (entityConfig.namespace
                            ? `${entityConfig.namespace}.`
                            : "") + a.name,
                        entitySet: void 0,
                      };
                      if ("entitySet" in a) {
                        def.entitySet = a.entitySet;
                      }
                      return def;
                    }),
                functionImport:
                  entityConfig.functions &&
                  entityConfig.functions
                    .filter((a) => !a.isBound)
                    .map((a) => {
                      const def = {
                        name: a.name,
                        function:
                          (entityConfig.namespace
                            ? `${entityConfig.namespace}.`
                            : "") + a.name,
                        includeInServiceDocument: void 0,
                        entitySet: void 0,
                      };
                      if ("includeInServiceDocument" in a) {
                        def.includeInServiceDocument =
                          a.includeInServiceDocument;
                      }
                      if ("entitySet" in a) {
                        def.entitySet = a.entitySet;
                      }
                      return def;
                    }),
              },
            },
          ],
        },
      };
      entityConfig.entities &&
        entityConfig.entities.map((e) => {
          if (!e.computedKey || !e.keys || e.keys.length !== 1) {
            return;
          }
          const target = `${
            (entityConfig.namespace ? `${entityConfig.namespace}.` : "") +
            e.name
          }/${e.keys[0]}`;
          if (!annotations[target]) {
            annotations[target] = { target, annotation: [] };
          }
          annotations[target].annotation.push({
            term: "Org.OData.Core.V1.Computed",
            bool: "true",
          });
        });
      edmx.dataServices.schema[0].annotations = Object.keys(annotations).map(
        (a) => annotations[a]
      );
      return edmx;
    };
    exports.defineEntities = defineEntities;
  },
});

// node_modules/@odata/metadata/lib/service/JsonCreator.js
var require_JsonCreator = __commonJS({
  "node_modules/@odata/metadata/lib/service/JsonCreator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jsonStringify = void 0;
    var metacode_1 = require_metacode();
    function replaceObject(value) {
      if (typeof value === "object") {
        if (value.toJson !== void 0) {
          return value.toJson();
        }
        if (value instanceof Array) {
          if (value.length === 0) {
            return void 0;
          }
          return value.map(replaceObject);
        }
        const replaceKeys = [];
        Object.keys(value).forEach((key) => {
          if (key !== void 0 && key !== null) {
            const tmp = (0, metacode_1.getJsonProperty)(value, key);
            if (tmp !== void 0) {
              const { propertyName, toJson } = tmp;
              if (propertyName !== void 0) {
                replaceKeys.push({ from: key, to: propertyName, toJson });
              }
            }
          }
        });
        if (replaceKeys.length > 0) {
          const tmp = { ...value };
          replaceKeys.forEach(({ from, to, toJson }) => {
            if (to !== void 0) {
              if (toJson !== void 0) {
                tmp[to] = toJson(value);
              } else {
                tmp[to] = tmp[from];
              }
              if (from !== to) {
                delete tmp[from];
              }
            }
          });
          return tmp;
        }
        return value;
      }
      return value;
    }
    function replacer(key, value) {
      if (key === "parent") {
        return void 0;
      }
      return replaceObject(value);
    }
    function jsonStringify(object) {
      return JSON.stringify(object, replacer);
    }
    exports.jsonStringify = jsonStringify;
  },
});

// node_modules/@odata/metadata/lib/service/XmlCreator.js
var require_XmlCreator = __commonJS({
  "node_modules/@odata/metadata/lib/service/XmlCreator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Xml = void 0;
    var Xml;
    (function (Xml2) {
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
            if (!this.currentElement.PersistStarted) {
              this.persistNode(this.currentElement, true);
            }
          }
          const inheritedNamespaces = this.currentElement
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
          const key = attr.Namespace
            ? `${attr.Name}_${attr.Namespace.Name}`
            : attr.Name;
          this.currentElement.Attributes.push(key);
          this.currentElement.Attributes[key] = attr;
          if (
            attr.Namespace &&
            this.currentElement.InheritedNamespaces.indexOf(
              attr.Namespace.Name
            ) === -1 &&
            this.currentElement.Namespaces.indexOf(attr.Namespace.Name) === -1
          ) {
            this.currentElement.Namespaces.push(attr.Namespace.Name);
            this.namespaces[attr.Namespace.Name] = attr.Namespace;
          }
          return this;
        }
        addNamespace(namespace2) {
          if (
            this.currentElement.InheritedNamespaces.indexOf(namespace2.Name) ===
              -1 &&
            this.currentElement.Namespaces.indexOf(namespace2.Name) === -1
          ) {
            this.currentElement.Namespaces.push(namespace2.Name);
            this.namespaces[namespace2.Name] = namespace2;
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
          }
          return new XmlElement(name, namespaceOrName);
        }
        declareAttribute(namespaceOrName, name) {
          if (typeof namespaceOrName === "string") {
            return new XmlAttribute(namespaceOrName);
          }
          return new XmlAttribute(name, namespaceOrName);
        }
        persistNode(node, isInline) {
          if (!node.PersistStarted) {
            if (node.Element.Namespace) {
              const ns = node.Element.Namespace;
              this.xmlPart += `<${ns.Name}:${node.Element.Name}`;
            } else {
              this.xmlPart += `<${node.Element.Name}`;
            }
            for (let i = 0; i < node.Namespaces.length; i++) {
              const ns = this.namespaces[node.Namespaces[i]];
              this.xmlPart += ` xmlns:${ns.Name}="${ns.Schema}"`;
            }
            const attrs = node.Attributes;
            for (let i = 0; i < attrs.length; i++) {
              const attrName = node.Attributes[i];
              const attr = node.Attributes[attrName];
              if (attr.Namespace) {
                this.xmlPart += ` ${attr.Namespace.Name}:${attr.Name}="${attr.Value}"`;
              } else {
                this.xmlPart += ` ${attr.Name}="${attr.Value}"`;
              }
            }
            if (node.HasChild) {
              this.xmlPart += ">";
              node.PersistStarted = true;
            } else {
              if (isInline && !node.Text) {
                this.xmlPart += "/>";
              } else {
                this.xmlPart += `>${this.escapeText(node.Text)}`;
                if (node.Element.Namespace) {
                  const ns = node.Element.Namespace;
                  this.xmlPart += `</${ns.Name}:${node.Element.Name}>`;
                } else {
                  this.xmlPart += `</${node.Element.Name}>`;
                }
              }
            }
          } else {
            if (node.Element.Namespace) {
              const ns = node.Element.Namespace;
              this.xmlPart += `</${ns.Name}:${node.Element.Name}>`;
            } else {
              this.xmlPart += `</${node.Element.Name}>`;
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
    })((Xml = exports.Xml || (exports.Xml = {})));
  },
});

// node_modules/@odata/metadata/lib/service/xmlMetadata.js
var require_xmlMetadata = __commonJS({
  "node_modules/@odata/metadata/lib/service/xmlMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XmlMetadata = void 0;
    var edm_1 = require_edm();
    var XmlCreator_1 = require_XmlCreator();
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
          DateTimeOffset: {
            name: "DateTimeOffset",
            valueField: "dateTimeOffset",
          },
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
          AnnotationPath: {
            name: "AnnotationPath",
            valueField: "annotationPaths",
          },
          Null: {
            name: "Null",
            handler: (xml) => {
              const nullElement = xml.declareElement("Null");
              xml.startElement(nullElement);
              xml.endElementInline();
            },
          },
        };
        this.options = Object.assign(
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
        const xml = new XmlCreator_1.Xml.XmlCreator();
        let xmlResult = this.options.xmlHead;
        xml.startDocument();
        this.buildEdmx(xml, this.metadata);
        xml.endDocument();
        xmlResult += xml.getXmlString();
        return xmlResult;
      }
      buildEdmx(xml, edmx) {
        const ns = xml.declareNamespace(this.options.edmx, "edmx");
        const edmxElement = xml.declareElement(ns, "Edmx");
        const version = xml.declareAttribute("Version");
        xml
          .startElement(edmxElement)
          .addAttribute(version, edmx.version || this.options.edmxVersion);
        this.buildDataServices(xml, edmx.dataServices);
        xml.endElement();
      }
      buildDataServices(xml, dataservices) {
        const ns = xml.declareNamespace(this.options.edmx, "edmx");
        const dataservicesElement = xml.declareElement(ns, "DataServices");
        xml.startElement(dataservicesElement);
        this.buildSchema(xml, dataservices.schemas);
        xml.endElement();
      }
      buildSchema(xml, schemas) {
        schemas &&
          schemas.forEach((schema) => {
            const xmlns = xml.declareAttribute("xmlns");
            const schemaElement = xml.declareElement("Schema");
            const ns = xml.declareAttribute("Namespace");
            xml
              .startElement(schemaElement)
              .addAttribute(xmlns, this.options.namespace)
              .addAttribute(
                ns,
                schema.namespace || this.options.contextNamespace
              );
            if (schema.alias) {
              xml.addAttribute(xml.declareAttribute("Alias"), schema.alias);
            }
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
            const rootElement = xml.declareElement("TypeDefinition");
            const name = xml.declareAttribute("Name");
            xml
              .startElement(rootElement)
              .addAttribute(name, typeDefinition.name);
            if (typeDefinition.underlyingType) {
              xml.addAttribute(
                xml.declareAttribute("UnderlyingType"),
                typeDefinition.underlyingType
              );
            }
            this.buildAnnotations(xml, typeDefinition.annotations);
            xml.endElement();
          });
      }
      buildEnumTypes(xml, enumTypes) {
        enumTypes &&
          enumTypes.forEach((enumType) => {
            const rootElement = xml.declareElement("EnumType");
            const name = xml.declareAttribute("Name");
            xml.startElement(rootElement).addAttribute(name, enumType.name);
            if (enumType.namespace) {
              xml.addAttribute(
                xml.declareAttribute("Namespace"),
                enumType.namespace
              );
            }
            if (enumType.underlyingType) {
              xml.addAttribute(
                xml.declareAttribute("UnderlyingType"),
                enumType.underlyingType
              );
            }
            if (enumType.isFlags) {
              xml.addAttribute(
                xml.declareAttribute("IsFlags"),
                enumType.isFlags
              );
            }
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
        const rootElement = xml.declareElement(xmlElementName);
        const name = xml.declareAttribute("Name");
        xml.startElement(rootElement).addAttribute(name, type.name);
        if (type.baseType) {
          xml.addAttribute(xml.declareAttribute("BaseType"), type.baseType);
        }
        if (type.abstract) {
          xml.addAttribute(xml.declareAttribute("Abstract"), type.abstract);
        }
        if (type.openType) {
          xml.addAttribute(xml.declareAttribute("OpenType"), type.openType);
        }
        if (type.hasStream) {
          xml.addAttribute(xml.declareAttribute("HasStream"), type.hasStream);
        }
        if (type instanceof edm_1.Edm.EntityType) {
          this.buildTypeKeys(xml, type.key);
        }
        this.buildTypeProperties(xml, type.properties);
        this.buildTypeNavigationProperties(xml, type.navigationProperties);
        this.buildAnnotations(xml, type.annotations);
        xml.endElement();
      }
      buildTypeKeys(xml, key) {
        if (!key) {
          return;
        }
        const keyElement = xml.declareElement("Key");
        const propRef = xml.declareElement("PropertyRef");
        const name = xml.declareAttribute("Name");
        const keys = key.propertyRefs;
        if (keys.length > 0) {
          xml.startElement(keyElement);
          keys.forEach((keyDef) => {
            xml.startElement(propRef).addAttribute(name, keyDef.name);
            if (keyDef.alias) {
              xml.addAttribute(xml.declareAttribute("Alias"), keyDef.alias);
            }
            xml.endElementInline();
          });
          xml.endElement();
        }
      }
      buildTypeProperties(xml, properties) {
        properties &&
          properties.forEach((property) => {
            const propertyElement = xml.declareElement("Property");
            xml.startElement(propertyElement);
            this.buildAttributes(xml, property, this.typePropertyAttributes);
            this.buildAnnotations(xml, property.annotations);
            xml.endElementInline();
          });
      }
      buildTypeNavigationProperties(xml, navigationProperties) {
        navigationProperties &&
          navigationProperties.forEach((navigationProperty2) => {
            const navigationPropertyElement =
              xml.declareElement("NavigationProperty");
            xml.startElement(navigationPropertyElement);
            this.buildAttributes(
              xml,
              navigationProperty2,
              this.typeNavigationPropertyAttributes
            );
            this.buildNavPropertyReferentialConstraints(
              xml,
              navigationProperty2.referentialConstraints
            );
            this.buildAnnotations(xml, navigationProperty2.annotations);
            xml.endElementInline();
          });
      }
      buildNavPropertyReferentialConstraints(xml, referentialConstraints) {
        referentialConstraints &&
          referentialConstraints.forEach((referentialConstraint) => {
            const referentialConstraintElement = xml.declareElement(
              "ReferentialConstraint"
            );
            xml.startElement(referentialConstraintElement);
            if (referentialConstraint.property) {
              xml.addAttribute(
                xml.declareAttribute("Property"),
                referentialConstraint.property
              );
            }
            if (referentialConstraint.referencedProperty) {
              xml.addAttribute(
                xml.declareAttribute("ReferencedProperty"),
                referentialConstraint.referencedProperty
              );
            }
            xml.endElementInline();
          });
      }
      buildEnumMembers(xml, members) {
        members &&
          members.forEach((member) => {
            const memberElement = xml.declareElement("Member");
            xml.startElement(memberElement);
            this.buildAttributes(xml, member, this.typeMemberAttributes);
            this.buildAnnotations(xml, member.annotations);
            xml.endElementInline();
          });
      }
      buildAttributes(xml, object, mappings) {
        const attributes = mappings && Object.keys(mappings);
        object &&
          attributes &&
          attributes.forEach((prop) => {
            if (typeof object[prop] !== "undefined" && object[prop] !== null) {
              const attr = xml.declareAttribute(mappings[prop].name);
              xml.addAttribute(attr, object[prop].toString());
            }
          });
      }
      buildActions(xml, actions) {
        actions &&
          actions.forEach((action2) => {
            const actionElement = xml.declareElement("Action");
            const name = xml.declareAttribute("Name");
            xml.startElement(actionElement).addAttribute(name, action2.name);
            if (typeof action2.isBound !== "undefined") {
              xml.addAttribute(
                xml.declareAttribute("IsBound"),
                action2.isBound.toString()
              );
            }
            if (action2.entitySetPath) {
              xml.addAttribute(
                xml.declareAttribute("EntitySetPath"),
                action2.entitySetPath
              );
            }
            this.buildParameters(xml, action2.parameters);
            this.buildReturnType(xml, action2.returnType);
            this.buildAnnotations(xml, action2.annotations);
            xml.endElementInline();
          });
      }
      buildFunctions(xml, functions) {
        functions &&
          functions.forEach((func) => {
            const funcElement = xml.declareElement("Function");
            const name = xml.declareAttribute("Name");
            xml.startElement(funcElement).addAttribute(name, func.name);
            if (typeof func.isBound !== "undefined") {
              xml.addAttribute(
                xml.declareAttribute("IsBound"),
                func.isBound.toString()
              );
            }
            if (func.entitySetPath) {
              xml.addAttribute(
                xml.declareAttribute("EntitySetPath"),
                func.entitySetPath
              );
            }
            if (typeof func.isComposable !== "undefined") {
              xml.addAttribute(
                xml.declareAttribute("IsComposable"),
                func.isComposable.toString()
              );
            }
            this.buildParameters(xml, func.parameters);
            this.buildReturnType(xml, func.returnType);
            this.buildAnnotations(xml, func.annotations);
            xml.endElementInline();
          });
      }
      buildParameters(xml, parameters) {
        parameters &&
          parameters.forEach((parameter) => {
            const parameterElement = xml.declareElement("Parameter");
            xml.startElement(parameterElement);
            this.buildAttributes(xml, parameter, this.parameterAttributes);
            this.buildAnnotations(xml, parameter.annotations);
            xml.endElementInline();
          });
      }
      buildReturnType(xml, returnType) {
        if (!returnType || typeof returnType.type === "undefined") {
          return;
        }
        const parameterElement = xml.declareElement("ReturnType");
        const type = xml.declareAttribute("Type");
        const nullable = xml.declareAttribute("Nullable");
        xml.startElement(parameterElement).addAttribute(type, returnType.type);
        if (typeof returnType.nullable !== "undefined") {
          xml.addAttribute(nullable, returnType.nullable.toString());
        }
        this.buildAnnotations(xml, returnType.annotations);
        xml.endElementInline();
      }
      buildEntityContainer(xml, entityContainers) {
        entityContainers &&
          entityContainers.forEach((entityContainer) => {
            const entityContainerElement =
              xml.declareElement("EntityContainer");
            const name = xml.declareAttribute("Name");
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
            const entitySetElement = xml.declareElement("EntitySet");
            const name = xml.declareAttribute("Name");
            const entityType = xml.declareAttribute("EntityType");
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
          actionImports.forEach((actionImport2) => {
            const actionImportElement = xml.declareElement("ActionImport");
            const name = xml.declareAttribute("Name");
            const action2 = xml.declareAttribute("Action");
            xml
              .startElement(actionImportElement)
              .addAttribute(name, actionImport2.name)
              .addAttribute(action2, actionImport2.action);
            this.buildAnnotations(xml, actionImport2.annotations);
            xml.endElementInline();
          });
      }
      buildFunctionImports(xml, functionImports) {
        functionImports &&
          functionImports.forEach((functionImport) => {
            const FunctionImportElement = xml.declareElement("FunctionImport");
            const name = xml.declareAttribute("Name");
            const func = xml.declareAttribute("Function");
            xml
              .startElement(FunctionImportElement)
              .addAttribute(name, functionImport.name)
              .addAttribute(func, functionImport["function"]);
            if (
              typeof functionImport.includeInServiceDocument !== "undefined"
            ) {
              xml.addAttribute(
                xml.declareAttribute("IncludeInServiceDocument"),
                functionImport.includeInServiceDocument.toString()
              );
            }
            this.buildAnnotations(xml, functionImport.annotations);
            xml.endElementInline();
          });
      }
      buildSchemaAnnotations(xml, schemaAnnotations) {
        schemaAnnotations &&
          schemaAnnotations.forEach((schemaAnnotation) => {
            const target = xml.declareAttribute("Target");
            const AnnotationsElement = xml.declareElement("Annotations");
            xml
              .startElement(AnnotationsElement)
              .addAttribute(target, schemaAnnotation.target);
            if (schemaAnnotation.qualifier) {
              xml.addAttribute(
                xml.declareAttribute("Qualifier"),
                schemaAnnotation.qualifier
              );
            }
            this.buildAnnotations(xml, schemaAnnotation.annotations);
            xml.endElementInline();
          });
      }
      buildAnnotations(xml, annotations) {
        annotations &&
          annotations.forEach((annotation) => {
            const AnnotationElement = xml.declareElement("Annotation");
            xml.startElement(AnnotationElement);
            const attributes = Object.keys(this.annotationAttributes);
            attributes.forEach((prop) => {
              if (
                typeof annotation[prop] !== "undefined" &&
                annotation[prop] !== null
              ) {
                const attr = xml.declareAttribute(
                  this.annotationAttributes[prop].name
                );
                xml.addAttribute(attr, annotation[prop].toString());
              }
            });
            const annotConfig = this.annotationTypes[annotation.annotationType];
            if (annotConfig) {
              if (annotConfig.handler) {
                annotConfig.handler(xml, annotation);
              } else if (annotConfig.valueField) {
                const value = annotation[annotConfig.valueField];
                if (Array.isArray(value)) {
                  this.buildCollectionAnnotation(
                    xml,
                    value,
                    annotConfig,
                    annotation
                  );
                } else if (typeof value !== "undefined" && value !== null) {
                  const attr = xml.declareAttribute(annotConfig.name);
                  xml.addAttribute(attr, value.toString());
                }
              }
            }
            xml.endElementInline();
          });
      }
      buildCollectionAnnotation(xml, value, annotConfig, _) {
        const collectionElement = xml.declareElement("Collection");
        xml.startElement(collectionElement);
        value.forEach((v) => {
          const valueElement = xml.declareElement(annotConfig.name);
          xml
            .startElement(valueElement)
            .addText(v.toString())
            .endElementInline();
        });
        xml.endElementInline();
      }
    };
    exports.XmlMetadata = XmlMetadata;
  },
});

// node_modules/@odata/metadata/lib/service/metadata.js
var require_metadata = __commonJS({
  "node_modules/@odata/metadata/lib/service/metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceMetadata = void 0;
    var LRUMap_1 = require_LRUMap();
    var edm_1 = require_edm();
    var defineEntities_1 = require_defineEntities();
    var JsonCreator_1 = require_JsonCreator();
    var xmlMetadata_1 = require_xmlMetadata();
    var ServiceMetadata = class _ServiceMetadata {
      constructor(edmx, options) {
        this.edmx = edmx;
        this.options = options;
        this._cache = new LRUMap_1.LRUMap();
      }
      static loadFromJson(json, options) {
        return _ServiceMetadata.processMetadataJson(json, options);
      }
      static processMetadataJson(json, options) {
        const edmx = new edm_1.Edm.Edmx(json);
        return new this(edmx, options);
      }
      static processEdmx(edmx, options) {
        return new this(edmx, options);
      }
      static defineEntities(entityConfig, options) {
        const json = (0, defineEntities_1.defineEntities)(entityConfig);
        const edmx = new edm_1.Edm.Edmx(json);
        return new this(edmx, options);
      }
      _tryGetCache(key, producer) {
        if (!this._cache.has(key)) {
          this._cache.set(key, producer());
        }
        return this._cache.get(key);
      }
      getAllEntityTypes() {
        return this._tryGetCache("_all_models_", () => {
          const rt = [];
          this.edmx.dataServices.schemas.forEach((schema) => {
            schema.entityTypes.forEach((entityType) => {
              rt.push(entityType);
            });
          });
          return rt;
        });
      }
      getEntityTypeByName(modelName) {
        return this._tryGetCache(`_model_${modelName}_`, () => {
          for (const model of this.getAllEntityTypes()) {
            if (model.name === modelName) {
              return model;
            }
            return null;
          }
        });
      }
      getAllEntitySets() {
        return this._tryGetCache("_all_models_", () => {
          const rt = [];
          this.edmx.dataServices.schemas.forEach((schema) => {
            schema.entityContainer.forEach((container) => {
              container.entitySets.forEach((entitySet) => {
                rt.push(entitySet);
              });
            });
          });
          return rt;
        });
      }
      getEntitySetByName(entitySetName2) {
        return this._tryGetCache(`_es_${entitySetName2}_`, () => {
          for (const es of this.getAllEntitySets()) {
            if (es.name === entitySetName2) {
              return es;
            }
            return null;
          }
        });
      }
      document(format2 = "xml") {
        switch (format2) {
          case "json":
          case "application/json":
            return (0, JsonCreator_1.jsonStringify)(this.edmx);
          case "xml":
          case "application/xml":
            return this.process(this.edmx, this.options);
          default:
            throw Error(`not support document type for ${format2}`);
        }
      }
      process(edmx, options) {
        const xmlMetadata = new xmlMetadata_1.XmlMetadata(options, edmx);
        return xmlMetadata.processMetadata();
      }
      /**
       * create metadata handler for express
       *
       * @param format
       */
      requestHandler(format2) {
        return (req, res, __) => {
          switch (req.get("Accept")) {
            case "application/json":
            case "json":
              res.set("Content-Type", "application/json");
              res.send(this.document("application/json"));
              break;
            default:
              res.set("Content-Type", "application/xml");
              res.send(this.document("application/xml"));
              break;
          }
        };
      }
    };
    exports.ServiceMetadata = ServiceMetadata;
  },
});

// node_modules/@odata/metadata/lib/document/JsonDocument.js
var require_JsonDocument = __commonJS({
  "node_modules/@odata/metadata/lib/document/JsonDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonDocument = void 0;
    var JsonDocument = class {
      constructor(options, edmx) {
        options = options || {};
        this.options = Object.assign({}, options);
        this.metadata = edmx;
      }
      processMetadata() {
        const context = {};
        const json = {
          "@odata.context": this.options.context,
          value: [],
        };
        this.buildEdmx(json, this.metadata, context);
        return json;
      }
      buildEdmx(json, edmx, context) {
        this.buildDataServices(json, edmx.dataServices, context);
      }
      buildDataServices(json, dataservices, context) {
        this.buildSchema(json, dataservices.schemas, context);
      }
      buildSchema(json, schemas, context) {
        schemas &&
          schemas.forEach((schema) => {
            this.buildEntityContainer(json, schema.entityContainer, context);
          });
      }
      buildEntityContainer(json, entityContainers, context) {
        entityContainers &&
          entityContainers.forEach((entityContainer) => {
            this.buildEntitySets(json, entityContainer.entitySets, context);
          });
      }
      buildEntitySets(json, entitySets, context) {
        entitySets &&
          entitySets.forEach((entitySet) => {
            json.value.push({
              name: entitySet.name,
              kind: "EntitySet",
              url: entitySet.name,
            });
          });
      }
    };
    exports.JsonDocument = JsonDocument;
  },
});

// node_modules/@odata/metadata/lib/document/serviceDocument.js
var require_serviceDocument = __commonJS({
  "node_modules/@odata/metadata/lib/document/serviceDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceDocument = void 0;
    var metadata_1 = require_metadata();
    var JsonDocument_1 = require_JsonDocument();
    var ServiceDocument = class extends metadata_1.ServiceMetadata {
      constructor(edmx, options) {
        super(edmx, options);
      }
      document(format2 = "json") {
        switch (format2) {
          case "xml":
            throw new Error("Not implemented");
          default:
            const jsonDocument = new JsonDocument_1.JsonDocument(
              this.options,
              this.edmx
            );
            return jsonDocument.processMetadata();
        }
      }
      process(edmx, options) {
        const jsonDocument = new JsonDocument_1.JsonDocument(options, edmx);
        this.data = jsonDocument.processMetadata();
      }
      requestHandler(format2) {
        return (req, res, next) => {
          res.set("OData-Version", "4.0");
          const data = this.document(format2);
          if (!data["@odata.context"]) {
            let url = `${req.protocol}://${req.get("host")}${req.originalUrl
              .split("?")
              .shift()}`;
            if (url.slice(-1) !== "/") {
              url += "/";
            }
            data["@odata.context"] = `${url}$metadata`;
          }
          res.json(data);
        };
      }
    };
    exports.ServiceDocument = ServiceDocument;
  },
});

// node_modules/@odata/metadata/lib/index.js
var require_lib = __commonJS({
  "node_modules/@odata/metadata/lib/index.js"(exports) {
    "use strict";
    var __createBinding =
      (exports && exports.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k];
              },
            });
          }
        : function (o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m[k];
          });
    var __exportStar =
      (exports && exports.__exportStar) ||
      function (m, exports2) {
        for (var p in m)
          if (
            p !== "default" &&
            !Object.prototype.hasOwnProperty.call(exports2, p)
          )
            __createBinding(exports2, m, p);
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrimitiveTypeEnum = void 0;
    __exportStar(require_serviceDocument(), exports);
    __exportStar(require_edm(), exports);
    var enum_1 = require_enum();
    Object.defineProperty(exports, "PrimitiveTypeEnum", {
      enumerable: true,
      get: function () {
        return enum_1.PrimitiveTypeEnum;
      },
    });
    __exportStar(require_metadata(), exports);
  },
});

// node_modules/@newdash/newdash/join.js
var require_join = __commonJS({
  "node_modules/@newdash/newdash/join.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.join = void 0;
    var nativeJoin = Array.prototype.join;
    function join3(array, separator = ",") {
      return array == null ? "" : nativeJoin.call(array, separator);
    }
    exports.join = join3;
    exports.default = join3;
  },
});

// node_modules/@newdash/newdash/.internal/isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/@newdash/newdash/.internal/isFlattenable.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArguments_1 = __importDefault(require_isArguments());
    var spreadableSymbol = Symbol.isConcatSpreadable;
    function isFlattenable(value) {
      return (
        Array.isArray(value) ||
        (0, isArguments_1.default)(value) ||
        !!(value && value[spreadableSymbol])
      );
    }
    exports.default = isFlattenable;
  },
});

// node_modules/@newdash/newdash/.internal/arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/@newdash/newdash/.internal/arrayPush.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arrayPush(array, values) {
      var index = -1,
        length = values.length,
        offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    exports.default = arrayPush;
  },
});

// node_modules/@newdash/newdash/.internal/baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseFlatten.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var isFlattenable_1 = __importDefault(require_isFlattenable());
    var arrayPush_1 = __importDefault(require_arrayPush());
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
        length = array.length;
      predicate || (predicate = isFlattenable_1.default);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            (0, arrayPush_1.default)(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    exports.default = baseFlatten;
  },
});

// node_modules/@newdash/newdash/concat.js
var require_concat = __commonJS({
  "node_modules/@newdash/newdash/concat.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concat = void 0;
    var baseFlatten_1 = __importDefault(require_baseFlatten());
    var copyArray_1 = __importDefault(require_copyArray());
    var arrayPush_1 = __importDefault(require_arrayPush());
    var isArray_1 = __importDefault(require_isArray());
    function concat2(...arrays) {
      const length = arrays.length;
      if (!length) {
        return [];
      }
      const args = Array(length - 1);
      const array = arrays[0];
      let index = length;
      while (index--) {
        args[index - 1] = arrays[index];
      }
      return (0, arrayPush_1.default)(
        (0, isArray_1.default)(array)
          ? (0, copyArray_1.default)(array)
          : [array],
        (0, baseFlatten_1.default)(args, 1)
      );
    }
    exports.concat = concat2;
    exports.default = concat2;
  },
});

// node_modules/@newdash/newdash/.internal/baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseFindIndex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      const { length } = array;
      let index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    exports.default = baseFindIndex;
  },
});

// node_modules/@newdash/newdash/.internal/baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseIsNaN.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function baseIsNaN(value) {
      return value !== value;
    }
    exports.default = baseIsNaN;
  },
});

// node_modules/@newdash/newdash/.internal/strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/@newdash/newdash/.internal/strictIndexOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function strictIndexOf(array, value, fromIndex) {
      let index = fromIndex - 1;
      const { length } = array;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    exports.default = strictIndexOf;
  },
});

// node_modules/@newdash/newdash/.internal/baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseIndexOf.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseFindIndex_1 = __importDefault(require_baseFindIndex());
    var baseIsNaN_1 = __importDefault(require_baseIsNaN());
    var strictIndexOf_1 = __importDefault(require_strictIndexOf());
    function baseIndexOf(array, value, fromIndex) {
      return value === value
        ? (0, strictIndexOf_1.default)(array, value, fromIndex)
        : (0, baseFindIndex_1.default)(array, baseIsNaN_1.default, fromIndex);
    }
    exports.default = baseIndexOf;
  },
});

// node_modules/@newdash/newdash/.internal/arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/@newdash/newdash/.internal/arrayIncludes.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseIndexOf_1 = __importDefault(require_baseIndexOf());
    function arrayIncludes(array, value) {
      const length = array == null ? 0 : array.length;
      return !!length && (0, baseIndexOf_1.default)(array, value, 0) > -1;
    }
    exports.default = arrayIncludes;
  },
});

// node_modules/@newdash/newdash/.internal/arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/@newdash/newdash/.internal/arrayIncludesWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arrayIncludesWith(array, target, comparator) {
      if (array == null) {
        return false;
      }
      for (const value of array) {
        if (comparator(target, value)) {
          return true;
        }
      }
      return false;
    }
    exports.default = arrayIncludesWith;
  },
});

// node_modules/@newdash/newdash/.internal/createSet.js
var require_createSet = __commonJS({
  "node_modules/@newdash/newdash/.internal/createSet.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var setToArray_1 = __importDefault(require_setToArray());
    var INFINITY = 1 / 0;
    var createSet =
      Set &&
      1 / (0, setToArray_1.default)(/* @__PURE__ */ new Set([, -0]))[1] ==
        INFINITY
        ? (values) => new Set(values)
        : () => {};
    exports.default = createSet;
  },
});

// node_modules/@newdash/newdash/.internal/baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/@newdash/newdash/.internal/baseUniq.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var SetCache_1 = __importDefault(require_SetCache());
    var arrayIncludes_1 = __importDefault(require_arrayIncludes());
    var arrayIncludesWith_1 = __importDefault(require_arrayIncludesWith());
    var cacheHas_1 = __importDefault(require_cacheHas());
    var createSet_1 = __importDefault(require_createSet());
    var setToArray_1 = __importDefault(require_setToArray());
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      let index = -1;
      let includes = arrayIncludes_1.default;
      let isCommon = true;
      const { length } = array;
      const result = [];
      let seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith_1.default;
      } else if (length >= LARGE_ARRAY_SIZE) {
        const set = iteratee ? null : (0, createSet_1.default)(array);
        if (set) {
          return (0, setToArray_1.default)(set);
        }
        isCommon = false;
        includes = cacheHas_1.default;
        seen = new SetCache_1.default();
      } else {
        seen = iteratee ? [] : result;
      }
      outer: while (++index < length) {
        let value = array[index];
        const computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          let seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }
    exports.default = baseUniq;
  },
});

// node_modules/@newdash/newdash/uniq.js
var require_uniq = __commonJS({
  "node_modules/@newdash/newdash/uniq.js"(exports) {
    "use strict";
    var __importDefault =
      (exports && exports.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uniq = void 0;
    var baseUniq_1 = __importDefault(require_baseUniq());
    function uniq2(array) {
      return array != null && array.length
        ? (0, baseUniq_1.default)(array)
        : [];
    }
    exports.uniq = uniq2;
    exports.default = uniq2;
  },
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ALPHA: () => ALPHA,
  AT: () => AT,
  AtoF: () => AtoF,
  BWS: () => BWS,
  CLOSE: () => CLOSE,
  COLON: () => COLON,
  COMMA: () => COMMA,
  DIGIT: () => DIGIT,
  DQUOTE: () => DQUOTE,
  EQ: () => EQ,
  ExprOperator: () => ExprOperator,
  HEXDIG: () => HEXDIG,
  HTAB: () => HTAB,
  LexerTokenType: () => LexerTokenType,
  ODataFilter: () => ODataFilter,
  ODataMethod: () => ODataMethod,
  ODataMethods: () => ODataMethods,
  ODataParam: () => ODataParam,
  ODataQueryParam: () => ODataQueryParam,
  OPEN: () => OPEN,
  OWS: () => OWS,
  RWS: () => RWS,
  SEMI: () => SEMI,
  SIGN: () => SIGN,
  SP: () => SP,
  SQUOTE: () => SQUOTE,
  STAR: () => STAR,
  Token: () => Token,
  TokenType: () => TokenType2,
  VCHAR: () => VCHAR,
  base64b16: () => base64b16,
  base64b8: () => base64b8,
  base64char: () => base64char,
  beginArray: () => beginArray,
  beginObject: () => beginObject,
  clone: () => clone,
  convertPrimitiveValueToString: () => convertPrimitiveValueToString,
  createTraverser: () => createTraverser,
  day: () => day,
  defaultParser: () => defaultParser,
  endArray: () => endArray,
  endObject: () => endObject,
  escape: () => escape,
  filter: () => filter2,
  fractionalSeconds: () => fractionalSeconds,
  geographyPrefix: () => geographyPrefix,
  geometryPrefix: () => geometryPrefix,
  hour: () => hour,
  identifierCharacter: () => identifierCharacter,
  identifierLeadingCharacter: () => identifierLeadingCharacter,
  literalValues: () => literalValues,
  minute: () => minute,
  month: () => month,
  nameSeparator: () => nameSeparator,
  nanInfinity: () => nanInfinity,
  oneToNine: () => oneToNine,
  otherDelims: () => otherDelims,
  param: () => param,
  pchar: () => pchar,
  pcharNoSQUOTE: () => pcharNoSQUOTE,
  pctEncoded: () => pctEncoded,
  pctEncodedNoSQUOTE: () => pctEncodedNoSQUOTE,
  pctEncodedUnescaped: () => pctEncodedUnescaped,
  qcharNoAMP: () => qcharNoAMP,
  qcharNoAMPDQUOTE: () => qcharNoAMPDQUOTE,
  quotationMark: () => quotationMark,
  second: () => second,
  subDelims: () => subDelims,
  tokenize: () => tokenize,
  traverseAst: () => traverseAst,
  traverseAstDeepFirst: () => traverseAstDeepFirst,
  unreserved: () => unreserved,
  valueSeparator: () => valueSeparator,
  whitespaceLength: () => whitespaceLength,
  year: () => year,
  zeroToFiftyNine: () => zeroToFiftyNine,
});
module.exports = __toCommonJS(src_exports);

// src/utils.ts
var import_map = __toESM(require_map());

// src/visitor.ts
var import_forEach = __toESM(require_forEach());
var import_isArray = __toESM(require_isArray());
var import_isPlainObject = __toESM(require_isPlainObject());
function traverseAst(traverser, node, parent) {
  var _a, _b, _c, _d;
  if (node instanceof Token) {
    if ((node == null ? void 0 : node.type) in traverser) {
      traverser[node == null ? void 0 : node.type](node, parent);
    }
  }
  if (
    (0, import_isArray.isArray)(node == null ? void 0 : node.value) ||
    (0, import_isPlainObject.isPlainObject)(node == null ? void 0 : node.value)
  ) {
    (0, import_forEach.forEach)(node == null ? void 0 : node.value, (item) => {
      if (item instanceof Token) {
        traverseAst(traverser, item, node);
      }
    });
  }
  if (
    (0, import_isArray.isArray)(
      (_a = node == null ? void 0 : node.value) == null ? void 0 : _a.options
    )
  ) {
    (0, import_forEach.forEach)(
      (_b = node == null ? void 0 : node.value) == null ? void 0 : _b.options,
      (item) => {
        if (item instanceof Token) {
          traverseAst(traverser, item, node);
        }
      }
    );
  }
  if (
    (0, import_isArray.isArray)(
      (_c = node == null ? void 0 : node.value) == null ? void 0 : _c.items
    )
  ) {
    (0, import_forEach.forEach)(
      (_d = node == null ? void 0 : node.value) == null ? void 0 : _d.items,
      (item) => {
        if (item instanceof Token) {
          traverseAst(traverser, item, node);
        }
      }
    );
  }
  if ((node == null ? void 0 : node.value) instanceof Token) {
    traverseAst(traverser, node == null ? void 0 : node.value, node);
  }
}
function traverseAstDeepFirst(traverser, node, parent) {
  var _a, _b, _c, _d;
  if (
    (0, import_isArray.isArray)(node == null ? void 0 : node.value) ||
    (0, import_isPlainObject.isPlainObject)(node == null ? void 0 : node.value)
  ) {
    (0, import_forEach.forEach)(node == null ? void 0 : node.value, (item) => {
      if (item instanceof Token) {
        traverseAstDeepFirst(traverser, item, node);
      }
    });
  }
  if ((node == null ? void 0 : node.value) instanceof Token) {
    traverseAstDeepFirst(traverser, node == null ? void 0 : node.value, node);
  }
  if (
    (0, import_isArray.isArray)(
      (_a = node == null ? void 0 : node.value) == null ? void 0 : _a.options
    )
  ) {
    (0, import_forEach.forEach)(
      (_b = node == null ? void 0 : node.value) == null ? void 0 : _b.options,
      (item) => {
        if (item instanceof Token) {
          traverseAstDeepFirst(traverser, item, node);
        }
      }
    );
  }
  if (
    (0, import_isArray.isArray)(
      (_c = node == null ? void 0 : node.value) == null ? void 0 : _c.items
    )
  ) {
    (0, import_forEach.forEach)(
      (_d = node == null ? void 0 : node.value) == null ? void 0 : _d.items,
      (item) => {
        if (item instanceof Token) {
          traverseAstDeepFirst(traverser, item, node);
        }
      }
    );
  }
  if (node instanceof Token) {
    if ((node == null ? void 0 : node.type) in traverser) {
      traverser[node.type](node, parent);
    }
  }
}
function createTraverser(traverser, deepFirst = false) {
  return (node) => {
    if (deepFirst) {
      traverseAstDeepFirst(traverser, node);
    } else {
      traverseAst(traverser, node);
    }
  };
}

// src/utils.ts
function stringify(value, index, next) {
  return (0, import_map.map)(value.slice(index, next), (ch) =>
    String.fromCharCode(ch)
  ).join("");
}
function is(value, compare) {
  for (let i = 0; i < compare.length; i++) {
    if (value === compare.charCodeAt(i)) {
      return true;
    }
  }
  return false;
}
function equals(value, index, compare) {
  let i = 0;
  while (value[index + i] === compare.charCodeAt(i) && i < compare.length) {
    i++;
  }
  return i === compare.length ? i : 0;
}
function required(value, index, comparer, min, max) {
  let i = 0;
  max = max || value.length - index;
  while (i < max && comparer(value[index + i])) {
    i++;
  }
  return i >= (min || 0) && i <= max ? index + i : 0;
}
var utils_default = { stringify, is, equals, required };

// src/lexer.ts
var TokenType2 = /* @__PURE__ */ ((TokenType3) => {
  TokenType3["Literal"] = "Literal";
  TokenType3["ArrayOrObject"] = "ArrayOrObject";
  TokenType3["Array"] = "Array";
  TokenType3["Object"] = "Object";
  TokenType3["Property"] = "Property";
  TokenType3["Annotation"] = "Annotation";
  TokenType3["Enum"] = "Enum";
  TokenType3["EnumValue"] = "EnumValue";
  TokenType3["EnumMemberValue"] = "EnumMemberValue";
  TokenType3["Identifier"] = "Identifier";
  TokenType3["QualifiedEntityTypeName"] = "QualifiedEntityTypeName";
  TokenType3["QualifiedComplexTypeName"] = "QualifiedComplexTypeName";
  TokenType3["ODataIdentifier"] = "ODataIdentifier";
  TokenType3["Collection"] = "Collection";
  TokenType3["NamespacePart"] = "NamespacePart";
  TokenType3["EntitySetName"] = "EntitySetName";
  TokenType3["SingletonEntity"] = "SingletonEntity";
  TokenType3["EntityTypeName"] = "EntityTypeName";
  TokenType3["ComplexTypeName"] = "ComplexTypeName";
  TokenType3["TypeDefinitionName"] = "TypeDefinitionName";
  TokenType3["EnumerationTypeName"] = "EnumerationTypeName";
  TokenType3["EnumerationMember"] = "EnumerationMember";
  TokenType3["TermName"] = "TermName";
  TokenType3["PrimitiveProperty"] = "PrimitiveProperty";
  TokenType3["PrimitiveKeyProperty"] = "PrimitiveKeyProperty";
  TokenType3["PrimitiveNonKeyProperty"] = "PrimitiveNonKeyProperty";
  TokenType3["PrimitiveCollectionProperty"] = "PrimitiveCollectionProperty";
  TokenType3["ComplexProperty"] = "ComplexProperty";
  TokenType3["ComplexCollectionProperty"] = "ComplexCollectionProperty";
  TokenType3["StreamProperty"] = "StreamProperty";
  TokenType3["NavigationProperty"] = "NavigationProperty";
  TokenType3["EntityNavigationProperty"] = "EntityNavigationProperty";
  TokenType3["EntityCollectionNavigationProperty"] =
    "EntityCollectionNavigationProperty";
  TokenType3["Action"] = "Action";
  TokenType3["ActionImport"] = "ActionImport";
  TokenType3["Function"] = "Function";
  TokenType3["EntityFunction"] = "EntityFunction";
  TokenType3["EntityCollectionFunction"] = "EntityCollectionFunction";
  TokenType3["ComplexFunction"] = "ComplexFunction";
  TokenType3["ComplexCollectionFunction"] = "ComplexCollectionFunction";
  TokenType3["PrimitiveFunction"] = "PrimitiveFunction";
  TokenType3["PrimitiveCollectionFunction"] = "PrimitiveCollectionFunction";
  TokenType3["EntityFunctionImport"] = "EntityFunctionImport";
  TokenType3["EntityCollectionFunctionImport"] =
    "EntityCollectionFunctionImport";
  TokenType3["ComplexFunctionImport"] = "ComplexFunctionImport";
  TokenType3["ComplexCollectionFunctionImport"] =
    "ComplexCollectionFunctionImport";
  TokenType3["PrimitiveFunctionImport"] = "PrimitiveFunctionImport";
  TokenType3["PrimitiveCollectionFunctionImport"] =
    "PrimitiveCollectionFunctionImport";
  TokenType3["CommonExpression"] = "CommonExpression";
  TokenType3["AndExpression"] = "AndExpression";
  TokenType3["OrExpression"] = "OrExpression";
  TokenType3["EqualsExpression"] = "EqualsExpression";
  TokenType3["NotEqualsExpression"] = "NotEqualsExpression";
  TokenType3["LesserThanExpression"] = "LesserThanExpression";
  TokenType3["LesserOrEqualsExpression"] = "LesserOrEqualsExpression";
  TokenType3["GreaterThanExpression"] = "GreaterThanExpression";
  TokenType3["GreaterOrEqualsExpression"] = "GreaterOrEqualsExpression";
  TokenType3["HasExpression"] = "HasExpression";
  TokenType3["AddExpression"] = "AddExpression";
  TokenType3["SubExpression"] = "SubExpression";
  TokenType3["MulExpression"] = "MulExpression";
  TokenType3["DivExpression"] = "DivExpression";
  TokenType3["ModExpression"] = "ModExpression";
  TokenType3["NotExpression"] = "NotExpression";
  TokenType3["BoolParenExpression"] = "BoolParenExpression";
  TokenType3["ParenExpression"] = "ParenExpression";
  TokenType3["MethodCallExpression"] = "MethodCallExpression";
  TokenType3["IsOfExpression"] = "IsOfExpression";
  TokenType3["CastExpression"] = "CastExpression";
  TokenType3["NegateExpression"] = "NegateExpression";
  TokenType3["FirstMemberExpression"] = "FirstMemberExpression";
  TokenType3["MemberExpression"] = "MemberExpression";
  TokenType3["PropertyPathExpression"] = "PropertyPathExpression";
  TokenType3["ImplicitVariableExpression"] = "ImplicitVariableExpression";
  TokenType3["LambdaVariable"] = "LambdaVariable";
  TokenType3["LambdaVariableExpression"] = "LambdaVariableExpression";
  TokenType3["LambdaPredicateExpression"] = "LambdaPredicateExpression";
  TokenType3["AnyExpression"] = "AnyExpression";
  TokenType3["AllExpression"] = "AllExpression";
  TokenType3["CollectionNavigationExpression"] =
    "CollectionNavigationExpression";
  TokenType3["SimpleKey"] = "SimpleKey";
  TokenType3["CompoundKey"] = "CompoundKey";
  TokenType3["KeyValuePair"] = "KeyValuePair";
  TokenType3["KeyPropertyValue"] = "KeyPropertyValue";
  TokenType3["KeyPropertyAlias"] = "KeyPropertyAlias";
  TokenType3["SingleNavigationExpression"] = "SingleNavigationExpression";
  TokenType3["CollectionPathExpression"] = "CollectionPathExpression";
  TokenType3["ComplexPathExpression"] = "ComplexPathExpression";
  TokenType3["SinglePathExpression"] = "SinglePathExpression";
  TokenType3["FunctionExpression"] = "FunctionExpression";
  TokenType3["FunctionExpressionParameters"] = "FunctionExpressionParameters";
  TokenType3["FunctionExpressionParameter"] = "FunctionExpressionParameter";
  TokenType3["ParameterName"] = "ParameterName";
  TokenType3["ParameterAlias"] = "ParameterAlias";
  TokenType3["ParameterValue"] = "ParameterValue";
  TokenType3["CountExpression"] = "CountExpression";
  TokenType3["RefExpression"] = "RefExpression";
  TokenType3["ValueExpression"] = "ValueExpression";
  TokenType3["RootExpression"] = "RootExpression";
  TokenType3["QueryOptions"] = "QueryOptions";
  TokenType3["CustomQueryOption"] = "CustomQueryOption";
  TokenType3["Expand"] = "Expand";
  TokenType3["ExpandItem"] = "ExpandItem";
  TokenType3["ExpandPath"] = "ExpandPath";
  TokenType3["ExpandCountOption"] = "ExpandCountOption";
  TokenType3["ExpandRefOption"] = "ExpandRefOption";
  TokenType3["ExpandOption"] = "ExpandOption";
  TokenType3["Levels"] = "Levels";
  TokenType3["Search"] = "Search";
  TokenType3["SearchExpression"] = "SearchExpression";
  TokenType3["SearchParenExpression"] = "SearchParenExpression";
  TokenType3["SearchNotExpression"] = "SearchNotExpression";
  TokenType3["SearchOrExpression"] = "SearchOrExpression";
  TokenType3["SearchAndExpression"] = "SearchAndExpression";
  TokenType3["SearchTerm"] = "SearchTerm";
  TokenType3["SearchPhrase"] = "SearchPhrase";
  TokenType3["SearchWord"] = "SearchWord";
  TokenType3["Filter"] = "Filter";
  TokenType3["OrderBy"] = "OrderBy";
  TokenType3["OrderByItem"] = "OrderByItem";
  TokenType3["Skip"] = "Skip";
  TokenType3["Top"] = "Top";
  TokenType3["Format"] = "Format";
  TokenType3["InlineCount"] = "InlineCount";
  TokenType3["Select"] = "Select";
  TokenType3["SelectItem"] = "SelectItem";
  TokenType3["SelectPath"] = "SelectPath";
  TokenType3["AliasAndValue"] = "AliasAndValue";
  TokenType3["SkipToken"] = "SkipToken";
  TokenType3["Id"] = "Id";
  TokenType3["Crossjoin"] = "Crossjoin";
  TokenType3["AllResource"] = "AllResource";
  TokenType3["ActionImportCall"] = "ActionImportCall";
  TokenType3["FunctionImportCall"] = "FunctionImportCall";
  TokenType3["EntityCollectionFunctionImportCall"] =
    "EntityCollectionFunctionImportCall";
  TokenType3["EntityFunctionImportCall"] = "EntityFunctionImportCall";
  TokenType3["ComplexCollectionFunctionImportCall"] =
    "ComplexCollectionFunctionImportCall";
  TokenType3["ComplexFunctionImportCall"] = "ComplexFunctionImportCall";
  TokenType3["PrimitiveCollectionFunctionImportCall"] =
    "PrimitiveCollectionFunctionImportCall";
  TokenType3["PrimitiveFunctionImportCall"] = "PrimitiveFunctionImportCall";
  TokenType3["FunctionParameters"] = "FunctionParameters";
  TokenType3["FunctionParameter"] = "FunctionParameter";
  TokenType3["ResourcePath"] = "ResourcePath";
  TokenType3["CollectionNavigation"] = "CollectionNavigation";
  TokenType3["CollectionNavigationPath"] = "CollectionNavigationPath";
  TokenType3["SingleNavigation"] = "SingleNavigation";
  TokenType3["PropertyPath"] = "PropertyPath";
  TokenType3["ComplexPath"] = "ComplexPath";
  TokenType3["BoundOperation"] = "BoundOperation";
  TokenType3["BoundActionCall"] = "BoundActionCall";
  TokenType3["BoundEntityFunctionCall"] = "BoundEntityFunctionCall";
  TokenType3["BoundEntityCollectionFunctionCall"] =
    "BoundEntityCollectionFunctionCall";
  TokenType3["BoundComplexFunctionCall"] = "BoundComplexFunctionCall";
  TokenType3["BoundComplexCollectionFunctionCall"] =
    "BoundComplexCollectionFunctionCall";
  TokenType3["BoundPrimitiveFunctionCall"] = "BoundPrimitiveFunctionCall";
  TokenType3["BoundPrimitiveCollectionFunctionCall"] =
    "BoundPrimitiveCollectionFunctionCall";
  TokenType3["ODataUri"] = "ODataUri";
  TokenType3["Batch"] = "Batch";
  TokenType3["Entity"] = "Entity";
  TokenType3["Metadata"] = "Metadata";
  return TokenType3;
})(TokenType2 || {});
var LexerTokenType = TokenType2;
var Token = class {
  constructor(token) {
    __publicField(this, "position");
    __publicField(this, "next");
    __publicField(this, "value");
    __publicField(this, "type");
    /**
     * raw string of token
     */
    __publicField(this, "raw");
    __publicField(this, "metadata");
    this.position = token.position;
    this.next = token.next;
    this.value = token.value;
    this.type = token.type;
    this.raw = token.raw;
    if (token.metadata) {
      this.metadata = token.metadata;
    }
  }
};
function tokenize(
  value,
  index,
  next,
  tokenValue,
  tokenType,
  metadataContextContainer
) {
  const token = new Token({
    position: index,
    next,
    value: tokenValue,
    type: tokenType,
    raw: utils_default.stringify(value, index, next),
  });
  if (metadataContextContainer && metadataContextContainer.metadata) {
    token.metadata = metadataContextContainer.metadata;
    delete metadataContextContainer.metadata;
  }
  return token;
}
function clone(token) {
  return new Token({
    position: token.position,
    next: token.next,
    value: token.value,
    type: token.type,
    raw: token.raw,
  });
}
function ALPHA(value) {
  return (
    (value >= 65 && value <= 90) ||
    (value >= 97 && value <= 122) ||
    value >= 128
  );
}
function DIGIT(value) {
  return value >= 48 && value <= 57;
}
function HEXDIG(value) {
  return DIGIT(value) || AtoF(value);
}
function AtoF(value) {
  return (value >= 65 && value <= 70) || (value >= 97 && value <= 102);
}
function DQUOTE(value) {
  return value === 34;
}
function SP(value) {
  return value === 32;
}
function HTAB(value) {
  return value === 9;
}
function VCHAR(value) {
  return value >= 33 && value <= 126;
}
function whitespaceLength(value, index) {
  if (
    utils_default.equals(value, index, "%20") ||
    utils_default.equals(value, index, "%09")
  ) {
    return 3;
  } else if (
    SP(value[index]) ||
    HTAB(value[index]) ||
    value[index] === 32 ||
    value[index] === 9
  ) {
    return 1;
  }
}
function OWS(value, index) {
  index = index || 0;
  let inc = whitespaceLength(value, index);
  while (inc) {
    index += inc;
    inc = whitespaceLength(value, index);
  }
  return index;
}
function RWS(value, index) {
  return OWS(value, index);
}
function BWS(value, index) {
  return OWS(value, index);
}
function AT(value, index) {
  if (value[index] === 64) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%40")) {
    return index + 3;
  }
}
function COLON(value, index) {
  if (value[index] === 58) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%3A")) {
    return index + 3;
  }
}
function COMMA(value, index) {
  if (value[index] === 44) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%2C")) {
    return index + 3;
  }
}
function EQ(value, index) {
  if (value[index] === 61) {
    return index + 1;
  }
}
function SIGN(value, index) {
  if (value[index] === 43 || value[index] === 45) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%2B")) {
    return index + 3;
  }
}
function SEMI(value, index) {
  if (value[index] === 59) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%3B")) {
    return index + 3;
  }
}
function STAR(value, index) {
  if (value[index] === 42) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%2A")) {
    return index + 3;
  }
}
function SQUOTE(value, index) {
  if (value[index] === 39) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%27")) {
    return index + 3;
  }
}
function OPEN(value, index) {
  if (value[index] === 40) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%28")) {
    return index + 3;
  }
}
function CLOSE(value, index) {
  if (value[index] === 41) {
    return index + 1;
  } else if (utils_default.equals(value, index, "%29")) {
    return index + 3;
  }
}
function unreserved(value) {
  return (
    ALPHA(value) ||
    DIGIT(value) ||
    value === 45 ||
    value === 46 ||
    value === 95 ||
    value === 126
  );
}
function otherDelims(value, index) {
  if (value[index] === 33 || value[index] === 43) {
    return index + 1;
  }
  return (
    OPEN(value, index) ||
    CLOSE(value, index) ||
    STAR(value, index) ||
    COMMA(value, index) ||
    SEMI(value, index)
  );
}
function subDelims(value, index) {
  if (value[index] === 36 || value[index] === 38) {
    return index + 1;
  }
  return SQUOTE(value, index) || EQ(value, index) || otherDelims(value, index);
}
function pctEncoded(value, index) {
  if (
    value[index] !== 37 ||
    !HEXDIG(value[index + 1]) ||
    !HEXDIG(value[index + 2])
  ) {
    return index;
  }
  return index + 3;
}
function pctEncodedNoSQUOTE(value, index) {
  if (utils_default.equals(value, index, "%27")) {
    return index;
  }
  return pctEncoded(value, index);
}
function pctEncodedUnescaped(value, index) {
  if (
    utils_default.equals(value, index, "%22") ||
    utils_default.equals(value, index, "%3") ||
    utils_default.equals(value, index, "%4") ||
    utils_default.equals(value, index, "%5C")
  ) {
    return index;
  }
  return pctEncoded(value, index);
}
function pchar(value, index) {
  if (unreserved(value[index])) {
    return index + 1;
  }
  return (
    subDelims(value, index) ||
    COLON(value, index) ||
    AT(value, index) ||
    pctEncoded(value, index) ||
    index
  );
}
function pcharNoSQUOTE(value, index) {
  if (unreserved(value[index]) || value[index] === 36 || value[index] === 38) {
    return index + 1;
  }
  return VCHAR(value[index]) === true ? index + 1 : index;
}
function qcharNoAMP(value, index) {
  if (
    unreserved(value[index]) ||
    value[index] === 58 ||
    value[index] === 64 ||
    value[index] === 47 ||
    value[index] === 63 ||
    value[index] === 36 ||
    value[index] === 39 ||
    value[index] === 61
  ) {
    return index + 1;
  }
  return pctEncoded(value, index) || otherDelims(value, index) || index;
}
function qcharNoAMPDQUOTE(value, index) {
  index = BWS(value, index);
  if (
    unreserved(value[index]) ||
    value[index] === 58 ||
    value[index] === 64 ||
    value[index] === 47 ||
    value[index] === 63 ||
    value[index] === 36 ||
    value[index] === 39 ||
    value[index] === 61
  ) {
    return index + 1;
  }
  return otherDelims(value, index) || pctEncodedUnescaped(value, index);
}
function base64char(value) {
  return ALPHA(value) || DIGIT(value) || value === 45 || value === 95;
}
function base64b16(value, index) {
  const start = index;
  if (!base64char(value[index]) && !base64char(value[index + 1])) {
    return start;
  }
  index += 2;
  if (!utils_default.is(value[index], "AEIMQUYcgkosw048")) {
    return start;
  }
  index++;
  if (value[index] === 61) {
    index++;
  }
  return index;
}
function base64b8(value, index) {
  const start = index;
  if (!base64char(value[index])) {
    return start;
  }
  index++;
  if (
    value[index] !== 65 ||
    value[index] !== 81 ||
    value[index] !== 103 ||
    value[index] !== 119
  ) {
    return start;
  }
  index++;
  if (value[index] === 61 && value[index + 1] === 61) {
    index += 2;
  }
  return index;
}
function nanInfinity(value, index) {
  return (
    utils_default.equals(value, index, "NaN") ||
    utils_default.equals(value, index, "-INF") ||
    utils_default.equals(value, index, "INF")
  );
}
function oneToNine(value) {
  return value !== 48 && DIGIT(value);
}
function zeroToFiftyNine(value, index) {
  if (value[index] >= 48 && value[index] <= 53 && DIGIT(value[index + 1])) {
    return index + 2;
  }
  return index;
}
function year(value, index) {
  const start = index;
  let end = index;
  if (value[index] === 45) {
    index++;
  }
  if (
    (value[index] === 48 &&
      (end = utils_default.required(value, index + 1, DIGIT, 3, 3))) ||
    (oneToNine(value[index]) &&
      (end = utils_default.required(value, index + 1, DIGIT, 3)))
  ) {
    return end;
  }
  return start;
}
function month(value, index) {
  if (
    (value[index] === 48 && oneToNine(value[index + 1])) ||
    (value[index] === 49 && value[index + 1] >= 48 && value[index + 1] <= 50)
  ) {
    return index + 2;
  }
  return index;
}
function day(value, index) {
  if (
    (value[index] === 48 && oneToNine(value[index + 1])) ||
    ((value[index] === 49 || value[index] === 50) && DIGIT(value[index + 1])) ||
    (value[index] === 51 &&
      (value[index + 1] === 48 || value[index + 1] === 49))
  ) {
    return index + 2;
  }
  return index;
}
function hour(value, index) {
  if (
    ((value[index] === 48 || value[index] === 49) && DIGIT(value[index + 1])) ||
    (value[index] === 50 &&
      (value[index + 1] === 48 ||
        value[index + 1] === 49 ||
        value[index + 1] === 50 ||
        value[index + 1] === 51))
  ) {
    return index + 2;
  }
  return index;
}
function minute(value, index) {
  return zeroToFiftyNine(value, index);
}
function second(value, index) {
  return zeroToFiftyNine(value, index);
}
function fractionalSeconds(value, index) {
  return utils_default.required(value, index, DIGIT, 1, 12);
}
function geographyPrefix(value, index) {
  return utils_default.equals(value, index, "geography") ? index + 9 : index;
}
function geometryPrefix(value, index) {
  return utils_default.equals(value, index, "geometry") ? index + 8 : index;
}
function identifierLeadingCharacter(value) {
  return ALPHA(value) || value === 95;
}
function identifierCharacter(value) {
  return identifierLeadingCharacter(value) || DIGIT(value);
}
function beginObject(value, index) {
  let bws = BWS(value, index);
  const start = index;
  index = bws;
  if (utils_default.equals(value, index, "{")) {
    index++;
  } else if (utils_default.equals(value, index, "%7B")) {
    index += 3;
  }
  if (index === bws) {
    return start;
  }
  bws = BWS(value, index);
  return bws;
}
function endObject(value, index) {
  let bws = BWS(value, index);
  const start = index;
  index = bws;
  if (utils_default.equals(value, index, "}")) {
    index++;
  } else if (utils_default.equals(value, index, "%7D")) {
    index += 3;
  }
  if (index === bws) {
    return start;
  }
  bws = BWS(value, index);
  return bws;
}
function beginArray(value, index) {
  let bws = BWS(value, index);
  const start = index;
  index = bws;
  if (utils_default.equals(value, index, "[")) {
    index++;
  } else if (utils_default.equals(value, index, "%5B")) {
    index += 3;
  }
  if (index === bws) {
    return start;
  }
  bws = BWS(value, index);
  return bws;
}
function endArray(value, index) {
  let bws = BWS(value, index);
  const start = index;
  index = bws;
  if (utils_default.equals(value, index, "]")) {
    index++;
  } else if (utils_default.equals(value, index, "%5D")) {
    index += 3;
  }
  if (index === bws) {
    return start;
  }
  bws = BWS(value, index);
  return bws;
}
function quotationMark(value, index) {
  if (DQUOTE(value[index])) {
    return index + 1;
  }
  if (utils_default.equals(value, index, "%22")) {
    return index + 3;
  }
  return index;
}
function nameSeparator(value, index) {
  let bws = BWS(value, index);
  const start = index;
  index = bws;
  const colon = COLON(value, index);
  if (!colon) {
    return start;
  }
  index = colon;
  bws = BWS(value, index);
  return bws;
}
function valueSeparator(value, index) {
  let bws = BWS(value, index);
  const start = index;
  index = bws;
  const comma = COMMA(value, index);
  if (!comma) {
    return start;
  }
  index = comma;
  bws = BWS(value, index);
  return bws;
}
function escape(value, index) {
  if (utils_default.equals(value, index, "\\")) {
    return index + 1;
  }
  if (utils_default.equals(value, index, "%5C")) {
    return index + 3;
  }
  return index;
}

// src/primitiveLiteral.ts
function nullValue(value, index) {
  if (utils_default.equals(value, index, "null")) {
    return tokenize(value, index, index + 4, "null", "Literal" /* Literal */);
  }
}
function booleanValue(value, index) {
  if (utils_default.equals(value, index, "true")) {
    return tokenize(
      value,
      index,
      index + 4,
      "Edm.Boolean",
      "Literal" /* Literal */
    );
  }
  if (utils_default.equals(value, index, "false")) {
    return tokenize(
      value,
      index,
      index + 5,
      "Edm.Boolean",
      "Literal" /* Literal */
    );
  }
}
function guidValue(value, index) {
  if (
    utils_default.required(value, index, HEXDIG, 8, 8) &&
    value[index + 8] === 45 &&
    utils_default.required(value, index + 9, HEXDIG, 4, 4) &&
    value[index + 13] === 45 &&
    utils_default.required(value, index + 14, HEXDIG, 4, 4) &&
    value[index + 18] === 45 &&
    utils_default.required(value, index + 19, HEXDIG, 4, 4) &&
    value[index + 23] === 45 &&
    utils_default.required(value, index + 24, HEXDIG, 12)
  ) {
    return tokenize(
      value,
      index,
      index + 36,
      "Edm.Guid",
      "Literal" /* Literal */
    );
  }
}
function sbyteValue(value, index) {
  const start = index;
  const sign = SIGN(value, index);
  if (sign) {
    index = sign;
  }
  const next = utils_default.required(value, index, DIGIT, 1, 3);
  if (next) {
    if (DIGIT(value[next])) {
      return;
    }
    const val = parseInt(utils_default.stringify(value, start, next), 10);
    if (val >= -128 && val <= 127) {
      return tokenize(value, start, next, "Edm.SByte", "Literal" /* Literal */);
    }
  }
}
function byteValue(value, index) {
  const next = utils_default.required(value, index, DIGIT, 1, 3);
  if (next) {
    if (DIGIT(value[next])) {
      return;
    }
    const val = parseInt(utils_default.stringify(value, index, next), 10);
    if (val >= 0 && val <= 255) {
      return tokenize(value, index, next, "Edm.Byte", "Literal" /* Literal */);
    }
  }
}
function int16Value(value, index) {
  const start = index;
  const sign = SIGN(value, index);
  if (sign) {
    index = sign;
  }
  const next = utils_default.required(value, index, DIGIT, 1, 5);
  if (next) {
    if (DIGIT(value[next])) {
      return;
    }
    const val = parseInt(utils_default.stringify(value, start, next), 10);
    if (val >= -32768 && val <= 32767) {
      return tokenize(value, start, next, "Edm.Int16", "Literal" /* Literal */);
    }
  }
}
function int32Value(value, index) {
  const start = index;
  const sign = SIGN(value, index);
  if (sign) {
    index = sign;
  }
  const next = utils_default.required(value, index, DIGIT, 1, 10);
  if (next) {
    if (DIGIT(value[next])) {
      return;
    }
    const val = parseInt(utils_default.stringify(value, start, next), 10);
    if (val >= -2147483648 && val <= 2147483647) {
      return tokenize(value, start, next, "Edm.Int32", "Literal" /* Literal */);
    }
  }
}
function int64Value(value, index) {
  const start = index;
  const sign = SIGN(value, index);
  if (sign) {
    index = sign;
  }
  const next = utils_default.required(value, index, DIGIT, 1, 19);
  if (next) {
    if (DIGIT(value[next])) {
      return;
    }
    const val = utils_default.stringify(value, index, next);
    if (
      val >= "0" &&
      val <=
        (value[start] === 45 ? "9223372036854775808" : "9223372036854775807")
    ) {
      return tokenize(value, start, next, "Edm.Int64", "Literal" /* Literal */);
    }
  }
}
function decimalValue(value, index) {
  const start = index;
  const sign = SIGN(value, index);
  if (sign) {
    index = sign;
  }
  const intNext = utils_default.required(value, index, DIGIT, 1);
  if (!intNext) {
    return;
  }
  let end = intNext;
  if (value[intNext] === 46) {
    end = utils_default.required(value, intNext + 1, DIGIT, 1);
    if (!end || end === intNext + 1) {
      return;
    }
  } else {
    return;
  }
  if (value[end] === 101) {
    return;
  }
  return tokenize(value, start, end, "Edm.Decimal", "Literal" /* Literal */);
}
function doubleValue(value, index) {
  const start = index;
  let end = index;
  const nanInfLen = nanInfinity(value, index);
  if (nanInfLen) {
    end += nanInfLen;
  } else {
    const sign = SIGN(value, index);
    if (sign) {
      index = sign;
    }
    const intNext = utils_default.required(value, index, DIGIT, 1);
    if (!intNext) {
      return;
    }
    let decimalNext = intNext;
    if (value[intNext] === 46) {
      decimalNext = utils_default.required(value, intNext + 1, DIGIT, 1);
      if (decimalNext === intNext + 1) {
        return;
      }
    } else {
      return;
    }
    if (value[decimalNext] === 101) {
      let next = decimalNext + 1;
      const sign2 = SIGN(value, next);
      if (sign2) {
        next = sign2;
      }
      const digitNext = utils_default.required(value, next, DIGIT, 1);
      if (digitNext) {
        end = digitNext;
      }
    } else {
      end = decimalNext;
    }
  }
  return tokenize(value, start, end, "Edm.Double", "Literal" /* Literal */);
}
function singleValue(value, index) {
  const token = doubleValue(value, index);
  if (token) {
    token.value = "Edm.Single";
  }
  return token;
}
function stringValue(value, index) {
  const start = index;
  let squote = SQUOTE(value, start);
  if (squote) {
    index = squote;
    while (index < value.length) {
      squote = SQUOTE(value, index);
      if (squote) {
        index = squote;
        squote = SQUOTE(value, index);
        if (!squote) {
          const close = CLOSE(value, index);
          const comma = COMMA(value, index);
          const amp = value[index] === 38;
          if (
            pcharNoSQUOTE(value, index) > index &&
            !amp &&
            !close &&
            !comma &&
            RWS(value, index) === index
          ) {
            return;
          }
          break;
        } else {
          index = squote;
        }
      } else {
        const nextIndex = Math.max(
          RWS(value, index),
          pcharNoSQUOTE(value, index)
        );
        if (nextIndex === index) {
          return;
        }
        index = nextIndex;
      }
    }
    squote = SQUOTE(value, index - 1) || SQUOTE(value, index - 3);
    if (!squote) {
      return;
    }
    index = squote;
    return tokenize(value, start, index, "Edm.String", "Literal" /* Literal */);
  }
}
function durationValue(value, index) {
  if (!utils_default.equals(value, index, "duration")) {
    return;
  }
  const start = index;
  index += 8;
  let squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  const sign = SIGN(value, index);
  if (sign) {
    index = sign;
  }
  if (value[index] !== 80) {
    return;
  }
  index++;
  const dayNext = utils_default.required(value, index, DIGIT, 1);
  if (dayNext === index && value[index + 1] !== 84) {
    return;
  }
  index = dayNext;
  if (value[index] === 68) {
    index++;
  }
  let end = index;
  if (value[index] === 84) {
    index++;
    const parseTimeFn = function () {
      const squote2 = SQUOTE(value, index);
      if (squote2) {
        return index;
      }
      const digitNext = utils_default.required(value, index, DIGIT, 1);
      if (digitNext === index) {
        return;
      }
      index = digitNext;
      if (value[index] === 83) {
        end = index + 1;
        return end;
      } else if (value[index] === 46) {
        index++;
        const fractionalSecondsNext = utils_default.required(
          value,
          index,
          DIGIT,
          1
        );
        if (
          fractionalSecondsNext === index ||
          value[fractionalSecondsNext] !== 83
        ) {
          return;
        }
        end = fractionalSecondsNext + 1;
        return end;
      } else if (value[index] === 72) {
        index++;
        end = index;
        return parseTimeFn();
      } else if (value[index] === 77) {
        index++;
        end = index;
        return parseTimeFn();
      }
    };
    const next = parseTimeFn();
    if (!next) {
      return;
    }
  }
  squote = SQUOTE(value, end);
  if (!squote) {
    return;
  }
  end = squote;
  return tokenize(value, start, end, "Edm.Duration", "Literal" /* Literal */);
}
function binaryValue(value, index) {
  const start = index;
  if (!utils_default.equals(value, index, "binary")) {
    return;
  }
  index += 6;
  let squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  const valStart = index;
  while (index < value.length && !(squote = SQUOTE(value, index))) {
    const end = Math.max(base64b16(value, index), base64b8(value, index));
    if (end > index) {
      index = end;
    } else if (
      base64char(value[index]) &&
      base64char(value[index + 1]) &&
      base64char(value[index + 2]) &&
      base64char(value[index + 3])
    ) {
      index += 4;
    } else {
      index++;
    }
  }
  index = squote;
  return tokenize(value, start, index, "Edm.Binary", "Literal" /* Literal */);
}
function dateValue(value, index) {
  const yearNext = year(value, index);
  if (yearNext === index || value[yearNext] !== 45) {
    return;
  }
  const monthNext = month(value, yearNext + 1);
  if (monthNext === yearNext + 1 || value[monthNext] !== 45) {
    return;
  }
  const dayNext = day(value, monthNext + 1);
  if (dayNext === monthNext + 1 || value[dayNext] === 84) {
    return;
  }
  return tokenize(value, index, dayNext, "Edm.Date", "Literal" /* Literal */);
}
function dateTimeOffsetValue(value, index) {
  const yearNext = year(value, index);
  if (yearNext === index || value[yearNext] !== 45) {
    return;
  }
  const monthNext = month(value, yearNext + 1);
  if (monthNext === yearNext + 1 || value[monthNext] !== 45) {
    return;
  }
  const dayNext = day(value, monthNext + 1);
  if (dayNext === monthNext + 1 || value[dayNext] !== 84) {
    return;
  }
  const hourNext = hour(value, dayNext + 1);
  let colon = COLON(value, hourNext);
  if (hourNext === colon || !colon) {
    return;
  }
  const minuteNext = minute(value, hourNext + 1);
  if (minuteNext === hourNext + 1) {
    return;
  }
  let end = minuteNext;
  colon = COLON(value, minuteNext);
  if (colon) {
    const secondNext = second(value, colon);
    if (secondNext === colon) {
      return;
    }
    if (value[secondNext] === 46) {
      const fractionalSecondsNext = fractionalSeconds(value, secondNext + 1);
      if (fractionalSecondsNext === secondNext + 1) {
        return;
      }
      end = fractionalSecondsNext;
    } else {
      end = secondNext;
    }
  }
  const sign = SIGN(value, end);
  if (value[end] === 90) {
    end++;
  } else if (sign) {
    const zHourNext = hour(value, sign);
    const colon2 = COLON(value, zHourNext);
    if (zHourNext === sign || !colon2) {
      return;
    }
    const zMinuteNext = minute(value, colon2);
    if (zMinuteNext === colon2) {
      return;
    }
    end = zMinuteNext;
  } else {
    return;
  }
  return tokenize(
    value,
    index,
    end,
    "Edm.DateTimeOffset",
    "Literal" /* Literal */
  );
}
function timeOfDayValue(value, index) {
  const hourNext = hour(value, index);
  let colon = COLON(value, hourNext);
  if (hourNext === index || !colon) {
    return;
  }
  const minuteNext = minute(value, colon);
  if (minuteNext === colon) {
    return;
  }
  let end = minuteNext;
  colon = COLON(value, minuteNext);
  if (colon) {
    const secondNext = second(value, colon);
    if (secondNext === colon) {
      return;
    }
    if (value[secondNext] === 46) {
      const fractionalSecondsNext = fractionalSeconds(value, secondNext + 1);
      if (fractionalSecondsNext === secondNext + 1) {
        return;
      }
      end = fractionalSecondsNext;
    } else {
      end = secondNext;
    }
  }
  return tokenize(value, index, end, "Edm.TimeOfDay", "Literal" /* Literal */);
}
function positionLiteral(value, index) {
  const longitude = doubleValue(value, index);
  if (!longitude) {
    return;
  }
  const next = RWS(value, longitude.next);
  if (next === longitude.next) {
    return;
  }
  const latitude = doubleValue(value, next);
  if (!latitude) {
    return;
  }
  return tokenize(
    value,
    index,
    latitude.next,
    { longitude, latitude },
    "Literal" /* Literal */
  );
}
function pointData(value, index) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  const position = positionLiteral(value, index);
  if (!position) {
    return;
  }
  index = position.next;
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(value, start, index, position, "Literal" /* Literal */);
}
function lineStringData(value, index) {
  return multiGeoLiteralFactory(value, index, "", positionLiteral);
}
function ringLiteral(value, index) {
  return multiGeoLiteralFactory(value, index, "", positionLiteral);
}
function polygonData(value, index) {
  return multiGeoLiteralFactory(value, index, "", ringLiteral);
}
function sridLiteral(value, index) {
  if (!utils_default.equals(value, index, "SRID")) {
    return;
  }
  const start = index;
  index += 4;
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index++;
  const digit = utils_default.required(value, index, DIGIT, 1, 5);
  if (!digit) {
    return;
  }
  index = digit;
  const semi = SEMI(value, index);
  if (!semi) {
    return;
  }
  index = semi;
  return tokenize(value, start, index, "SRID", "Literal" /* Literal */);
}
function pointLiteral(value, index) {
  if (
    !(
      utils_default.equals(value, index, "Point") ||
      utils_default.equals(value, index, "POINT")
    )
  ) {
    return;
  }
  const start = index;
  index += 5;
  const data = pointData(value, index);
  if (!data) {
    return;
  }
  return tokenize(value, start, data.next, data, "Literal" /* Literal */);
}
function polygonLiteral(value, index) {
  if (
    !(
      utils_default.equals(value, index, "Polygon") ||
      utils_default.equals(value, index, "POLYGON")
    )
  ) {
    return;
  }
  const start = index;
  index += 7;
  const data = polygonData(value, index);
  if (!data) {
    return;
  }
  return tokenize(value, start, data.next, data, "Literal" /* Literal */);
}
function collectionLiteral(value, index) {
  return multiGeoLiteralFactory(value, index, "Collection", geoLiteral);
}
function lineStringLiteral(value, index) {
  if (!utils_default.equals(value, index, "LineString")) {
    return;
  }
  const start = index;
  index += 10;
  const data = lineStringData(value, index);
  if (!data) {
    return;
  }
  index = data.next;
  return tokenize(value, start, index, data, "Literal" /* Literal */);
}
function multiLineStringLiteral(value, index) {
  return multiGeoLiteralOptionalFactory(
    value,
    index,
    "MultiLineString",
    lineStringData
  );
}
function multiPointLiteral(value, index) {
  return multiGeoLiteralOptionalFactory(value, index, "MultiPoint", pointData);
}
function multiPolygonLiteral(value, index) {
  return multiGeoLiteralOptionalFactory(
    value,
    index,
    "MultiPolygon",
    polygonData
  );
}
function multiGeoLiteralFactory(value, index, prefix, itemLiteral) {
  if (!utils_default.equals(value, index, `${prefix}(`)) {
    return;
  }
  const start = index;
  index += prefix.length + 1;
  const items = [];
  let geo = itemLiteral(value, index);
  if (!geo) {
    return;
  }
  index = geo.next;
  while (geo) {
    items.push(geo);
    const close = CLOSE(value, index);
    if (close) {
      index = close;
      break;
    }
    const comma = COMMA(value, index);
    if (!comma) {
      return;
    }
    index = comma;
    geo = itemLiteral(value, index);
    if (!geo) {
      return;
    }
    index = geo.next;
  }
  return tokenize(value, start, index, { items }, "Literal" /* Literal */);
}
function multiGeoLiteralOptionalFactory(value, index, prefix, itemLiteral) {
  if (!utils_default.equals(value, index, `${prefix}(`)) {
    return;
  }
  const start = index;
  index += prefix.length + 1;
  const items = [];
  let close = CLOSE(value, index);
  if (!close) {
    let geo = itemLiteral(value, index);
    if (!geo) {
      return;
    }
    index = geo.next;
    while (geo) {
      items.push(geo);
      close = CLOSE(value, index);
      if (close) {
        index = close;
        break;
      }
      const comma = COMMA(value, index);
      if (!comma) {
        return;
      }
      index = comma;
      geo = itemLiteral(value, index);
      if (!geo) {
        return;
      }
      index = geo.next;
    }
  } else {
    index++;
  }
  return tokenize(value, start, index, { items }, "Literal" /* Literal */);
}
function geoLiteral(value, index) {
  return (
    collectionLiteral(value, index) ||
    lineStringLiteral(value, index) ||
    multiPointLiteral(value, index) ||
    multiLineStringLiteral(value, index) ||
    multiPolygonLiteral(value, index) ||
    pointLiteral(value, index) ||
    polygonLiteral(value, index)
  );
}
function fullPointLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, pointLiteral);
}
function fullCollectionLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, collectionLiteral);
}
function fullLineStringLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, lineStringLiteral);
}
function fullMultiLineStringLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, multiLineStringLiteral);
}
function fullMultiPointLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, multiPointLiteral);
}
function fullMultiPolygonLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, multiPolygonLiteral);
}
function fullPolygonLiteral(value, index) {
  return fullGeoLiteralFactory(value, index, polygonLiteral);
}
function fullGeoLiteralFactory(value, index, literal) {
  const srid = sridLiteral(value, index);
  if (!srid) {
    return;
  }
  const token = literal(value, srid.next);
  if (!token) {
    return;
  }
  return tokenize(
    value,
    index,
    token.next,
    { srid, value: token },
    "Literal" /* Literal */
  );
}
function geographyCollection(value, index) {
  const prefix = geographyPrefix(value, index);
  if (prefix === index) {
    return;
  }
  const start = index;
  index = prefix;
  let squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  const point = fullCollectionLiteral(value, index);
  if (!point) {
    return;
  }
  index = point.next;
  squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  return tokenize(
    value,
    start,
    index,
    "Edm.GeographyCollection",
    "Literal" /* Literal */
  );
}
function geographyLineString(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeographyLineString",
    geographyPrefix,
    fullLineStringLiteral
  );
}
function geographyMultiLineString(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeographyMultiLineString",
    geographyPrefix,
    fullMultiLineStringLiteral
  );
}
function geographyMultiPoint(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeographyMultiPoint",
    geographyPrefix,
    fullMultiPointLiteral
  );
}
function geographyMultiPolygon(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeographyMultiPolygon",
    geographyPrefix,
    fullMultiPolygonLiteral
  );
}
function geographyPoint(value, index) {
  return (
    geoLiteralFactory(
      value,
      index,
      "Edm.GeographyPoint",
      geographyPrefix,
      fullPointLiteral
    ) ||
    geoLiteralFactory(
      value,
      index,
      "Edm.GeographyPoint",
      geographyPrefix,
      pointLiteral
    )
  );
}
function geographyPolygon(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeographyPolygon",
    geographyPrefix,
    fullPolygonLiteral
  );
}
function geometryCollection(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryCollection",
    geometryPrefix,
    fullCollectionLiteral
  );
}
function geometryLineString(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryLineString",
    geometryPrefix,
    fullLineStringLiteral
  );
}
function geometryMultiLineString(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryMultiLineString",
    geometryPrefix,
    fullMultiLineStringLiteral
  );
}
function geometryMultiPoint(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryMultiPoint",
    geometryPrefix,
    fullMultiPointLiteral
  );
}
function geometryMultiPolygon(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryMultiPolygon",
    geometryPrefix,
    fullMultiPolygonLiteral
  );
}
function geometryPoint(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryPoint",
    geometryPrefix,
    fullPointLiteral
  );
}
function geometryPolygon(value, index) {
  return geoLiteralFactory(
    value,
    index,
    "Edm.GeometryPolygon",
    geometryPrefix,
    fullPolygonLiteral
  );
}
function geoLiteralFactory(value, index, type, prefix, literal) {
  const prefixNext = prefix(value, index);
  if (prefixNext === index) {
    return;
  }
  const start = index;
  index = prefixNext;
  let squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  const data = literal(value, index);
  if (!data) {
    return;
  }
  index = data.next;
  squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  return tokenize(value, start, index, type, "Literal" /* Literal */);
}
function primitiveLiteral(value, index) {
  return (
    nullValue(value, index) ||
    booleanValue(value, index) ||
    guidValue(value, index) ||
    dateValue(value, index) ||
    dateTimeOffsetValue(value, index) ||
    timeOfDayValue(value, index) ||
    decimalValue(value, index) ||
    doubleValue(value, index) ||
    singleValue(value, index) ||
    sbyteValue(value, index) ||
    byteValue(value, index) ||
    int16Value(value, index) ||
    int32Value(value, index) ||
    int64Value(value, index) ||
    stringValue(value, index) ||
    durationValue(value, index) ||
    binaryValue(value, index) ||
    enumeration(value, index) ||
    geographyCollection(value, index) ||
    geographyLineString(value, index) ||
    geographyMultiLineString(value, index) ||
    geographyMultiPoint(value, index) ||
    geographyMultiPolygon(value, index) ||
    geographyPoint(value, index) ||
    geographyPolygon(value, index) ||
    geometryCollection(value, index) ||
    geometryLineString(value, index) ||
    geometryMultiLineString(value, index) ||
    geometryMultiPoint(value, index) ||
    geometryMultiPolygon(value, index) ||
    geometryPoint(value, index) ||
    geometryPolygon(value, index)
  );
}

// src/nameOrIdentifier.ts
function enumeration(value, index) {
  const type = qualifiedEnumTypeName(value, index);
  if (!type) {
    return;
  }
  const start = index;
  index = type.next;
  let squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  const enumVal = enumValue(value, index);
  if (!enumVal) {
    return;
  }
  index = enumVal.next;
  squote = SQUOTE(value, index);
  if (!squote) {
    return;
  }
  index = squote;
  return tokenize(
    value,
    start,
    index,
    {
      name: type,
      value: enumVal,
    },
    "Enum" /* Enum */
  );
}
function enumValue(value, index) {
  let val = singleEnumValue(value, index);
  if (!val) {
    return;
  }
  const start = index;
  const arr = [];
  while (val) {
    arr.push(val);
    index = val.next;
    const comma = COMMA(value, val.next);
    if (comma) {
      index = comma;
      val = singleEnumValue(value, index);
    } else {
      break;
    }
  }
  return tokenize(
    value,
    start,
    index,
    { values: arr },
    "EnumValue" /* EnumValue */
  );
}
function singleEnumValue(value, index) {
  return enumerationMember(value, index) || enumMemberValue(value, index);
}
function enumMemberValue(value, index) {
  const token = int64Value(value, index);
  if (token) {
    token.type = "EnumMemberValue" /* EnumMemberValue */;
    return token;
  }
}
function singleQualifiedTypeName(value, index) {
  return (
    qualifiedEntityTypeName(value, index) ||
    qualifiedComplexTypeName(value, index) ||
    qualifiedTypeDefinitionName(value, index) ||
    qualifiedEnumTypeName(value, index) ||
    primitiveTypeName(value, index)
  );
}
function qualifiedTypeName(value, index) {
  if (utils_default.equals(value, index, "Collection")) {
    const start = index;
    index += 10;
    let squote = SQUOTE(value, index);
    if (!squote) {
      return;
    }
    index = squote;
    const token = singleQualifiedTypeName(value, index);
    if (!token) {
      return;
    }
    index = token.next;
    squote = SQUOTE(value, index);
    if (!squote) {
      return;
    }
    index = squote;
    token.position = start;
    token.next = index;
    token.raw = utils_default.stringify(value, token.position, token.next);
    token.type = "Collection" /* Collection */;
  } else {
    return singleQualifiedTypeName(value, index);
  }
}
function qualifiedEntityTypeName(value, index, metadataContext) {
  const start = index;
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  let schema;
  if (typeof metadataContext === "object") {
    schema = getMetadataRoot(metadataContext).schemas.filter(
      (it) =>
        it.namespace === utils_default.stringify(value, start, namespaceNext)
    )[0];
  }
  const name = entityTypeName(value, namespaceNext + 1, schema);
  if (!name) {
    return;
  }
  name.value.namespace = utils_default.stringify(value, start, namespaceNext);
  return tokenize(
    value,
    start,
    name.next,
    name,
    "QualifiedEntityTypeName" /* QualifiedEntityTypeName */
  );
}
function qualifiedComplexTypeName(value, index, metadataContext) {
  const start = index;
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  let schema;
  if (typeof metadataContext === "object") {
    schema = getMetadataRoot(metadataContext).schemas.filter(
      (it) =>
        it.namespace === utils_default.stringify(value, start, namespaceNext)
    )[0];
  }
  const name = complexTypeName(value, namespaceNext + 1, schema);
  if (!name) {
    return;
  }
  name.value.namespace = utils_default.stringify(value, start, namespaceNext);
  return tokenize(
    value,
    start,
    name.next,
    name,
    "QualifiedComplexTypeName" /* QualifiedComplexTypeName */
  );
}
function qualifiedTypeDefinitionName(value, index) {
  const start = index;
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  const nameNext = typeDefinitionName(value, namespaceNext + 1);
  if (nameNext && nameNext.next === namespaceNext + 1) {
    return;
  }
  return tokenize(
    value,
    start,
    nameNext.next,
    "TypeDefinitionName",
    "Identifier" /* Identifier */
  );
}
function qualifiedEnumTypeName(value, index) {
  const start = index;
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  const nameNext = enumerationTypeName(value, namespaceNext + 1);
  if (nameNext && nameNext.next === namespaceNext + 1) {
    return;
  }
  return tokenize(
    value,
    start,
    nameNext.next,
    "EnumTypeName",
    "Identifier" /* Identifier */
  );
}
function namespace(value, index) {
  let part = namespacePart(value, index);
  while (part && part.next > index) {
    index = part.next;
    if (value[part.next] === 46) {
      index++;
      part = namespacePart(value, index);
      if (part && value[part.next] !== 46) {
        return index - 1;
      }
    }
  }
  return index - 1;
}
function odataIdentifier(value, index, tokenType) {
  const start = index;
  if (identifierLeadingCharacter(value[index])) {
    index++;
    while (
      index < value.length &&
      index - start < 128 &&
      identifierCharacter(value[index])
    ) {
      index++;
    }
  }
  if (index > start) {
    return tokenize(
      value,
      start,
      index,
      { name: utils_default.stringify(value, start, index) },
      tokenType || "ODataIdentifier" /* ODataIdentifier */
    );
  }
}
function namespacePart(value, index) {
  return odataIdentifier(value, index, "NamespacePart" /* NamespacePart */);
}
function entitySetName(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntitySetName" /* EntitySetName */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    let entitySet;
    metadataContext.dataServices.schemas.forEach((schema) =>
      schema.entityContainer.forEach((container) =>
        container.entitySets.filter((set) => {
          const eq = set.name === token.raw;
          if (eq) {
            entitySet = set;
          }
          return eq;
        })
      )
    );
    if (!entitySet) {
      return;
    }
    let entityType;
    metadataContext.dataServices.schemas.forEach(
      (schema) =>
        entitySet.entityType.indexOf(`${schema.namespace}.`) === 0 &&
        schema.entityTypes.filter((type) => {
          const eq =
            type.name ===
            entitySet.entityType.replace(`${schema.namespace}.`, "");
          if (eq) {
            entityType = type;
          }
          return eq;
        })
    );
    if (!entityType) {
      return;
    }
    token.metadata = entityType;
  }
  return token;
}
function singletonEntity(value, index) {
  return odataIdentifier(value, index, "SingletonEntity" /* SingletonEntity */);
}
function entityTypeName(value, index, schema) {
  const token = odataIdentifier(
    value,
    index,
    "EntityTypeName" /* EntityTypeName */
  );
  if (!token) {
    return;
  }
  if (typeof schema === "object") {
    const type = schema.entityTypes.filter((it) => it.name === token.raw)[0];
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function complexTypeName(value, index, schema) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexTypeName" /* ComplexTypeName */
  );
  if (!token) {
    return;
  }
  if (typeof schema === "object") {
    const type = schema.complexTypes.filter((it) => it.name === token.raw)[0];
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function typeDefinitionName(value, index) {
  return odataIdentifier(
    value,
    index,
    "TypeDefinitionName" /* TypeDefinitionName */
  );
}
function enumerationTypeName(value, index) {
  return odataIdentifier(
    value,
    index,
    "EnumerationTypeName" /* EnumerationTypeName */
  );
}
function enumerationMember(value, index) {
  return odataIdentifier(
    value,
    index,
    "EnumerationMember" /* EnumerationMember */
  );
}
function termName(value, index) {
  return odataIdentifier(value, index, "TermName" /* TermName */);
}
function primitiveTypeName(value, index) {
  if (!utils_default.equals(value, index, "Edm.")) {
    return;
  }
  const start = index;
  index += 4;
  const end =
    index +
    (utils_default.equals(value, index, "Binary") ||
      utils_default.equals(value, index, "Boolean") ||
      utils_default.equals(value, index, "Byte") ||
      utils_default.equals(value, index, "Date") ||
      utils_default.equals(value, index, "DateTimeOffset") ||
      utils_default.equals(value, index, "Decimal") ||
      utils_default.equals(value, index, "Double") ||
      utils_default.equals(value, index, "Duration") ||
      utils_default.equals(value, index, "Guid") ||
      utils_default.equals(value, index, "Int16") ||
      utils_default.equals(value, index, "Int32") ||
      utils_default.equals(value, index, "Int64") ||
      utils_default.equals(value, index, "SByte") ||
      utils_default.equals(value, index, "Single") ||
      utils_default.equals(value, index, "Stream") ||
      utils_default.equals(value, index, "String") ||
      utils_default.equals(value, index, "TimeOfDay") ||
      utils_default.equals(value, index, "GeographyCollection") ||
      utils_default.equals(value, index, "GeographyLineString") ||
      utils_default.equals(value, index, "GeographyMultiLineString") ||
      utils_default.equals(value, index, "GeographyMultiPoint") ||
      utils_default.equals(value, index, "GeographyMultiPolygon") ||
      utils_default.equals(value, index, "GeographyPoint") ||
      utils_default.equals(value, index, "GeographyPolygon") ||
      utils_default.equals(value, index, "GeometryCollection") ||
      utils_default.equals(value, index, "GeometryLineString") ||
      utils_default.equals(value, index, "GeometryMultiLineString") ||
      utils_default.equals(value, index, "GeometryMultiPoint") ||
      utils_default.equals(value, index, "GeometryMultiPolygon") ||
      utils_default.equals(value, index, "GeometryPoint") ||
      utils_default.equals(value, index, "GeometryPolygon"));
  if (end > index) {
    return tokenize(
      value,
      start,
      end,
      "PrimitiveTypeName",
      "Identifier" /* Identifier */
    );
  }
}
var primitiveTypes = [
  "Edm.Binary",
  "Edm.Boolean",
  "Edm.Byte",
  "Edm.Date",
  "Edm.DateTimeOffset",
  "Edm.Decimal",
  "Edm.Double",
  "Edm.Duration",
  "Edm.Guid",
  "Edm.Int16",
  "Edm.Int32",
  "Edm.Int64",
  "Edm.SByte",
  "Edm.Single",
  "Edm.Stream",
  "Edm.String",
  "Edm.TimeOfDay",
  "Edm.GeographyCollection",
  "Edm.GeographyLineString",
  "Edm.GeographyMultiLineString",
  "Edm.GeographyMultiPoint",
  "Edm.GeographyMultiPolygon",
  "Edm.GeographyPoint",
  "Edm.GeographyPolygon",
  "Edm.GeometryCollection",
  "Edm.GeometryLineString",
  "Edm.GeometryMultiLineString",
  "Edm.GeometryMultiPoint",
  "Edm.GeometryMultiPolygon",
  "Edm.GeometryPoint",
  "Edm.GeometryPolygon",
];
function isPrimitiveTypeName(type, metadataContext) {
  const root = getMetadataRoot(metadataContext);
  const schemas =
    root.schemas || (root.dataServices && root.dataServices.schemas) || [];
  const schema = schemas.filter(
    (it) => type.indexOf(`${it.namespace}.`) === 0
  )[0];
  if (schema) {
    return (
      ((schema.enumTypes &&
        schema.enumTypes.filter(
          (it) => it.name === type.split(".").pop()
        )[0]) ||
        (schema.typeDefinitions &&
          schema.typeDefinitions.filter(
            (it) => it.name === type.split(".").pop()
          )[0])) &&
      !(
        (schema.entityTypes &&
          schema.entityTypes.filter(
            (it) => it.name === type.split(".").pop()
          )[0]) ||
        (schema.complexTypes &&
          schema.complexTypes.filter(
            (it) => it.name === type.split(".").pop()
          )[0])
      )
    );
  }
  return primitiveTypes.indexOf(type) >= 0;
}
function getMetadataRoot(metadataContext) {
  let root = metadataContext;
  while (root.parent) {
    root = root.parent;
  }
  return root.dataServices || root;
}
function primitiveProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "PrimitiveProperty" /* PrimitiveProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.properties.length; i++) {
      const prop = metadataContext.properties[i];
      if (prop.name === token.raw) {
        if (
          prop.type.indexOf("Collection") === 0 ||
          !isPrimitiveTypeName(prop.type, metadataContext)
        ) {
          return;
        }
        token.metadata = prop;
        if (
          metadataContext.key &&
          metadataContext.key.propertyRefs.filter((it) => it.name === prop.name)
            .length > 0
        ) {
          token.type = "PrimitiveKeyProperty" /* PrimitiveKeyProperty */;
        }
        break;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function primitiveKeyProperty(value, index, metadataContext) {
  const token = primitiveProperty(value, index, metadataContext);
  if (
    token &&
    token.type === "PrimitiveKeyProperty" /* PrimitiveKeyProperty */
  ) {
    return token;
  }
}
function primitiveColProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "PrimitiveCollectionProperty" /* PrimitiveCollectionProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.properties.length; i++) {
      const prop = metadataContext.properties[i];
      if (prop.name === token.raw) {
        if (
          prop.type.indexOf("Collection") === -1 ||
          !isPrimitiveTypeName(prop.type.slice(11, -1), metadataContext)
        ) {
          return;
        }
        token.metadata = prop;
        if (
          metadataContext.key.propertyRefs.filter((it) => it.name === prop.name)
            .length > 0
        ) {
          token.type = "PrimitiveKeyProperty" /* PrimitiveKeyProperty */;
        }
        break;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function complexProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexProperty" /* ComplexProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.properties.length; i++) {
      const prop = metadataContext.properties[i];
      if (prop.name === token.raw) {
        if (
          prop.type.indexOf("Collection") === 0 ||
          isPrimitiveTypeName(prop.type, metadataContext)
        ) {
          return;
        }
        const root = getMetadataRoot(metadataContext);
        const schema = root.schemas.filter(
          (it) => prop.type.indexOf(`${it.namespace}.`) === 0
        )[0];
        if (!schema) {
          return;
        }
        const complexType = schema.complexTypes.filter(
          (it) => it.name === prop.type.split(".").pop()
        )[0];
        if (!complexType) {
          return;
        }
        token.metadata = complexType;
        break;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function complexColProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexCollectionProperty" /* ComplexCollectionProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.properties.length; i++) {
      const prop = metadataContext.properties[i];
      if (prop.name === token.raw) {
        if (
          prop.type.indexOf("Collection") === -1 ||
          isPrimitiveTypeName(prop.type.slice(11, -1), metadataContext)
        ) {
          return;
        }
        const root = getMetadataRoot(metadataContext);
        const schema = root.schemas.filter(
          (it) => prop.type.slice(11, -1).indexOf(`${it.namespace}.`) === 0
        )[0];
        if (!schema) {
          return;
        }
        const complexType = schema.complexTypes.filter(
          (it) => it.name === prop.type.slice(11, -1).split(".").pop()
        )[0];
        if (!complexType) {
          return;
        }
        token.metadata = complexType;
        break;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function streamProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "StreamProperty" /* StreamProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.properties.length; i++) {
      const prop = metadataContext.properties[i];
      if (prop.name === token.raw) {
        if (prop.type !== "Edm.Stream") {
          return;
        }
        token.metadata = prop;
        break;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function navigationProperty(value, index, metadataContext) {
  return (
    entityNavigationProperty(value, index, metadataContext) ||
    entityColNavigationProperty(value, index, metadataContext)
  );
}
function entityNavigationProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntityNavigationProperty" /* EntityNavigationProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.navigationProperties.length; i++) {
      const prop = metadataContext.navigationProperties[i];
      if (
        prop.name === token.raw &&
        prop.type.indexOf("Collection") === -1 &&
        !isPrimitiveTypeName(prop.type.slice(11, -1), metadataContext)
      ) {
        const root = getMetadataRoot(metadataContext);
        const schema = root.schemas.filter(
          (it) => prop.type.indexOf(`${it.namespace}.`) === 0
        )[0];
        if (!schema) {
          return;
        }
        const entityType = schema.entityTypes.filter(
          (it) => it.name === prop.type.split(".").pop()
        )[0];
        if (!entityType) {
          return;
        }
        token.metadata = entityType;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function entityColNavigationProperty(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntityCollectionNavigationProperty" /* EntityCollectionNavigationProperty */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    for (let i = 0; i < metadataContext.navigationProperties.length; i++) {
      const prop = metadataContext.navigationProperties[i];
      if (
        prop.name === token.raw &&
        prop.type.indexOf("Collection") === 0 &&
        !isPrimitiveTypeName(prop.type.slice(11, -1), metadataContext)
      ) {
        const root = getMetadataRoot(metadataContext);
        const schema = root.schemas.filter(
          (it) => prop.type.slice(11, -1).indexOf(`${it.namespace}.`) === 0
        )[0];
        if (!schema) {
          return;
        }
        const entityType = schema.entityTypes.filter(
          (it) => it.name === prop.type.slice(11, -1).split(".").pop()
        )[0];
        if (!entityType) {
          return;
        }
        token.metadata = entityType;
      }
    }
    if (!token.metadata) {
      return;
    }
  }
  return token;
}
function action(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(value, index, "Action" /* Action */);
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "action",
      metadataContext,
      token,
      isCollection,
      false,
      false,
      "entityTypes"
    );
    if (!type) {
      return;
    }
  }
  return token;
}
function actionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ActionImport" /* ActionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType("action", metadataContext, token);
    if (!type) {
      return;
    }
  }
  return token;
}
function odataFunction(value, index) {
  return (
    entityFunction(value, index) ||
    entityColFunction(value, index) ||
    complexFunction(value, index) ||
    complexColFunction(value, index) ||
    primitiveFunction(value, index) ||
    primitiveColFunction(value, index)
  );
}
function getOperationType(
  operation,
  metadataContext,
  token,
  isBoundCollection,
  isCollection,
  isPrimitive,
  types
) {
  let bindingParameterType = `${metadataContext.parent.namespace}.${metadataContext.name}`;
  if (isBoundCollection) {
    bindingParameterType = `Collection(${bindingParameterType})`;
  }
  let fnDef;
  const root = getMetadataRoot(metadataContext);
  for (let i = 0; i < root.schemas.length; i++) {
    const schema = root.schemas[i];
    for (let j = 0; j < schema[`${operation}s`].length; j++) {
      const fn = schema[`${operation}s`][j];
      if (fn.name === token.raw && fn.isBound) {
        for (let k = 0; k < fn.parameters.length; k++) {
          const param2 = fn.parameters[k];
          if (
            param2.name === "bindingParameter" &&
            param2.type === bindingParameterType
          ) {
            fnDef = fn;
            break;
          }
        }
      }
      if (fnDef) {
        break;
      }
    }
    if (fnDef) {
      break;
    }
  }
  if (!fnDef) {
    return;
  }
  if (operation === "action") {
    return fnDef;
  }
  if (fnDef.returnType.type.indexOf("Collection") === isCollection ? -1 : 0) {
    return;
  }
  const elementType = isCollection
    ? fnDef.returnType.type.slice(11, -1)
    : fnDef.returnType.type;
  if (isPrimitiveTypeName(elementType, metadataContext) && !isPrimitive) {
    return;
  }
  if (!isPrimitiveTypeName(elementType, metadataContext) && isPrimitive) {
    return;
  }
  if (isPrimitive) {
    return elementType;
  }
  let type;
  for (let i = 0; i < root.schemas.length; i++) {
    const schema = root.schemas[i];
    if (elementType.indexOf(`${schema.namespace}.`) === 0) {
      for (let j = 0; j < schema[types].length; j++) {
        const it = schema[types][j];
        if (`${schema.namespace}.${it.name}` === elementType) {
          type = it;
          break;
        }
      }
    }
    if (type) {
      break;
    }
  }
  return type;
}
function entityFunction(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntityFunction" /* EntityFunction */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "function",
      metadataContext,
      token,
      isCollection,
      false,
      false,
      "entityTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function entityColFunction(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntityCollectionFunction" /* EntityCollectionFunction */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "function",
      metadataContext,
      token,
      isCollection,
      true,
      false,
      "entityTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function complexFunction(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexFunction" /* ComplexFunction */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "function",
      metadataContext,
      token,
      isCollection,
      false,
      false,
      "complexTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function complexColFunction(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexCollectionFunction" /* ComplexCollectionFunction */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "function",
      metadataContext,
      token,
      isCollection,
      true,
      false,
      "complexTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function primitiveFunction(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "PrimitiveFunction" /* PrimitiveFunction */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "function",
      metadataContext,
      token,
      isCollection,
      false,
      true
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function primitiveColFunction(value, index, isCollection, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "PrimitiveCollectionFunction" /* PrimitiveCollectionFunction */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationType(
      "function",
      metadataContext,
      token,
      isCollection,
      true,
      true
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function getOperationImportType(
  operation,
  metadataContext,
  token,
  isCollection,
  isPrimitive,
  types
) {
  let fnImport;
  for (let i = 0; i < metadataContext.dataServices.schemas.length; i++) {
    const schema = metadataContext.dataServices.schemas[i];
    for (let j = 0; j < schema.entityContainer.length; j++) {
      const container = schema.entityContainer[j];
      for (let k = 0; k < container[`${operation}Imports`].length; k++) {
        const it = container[`${operation}Imports`][k];
        if (it.name === token.raw) {
          fnImport = it;
          break;
        }
      }
      if (fnImport) {
        break;
      }
    }
    if (fnImport) {
      break;
    }
  }
  if (!fnImport) {
    return;
  }
  let fn;
  for (let i = 0; i < metadataContext.dataServices.schemas.length; i++) {
    const schema = metadataContext.dataServices.schemas[i];
    if (fnImport[operation].indexOf(`${schema.namespace}.`) === 0) {
      for (let j = 0; j < schema[`${operation}s`].length; j++) {
        const it = schema[`${operation}s`][j];
        if (it.name === fnImport.name) {
          fn = it;
          break;
        }
      }
    }
    if (fn) {
      break;
    }
  }
  if (!fn) {
    return;
  }
  if (operation === "action") {
    return fn;
  }
  if (fn.returnType.type.indexOf("Collection") === isCollection ? -1 : 0) {
    return;
  }
  const elementType = isCollection
    ? fn.returnType.type.slice(11, -1)
    : fn.returnType.type;
  if (isPrimitiveTypeName(elementType, metadataContext) && !isPrimitive) {
    return;
  }
  if (!isPrimitiveTypeName(elementType, metadataContext) && isPrimitive) {
    return;
  }
  if (isPrimitive) {
    return elementType;
  }
  let type;
  for (let i = 0; i < metadataContext.dataServices.schemas.length; i++) {
    const schema = metadataContext.dataServices.schemas[i];
    if (elementType.indexOf(`${schema.namespace}.`) === 0) {
      for (let j = 0; j < schema[types].length; j++) {
        const it = schema[types][j];
        if (`${schema.namespace}.${it.name}` === elementType) {
          type = it;
          break;
        }
      }
    }
    if (type) {
      break;
    }
  }
  return type;
}
function entityFunctionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntityFunctionImport" /* EntityFunctionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType(
      "function",
      metadataContext,
      token,
      false,
      false,
      "entityTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function entityColFunctionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "EntityCollectionFunctionImport" /* EntityCollectionFunctionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType(
      "function",
      metadataContext,
      token,
      true,
      false,
      "entityTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function complexFunctionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexFunctionImport" /* ComplexFunctionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType(
      "function",
      metadataContext,
      token,
      false,
      false,
      "complexTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function complexColFunctionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "ComplexCollectionFunctionImport" /* ComplexCollectionFunctionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType(
      "function",
      metadataContext,
      token,
      true,
      false,
      "complexTypes"
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function primitiveFunctionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "PrimitiveFunctionImport" /* PrimitiveFunctionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType(
      "function",
      metadataContext,
      token,
      false,
      true
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}
function primitiveColFunctionImport(value, index, metadataContext) {
  const token = odataIdentifier(
    value,
    index,
    "PrimitiveCollectionFunctionImport" /* PrimitiveCollectionFunctionImport */
  );
  if (!token) {
    return;
  }
  if (typeof metadataContext === "object") {
    const type = getOperationImportType(
      "function",
      metadataContext,
      token,
      true,
      true
    );
    if (!type) {
      return;
    }
    token.metadata = type;
  }
  return token;
}

// src/json.ts
function complexColInUri(value, index) {
  const begin = beginArray(value, index);
  if (begin === index) {
    return;
  }
  const start = index;
  index = begin;
  const items = [];
  let token = complexInUri(value, index);
  if (token) {
    while (token) {
      items.push(token);
      index = token.next;
      const end = endArray(value, index);
      if (end > index) {
        index = end;
        break;
      } else {
        const separator = valueSeparator(value, index);
        if (separator === index) {
          return;
        }
        index = separator;
        token = complexInUri(value, index);
        if (!token) {
          return;
        }
      }
    }
  } else {
    const end = endArray(value, index);
    if (end === index) {
      return;
    }
    index = end;
  }
  return tokenize(value, start, index, { items }, "Array" /* Array */);
}
function complexInUri(value, index) {
  const begin = beginObject(value, index);
  if (begin === index) {
    return;
  }
  const start = index;
  index = begin;
  const items = [];
  let token =
    annotationInUri(value, index) ||
    primitivePropertyInUri(value, index) ||
    complexPropertyInUri(value, index) ||
    collectionPropertyInUri(value, index) ||
    navigationPropertyInUri(value, index);
  if (token) {
    while (token) {
      items.push(token);
      index = token.next;
      const end = endObject(value, index);
      if (end > index) {
        index = end;
        break;
      } else {
        const separator = valueSeparator(value, index);
        if (separator === index) {
          return;
        }
        index = separator;
        token =
          annotationInUri(value, index) ||
          primitivePropertyInUri(value, index) ||
          complexPropertyInUri(value, index) ||
          collectionPropertyInUri(value, index) ||
          navigationPropertyInUri(value, index);
        if (!token) {
          return;
        }
      }
    }
  } else {
    const end = endObject(value, index);
    if (end === index) {
      return;
    }
    index = end;
  }
  return tokenize(value, start, index, { items }, "Object" /* Object */);
}
function collectionPropertyInUri(value, index) {
  let mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  const start = index;
  index = mark;
  const prop =
    primitiveColProperty(value, index) || complexColProperty(value, index);
  if (!prop) {
    return;
  }
  index = prop.next;
  mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  index = mark;
  const separator = nameSeparator(value, index);
  if (separator === index) {
    return;
  }
  index = separator;
  const propValue =
    prop.type ===
    "PrimitiveCollectionProperty" /* PrimitiveCollectionProperty */
      ? primitiveColInUri(value, index)
      : complexColInUri(value, index);
  if (!propValue) {
    return;
  }
  index = propValue.next;
  return tokenize(
    value,
    start,
    index,
    { key: prop, value: propValue },
    "Property" /* Property */
  );
}
function primitiveColInUri(value, index) {
  const begin = beginArray(value, index);
  if (begin === index) {
    return;
  }
  const start = index;
  index = begin;
  const items = [];
  let token = primitiveLiteralInJSON(value, index);
  if (token) {
    while (token) {
      items.push(token);
      index = token.next;
      const end = endArray(value, index);
      if (end > index) {
        index = end;
        break;
      } else {
        const separator = valueSeparator(value, index);
        if (separator === index) {
          return;
        }
        index = separator;
        token = primitiveLiteralInJSON(value, index);
        if (!token) {
          return;
        }
      }
    }
  } else {
    const end = endArray(value, index);
    if (end === index) {
      return;
    }
    index = end;
  }
  return tokenize(value, start, index, { items }, "Array" /* Array */);
}
function complexPropertyInUri(value, index) {
  let mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  const start = index;
  index = mark;
  const prop = complexProperty(value, index);
  if (!prop) {
    return;
  }
  index = prop.next;
  mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  index = mark;
  const separator = nameSeparator(value, index);
  if (separator === index) {
    return;
  }
  index = separator;
  const propValue = complexInUri(value, index);
  if (!propValue) {
    return;
  }
  index = propValue.next;
  return tokenize(
    value,
    start,
    index,
    { key: prop, value: propValue },
    "Property" /* Property */
  );
}
function annotationInUri(value, index) {
  let mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  const start = index;
  index = mark;
  const at = AT(value, index);
  if (!at) {
    return;
  }
  index = at;
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index) {
    return;
  }
  const namespaceStart = index;
  index = namespaceNext;
  if (value[index] !== 46) {
    return;
  }
  index++;
  const term = termName(value, index);
  if (!term) {
    return;
  }
  index = term.next;
  mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  index = mark;
  const separator = nameSeparator(value, index);
  if (separator === index) {
    return;
  }
  index = separator;
  const token =
    complexInUri(value, index) ||
    complexColInUri(value, index) ||
    primitiveLiteralInJSON(value, index) ||
    primitiveColInUri(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(
    value,
    start,
    index,
    {
      key: `@${utils_default.stringify(value, namespaceStart, namespaceNext)}.${
        term.raw
      }`,
      value: token,
    },
    "Annotation" /* Annotation */
  );
}
function keyValuePairInUri(value, index, keyFn, valueFn) {
  let mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  const start = index;
  index = mark;
  const prop = keyFn(value, index);
  if (!prop) {
    return;
  }
  index = prop.next;
  mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  index = mark;
  const separator = nameSeparator(value, index);
  if (separator === index) {
    return;
  }
  index = separator;
  const propValue = valueFn(value, index);
  if (!propValue) {
    return;
  }
  index = propValue.next;
  return tokenize(
    value,
    start,
    index,
    { key: prop, value: propValue },
    "Property" /* Property */
  );
}
function primitivePropertyInUri(value, index) {
  return keyValuePairInUri(
    value,
    index,
    primitiveProperty,
    primitiveLiteralInJSON
  );
}
function navigationPropertyInUri(value, index) {
  return (
    singleNavPropInJSON(value, index) || collectionNavPropInJSON(value, index)
  );
}
function singleNavPropInJSON(value, index) {
  return keyValuePairInUri(value, index, entityNavigationProperty, rootExpr);
}
function collectionNavPropInJSON(value, index) {
  return keyValuePairInUri(
    value,
    index,
    entityColNavigationProperty,
    rootExprCol
  );
}
function rootExprCol(value, index) {
  const begin = beginArray(value, index);
  if (begin === index) {
    return;
  }
  const start = index;
  index = begin;
  const items = [];
  let token = rootExpr(value, index);
  if (token) {
    while (token) {
      items.push(token);
      index = token.next;
      const end = endArray(value, index);
      if (end > index) {
        index = end;
        break;
      } else {
        const separator = valueSeparator(value, index);
        if (separator === index) {
          return;
        }
        index = separator;
        token = rootExpr(value, index);
        if (!token) {
          return;
        }
      }
    }
  } else {
    const end = endArray(value, index);
    if (end === index) {
      return;
    }
    index = end;
  }
  return tokenize(value, start, index, { items }, "Array" /* Array */);
}
function primitiveLiteralInJSON(value, index) {
  return (
    stringInJSON(value, index) ||
    numberInJSON(value, index) ||
    booleanInJSON(value, index) ||
    nullInJSON(value, index)
  );
}
function stringInJSON(value, index) {
  let mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  const start = index;
  index = mark;
  let char = charInJSON(value, index);
  while (char > index) {
    index = char;
    char = charInJSON(value, index);
  }
  mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  index = mark;
  return tokenize(value, start, index, "string", "Literal" /* Literal */);
}
function charInJSON(value, index) {
  const escape2 = escape(value, index);
  if (escape2 > index) {
    if (utils_default.equals(value, escape2, "%2F")) {
      return escape2 + 3;
    }
    if (
      utils_default.equals(value, escape2, "/") ||
      utils_default.equals(value, escape2, "b") ||
      utils_default.equals(value, escape2, "f") ||
      utils_default.equals(value, escape2, "n") ||
      utils_default.equals(value, escape2, "r") ||
      utils_default.equals(value, escape2, "t")
    ) {
      return escape2 + 1;
    }
    if (
      utils_default.equals(value, escape2, "u") &&
      utils_default.required(value, escape2 + 1, HEXDIG, 4, 4)
    ) {
      return escape2 + 5;
    }
    const escapeNext = escape(value, escape2);
    if (escapeNext > escape2) {
      return escapeNext;
    }
    const mark = quotationMark(value, escape2);
    if (mark > escape2) {
      return mark;
    }
  } else {
    const mark = quotationMark(value, index);
    if (mark === index) {
      return index + 1;
    }
  }
}
function numberInJSON(value, index) {
  const token = doubleValue(value, index) || int64Value(value, index);
  if (token) {
    token.value = "number";
    return token;
  }
}
function booleanInJSON(value, index) {
  if (utils_default.equals(value, index, "true")) {
    return tokenize(
      value,
      index,
      index + 4,
      "boolean",
      "Literal" /* Literal */
    );
  }
  if (utils_default.equals(value, index, "false")) {
    return tokenize(
      value,
      index,
      index + 5,
      "boolean",
      "Literal" /* Literal */
    );
  }
}
function nullInJSON(value, index) {
  if (utils_default.equals(value, index, "null")) {
    return tokenize(value, index, index + 4, "null", "Literal" /* Literal */);
  }
}
function arrayOrObject(value, index) {
  const token =
    complexColInUri(value, index) ||
    complexInUri(value, index) ||
    rootExprCol(value, index) ||
    primitiveColInUri(value, index);
  if (token) {
    return tokenize(
      value,
      index,
      token.next,
      token,
      "ArrayOrObject" /* ArrayOrObject */
    );
  }
}

// src/expressions.ts
function commonExpr(value, index) {
  const token =
    primitiveLiteral(value, index) ||
    parameterAlias(value, index) ||
    arrayOrObject(value, index) ||
    rootExpr(value, index) ||
    methodCallExpr(value, index) ||
    firstMemberExpr(value, index) ||
    functionExpr(value, index) ||
    negateExpr(value, index) ||
    parenExpr(value, index) ||
    castExpr(value, index);
  if (!token) {
    return;
  }
  const expr =
    addExpr(value, token.next) ||
    subExpr(value, token.next) ||
    mulExpr(value, token.next) ||
    divExpr(value, token.next) ||
    modExpr(value, token.next);
  if (expr) {
    token.value = {
      left: clone(token),
      right: expr.value,
    };
    token.next = expr.value.next;
    token.type = expr.type;
    token.raw = utils_default.stringify(value, token.position, token.next);
  }
  if (token) {
    return tokenize(
      value,
      token.position,
      token.next,
      token,
      "CommonExpression" /* CommonExpression */
    );
  }
}
function boolCommonExpr(value, index) {
  const token =
    isofExpr(value, index) ||
    boolMethodCallExpr(value, index) ||
    notExpr(value, index) ||
    commonExpr(value, index) ||
    boolParenExpr(value, index);
  if (!token) {
    return;
  }
  let commonMoreExpr = void 0;
  if (token.type === "CommonExpression" /* CommonExpression */) {
    commonMoreExpr =
      eqExpr(value, token.next) ||
      neExpr(value, token.next) ||
      ltExpr(value, token.next) ||
      leExpr(value, token.next) ||
      gtExpr(value, token.next) ||
      geExpr(value, token.next) ||
      hasExpr(value, token.next);
    if (commonMoreExpr) {
      token.value = {
        left: token.value,
        right: commonMoreExpr.value,
      };
      token.next = commonMoreExpr.value.next;
      token.type = commonMoreExpr.type;
      token.raw = utils_default.stringify(value, token.position, token.next);
    }
  }
  const expr = andExpr(value, token.next) || orExpr(value, token.next);
  if (expr) {
    const left = clone(token);
    token.next = expr.value.next;
    token.value = {
      left,
      right: expr.value,
    };
    token.type = expr.type;
    token.raw = utils_default.stringify(value, token.position, token.next);
    if (
      token.type === "AndExpression" /* AndExpression */ &&
      token.value.right.type === "OrExpression" /* OrExpression */
    ) {
      token.value.left = tokenize(
        value,
        token.value.left.position,
        token.value.right.value.left.next,
        {
          left: token.value.left,
          right: token.value.right.value.left,
        },
        token.type
      );
      token.type = token.value.right.type;
      token.value.right = token.value.right.value.right;
    }
  }
  return token;
}
function andExpr(value, index) {
  let rws = RWS(value, index);
  if (rws === index || !utils_default.equals(value, rws, "and")) {
    return;
  }
  const start = index;
  index = rws + 3;
  rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const token = boolCommonExpr(value, index);
  if (!token) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    token,
    "AndExpression" /* AndExpression */
  );
}
function orExpr(value, index) {
  let rws = RWS(value, index);
  if (rws === index || !utils_default.equals(value, rws, "or")) {
    return;
  }
  const start = index;
  index = rws + 2;
  rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const token = boolCommonExpr(value, index);
  if (!token) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    token,
    "OrExpression" /* OrExpression */
  );
}
function leftRightExpr(value, index, expr, tokenType) {
  let rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  const start = index;
  index = rws;
  if (!utils_default.equals(value, index, expr)) {
    return;
  }
  index += expr.length;
  rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const token = commonExpr(value, index);
  if (!token) {
    return;
  }
  return tokenize(value, start, index, token.value, tokenType);
}
function eqExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "eq",
    "EqualsExpression" /* EqualsExpression */
  );
}
function neExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "ne",
    "NotEqualsExpression" /* NotEqualsExpression */
  );
}
function ltExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "lt",
    "LesserThanExpression" /* LesserThanExpression */
  );
}
function leExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "le",
    "LesserOrEqualsExpression" /* LesserOrEqualsExpression */
  );
}
function gtExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "gt",
    "GreaterThanExpression" /* GreaterThanExpression */
  );
}
function geExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "ge",
    "GreaterOrEqualsExpression" /* GreaterOrEqualsExpression */
  );
}
function hasExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "has",
    "HasExpression" /* HasExpression */
  );
}
function addExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "add",
    "AddExpression" /* AddExpression */
  );
}
function subExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "sub",
    "SubExpression" /* SubExpression */
  );
}
function mulExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "mul",
    "MulExpression" /* MulExpression */
  );
}
function divExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "div",
    "DivExpression" /* DivExpression */
  );
}
function modExpr(value, index) {
  return leftRightExpr(
    value,
    index,
    "mod",
    "ModExpression" /* ModExpression */
  );
}
function notExpr(value, index) {
  if (!utils_default.equals(value, index, "not")) {
    return;
  }
  const start = index;
  index += 3;
  const rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const token = boolCommonExpr(value, index);
  if (!token) {
    return;
  }
  return tokenize(
    value,
    start,
    token.next,
    token,
    "NotExpression" /* NotExpression */
  );
}
function boolParenExpr(value, index) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  index = BWS(value, index);
  const token = boolCommonExpr(value, index);
  if (!token) {
    return;
  }
  index = BWS(value, token.next);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    token,
    "BoolParenExpression" /* BoolParenExpression */
  );
}
function parenExpr(value, index) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  index = BWS(value, index);
  const token = commonExpr(value, index);
  if (!token) {
    return;
  }
  index = BWS(value, token.next);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    token.value,
    "ParenExpression" /* ParenExpression */
  );
}
function boolMethodCallExpr(value, index) {
  return (
    endsWithMethodCallExpr(value, index) ||
    startsWithMethodCallExpr(value, index) ||
    containsMethodCallExpr(value, index) ||
    intersectsMethodCallExpr(value, index)
  );
}
function methodCallExpr(value, index) {
  return (
    indexOfMethodCallExpr(value, index) ||
    toLowerMethodCallExpr(value, index) ||
    toUpperMethodCallExpr(value, index) ||
    trimMethodCallExpr(value, index) ||
    substringMethodCallExpr(value, index) ||
    substringOfMethodCallExpr(value, index) ||
    concatMethodCallExpr(value, index) ||
    lengthMethodCallExpr(value, index) ||
    yearMethodCallExpr(value, index) ||
    monthMethodCallExpr(value, index) ||
    dayMethodCallExpr(value, index) ||
    hourMethodCallExpr(value, index) ||
    minuteMethodCallExpr(value, index) ||
    secondMethodCallExpr(value, index) ||
    fractionalsecondsMethodCallExpr(value, index) ||
    totalsecondsMethodCallExpr(value, index) ||
    dateMethodCallExpr(value, index) ||
    timeMethodCallExpr(value, index) ||
    roundMethodCallExpr(value, index) ||
    floorMethodCallExpr(value, index) ||
    ceilingMethodCallExpr(value, index) ||
    distanceMethodCallExpr(value, index) ||
    geoLengthMethodCallExpr(value, index) ||
    totalOffsetMinutesMethodCallExpr(value, index) ||
    minDateTimeMethodCallExpr(value, index) ||
    maxDateTimeMethodCallExpr(value, index) ||
    nowMethodCallExpr(value, index)
  );
}
function methodCallExprFactory(value, index, method, min, max) {
  if (typeof min === "undefined") {
    min = 0;
  }
  if (typeof max === "undefined") {
    max = min;
  }
  if (!utils_default.equals(value, index, method)) {
    return;
  }
  const start = index;
  index += method.length;
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  index = open;
  index = BWS(value, index);
  let parameters;
  if (min > 0) {
    parameters = [];
    while (parameters.length < max) {
      const expr = commonExpr(value, index);
      if (parameters.length < min && !expr) {
        return;
      } else if (expr) {
        parameters.push(expr.value);
        index = expr.next;
        index = BWS(value, index);
        const comma = COMMA(value, index);
        if (parameters.length < min && !comma) {
          return;
        }
        if (comma) {
          index = comma;
        } else {
          break;
        }
        index = BWS(value, index);
      } else {
        break;
      }
    }
  }
  index = BWS(value, index);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    {
      method,
      parameters,
    },
    "MethodCallExpression" /* MethodCallExpression */
  );
}
function containsMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "contains", 2);
}
function startsWithMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "startswith", 2);
}
function endsWithMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "endswith", 2);
}
function lengthMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "length", 1);
}
function indexOfMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "indexof", 2);
}
function substringMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "substring", 2, 3);
}
function substringOfMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "substringof", 2);
}
function toLowerMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "tolower", 1);
}
function toUpperMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "toupper", 1);
}
function trimMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "trim", 1);
}
function concatMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "concat", 2);
}
function yearMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "year", 1);
}
function monthMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "month", 1);
}
function dayMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "day", 1);
}
function hourMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "hour", 1);
}
function minuteMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "minute", 1);
}
function secondMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "second", 1);
}
function fractionalsecondsMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "fractionalseconds", 1);
}
function totalsecondsMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "totalseconds", 1);
}
function dateMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "date", 1);
}
function timeMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "time", 1);
}
function totalOffsetMinutesMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "totaloffsetminutes", 1);
}
function minDateTimeMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "mindatetime", 0);
}
function maxDateTimeMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "maxdatetime", 0);
}
function nowMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "now", 0);
}
function roundMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "round", 1);
}
function floorMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "floor", 1);
}
function ceilingMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "ceiling", 1);
}
function distanceMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "geo.distance", 2);
}
function geoLengthMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "geo.length", 1);
}
function intersectsMethodCallExpr(value, index) {
  return methodCallExprFactory(value, index, "geo.intersects", 2);
}
function isofExpr(value, index) {
  if (!utils_default.equals(value, index, "isof")) {
    return;
  }
  const start = index;
  index += 4;
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  index = open;
  index = BWS(value, index);
  const expr = commonExpr(value, index);
  if (expr) {
    index = expr.next;
    index = BWS(value, index);
    const comma = COMMA(value, index);
    if (!comma) {
      return;
    }
    index = comma;
    index = BWS(value, index);
  }
  const typeName = qualifiedTypeName(value, index);
  if (!typeName) {
    return;
  }
  index = typeName.next;
  index = BWS(value, index);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    {
      target: expr,
      typename: typeName,
    },
    "IsOfExpression" /* IsOfExpression */
  );
}
function castExpr(value, index) {
  if (!utils_default.equals(value, index, "cast")) {
    return;
  }
  const start = index;
  index += 4;
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  index = open;
  index = BWS(value, index);
  const expr = commonExpr(value, index);
  if (expr) {
    index = expr.next;
    index = BWS(value, index);
    const comma = COMMA(value, index);
    if (!comma) {
      return;
    }
    index = comma;
    index = BWS(value, index);
  }
  const typeName = qualifiedTypeName(value, index);
  if (!typeName) {
    return;
  }
  index = typeName.next;
  index = BWS(value, index);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    {
      target: expr,
      typename: typeName,
    },
    "CastExpression" /* CastExpression */
  );
}
function negateExpr(value, index) {
  if (value[index] !== 45) {
    return;
  }
  const start = index;
  index++;
  index = BWS(value, index);
  const expr = commonExpr(value, index);
  if (!expr) {
    return;
  }
  return tokenize(
    value,
    start,
    expr.next,
    expr,
    "NegateExpression" /* NegateExpression */
  );
}
function firstMemberExpr(value, index) {
  let token = inscopeVariableExpr(value, index);
  let member;
  const start = index;
  if (token) {
    if (value[token.next] === 47) {
      index = token.next + 1;
      member = memberExpr(value, index);
      if (!member) {
        return;
      }
      return tokenize(
        value,
        start,
        member.next,
        [token, member],
        "FirstMemberExpression" /* FirstMemberExpression */
      );
    }
  } else {
    member = memberExpr(value, index);
  }
  token = token || member;
  if (!token) {
    return;
  }
  return tokenize(
    value,
    start,
    token.next,
    token,
    "FirstMemberExpression" /* FirstMemberExpression */
  );
}
function memberExpr(value, index) {
  const start = index;
  const token = qualifiedEntityTypeName(value, index);
  if (token) {
    if (value[token.next] !== 47) {
      return;
    }
    index = token.next + 1;
  }
  const next =
    propertyPathExpr(value, index) || boundFunctionExpr(value, index);
  if (!next) {
    return;
  }
  return tokenize(
    value,
    start,
    next.next,
    token ? { name: token, value: next } : next,
    "MemberExpression" /* MemberExpression */
  );
}
function propertyPathExpr(value, index) {
  let token = odataIdentifier(value, index);
  const start = index;
  if (token) {
    index = token.next;
    const nav =
      collectionPathExpr(value, token.next) ||
      collectionNavigationExpr(value, token.next) ||
      singleNavigationExpr(value, token.next) ||
      complexPathExpr(value, token.next) ||
      singlePathExpr(value, token.next);
    if (nav) {
      index = nav.next;
      token = {
        current: clone(token),
        next: nav,
      };
    }
  } else if (!token) {
    token = streamProperty(value, index);
    if (token) {
      index = token.next;
    }
  }
  if (!token) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    token,
    "PropertyPathExpression" /* PropertyPathExpression */
  );
}
function inscopeVariableExpr(value, index) {
  return (
    implicitVariableExpr(value, index) ||
    (isLambdaPredicate ? lambdaVariableExpr(value, index) : void 0)
  );
}
function implicitVariableExpr(value, index) {
  if (utils_default.equals(value, index, "$it")) {
    return tokenize(
      value,
      index,
      index + 3,
      "$it",
      "ImplicitVariableExpression" /* ImplicitVariableExpression */
    );
  }
}
var isLambdaPredicate = false;
var hasLambdaVariableExpr = false;
function lambdaVariableExpr(value, index) {
  const token = odataIdentifier(
    value,
    index,
    "LambdaVariableExpression" /* LambdaVariableExpression */
  );
  if (token) {
    hasLambdaVariableExpr = true;
    return token;
  }
}
function lambdaPredicateExpr(value, index) {
  isLambdaPredicate = true;
  const token = boolCommonExpr(value, index);
  isLambdaPredicate = false;
  if (token && hasLambdaVariableExpr) {
    hasLambdaVariableExpr = false;
    return tokenize(
      value,
      token.position,
      token.next,
      token,
      "LambdaPredicateExpression" /* LambdaPredicateExpression */
    );
  }
}
function anyExpr(value, index) {
  if (!utils_default.equals(value, index, "any")) {
    return;
  }
  const start = index;
  index += 3;
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  index = open;
  index = BWS(value, index);
  const variable = lambdaVariableExpr(value, index);
  let predicate;
  if (variable) {
    index = variable.next;
    index = BWS(value, index);
    const colon = COLON(value, index);
    if (!colon) {
      return;
    }
    index = colon;
    index = BWS(value, index);
    predicate = lambdaPredicateExpr(value, index);
    if (!predicate) {
      return;
    }
    index = predicate.next;
  }
  index = BWS(value, index);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    {
      variable,
      predicate,
    },
    "AnyExpression" /* AnyExpression */
  );
}
function allExpr(value, index) {
  if (!utils_default.equals(value, index, "all")) {
    return;
  }
  const start = index;
  index += 3;
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  index = open;
  index = BWS(value, index);
  const variable = lambdaVariableExpr(value, index);
  if (!variable) {
    return;
  }
  index = variable.next;
  index = BWS(value, index);
  const colon = COLON(value, index);
  if (!colon) {
    return;
  }
  index = colon;
  index = BWS(value, index);
  const predicate = lambdaPredicateExpr(value, index);
  if (!predicate) {
    return;
  }
  index = predicate.next;
  index = BWS(value, index);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    {
      variable,
      predicate,
    },
    "AllExpression" /* AllExpression */
  );
}
function collectionNavigationExpr(value, index) {
  const start = index;
  let entity2, navigation, path;
  if (value[index] === 47) {
    index++;
    entity2 = qualifiedEntityTypeName(value, index);
    if (!entity2) {
      return;
    }
    index = entity2.next;
  }
  const predicate = keyPredicate(value, index);
  if (predicate) {
    index = predicate.next;
    navigation = singleNavigationExpr(value, index);
    if (navigation) {
      index = navigation.next;
    }
  } else {
    path = collectionPathExpr(value, index);
    if (path) {
      index = path.next;
    }
  }
  if (index > start) {
    return tokenize(
      value,
      start,
      index,
      {
        entity: entity2,
        predicate,
        navigation,
        path,
      },
      "CollectionNavigationExpression" /* CollectionNavigationExpression */
    );
  }
}
function keyPredicate(value, index, metadataContext) {
  return simpleKey(value, index, metadataContext) || compoundKey(value, index);
}
function simpleKey(value, index, metadataContext) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  const token = keyPropertyValue(value, index);
  if (!token) {
    return;
  }
  const close = CLOSE(value, token.next);
  if (!close) {
    return;
  }
  let key;
  if (
    typeof metadataContext === "object" &&
    metadataContext.key &&
    metadataContext.key.propertyRefs &&
    metadataContext.key.propertyRefs[0] &&
    metadataContext.key.propertyRefs[0].name
  ) {
    key = metadataContext.key.propertyRefs[0].name;
  }
  return tokenize(
    value,
    start,
    close,
    { key, value: token },
    "SimpleKey" /* SimpleKey */
  );
}
function compoundKey(value, index) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  let pair = keyValuePair(value, index);
  if (!pair) {
    return;
  }
  const keys = [];
  while (pair) {
    keys.push(pair);
    const comma = COMMA(value, pair.next);
    if (comma) {
      pair = keyValuePair(value, comma);
    } else {
      pair = null;
    }
  }
  index = keys[keys.length - 1].next;
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(value, start, index, keys, "CompoundKey" /* CompoundKey */);
}
function keyValuePair(value, index) {
  const prop =
    primitiveKeyProperty(value, index) || keyPropertyAlias(value, index);
  if (!prop) {
    return;
  }
  const eq = EQ(value, prop.next);
  if (!eq) {
    return;
  }
  const val = keyPropertyValue(value, eq);
  if (val) {
    return tokenize(
      value,
      index,
      val.next,
      {
        key: prop,
        value: val,
      },
      "KeyValuePair" /* KeyValuePair */
    );
  }
}
function keyPropertyValue(value, index) {
  const token = primitiveLiteral(value, index);
  if (token) {
    token.type = "KeyPropertyValue" /* KeyPropertyValue */;
    return token;
  }
}
function keyPropertyAlias(value, index) {
  return odataIdentifier(
    value,
    index,
    "KeyPropertyAlias" /* KeyPropertyAlias */
  );
}
function singleNavigationExpr(value, index) {
  if (value[index] !== 47) {
    return;
  }
  const member = memberExpr(value, index + 1);
  if (member) {
    return tokenize(
      value,
      index,
      member.next,
      member,
      "SingleNavigationExpression" /* SingleNavigationExpression */
    );
  }
}
function collectionPathExpr(value, index) {
  let token = countExpr(value, index);
  if (!token) {
    if (value[index] === 47) {
      token =
        boundFunctionExpr(value, index + 1) ||
        anyExpr(value, index + 1) ||
        allExpr(value, index + 1);
    }
  }
  if (token) {
    return tokenize(
      value,
      index,
      token.next,
      token,
      "CollectionPathExpression" /* CollectionPathExpression */
    );
  }
}
function complexPathExpr(value, index) {
  if (value[index] !== 47) {
    return;
  }
  const start = index;
  index++;
  const token = qualifiedComplexTypeName(value, index);
  if (token) {
    if (value[token.next] !== 47) {
      return;
    }
    index = token.next + 1;
  }
  const expr =
    propertyPathExpr(value, index) || boundFunctionExpr(value, index);
  if (expr) {
    return tokenize(
      value,
      start,
      expr.next,
      token ? [token, expr] : [expr],
      "ComplexPathExpression" /* ComplexPathExpression */
    );
  }
}
function singlePathExpr(value, index) {
  if (value[index] !== 47) {
    return;
  }
  const boundFunction = boundFunctionExpr(value, index + 1);
  if (boundFunction) {
    return tokenize(
      value,
      index,
      boundFunction.next,
      boundFunction,
      "SinglePathExpression" /* SinglePathExpression */
    );
  }
}
function functionExpr(value, index) {
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  const start = index;
  index = namespaceNext + 1;
  const token = odataIdentifier(value, index);
  if (!token) {
    return;
  }
  token.position = start;
  token.value.namespace = utils_default.stringify(value, start, namespaceNext);
  token.raw = utils_default.stringify(value, start, token.next);
  index = token.next;
  const params = functionExprParameters(value, index);
  if (!params) {
    return;
  }
  index = params.next;
  const expr =
    collectionPathExpr(value, index) ||
    collectionNavigationExpr(value, index) ||
    singleNavigationExpr(value, index) ||
    complexPathExpr(value, index) ||
    singlePathExpr(value, index);
  if (expr) {
    index = expr.next;
  }
  return tokenize(
    value,
    start,
    index,
    {
      fn: token,
      params,
      expression: expr,
    },
    "FunctionExpression" /* FunctionExpression */
  );
}
function boundFunctionExpr(value, index) {
  return functionExpr(value, index);
}
function functionExprParameters(value, index) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  const params = [];
  let expr = functionExprParameter(value, index);
  while (expr) {
    params.push(expr);
    const comma = COMMA(value, expr.next);
    if (comma) {
      index = comma;
      expr = functionExprParameter(value, index);
      if (!expr) {
        return;
      }
    } else {
      index = expr.next;
      expr = null;
    }
  }
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    params,
    "FunctionExpressionParameters" /* FunctionExpressionParameters */
  );
}
function functionExprParameter(value, index) {
  const name = parameterName(value, index);
  if (!name) {
    return;
  }
  const eq = EQ(value, name.next);
  if (!name || !eq) {
    return;
  }
  const start = index;
  index = eq;
  const param2 = parameterAlias(value, index) || parameterValue(value, index);
  if (!param2) {
    return;
  }
  return tokenize(
    value,
    start,
    param2.next,
    {
      name,
      value: param2,
    },
    "FunctionExpressionParameter" /* FunctionExpressionParameter */
  );
}
function parameterName(value, index) {
  return odataIdentifier(value, index, "ParameterName" /* ParameterName */);
}
function parameterAlias(value, index) {
  const at = AT(value, index);
  if (!at) {
    return;
  }
  const id2 = odataIdentifier(value, at);
  if (id2) {
    return tokenize(
      value,
      index,
      id2.next,
      id2.value,
      "ParameterAlias" /* ParameterAlias */
    );
  }
}
function parameterValue(value, index) {
  const token = arrayOrObject(value, index) || commonExpr(value, index);
  if (token) {
    return tokenize(
      value,
      index,
      token.next,
      token.value,
      "ParameterValue" /* ParameterValue */
    );
  }
}
function countExpr(value, index) {
  if (utils_default.equals(value, index, "/$count")) {
    return tokenize(
      value,
      index,
      index + 7,
      "/$count",
      "CountExpression" /* CountExpression */
    );
  }
}
function refExpr(value, index) {
  if (utils_default.equals(value, index, "/$ref")) {
    return tokenize(
      value,
      index,
      index + 5,
      "/$ref",
      "RefExpression" /* RefExpression */
    );
  }
}
function valueExpr(value, index) {
  if (utils_default.equals(value, index, "/$value")) {
    return tokenize(
      value,
      index,
      index + 7,
      "/$value",
      "ValueExpression" /* ValueExpression */
    );
  }
}
function rootExpr(value, index) {
  if (!utils_default.equals(value, index, "$root/")) {
    return;
  }
  const start = index;
  index += 6;
  const entitySet = entitySetName(value, index);
  let predicate, entity2, token;
  if (entitySet) {
    predicate = keyPredicate(value, entitySet.next);
  }
  if (!(entitySet && predicate)) {
    entity2 = singletonEntity(value, index);
    if (!entity2) {
      return;
    }
    token = {
      entity: entity2,
    };
  } else {
    token = {
      entitySet,
      keys: predicate,
    };
  }
  index = (predicate || entity2).next;
  const nav = singleNavigationExpr(value, index);
  if (nav) {
    index = nav.next;
  }
  return tokenize(
    value,
    start,
    index,
    {
      current: token,
      next: nav,
    },
    "RootExpression" /* RootExpression */
  );
}

// src/query.ts
function queryOptions(value, index, metadataContext) {
  if (value.length <= index) {
    return tokenize(
      value,
      index,
      index,
      { options: null },
      "QueryOptions" /* QueryOptions */
    );
  }
  let token = queryOption(value, index, metadataContext);
  if (!token) {
    return;
  }
  const start = index;
  index = token.next;
  const options = [];
  while (token) {
    options.push(token);
    if (value[index] !== 38) {
      break;
    }
    index++;
    token = queryOption(value, index, metadataContext);
    if (!token) {
      return;
    }
    index = token.next;
  }
  return tokenize(
    value,
    start,
    index,
    { options },
    "QueryOptions" /* QueryOptions */
  );
}
function queryOption(value, index, metadataContext) {
  return (
    systemQueryOption(value, index, metadataContext) ||
    aliasAndValue(value, index) ||
    customQueryOption(value, index)
  );
}
function systemQueryOption(value, index, metadataContext) {
  return (
    expand(value, index, metadataContext) ||
    filter(value, index) ||
    format(value, index) ||
    id(value, index) ||
    inlinecount(value, index) ||
    orderby(value, index) ||
    search(value, index) ||
    select(value, index) ||
    skip(value, index) ||
    skiptoken(value, index) ||
    top(value, index)
  );
}
function customQueryOption(value, index) {
  const key = odataIdentifier(value, index);
  if (!key) {
    return;
  }
  const start = index;
  index = key.next;
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  while (value[index] !== 38 && index < value.length) {
    index++;
  }
  if (index === eq) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    {
      key: key.raw,
      value: utils_default.stringify(value, eq, index),
    },
    "CustomQueryOption" /* CustomQueryOption */
  );
}
function id(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24id")) {
    index += 5;
  } else if (utils_default.equals(value, index, "$id")) {
    index += 3;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  while (value[index] !== 38 && index < value.length) {
    index++;
  }
  if (index === eq) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    utils_default.stringify(value, eq, index),
    "Id" /* Id */
  );
}
function expand(value, index, metadataContext) {
  const start = index;
  if (utils_default.equals(value, index, "%24expand")) {
    index += 9;
  } else if (utils_default.equals(value, index, "$expand")) {
    index += 7;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const items = [];
  let token = expandItem(value, index, metadataContext);
  if (!token) {
    return;
  }
  index = token.next;
  while (token) {
    items.push(token);
    const comma = COMMA(value, index);
    if (comma) {
      index = comma;
      token = expandItem(value, index, metadataContext);
      if (!token) {
        return;
      }
      index = token.next;
    } else {
      break;
    }
  }
  return tokenize(value, start, index, { items }, "Expand" /* Expand */);
}
function expandItem(value, index, metadataContext) {
  const start = index;
  const star = STAR(value, index);
  if (star) {
    index = star;
    if (index == value.length) {
      return tokenize(
        value,
        start,
        index,
        { path: "*" },
        "ExpandItem" /* ExpandItem */
      );
    }
    const ref2 = refExpr(value, index);
    if (ref2) {
      index = ref2.next;
      return tokenize(
        value,
        start,
        index,
        { path: "*", ref: ref2 },
        "ExpandItem" /* ExpandItem */
      );
    }
    const open = OPEN(value, index);
    if (open) {
      index = open;
      const token = levels(value, index);
      if (!token) {
        return;
      }
      index = token.next;
      const close = CLOSE(value, index);
      if (!close) {
        return;
      }
      index = close;
      return tokenize(
        value,
        start,
        index,
        { path: "*", levels: token },
        "ExpandItem" /* ExpandItem */
      );
    }
  }
  const path = expandPath(value, index, metadataContext);
  if (!path) {
    return;
  }
  index = path.next;
  const tokenValue = { path };
  const ref = refExpr(value, index);
  if (ref) {
    index = ref.next;
    tokenValue.ref = ref;
    const open = OPEN(value, index);
    if (open) {
      index = open;
      let option = expandRefOption(value, index);
      if (!option) {
        return;
      }
      const refOptions = [];
      while (option) {
        refOptions.push(option);
        index = option.next;
        const semi = SEMI(value, index);
        if (semi) {
          index = semi;
          option = expandRefOption(value, index);
          if (!option) {
            return;
          }
        } else {
          break;
        }
      }
      const close = CLOSE(value, index);
      if (!close) {
        return;
      }
      index = close;
      tokenValue.options = refOptions;
    }
  } else {
    const count = countExpr(value, index);
    if (count) {
      index = count.next;
      tokenValue.count = count;
      const open = OPEN(value, index);
      if (open) {
        index = open;
        let option = expandCountOption(value, index);
        if (!option) {
          return;
        }
        const countOptions = [];
        while (option) {
          countOptions.push(option);
          index = option.next;
          const semi = SEMI(value, index);
          if (semi) {
            index = semi;
            option = expandCountOption(value, index);
            if (!option) {
              return;
            }
          } else {
            break;
          }
        }
        const close = CLOSE(value, index);
        if (!close) {
          return;
        }
        index = close;
        tokenValue.options = countOptions;
      }
    } else {
      const open = OPEN(value, index);
      if (open) {
        index = open;
        let option = expandOption(value, index);
        if (!option) {
          return;
        }
        const options = [];
        while (option) {
          options.push(option);
          index = option.next;
          const semi = SEMI(value, index);
          if (semi) {
            index = semi;
            option = expandOption(value, index);
            if (!option) {
              return;
            }
          } else {
            break;
          }
        }
        const close = CLOSE(value, index);
        if (!close) {
          return;
        }
        index = close;
        tokenValue.options = options;
      }
    }
  }
  return tokenize(
    value,
    start,
    index,
    tokenValue,
    "ExpandItem" /* ExpandItem */
  );
}
function expandCountOption(value, index) {
  return filter(value, index) || search(value, index);
}
function expandRefOption(value, index) {
  return (
    expandCountOption(value, index) ||
    orderby(value, index) ||
    skip(value, index) ||
    top(value, index) ||
    inlinecount(value, index)
  );
}
function expandOption(value, index) {
  return (
    expandRefOption(value, index) ||
    select(value, index) ||
    expand(value, index) ||
    levels(value, index)
  );
}
function expandPath(value, index, metadataContext) {
  const start = index;
  const path = [];
  const token =
    qualifiedEntityTypeName(value, index, metadataContext) ||
    qualifiedComplexTypeName(value, index, metadataContext);
  if (token) {
    index = token.next;
    path.push(token);
    if (value[index] !== 47) {
      return;
    }
    index++;
    metadataContext = token.value.metadata;
    delete token.value.metadata;
  }
  let complex =
    complexProperty(value, index, metadataContext) ||
    complexColProperty(value, index, metadataContext);
  while (complex) {
    if (value[complex.next] === 47) {
      index = complex.next + 1;
      path.push(complex);
      const complexTypeName2 = qualifiedComplexTypeName(
        value,
        index,
        metadataContext
      );
      if (complexTypeName2) {
        if (value[complexTypeName2.next] === 47) {
          index = complexTypeName2.next + 1;
          path.push(complexTypeName2);
        }
        metadataContext = complexTypeName2.value.metadata;
        delete complexTypeName2.value.metadata;
      }
      complex =
        complexProperty(value, index, metadataContext) ||
        complexColProperty(value, index, metadataContext);
    } else {
      break;
    }
  }
  const nav = navigationProperty(value, index, metadataContext);
  if (!nav) {
    return;
  }
  index = nav.next;
  path.push(nav);
  metadataContext = nav.metadata;
  delete nav.metadata;
  if (value[index] === 47) {
    const typeName = qualifiedEntityTypeName(value, index + 1, metadataContext);
    if (typeName) {
      index = typeName.next;
      path.push(typeName);
      metadataContext = typeName.value.metadata;
      delete typeName.value.metadata;
    }
  }
  return tokenize(value, start, index, path, "ExpandPath" /* ExpandPath */);
}
function search(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24search")) {
    index += 9;
  } else if (utils_default.equals(value, index, "$search")) {
    index += 7;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const expr = searchExpr(value, index);
  if (!expr) {
    return;
  }
  index = expr.next;
  return tokenize(value, start, index, expr, "Search" /* Search */);
}
function searchExpr(value, index) {
  const token = searchParenExpr(value, index) || searchTerm(value, index);
  if (!token) {
    return;
  }
  const start = index;
  index = token.next;
  const expr = searchAndExpr(value, index) || searchOrExpr(value, index);
  if (expr) {
    const left = clone(token);
    token.next = expr.value.next;
    token.value = {
      left,
      right: expr.value,
    };
    token.type = expr.type;
    token.raw = utils_default.stringify(value, token.position, token.next);
    if (
      token.type === "SearchAndExpression" /* SearchAndExpression */ &&
      token.value.right.type === "SearchOrExpression" /* SearchOrExpression */
    ) {
      token.value.left = tokenize(
        value,
        token.value.left.position,
        token.value.right.value.left.next,
        {
          left: token.value.left,
          right: token.value.right.value.left,
        },
        token.type
      );
      token.type = token.value.right.type;
      token.value.right = token.value.right.value.right;
    }
  }
  return token;
}
function searchTerm(value, index) {
  return (
    searchNotExpr(value, index) ||
    searchPhrase(value, index) ||
    searchWord(value, index)
  );
}
function searchNotExpr(value, index) {
  let rws = RWS(value, index);
  if (!utils_default.equals(value, rws, "NOT")) {
    return;
  }
  const start = index;
  index = rws + 3;
  rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const expr = searchPhrase(value, index) || searchWord(value, index);
  if (!expr) {
    return;
  }
  index = expr.next;
  return tokenize(
    value,
    start,
    index,
    expr,
    "SearchNotExpression" /* SearchNotExpression */
  );
}
function searchOrExpr(value, index) {
  let rws = RWS(value, index);
  if (rws === index || !utils_default.equals(value, rws, "OR")) {
    return;
  }
  const start = index;
  index = rws + 2;
  rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const token = searchExpr(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(
    value,
    start,
    index,
    token,
    "SearchOrExpression" /* SearchOrExpression */
  );
}
function searchAndExpr(value, index) {
  let rws = RWS(value, index);
  if (rws === index || !utils_default.equals(value, rws, "AND")) {
    return;
  }
  const start = index;
  index = rws + 3;
  rws = RWS(value, index);
  if (rws === index) {
    return;
  }
  index = rws;
  const token = searchExpr(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(
    value,
    start,
    index,
    token,
    "SearchAndExpression" /* SearchAndExpression */
  );
}
function searchPhrase(value, index) {
  let mark = quotationMark(value, index);
  if (mark === index) {
    return;
  }
  const start = index;
  index = mark;
  const valueStart = index;
  let ch = qcharNoAMPDQUOTE(value, index);
  while (ch > index && !OPEN(value, index) && !CLOSE(value, index)) {
    index = ch;
    ch = qcharNoAMPDQUOTE(value, index);
  }
  const valueEnd = index;
  mark = quotationMark(value, index);
  if (!mark) {
    return;
  }
  index = mark;
  return tokenize(
    value,
    start,
    index,
    utils_default.stringify(value, valueStart, valueEnd),
    "SearchPhrase" /* SearchPhrase */
  );
}
function searchWord(value, index) {
  const next = utils_default.required(value, index, ALPHA, 1);
  if (!next) {
    return;
  }
  const start = index;
  index = next;
  const token = tokenize(
    value,
    start,
    index,
    null,
    "SearchWord" /* SearchWord */
  );
  token.value = token.raw;
  return token;
}
function searchParenExpr(value, index) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  index = BWS(value, index);
  const expr = searchExpr(value, index);
  if (!expr) {
    return;
  }
  index = expr.next;
  index = BWS(value, index);
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    expr,
    "SearchParenExpression" /* SearchParenExpression */
  );
}
function levels(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24levels")) {
    index += 9;
  } else if (utils_default.equals(value, index, "$levels")) {
    index += 7;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  let level;
  if (utils_default.equals(value, index, "max")) {
    level = "max";
    index += 3;
  } else {
    const token = int32Value(value, index);
    if (!token) {
      return;
    }
    level = token.raw;
    index = token.next;
  }
  return tokenize(value, start, index, level, "Levels" /* Levels */);
}
function filter(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24filter")) {
    index += 9;
  } else if (utils_default.equals(value, index, "$filter")) {
    index += 7;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const expr = boolCommonExpr(value, index);
  if (!expr) {
    return;
  }
  index = expr.next;
  return tokenize(value, start, index, expr, "Filter" /* Filter */);
}
function orderby(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24orderby")) {
    index += 10;
  } else if (utils_default.equals(value, index, "$orderby")) {
    index += 8;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const items = [];
  let token = orderbyItem(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  while (token) {
    items.push(token);
    const comma = COMMA(value, index);
    if (comma) {
      index = comma;
      const space = OWS(value, index);
      if (space) {
        index = space;
      }
      token = orderbyItem(value, index);
      if (!token) {
        return;
      }
      index = token.next;
    } else {
      break;
    }
  }
  return tokenize(value, start, index, { items }, "OrderBy" /* OrderBy */);
}
function orderbyItem(value, index) {
  const expr = commonExpr(value, index);
  if (!expr) {
    return;
  }
  const start = index;
  index = expr.next;
  let direction = 1;
  const rws = RWS(value, index);
  if (rws > index) {
    index = rws;
    if (utils_default.equals(value, index, "asc")) {
      index += 3;
    } else if (utils_default.equals(value, index, "desc")) {
      index += 4;
      direction = -1;
    } else {
      return;
    }
  }
  return tokenize(
    value,
    start,
    index,
    { expr, direction },
    "OrderByItem" /* OrderByItem */
  );
}
function skip(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24skip")) {
    index += 7;
  } else if (utils_default.equals(value, index, "$skip")) {
    index += 5;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const token = int32Value(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(value, start, index, token, "Skip" /* Skip */);
}
function top(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24top")) {
    index += 6;
  } else if (utils_default.equals(value, index, "$top")) {
    index += 4;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const token = int32Value(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(value, start, index, token, "Top" /* Top */);
}
function format(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24format")) {
    index += 9;
  } else if (utils_default.equals(value, index, "$format")) {
    index += 7;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  let format2;
  if (utils_default.equals(value, index, "atom")) {
    format2 = "atom";
    index += 4;
  } else if (utils_default.equals(value, index, "json")) {
    format2 = "json";
    index += 4;
  } else if (utils_default.equals(value, index, "JSON")) {
    format2 = "json";
    index += 4;
  } else if (utils_default.equals(value, index, "xml")) {
    format2 = "xml";
    index += 3;
  } else if (utils_default.equals(value, index, "text/html")) {
    format2 = "xml";
    index += 9;
  }
  if (format2) {
    return tokenize(
      value,
      start,
      index,
      { format: format2 },
      "Format" /* Format */
    );
  }
}
function inlinecount(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24count")) {
    index += 8;
  } else if (utils_default.equals(value, index, "$count")) {
    index += 6;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const token = booleanValue(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(value, start, index, token, "InlineCount" /* InlineCount */);
}
function select(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24select")) {
    index += 9;
  } else if (utils_default.equals(value, index, "$select")) {
    index += 7;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const items = [];
  let token = selectItem(value, index);
  if (!token) {
    return;
  }
  while (token) {
    items.push(token);
    index = token.next;
    const comma = COMMA(value, index);
    if (comma) {
      index = comma;
      const space = OWS(value, index);
      if (space) {
        index = space;
      }
      token = selectItem(value, index);
      if (!token) {
        return;
      }
    } else {
      break;
    }
  }
  return tokenize(value, start, index, { items }, "Select" /* Select */);
}
function selectItem(value, index) {
  const start = index;
  let item;
  const op = allOperationsInSchema(value, index);
  const star = STAR(value, index);
  if (op > index) {
    item = {
      namespace: utils_default.stringify(value, index, op - 2),
      value: "*",
    };
    index = op;
  } else if (star) {
    item = { value: "*" };
    index = star;
  } else {
    item = {};
    const name =
      qualifiedEntityTypeName(value, index) ||
      qualifiedComplexTypeName(value, index);
    if (name && value[name.next] !== 47) {
      return;
    } else if (name && value[name.next] === 47) {
      index++;
      item.name = name;
    }
    const select2 =
      selectProperty(value, index) ||
      qualifiedActionName(value, index) ||
      qualifiedFunctionName(value, index);
    if (!select2) {
      return;
    }
    index = select2.next;
    item = name ? { name, select: select2 } : select2;
  }
  if (index > start) {
    return tokenize(value, start, index, item, "SelectItem" /* SelectItem */);
  }
}
function allOperationsInSchema(value, index) {
  const namespaceNext = namespace(value, index);
  const star = STAR(value, namespaceNext + 1);
  if (namespaceNext > index && value[namespaceNext] === 46 && star) {
    return star;
  }
  return index;
}
function selectProperty(value, index) {
  const token =
    selectPath(value, index) ||
    primitiveProperty(value, index) ||
    primitiveColProperty(value, index) ||
    navigationProperty(value, index);
  if (!token) {
    return;
  }
  const start = index;
  index = token.next;
  if (token.type === "SelectPath" /* SelectPath */) {
    if (value[index] === 47) {
      index++;
      const prop = selectProperty(value, index);
      if (!prop) {
        return;
      }
      const path = clone(token);
      token.next = prop.next;
      token.raw = utils_default.stringify(value, start, token.next);
      token.value = { path, next: prop };
    }
  }
  return token;
}
function selectPath(value, index) {
  const token =
    complexProperty(value, index) || complexColProperty(value, index);
  if (!token) {
    return;
  }
  const start = index;
  index = token.next;
  let tokenValue = token;
  if (value[index] === 47) {
    const name = qualifiedComplexTypeName(value, index + 1);
    if (name) {
      index = name.next;
      tokenValue = { prop: token, name };
    }
  }
  return tokenize(
    value,
    start,
    index,
    tokenValue,
    "SelectPath" /* SelectPath */
  );
}
function qualifiedActionName(value, index) {
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  const start = index;
  index = namespaceNext + 1;
  const action2 = action(value, index);
  if (!action2) {
    return;
  }
  action2.value.namespace = utils_default.stringify(
    value,
    start,
    namespaceNext
  );
  return tokenize(value, start, action2.next, action2, "Action" /* Action */);
}
function qualifiedFunctionName(value, index) {
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index || value[namespaceNext] !== 46) {
    return;
  }
  const start = index;
  index = namespaceNext + 1;
  const fn = odataFunction(value, index);
  if (!fn) {
    return;
  }
  fn.value.namespace = utils_default.stringify(value, start, namespaceNext);
  index = fn.next;
  const tokenValue = { name: fn };
  const open = OPEN(value, index);
  if (open) {
    index = open;
    tokenValue.parameters = [];
    const param2 = parameterName(value, index);
    if (!param2) {
      return;
    }
    while (param2) {
      index = param2.next;
      tokenValue.parameters.push(param2);
      const comma = COMMA(value, index);
      if (comma) {
        index = comma;
        const param3 = parameterName(value, index);
        if (!param3) {
          return;
        }
      } else {
        break;
      }
    }
    const close = CLOSE(value, index);
    if (!close) {
      return;
    }
    index = close;
  }
  return tokenize(value, start, index, tokenValue, "Function" /* Function */);
}
function skiptoken(value, index) {
  const start = index;
  if (utils_default.equals(value, index, "%24skiptoken")) {
    index += 12;
  } else if (utils_default.equals(value, index, "$skiptoken")) {
    index += 10;
  } else {
    return;
  }
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  let ch = qcharNoAMP(value, index);
  if (!ch) {
    return;
  }
  const valueStart = index;
  while (ch > index) {
    index = ch;
    ch = qcharNoAMP(value, index);
  }
  return tokenize(
    value,
    start,
    index,
    utils_default.stringify(value, valueStart, index),
    "SkipToken" /* SkipToken */
  );
}
function aliasAndValue(value, index) {
  const alias = parameterAlias(value, index);
  if (!alias) {
    return;
  }
  const start = index;
  index = alias.next;
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const paramValue = parameterValue(value, index);
  if (!paramValue) {
    return;
  }
  index = paramValue.next;
  return tokenize(
    value,
    start,
    index,
    {
      alias,
      value: paramValue,
    },
    "AliasAndValue" /* AliasAndValue */
  );
}

// src/resourcePath.ts
function resourcePath(value, index, metadataContext) {
  if (value[index] === 47) {
    index++;
  }
  const token =
    batch(value, index) ||
    entity(value, index, metadataContext) ||
    metadata(value, index);
  if (token) {
    return token;
  }
  const resource =
    entitySetName(value, index, metadataContext) ||
    functionImportCall(value, index, metadataContext) ||
    crossjoin(value, index) ||
    all(value, index) ||
    actionImportCall(value, index, metadataContext) ||
    singletonEntity(value, index);
  if (!resource) {
    return;
  }
  const start = index;
  index = resource.next;
  let navigation;
  switch (resource.type) {
    case "EntitySetName" /* EntitySetName */:
      navigation = collectionNavigation(
        value,
        resource.next,
        resource.metadata
      );
      metadataContext = resource.metadata;
      delete resource.metadata;
      break;
    case "EntityCollectionFunctionImportCall" /* EntityCollectionFunctionImportCall */:
      navigation = collectionNavigation(
        value,
        resource.next,
        resource.value.import.metadata
      );
      metadataContext = resource.value.import.metadata;
      delete resource.value.import.metadata;
      break;
    case "SingletonEntity" /* SingletonEntity */:
      navigation = singleNavigation(value, resource.next, resource.metadata);
      metadataContext = resource.metadata;
      delete resource.metadata;
      break;
    case "EntityFunctionImportCall" /* EntityFunctionImportCall */:
      navigation = singleNavigation(
        value,
        resource.next,
        resource.value.import.metadata
      );
      metadataContext = resource.value.import.metadata;
      delete resource.value.import.metadata;
      break;
    case "ComplexCollectionFunctionImportCall" /* ComplexCollectionFunctionImportCall */:
    case "PrimitiveCollectionFunctionImportCall" /* PrimitiveCollectionFunctionImportCall */:
      navigation = collectionPath(
        value,
        resource.next,
        resource.value.import.metadata
      );
      metadataContext = resource.value.import.metadata;
      delete resource.value.import.metadata;
      break;
    case "ComplexFunctionImportCall" /* ComplexFunctionImportCall */:
      navigation = complexPath(
        value,
        resource.next,
        resource.value.import.metadata
      );
      metadataContext = resource.value.import.metadata;
      delete resource.value.import.metadata;
      break;
    case "PrimitiveFunctionImportCall" /* PrimitiveFunctionImportCall */:
      navigation = singlePath(
        value,
        resource.next,
        resource.value.import.metadata
      );
      metadataContext = resource.value.import.metadata;
      delete resource.value.import.metadata;
      break;
  }
  if (navigation) {
    index = navigation.next;
  }
  if (value[index] === 47) {
    index++;
  }
  if (resource) {
    return tokenize(
      value,
      start,
      index,
      { resource, navigation },
      "ResourcePath" /* ResourcePath */,
      navigation || { metadata: metadataContext }
    );
  }
}
function batch(value, index) {
  if (utils_default.equals(value, index, "$batch")) {
    return tokenize(value, index, index + 6, "$batch", "Batch" /* Batch */);
  }
}
function entity(value, index, metadataContext) {
  if (utils_default.equals(value, index, "$entity")) {
    const start = index;
    index += 7;
    let name;
    if (value[index] === 47) {
      name = qualifiedEntityTypeName(value, index + 1, metadataContext);
      if (!name) {
        return;
      }
      index = name.next;
    }
    return tokenize(
      value,
      start,
      index,
      name || "$entity",
      "Entity" /* Entity */
    );
  }
}
function metadata(value, index) {
  if (utils_default.equals(value, index, "$metadata")) {
    return tokenize(
      value,
      index,
      index + 9,
      "$metadata",
      "Metadata" /* Metadata */
    );
  }
}
function collectionNavigation(value, index, metadataContext) {
  const start = index;
  let name;
  if (value[index] === 47) {
    name = qualifiedEntityTypeName(value, index + 1, metadataContext);
    if (name) {
      index = name.next;
      metadataContext = name.value.metadata;
      delete name.value.metadata;
    }
  }
  const path = collectionNavigationPath(value, index, metadataContext);
  if (path) {
    index = path.next;
  }
  if (!name && !path) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    { name, path },
    "CollectionNavigation" /* CollectionNavigation */,
    path || name
  );
}
function collectionNavigationPath(value, index, metadataContext) {
  const start = index;
  const token =
    collectionPath(value, index, metadataContext) || refExpr(value, index);
  if (token) {
    return token;
  }
  const predicate = keyPredicate(value, index, metadataContext);
  if (predicate) {
    let tokenValue = { predicate };
    index = predicate.next;
    const navigation = singleNavigation(value, index, metadataContext);
    if (navigation) {
      tokenValue = { predicate, navigation };
      index = navigation.next;
    }
    return tokenize(
      value,
      start,
      index,
      tokenValue,
      "CollectionNavigationPath" /* CollectionNavigationPath */,
      navigation || { metadata: metadataContext }
    );
  }
}
function singleNavigation(value, index, metadataContext) {
  let token =
    boundOperation(value, index, false, metadataContext) ||
    refExpr(value, index) ||
    valueExpr(value, index);
  if (token) {
    return token;
  }
  const start = index;
  let name;
  if (value[index] === 47) {
    name = qualifiedEntityTypeName(value, index + 1, metadataContext);
    if (name) {
      index = name.next;
      metadataContext = name.value.metadata;
      delete name.value.metadata;
    }
  }
  if (value[index] === 47) {
    token = propertyPath(value, index + 1, metadataContext);
    if (token) {
      index = token.next;
    }
  }
  if (!name && !token) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    { name, path: token },
    "SingleNavigation" /* SingleNavigation */,
    token
  );
}
function propertyPath(value, index, metadataContext) {
  const token =
    entityColNavigationProperty(value, index, metadataContext) ||
    entityNavigationProperty(value, index, metadataContext) ||
    complexColProperty(value, index, metadataContext) ||
    complexProperty(value, index, metadataContext) ||
    primitiveColProperty(value, index, metadataContext) ||
    primitiveProperty(value, index, metadataContext) ||
    streamProperty(value, index, metadataContext);
  if (!token) {
    return;
  }
  const start = index;
  index = token.next;
  let navigation;
  switch (token.type) {
    case "EntityCollectionNavigationProperty" /* EntityCollectionNavigationProperty */:
      navigation = collectionNavigation(value, index, token.metadata);
      delete token.metadata;
      break;
    case "EntityNavigationProperty" /* EntityNavigationProperty */:
      navigation = singleNavigation(value, index, token.metadata);
      delete token.metadata;
      break;
    case "ComplexCollectionProperty" /* ComplexCollectionProperty */:
      navigation = collectionPath(value, index, token.metadata);
      delete token.metadata;
      break;
    case "ComplexProperty" /* ComplexProperty */:
      navigation = complexPath(value, index, token.metadata);
      delete token.metadata;
      break;
    case "PrimitiveCollectionProperty" /* PrimitiveCollectionProperty */:
      navigation = collectionPath(value, index, token.metadata);
      delete token.metadata;
      break;
    case "PrimitiveKeyProperty" /* PrimitiveKeyProperty */:
    case "PrimitiveProperty" /* PrimitiveProperty */:
      navigation = singlePath(value, index, token.metadata);
      delete token.metadata;
      break;
    case "StreamProperty" /* StreamProperty */:
      navigation = boundOperation(value, index, token.metadata);
      delete token.metadata;
      break;
  }
  if (navigation) {
    index = navigation.next;
  }
  return tokenize(
    value,
    start,
    index,
    { path: token, navigation },
    "PropertyPath" /* PropertyPath */,
    navigation
  );
}
function collectionPath(value, index, metadataContext) {
  return (
    countExpr(value, index) ||
    boundOperation(value, index, true, metadataContext)
  );
}
function singlePath(value, index, metadataContext) {
  return (
    valueExpr(value, index) ||
    boundOperation(value, index, false, metadataContext)
  );
}
function complexPath(value, index, metadataContext) {
  const start = index;
  let name, token;
  if (value[index] === 47) {
    name = qualifiedComplexTypeName(value, index + 1, metadataContext);
    if (name) {
      index = name.next;
    }
  }
  if (value[index] === 47) {
    token = propertyPath(value, index + 1, metadataContext);
    if (!token) {
      return;
    }
    index = token.next;
  } else {
    token = boundOperation(value, index, false, metadataContext);
  }
  if (!name && !token) {
    return;
  }
  return tokenize(
    value,
    start,
    index,
    { name, path: token },
    "ComplexPath" /* ComplexPath */,
    token
  );
}
function boundOperation(value, index, isCollection, metadataContext) {
  if (value[index] !== 47) {
    return;
  }
  const start = index;
  index++;
  const operation =
    boundEntityColFuncCall(value, index, isCollection, metadataContext) ||
    boundEntityFuncCall(value, index, isCollection, metadataContext) ||
    boundComplexColFuncCall(value, index, isCollection, metadataContext) ||
    boundComplexFuncCall(value, index, isCollection, metadataContext) ||
    boundPrimitiveColFuncCall(value, index, isCollection, metadataContext) ||
    boundPrimitiveFuncCall(value, index, isCollection, metadataContext) ||
    boundActionCall(value, index, isCollection, metadataContext);
  if (!operation) {
    return;
  }
  index = operation.next;
  let name, navigation;
  switch (operation.type) {
    case "BoundActionCall" /* BoundActionCall */:
      break;
    case "BoundEntityCollectionFunctionCall" /* BoundEntityCollectionFunctionCall */:
      navigation = collectionNavigation(
        value,
        index,
        operation.value.call.metadata
      );
      delete operation.metadata;
      break;
    case "BoundEntityFunctionCall" /* BoundEntityFunctionCall */:
      navigation = singleNavigation(
        value,
        index,
        operation.value.call.metadata
      );
      delete operation.metadata;
      break;
    case "BoundComplexCollectionFunctionCall" /* BoundComplexCollectionFunctionCall */:
      if (value[index] === 47) {
        name = qualifiedComplexTypeName(
          value,
          index + 1,
          operation.value.call.metadata
        );
        if (name) {
          index = name.next;
        }
      }
      navigation = collectionPath(value, index, operation.value.call.metadata);
      delete operation.metadata;
      break;
    case "BoundComplexFunctionCall" /* BoundComplexFunctionCall */:
      navigation = complexPath(value, index, operation.value.call.metadata);
      delete operation.metadata;
      break;
    case "BoundPrimitiveCollectionFunctionCall" /* BoundPrimitiveCollectionFunctionCall */:
      navigation = collectionPath(value, index, operation.value.call.metadata);
      delete operation.metadata;
      break;
    case "BoundPrimitiveFunctionCall" /* BoundPrimitiveFunctionCall */:
      navigation = singlePath(value, index, operation.value.call.metadata);
      delete operation.metadata;
      break;
  }
  if (navigation) {
    index = navigation.next;
  }
  return tokenize(
    value,
    start,
    index,
    { operation, name, navigation },
    "BoundOperation" /* BoundOperation */,
    navigation
  );
}
function boundActionCall(value, index, isCollection, metadataContext) {
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index) {
    return;
  }
  const start = index;
  index = namespaceNext;
  if (value[index] !== 46) {
    return;
  }
  index++;
  const action2 = action(value, index, isCollection, metadataContext);
  if (!action2) {
    return;
  }
  action2.value.namespace = utils_default.stringify(
    value,
    start,
    namespaceNext
  );
  return tokenize(
    value,
    start,
    action2.next,
    action2,
    "BoundActionCall" /* BoundActionCall */,
    action2
  );
}
function boundFunctionCall(
  value,
  index,
  odataFunction2,
  tokenType,
  isCollection,
  metadataContext
) {
  const namespaceNext = namespace(value, index);
  if (namespaceNext === index) {
    return;
  }
  const start = index;
  index = namespaceNext;
  if (value[index] !== 46) {
    return;
  }
  index++;
  const call = odataFunction2(value, index, isCollection, metadataContext);
  if (!call) {
    return;
  }
  call.value.namespace = utils_default.stringify(value, start, namespaceNext);
  index = call.next;
  const params = functionParameters(value, index);
  if (!params) {
    return;
  }
  index = params.next;
  return tokenize(value, start, index, { call, params }, tokenType, call);
}
function boundEntityFuncCall(value, index, isCollection, metadataContext) {
  return boundFunctionCall(
    value,
    index,
    entityFunction,
    "BoundEntityFunctionCall" /* BoundEntityFunctionCall */,
    isCollection,
    metadataContext
  );
}
function boundEntityColFuncCall(value, index, isCollection, metadataContext) {
  return boundFunctionCall(
    value,
    index,
    entityColFunction,
    "BoundEntityCollectionFunctionCall" /* BoundEntityCollectionFunctionCall */,
    isCollection,
    metadataContext
  );
}
function boundComplexFuncCall(value, index, isCollection, metadataContext) {
  return boundFunctionCall(
    value,
    index,
    complexFunction,
    "BoundComplexFunctionCall" /* BoundComplexFunctionCall */,
    isCollection,
    metadataContext
  );
}
function boundComplexColFuncCall(value, index, isCollection, metadataContext) {
  return boundFunctionCall(
    value,
    index,
    complexColFunction,
    "BoundComplexCollectionFunctionCall" /* BoundComplexCollectionFunctionCall */,
    isCollection,
    metadataContext
  );
}
function boundPrimitiveFuncCall(value, index, isCollection, metadataContext) {
  return boundFunctionCall(
    value,
    index,
    primitiveFunction,
    "BoundPrimitiveFunctionCall" /* BoundPrimitiveFunctionCall */,
    isCollection,
    metadataContext
  );
}
function boundPrimitiveColFuncCall(
  value,
  index,
  isCollection,
  metadataContext
) {
  return boundFunctionCall(
    value,
    index,
    primitiveColFunction,
    "BoundPrimitiveCollectionFunctionCall" /* BoundPrimitiveCollectionFunctionCall */,
    isCollection,
    metadataContext
  );
}
function actionImportCall(value, index, metadataContext) {
  const action2 = actionImport(value, index, metadataContext);
  if (action2) {
    return tokenize(
      value,
      index,
      action2.next,
      action2,
      "ActionImportCall" /* ActionImportCall */,
      action2
    );
  }
}
function functionImportCall(value, index, metadataContext) {
  const fnImport =
    entityFunctionImport(value, index, metadataContext) ||
    entityColFunctionImport(value, index, metadataContext) ||
    complexFunctionImport(value, index, metadataContext) ||
    complexColFunctionImport(value, index, metadataContext) ||
    primitiveFunctionImport(value, index, metadataContext) ||
    primitiveColFunctionImport(value, index, metadataContext);
  if (!fnImport) {
    return;
  }
  const start = index;
  index = fnImport.next;
  const params = functionParameters(value, index);
  if (!params) {
    return;
  }
  index = params.next;
  return tokenize(
    value,
    start,
    index,
    { import: fnImport, params: params.value },
    `${fnImport.type}Call`,
    fnImport
  );
}
function functionParameters(value, index, metadataContext) {
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  const start = index;
  index = open;
  const params = [];
  let token = functionParameter(value, index);
  while (token) {
    params.push(token);
    index = token.next;
    const comma = COMMA(value, index);
    if (comma) {
      index = comma;
      token = functionParameter(value, index);
      if (!token) {
        return;
      }
    } else {
      break;
    }
  }
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  index = close;
  return tokenize(
    value,
    start,
    index,
    params,
    "FunctionParameters" /* FunctionParameters */
  );
}
function functionParameter(value, index, metadataContext) {
  const name = parameterName(value, index);
  if (!name) {
    return;
  }
  const start = index;
  index = name.next;
  const eq = EQ(value, index);
  if (!eq) {
    return;
  }
  index = eq;
  const token = parameterAlias(value, index) || primitiveLiteral(value, index);
  if (!token) {
    return;
  }
  index = token.next;
  return tokenize(
    value,
    start,
    index,
    { name, value: token },
    "FunctionParameter" /* FunctionParameter */
  );
}
function crossjoin(value, index, metadataContext) {
  if (!utils_default.equals(value, index, "$crossjoin")) {
    return;
  }
  const start = index;
  index += 10;
  const open = OPEN(value, index);
  if (!open) {
    return;
  }
  index = open;
  const names = [];
  let token = entitySetName(value, index, metadataContext);
  if (!token) {
    return;
  }
  while (token) {
    names.push(token);
    index = token.next;
    const comma = COMMA(value, index);
    if (comma) {
      index = comma;
      token = entitySetName(value, index, metadataContext);
      if (!token) {
        return;
      }
    } else {
      break;
    }
  }
  const close = CLOSE(value, index);
  if (!close) {
    return;
  }
  return tokenize(value, start, index, { names }, "Crossjoin" /* Crossjoin */);
}
function all(value, index) {
  if (utils_default.equals(value, index, "$all")) {
    return tokenize(
      value,
      index,
      index + 4,
      "$all",
      "AllResource" /* AllResource */
    );
  }
}

// src/odataUri.ts
function odataUri(value, index, metadataContext) {
  let resource = resourcePath(value, index, metadataContext);
  while (!resource && index < value.length) {
    while (value[++index] !== 47 && index < value.length) {}
    resource = resourcePath(value, index, metadataContext);
  }
  if (!resource) {
    return;
  }
  const start = index;
  index = resource.next;
  metadataContext = resource.metadata;
  let query;
  if (value[index] === 63) {
    query = queryOptions(value, index + 1, metadataContext);
    if (!query) {
      return;
    }
    index = query.next;
    delete resource.metadata;
  }
  return tokenize(
    value,
    start,
    index,
    { resource, query },
    "ODataUri" /* ODataUri */,
    { metadata: metadataContext }
  );
}

// src/parser.ts
var parserFactory = function (fn) {
  return function (source, options) {
    options = options || {};
    const raw = new Uint16Array(source.length);
    const pos = 0;
    for (let i = 0; i < source.length; i++) {
      raw[i] = source.charCodeAt(i);
    }
    const result = fn(raw, pos, options.metadata);
    if (!result) {
      throw new Error(`Fail at ${pos}`);
    }
    if (result.next < raw.length) {
      throw new Error(`Unexpected character at ${result.next}`);
    }
    return result;
  };
};
var Parser = class {
  /**
   * parser ast node with full odata uri
   *
   * @param source
   * @param options
   */
  odataUri(source, options) {
    return parserFactory(odataUri)(source, options);
  }
  resourcePath(source, options) {
    return parserFactory(resourcePath)(source, options);
  }
  query(source, options) {
    return parserFactory(queryOptions)(source, options);
  }
  filter(source, options) {
    return parserFactory(boolCommonExpr)(source, options);
  }
  keys(source, options) {
    return parserFactory(keyPredicate)(source, options);
  }
  literal(source, options) {
    return parserFactory(primitiveLiteral)(source, options);
  }
  arrayOrObject(source, index) {
    return parserFactory(arrayOrObject)(source, index);
  }
};

// src/builder/index.ts
var import_metadata3 = __toESM(require_lib());

// src/builder/filter.ts
var import_join = __toESM(require_join());
var import_metadata2 = __toESM(require_lib());

// src/builder/types.ts
var import_metadata = __toESM(require_lib());
function convertPrimitiveValueToString(value, version = "v4") {
  var _a, _b, _c;
  if (
    ((_a = value == null ? void 0 : value.getValue) == null
      ? void 0
      : _a.call(value)) === null
  ) {
    return "null";
  }
  if (
    ((_b = value == null ? void 0 : value.getValue) == null
      ? void 0
      : _b.call(value)) !== void 0
  ) {
    switch (
      (_c = value == null ? void 0 : value.getType) == null
        ? void 0
        : _c.call(value)
    ) {
      case import_metadata.Edm.Int16:
      case import_metadata.Edm.Int32:
      case import_metadata.Edm.Int64:
      case import_metadata.Edm.Guid:
      case import_metadata.Edm.Double:
      case import_metadata.Edm.Decimal:
      case import_metadata.Edm.Byte:
      case import_metadata.Edm.SByte:
      case import_metadata.Edm.Single:
        return String(value.getValue());
      case import_metadata.Edm.Boolean:
        return String(value.getValue());
      case import_metadata.Edm.Binary:
        const vB = value.getValue();
        if (vB instanceof Buffer) {
          return `binary'${vB.toString("base64")}'`;
        }
        return String(vB);
      case import_metadata.Edm.String:
        return `'${value.getValue()}'`;
      case import_metadata.Edm.Duration:
        return value.getValue();
      case import_metadata.Edm.DateTime:
        let vd = value.getValue();
        if (typeof vd === "string") {
          vd = new Date(vd);
        }
        if (version === "v2") {
          return `datetime'${vd.toISOString()}'`;
        }
        throw new Error("OData V4 is not support 'Edm.DateTime' values");
      case import_metadata.Edm.DateTimeOffset:
        let v1 = value.getValue();
        if (typeof v1 === "string") {
          v1 = new Date(v1);
        }
        if (version === "v2") {
          return `datetimeoffset'${v1.toISOString()}'`;
        }
        return v1.toISOString();
      case import_metadata.Edm.Date:
        const v2 = value.getValue();
        if (v2 instanceof Date) {
          return `${v2.getFullYear()}-${v2.getMonth() + 1}-${v2.getDate()}`;
        }
        return v2;
      case import_metadata.Edm.Geography:
      case import_metadata.Edm.GeographyPoint:
      case import_metadata.Edm.GeographyLineString:
      case import_metadata.Edm.GeographyPolygon:
      case import_metadata.Edm.GeographyMultiPoint:
      case import_metadata.Edm.GeographyMultiLineString:
      case import_metadata.Edm.GeographyMultiPolygon:
      case import_metadata.Edm.GeographyCollection:
      case import_metadata.Edm.Geometry:
      case import_metadata.Edm.GeometryPoint:
      case import_metadata.Edm.GeometryLineString:
      case import_metadata.Edm.GeometryPolygon:
      case import_metadata.Edm.GeometryMultiPoint:
      case import_metadata.Edm.GeometryMultiLineString:
      case import_metadata.Edm.GeometryMultiPolygon:
      case import_metadata.Edm.GeometryCollection:
        return String(value.getValue());
      default:
        throw new TypeError(`not support type '${value.getType()}'`);
    }
  }
  throw new Error("'undefined' value provided");
}

// src/builder/filter.ts
var ExprOperator = /* @__PURE__ */ ((ExprOperator2) => {
  ExprOperator2["eq"] = "eq";
  ExprOperator2["ne"] = "ne";
  ExprOperator2["gt"] = "gt";
  ExprOperator2["lt"] = "lt";
  ExprOperator2["ge"] = "ge";
  ExprOperator2["le"] = "le";
  return ExprOperator2;
})(ExprOperator || {});
var ODataFieldExpr = class {
  constructor(filter3, fieldName, mapping) {
    __publicField(this, "_filter");
    __publicField(this, "_fieldName");
    __publicField(this, "_exprMappings");
    this._exprMappings = mapping;
    this._fieldName = fieldName;
    this._filter = filter3;
    if (this._getFieldExprs() == void 0) {
      this._exprMappings[this._fieldName] = [];
    }
  }
  _getFieldExprs() {
    return this._exprMappings[this._fieldName];
  }
  _addExpr(op, value) {
    if (value === null) {
      this._getFieldExprs().push({ op, value: "null" });
      return;
    }
    switch (typeof value) {
      case "number":
      case "boolean":
      case "string":
      case "object":
        this._getFieldExprs().push({ op, value });
        break;
      case "undefined":
        throw new Error(
          `You must set value in odata filter eq/ne/gt/ge/ne/nt ...`
        );
      default:
        throw new Error(
          `Not support typeof ${typeof value}: ${value} in odata filter eq/ne/gt/ge/ne/nt ...`
        );
    }
  }
  /**
   * equal
   * @param value
   */
  eq(value) {
    this._addExpr("eq" /* eq */, value);
    return this._filter;
  }
  /**
   * not equal
   * @param value
   */
  ne(value) {
    this._addExpr("ne" /* ne */, value);
    return this._filter;
  }
  eqString(value) {
    this._addExpr("eq" /* eq */, `'${value}'`);
    return this._filter;
  }
  neString(value) {
    this._addExpr("ne" /* ne */, `'${value}'`);
    return this._filter;
  }
  /**
   * greater or equal
   * @param value
   */
  ge(value) {
    this._addExpr("ge" /* ge */, value);
    return this._filter;
  }
  /**
   * greater than
   * @param value
   */
  gt(value) {
    this._addExpr("gt" /* gt */, value);
    return this._filter;
  }
  /**
   * less or equal
   * @param value
   */
  le(value) {
    this._addExpr("le" /* le */, value);
    return this._filter;
  }
  /**
   * less than
   * @param value
   */
  lt(value) {
    this._addExpr("lt" /* lt */, value);
    return this._filter;
  }
  /**
   * match any value in an array
   *
   * @param values
   */
  in(values = []) {
    if (values.length > 0) {
      values.forEach((value) => {
        this.eq(value);
      });
    }
    return this._filter;
  }
  /**
   * filter by value range
   *
   * @param low
   * @param max
   * @param includeBoundary
   */
  between(low, max, includeBoundary = true) {
    if (low == void 0 || max == void 0) {
      throw new Error("You must give out the start and end value");
    }
    if (includeBoundary) {
      this.ge(low);
      this.le(max);
    } else {
      this.gt(low);
      this.lt(max);
    }
    return this._filter;
  }
};
var ODataFilter = class _ODataFilter {
  constructor(obj) {
    __publicField(this, "_fieldExprMappings", {});
    if (obj != void 0 && typeof obj == "object") {
      Object.entries(obj).forEach(([prop, value]) => {
        this.field(prop).eq(value);
      });
    }
  }
  static New(obj) {
    return new _ODataFilter(obj);
  }
  /**
   * getExprMapping
   *
   * @internal
   * @private
   */
  getExprMapping() {
    return this._fieldExprMappings;
  }
  /**
   * @param name filed name
   */
  field(name) {
    return new ODataFieldExpr(this, name, this.getExprMapping());
  }
  toString(version = "v4") {
    return this.build(version);
  }
  _buildExprLit(value, version = "v4") {
    var _a;
    if (value === null) {
      return "null";
    }
    switch (typeof value) {
      case "number":
      case "boolean":
        return `${value}`;
      case "string":
        if (value.startsWith("'") || value.startsWith("datetime")) {
          return value;
        }
        return `'${value}'`;
      case "object":
        if (value instanceof import_metadata2.Edm.PrimitiveTypeValue) {
          return convertPrimitiveValueToString(value, version);
        }
        throw new Error(
          `Not support object ${
            ((_a = value == null ? void 0 : value.constructor) == null
              ? void 0
              : _a.name) || typeof value
          } in odata filter eq/ne/gt/ge/ne/nt ...`
        );
      case "undefined":
        throw new Error(
          `You must set value in odata filter eq/ne/gt/ge/ne/nt ...`
        );
      default:
        throw new Error(
          `Not support typeof ${typeof value}: ${value} in odata filter eq/ne/gt/ge/ne/nt ...`
        );
    }
  }
  _buildFieldExprString(field, version = "v4") {
    const exprs = this.getExprMapping()[field];
    if (exprs.length > 0) {
      if (exprs.filter((expr) => expr.op == "eq" /* eq */).length == 0) {
        return `(${(0, import_join.default)(
          exprs.map(
            ({ op, value }) =>
              `${field} ${op} ${this._buildExprLit(value, version)}`
          ),
          " and "
        )})`;
      }
      return `(${(0, import_join.default)(
        exprs.map(
          ({ op, value }) =>
            `${field} ${op} ${this._buildExprLit(value, version)}`
        ),
        " or "
      )})`;
    }
    return "";
  }
  build(version = "v4") {
    let _rt = "";
    _rt = (0, import_join.default)(
      // join all fields exprs string
      Object.entries(this.getExprMapping()).map(([fieldName, exprs]) => {
        switch (exprs.length) {
          case 0:
            return "";
          case 1:
            const { op, value } = exprs[0];
            return `${fieldName} ${op} ${this._buildExprLit(value, version)}`;
          default:
            return this._buildFieldExprString(fieldName, version);
        }
      }),
      " and "
    );
    return _rt;
  }
};

// src/builder/param.ts
var import_concat = __toESM(require_concat());
var import_isArray2 = __toESM(require_isArray());
var import_join2 = __toESM(require_join());
var import_uniq = __toESM(require_uniq());
var SearchParams = class {
  constructor() {
    __publicField(this, "_store", /* @__PURE__ */ new Map());
  }
  append(key, value) {
    if (this._store.has(key)) {
      throw new Error(
        `key ${key} has been appended before, and can not be overwritten!`
      );
    }
    this._store.set(key, value);
  }
  toString() {
    const coll = [];
    this._store.forEach((value, key) => {
      coll.push(`${key}=${value}`);
    });
    return coll.join("&");
  }
  destroy() {
    delete this._store;
  }
};
var ODataQueryParam = class _ODataQueryParam {
  constructor() {
    __publicField(this, "$skip", 0);
    __publicField(this, "$filter");
    __publicField(this, "$top", 0);
    __publicField(this, "$select", []);
    __publicField(this, "$orderby");
    __publicField(this, "$format");
    __publicField(this, "$search");
    __publicField(this, "$expand", []);
    __publicField(this, "$count", false);
  }
  static New() {
    return new _ODataQueryParam();
  }
  /**
   *
   * count items in odata v4
   *
   * @param count
   *
   * @version 4.0.0
   */
  count(count = true) {
    this.$count = count;
    return this;
  }
  /**
   * apply filter for query
   *
   * @param filter
   */
  filter(filter3) {
    if (filter3 instanceof ODataFilter) {
      this.$filter = filter3.build();
      return this;
    } else if (typeof filter3 === "object") {
      this.$filter = ODataFilter.New(filter3).build();
      return this;
    } else if (typeof filter3 === "string") {
      this.$filter = filter3;
      return this;
    }
    throw new Error(
      "ODataQueryParam.filter only accept string or ODataFilter type parameter"
    );
  }
  /**
   * skip first records
   *
   * @param skip
   */
  skip(skip2) {
    this.$skip = skip2;
    return this;
  }
  /**
   * limit result max records
   *
   * @param top
   */
  top(top2) {
    this.$top = top2;
    return this;
  }
  /**
   * select viewed fields
   *
   * @param selects
   */
  select(selects) {
    this.$select = (0, import_concat.default)(this.$select, selects);
    return this;
  }
  /**
   * set order sequence
   *
   * @param fieldOrOrders
   * @param order default desc, disabled when first params is array
   */
  orderby(fieldOrOrders, order = "desc") {
    if ((0, import_isArray2.default)(fieldOrOrders)) {
      return this.orderbyMulti(fieldOrOrders);
    }
    this.$orderby = `${fieldOrOrders} ${order}`;
    return this;
  }
  /**
   * set order by multi field
   *
   * @param fields
   */
  orderbyMulti(fields = []) {
    this.$orderby = (0, import_join2.default)(
      fields.map((f) => `${f.field} ${f.order || "desc"}`),
      ","
    );
    return this;
  }
  /**
   * result format, please keep it as json
   *
   * @param format default json
   */
  format(format2) {
    this.$format = format2;
    return this;
  }
  /**
   * full text search
   *
   * default with fuzzy search, SAP system or OData V4 only
   *
   * @param value
   * @version 4.0.0
   */
  search(value) {
    this.$search = value;
    return this;
  }
  /**
   * expand navigation props
   *
   * @param fields
   * @param replace
   */
  expand(fields, replace = false) {
    if (replace) {
      if (typeof fields == "string") {
        this.$expand = [fields];
      } else if ((0, import_isArray2.default)(fields)) {
        this.$expand = fields;
      }
    } else {
      this.$expand = (0, import_concat.default)(this.$expand, fields);
    }
    return this;
  }
  toString(version = "v4") {
    const rt = new SearchParams();
    if (this.$format) {
      rt.append("$format", this.$format);
    }
    if (this.$filter) {
      rt.append("$filter", this.$filter.toString());
    }
    if (this.$orderby) {
      rt.append("$orderby", this.$orderby);
    }
    if (this.$search) {
      rt.append("$search", this.$search);
    }
    if (this.$select && this.$select.length > 0) {
      rt.append(
        "$select",
        (0, import_join2.default)((0, import_uniq.default)(this.$select), ",")
      );
    }
    if (this.$skip) {
      rt.append("$skip", this.$skip.toString());
    }
    if (this.$top && this.$top > 0) {
      rt.append("$top", this.$top.toString());
    }
    if (this.$expand && this.$expand.length > 0) {
      rt.append("$expand", this.$expand.join(","));
    }
    switch (version) {
      case "v2":
        if (this.$count) {
          rt.append("$inlinecount", "allpages");
        }
        break;
      case "v4":
        if (this.$count) {
          rt.append("$count", "true");
        }
        break;
      default:
        break;
    }
    return rt.toString();
  }
};
var ODataParam = ODataQueryParam;

// src/builder/index.ts
function param() {
  return ODataParam.New();
}
function filter2(obj) {
  return ODataFilter.New(obj);
}
var literalValues = {
  Binary: (value) => import_metadata3.Edm.Binary.createValue(value),
  Boolean: (value) => import_metadata3.Edm.Boolean.createValue(value),
  Byte: (value) => import_metadata3.Edm.Byte.createValue(value),
  Date: (value) => import_metadata3.Edm.Date.createValue(value),
  DateTimeOffset: (value) =>
    import_metadata3.Edm.DateTimeOffset.createValue(value),
  Decimal: (value) => import_metadata3.Edm.Decimal.createValue(value),
  Double: (value) => import_metadata3.Edm.Double.createValue(value),
  Duration: (value) => import_metadata3.Edm.Duration.createValue(value),
  Guid: (value) => import_metadata3.Edm.Guid.createValue(value),
  Int16: (value) => import_metadata3.Edm.Int16.createValue(value),
  Int32: (value) => import_metadata3.Edm.Int32.createValue(value),
  Int64: (value) => import_metadata3.Edm.Int64.createValue(value),
  SByte: (value) => import_metadata3.Edm.SByte.createValue(value),
  Single: (value) => import_metadata3.Edm.Single.createValue(value),
  Stream: (value) => import_metadata3.Edm.Stream.createValue(value),
  String: (value) => import_metadata3.Edm.String.createValue(value),
  TimeOfDay: (value) => import_metadata3.Edm.TimeOfDay.createValue(value),
  Geography: (value) => import_metadata3.Edm.Geography.createValue(value),
  GeographyPoint: (value) =>
    import_metadata3.Edm.GeographyPoint.createValue(value),
  GeographyLineString: (value) =>
    import_metadata3.Edm.GeographyLineString.createValue(value),
  GeographyPolygon: (value) =>
    import_metadata3.Edm.GeographyPolygon.createValue(value),
  GeographyMultiPoint: (value) =>
    import_metadata3.Edm.GeographyMultiPoint.createValue(value),
  GeographyMultiLineString: (value) =>
    import_metadata3.Edm.GeographyMultiLineString.createValue(value),
  GeographyMultiPolygon: (value) =>
    import_metadata3.Edm.GeographyMultiPolygon.createValue(value),
  GeographyCollection: (value) =>
    import_metadata3.Edm.GeographyCollection.createValue(value),
  Geometry: (value) => import_metadata3.Edm.Geometry.createValue(value),
  GeometryPoint: (value) =>
    import_metadata3.Edm.GeometryPoint.createValue(value),
  GeometryLineString: (value) =>
    import_metadata3.Edm.GeometryLineString.createValue(value),
  GeometryPolygon: (value) =>
    import_metadata3.Edm.GeometryPolygon.createValue(value),
  GeometryMultiPoint: (value) =>
    import_metadata3.Edm.GeometryMultiPoint.createValue(value),
  GeometryMultiLineString: (value) =>
    import_metadata3.Edm.GeometryMultiLineString.createValue(value),
  GeometryMultiPolygon: (value) =>
    import_metadata3.Edm.GeometryMultiPolygon.createValue(value),
  GeometryCollection: (value) =>
    import_metadata3.Edm.GeometryCollection.createValue(value),
};

// src/constants/method.ts
var ODataMethod = /* @__PURE__ */ ((ODataMethod2) => {
  ODataMethod2["GET"] = "GET";
  ODataMethod2["POST"] = "POST";
  ODataMethod2["PATCH"] = "PATCH";
  ODataMethod2["PUT"] = "PUT";
  ODataMethod2["DELETE"] = "DELETE";
  return ODataMethod2;
})(ODataMethod || {});
var ODataMethods = [
  "GET" /* GET */,
  "POST" /* POST */,
  "PATCH" /* PATCH */,
  "PUT" /* PUT */,
  "DELETE" /* DELETE */,
];

// src/index.ts
var defaultParser = new Parser();
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    ALPHA,
    AT,
    AtoF,
    BWS,
    CLOSE,
    COLON,
    COMMA,
    DIGIT,
    DQUOTE,
    EQ,
    ExprOperator,
    HEXDIG,
    HTAB,
    LexerTokenType,
    ODataFilter,
    ODataMethod,
    ODataMethods,
    ODataParam,
    ODataQueryParam,
    OPEN,
    OWS,
    RWS,
    SEMI,
    SIGN,
    SP,
    SQUOTE,
    STAR,
    Token,
    TokenType,
    VCHAR,
    base64b16,
    base64b8,
    base64char,
    beginArray,
    beginObject,
    clone,
    convertPrimitiveValueToString,
    createTraverser,
    day,
    defaultParser,
    endArray,
    endObject,
    escape,
    filter,
    fractionalSeconds,
    geographyPrefix,
    geometryPrefix,
    hour,
    identifierCharacter,
    identifierLeadingCharacter,
    literalValues,
    minute,
    month,
    nameSeparator,
    nanInfinity,
    oneToNine,
    otherDelims,
    param,
    pchar,
    pcharNoSQUOTE,
    pctEncoded,
    pctEncodedNoSQUOTE,
    pctEncodedUnescaped,
    qcharNoAMP,
    qcharNoAMPDQUOTE,
    quotationMark,
    second,
    subDelims,
    tokenize,
    traverseAst,
    traverseAstDeepFirst,
    unreserved,
    valueSeparator,
    whitespaceLength,
    year,
    zeroToFiftyNine,
  });
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
