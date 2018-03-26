(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/data", [], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/data"] = factory();
	else
		root["IotaPicoData"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(16);
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, (DataError.__proto__ || Object.getPrototypeOf(DataError)).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var stringHelper_1 = __webpack_require__(4);

var dataError_1 = __webpack_require__(0);
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var trits_1 = __webpack_require__(14);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var stringHelper_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(2);

var dataError_1 = __webpack_require__(0);
/**
 * Trytes converter that converts to and from a string.
 */


var AsciiTrytesConverter =
/*#__PURE__*/
function () {
  function AsciiTrytesConverter() {
    _classCallCheck(this, AsciiTrytesConverter);
  }

  _createClass(AsciiTrytesConverter, [{
    key: "to",

    /**
     * Convert a string value into trytes.
     * @param string value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    value: function to(value) {
      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a string", {
          value: value
        });
      }

      if (!stringHelper_1.StringHelper.isAscii(value)) {
        throw new dataError_1.DataError("The value contains non ASCII characters", {
          value: value
        });
      }

      var trytes = "";

      for (var i = 0; i < value.length; i++) {
        var asciiValue = value.charCodeAt(i);
        var firstValue = asciiValue % 27;
        var secondValue = (asciiValue - firstValue) / 27;
        trytes += trytes_1.Trytes.ALPHABET[firstValue] + trytes_1.Trytes.ALPHABET[secondValue];
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */

  }, {
    key: "from",
    value: function from(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes parameter is empty or not the correct type");
      }

      var trytesString = trytes.toString();

      if (trytesString.length % 2 === 1) {
        throw new dataError_1.DataError("The trytes length must be an even number");
      }

      var ascii = "";

      for (var i = 0; i < trytesString.length; i += 2) {
        var trytesPair = trytesString[i] + trytesString[i + 1];
        var firstValue = trytes_1.Trytes.ALPHABET.indexOf(trytesPair[0]);
        var secondValue = trytes_1.Trytes.ALPHABET.indexOf(trytesPair[1]);
        var decimalValue = firstValue + secondValue * 27;
        ascii += String.fromCharCode(decimalValue);
      }

      return ascii;
    }
  }]);

  return AsciiTrytesConverter;
}();

exports.AsciiTrytesConverter = AsciiTrytesConverter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents an enum for the address security values.
 */

var AddressSecurity;

(function (AddressSecurity) {
  AddressSecurity[AddressSecurity["low"] = 1] = "low";
  AddressSecurity[AddressSecurity["medium"] = 2] = "medium";
  AddressSecurity[AddressSecurity["high"] = 3] = "high";
})(AddressSecurity = exports.AddressSecurity || (exports.AddressSecurity = {}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var address_1 = __webpack_require__(5);

var hash_1 = __webpack_require__(7);

var signatureMessageFragment_1 = __webpack_require__(8);

var tag_1 = __webpack_require__(6);

var tryteNumber_1 = __webpack_require__(9);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @returns New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(19);

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(10));

__export(__webpack_require__(17));

__export(__webpack_require__(5));

__export(__webpack_require__(12));

__export(__webpack_require__(18));

__export(__webpack_require__(7));

__export(__webpack_require__(20));

__export(__webpack_require__(8));

__export(__webpack_require__(6));

__export(__webpack_require__(13));

__export(__webpack_require__(21));

__export(__webpack_require__(14));

__export(__webpack_require__(9));

__export(__webpack_require__(2));

__export(__webpack_require__(0));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(11);

var stringHelper_1 = __webpack_require__(4);
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(11);

var objectHelper_1 = __webpack_require__(1);

var stringHelper_1 = __webpack_require__(4);

var trytes_1 = __webpack_require__(2);

var dataError_1 = __webpack_require__(0);

var asciiTrytesConverter_1 = __webpack_require__(10);
/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */


var ObjectTrytesConverter =
/*#__PURE__*/
function () {
  function ObjectTrytesConverter() {
    _classCallCheck(this, ObjectTrytesConverter);
  }

  _createClass(ObjectTrytesConverter, [{
    key: "to",

    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    value: function to(value) {
      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        throw new dataError_1.DataError("The value can not be empty");
      }

      var json;

      try {
        json = jsonHelper_1.JsonHelper.stringify(value);
      } catch (err) {
        throw new dataError_1.DataError("There was a problem converting the object to JSON", {
          err: err
        });
      }

      return new asciiTrytesConverter_1.AsciiTrytesConverter().to(stringHelper_1.StringHelper.encodeNonASCII(json));
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */

  }, {
    key: "from",
    value: function from(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes parameter is empty or not the correct type");
      }

      var ascii = new asciiTrytesConverter_1.AsciiTrytesConverter().from(trytes); // Must have a a start and closing pairs

      if (ascii.length < 2) {
        throw new dataError_1.DataError("The trytes do not represent an object");
      } // The start and end must be either {}, [] or "" to represent a JSON object


      if (!(ascii[0] === "{" && ascii[ascii.length - 1] === "}" || ascii[0] === "[" && ascii[ascii.length - 1] === "]" || ascii[0] === "\"" && ascii[ascii.length - 1] === "\"")) {
        throw new dataError_1.DataError("The trytes do not represent an object", {
          ascii: ascii
        });
      }

      var decoded = stringHelper_1.StringHelper.decodeNonASCII(ascii);
      var obj;

      try {
        obj = JSON.parse(decoded);
      } catch (err) {
        throw new dataError_1.DataError("There was a problem converting the object from JSON", {
          err: err
        });
      }

      return obj;
    }
  }]);

  return ObjectTrytesConverter;
}();

exports.ObjectTrytesConverter = ObjectTrytesConverter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var hash_1 = __webpack_require__(7);

var signatureMessageFragment_1 = __webpack_require__(8);

var tag_1 = __webpack_require__(6);

var transaction_1 = __webpack_require__(13);

var tryteNumber_1 = __webpack_require__(9);
/**
 * A class for handling bundles.
 */


var Bundle =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Bundle.
   */
  function Bundle() {
    _classCallCheck(this, Bundle);

    this.transactions = [];
  }
  /**
   * Add new transactions to the bundle.
   * @param signatureMessageLength The number of transactions to add.
   * @param address The address for the transactions.
   * @param value The value for the first of the transactions.
   * @param tag The tag to include in the transactions.
   * @param timestamp The timestamp for the transactions.
   */


  _createClass(Bundle, [{
    key: "addTransactions",
    value: function addTransactions(signatureMessageLength, address, value, tag, timestamp) {
      for (var i = 0; i < signatureMessageLength; i++) {
        this.transactions.push(transaction_1.Transaction.fromParams(undefined, address, i === 0 ? value : 0, tag, timestamp, undefined, undefined, undefined, undefined, undefined, tag, undefined, undefined, undefined, undefined));
      }
    }
    /**
     * Add signature fragments to the bundle.
     * @param signatureMessageFragments The signature fragments to add to the bundle transactions.
     */

  }, {
    key: "addSignatureMessageFragments",
    value: function addSignatureMessageFragments(signatureMessageFragments) {
      if (objectHelper_1.ObjectHelper.isEmpty(signatureMessageFragments)) {
        throw new dataError_1.DataError("The signatureMessageFragments should be an array of SignatureMessageFragments");
      }

      for (var i = 0; i < this.transactions.length; i++) {
        this.transactions[i].signatureMessageFragment = signatureMessageFragments[i] || signatureMessageFragment_1.SignatureMessageFragment.EMPTY;
        this.transactions[i].trunkTransaction = hash_1.Hash.EMPTY;
        this.transactions[i].branchTransaction = hash_1.Hash.EMPTY;
        this.transactions[i].attachmentTimestamp = tryteNumber_1.TryteNumber.EMPTY_9;
        this.transactions[i].attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.EMPTY_9;
        this.transactions[i].attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.EMPTY_9;
        this.transactions[i].nonce = tag_1.Tag.EMPTY;
      }
    }
  }]);

  return Bundle;
}();

exports.Bundle = Bundle;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(1);
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var address_1 = __webpack_require__(5);

var addressSecurity_1 = __webpack_require__(12);
/**
 * A class for handling inputs.
 */


var Input =
/*#__PURE__*/
function () {
  /* @internal */
  function Input() {
    _classCallCheck(this, Input);
  }
  /**
   * Create instance of input from parameters.
   * @param address The address.
   * @param security The address security.
   * @param keyIndex The key index.
   * @param balance The balance of the address.
   * @returns New instance of Input.
   */


  _createClass(Input, null, [{
    key: "fromParams",
    value: function fromParams(address, security, keyIndex, balance) {
      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new dataError_1.DataError("The address should be a valid Address object");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
        throw new dataError_1.DataError("The security should be a number between ".concat(addressSecurity_1.AddressSecurity.low, " and ").concat(addressSecurity_1.AddressSecurity.high));
      }

      if (!numberHelper_1.NumberHelper.isInteger(keyIndex) || keyIndex < 0) {
        throw new dataError_1.DataError("The keyIndex should be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(balance) || balance < 0) {
        throw new dataError_1.DataError("The balance should be a number >= 0");
      }

      var input = new Input();
      input.address = address;
      input.security = security;
      input.keyIndex = keyIndex;
      input.balance = balance;
      return input;
    }
  }]);

  return Input;
}();

exports.Input = Input;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(3);

var objectHelper_1 = __webpack_require__(1);

var dataError_1 = __webpack_require__(0);

var address_1 = __webpack_require__(5);

var tag_1 = __webpack_require__(6);

var trytes_1 = __webpack_require__(2);
/**
 * A class for handling transfers.
 */


var Transfer =
/*#__PURE__*/
function () {
  /* @internal */
  function Transfer() {
    _classCallCheck(this, Transfer);
  }
  /**
   * Create instance of transfer from parameters.
   * @param address The address.
   * @param value The value.
   * @param messsage The message for the transfer.
   * @param tag The tag.
   * @returns New instance of Transfer.
   */


  _createClass(Transfer, null, [{
    key: "fromParams",
    value: function fromParams(address, value, message, tag) {
      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new dataError_1.DataError("The address should be a valid Address object");
      }

      if (!numberHelper_1.NumberHelper.isInteger(value) || value < 0) {
        throw new dataError_1.DataError("The value should be a number >= 0");
      }

      if (!objectHelper_1.ObjectHelper.isEmpty(message) && !objectHelper_1.ObjectHelper.isType(message, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The message should be a valid Trytes object");
      }

      if (!objectHelper_1.ObjectHelper.isEmpty(tag) && !objectHelper_1.ObjectHelper.isType(tag, tag_1.Tag)) {
        throw new dataError_1.DataError("The tag should be a valid Tag object");
      }

      var transfer = new Transfer();
      transfer.address = address;
      transfer.value = value;
      transfer.message = message;
      transfer.tag = tag;
      return transfer;
    }
  }]);

  return Transfer;
}();

exports.Transfer = Transfer;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNTkyMTlhZTEzOTIyMWIxN2EwNCIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL251bWJlckhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90YWcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvdHJ5dGVOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9jb252ZXJ0ZXJzL2FzY2lpVHJ5dGVzQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzU2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL3RyYW5zYWN0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZXJyb3IvY29yZUVycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvY29udmVydGVycy9vYmplY3RUcnl0ZXNDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL2J1bmRsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL2lucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsc0NBQWlFO0FBS2pFOzs7OztJQUF1Qjs7Ozs7QUFNaEI7Ozs7OztBQUNILHFCQUEyQixTQUFvQyxZQUFvQjs7Ozs7QUFDMUUsa0hBQVEsU0FBWSxZQUFjO0FBQ25DLFVBQU8sU0FDZjs7QUFDSDs7O0VBWDhCLFlBQVM7O0FBQXhDLG9CQVdDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7Ozs7Ozs7Ozs7Ozs7O0FBTXlCOzs7Ozs0QkFBVztBQUN0QixhQUFNLFVBQVMsUUFBUyxVQUNsQztBQUFDO0FBT3FCOzs7Ozs7Ozs2QkFBVztBQUN2QixhQUFNLFVBQVMsUUFBUyxVQUN6QixZQUFRLFFBQU8sUUFBTyxXQUFhLFlBQUksQ0FBTSxNQUFRLFFBQzlEO0FBQUM7QUFRbUI7Ozs7Ozs7OzsyQkFBVyxPQUEyQjtBQUN0RCxVQUFvQixpQkFBZSxhQUFhLGFBQVE7QUFDbEQsYUFBZSxtQkFBYyxhQUFrQixtQkFBaUIsYUFBYSxhQUN2RjtBQUFDO0FBT3lCOzs7Ozs7OztpQ0FBWTtBQUMvQixVQUFPLFdBQVMsUUFBVSxXQUFlLFdBQUU7QUFDcEMsZUFDVjtBQUFNLGFBQUU7QUFDSixZQUFpQixlQUFHLE9BQWEsV0FBaUIsYUFBTyxPQUFhLGFBQU8sT0FBWSxZQUFZOztBQUNyRyxZQUFhLFVBQWMsYUFBTSxNQUFTOztBQUNwQyxlQUFTLFdBQVcsUUFBTyxTQUFPLENBQWpDLEdBQXlDLFFBQUssS0FDekQ7QUFDSjtBQUNIOzs7Ozs7QUE3Q0QsdUJBNkNDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQseUNBQXlFOztBQUN6RSx5Q0FBeUU7O0FBQ3pFLHNDQUErQztBQUsvQzs7Ozs7Ozs7QUFTbUI7QUFDZixrQkFBa0M7OztBQUMxQixTQUFRLFVBQ2hCO0FBQUM7QUFRdUI7Ozs7Ozs7Ozs7O0FBK0JUOzs7OztBQUNMLGFBQUssS0FDZjtBQUFDO0FBTVk7Ozs7Ozs7O0FBQ0gsYUFBSyxLQUFRLFFBQ3ZCO0FBQUM7QUFRUzs7Ozs7Ozs7O3dCQUFjLE9BQWdCO0FBQ2pDLFVBQUMsQ0FBQyxlQUFZLGFBQVUsVUFBTyxVQUFTLFFBQUssR0FBRTtBQUM5QyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUNFLFVBQUMsQ0FBQyxlQUFZLGFBQVUsVUFBUSxXQUFVLFFBQVUsTUFBaEIsR0FBdUIsS0FBUSxRQUFRLFFBQUU7QUFDNUUsY0FBTSxJQUFJLFlBQVUsK0NBQWtDLEtBQVEsUUFDbEU7QUFBQzs7QUFDSyxhQUFPLE9BQVcsV0FBSyxLQUFRLFFBQU8sT0FBTSxPQUN0RDtBQUFDOzs7K0JBekRxQztVQUFFLDZFQUFrQjs7QUFDbkQsVUFBQyxDQUFDLGVBQVksYUFBUyxTQUFRLFFBQUU7QUFDaEMsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFDRSxVQUFDLENBQUMsZUFBWSxhQUFVLFVBQVEsV0FBVSxTQUFLLEdBQUU7QUFDaEQsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFDRSxVQUFDLENBQU8sT0FBUSxRQUFNLE9BQVUsU0FBRTtBQUNqQyxrQkFBVSxZQUFTLFVBQW1EO0FBQVM7QUFDbkY7QUFENEUsU0FBbEU7QUFDVDs7QUFDSyxhQUFDLElBQVUsT0FDckI7QUFBQztBQVFvQjs7Ozs7Ozs7OzRCQUFjO1VBQUUsNkVBQWtCOztBQUNoRCxVQUFDLENBQUMsZUFBWSxhQUFTLFNBQVEsUUFBRTtBQUMxQixlQUNWO0FBQU0sYUFBRTtBQUNFLGVBQUMsSUFBVyx5QkFBbUIsU0FBUyxTQUFVLGFBQUssS0FDakU7QUFDSjtBQUFDOzs7OztBQTFDRTs7Ozs7QUFDVyxPQUFRLFdBQXlDO0FBSm5FLGlCQThFQyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkQ7Ozs7Ozs7Ozs7Ozs7O0FBTTJCOzs7Ozs4QkFBVztBQUN4QixhQUFPLE9BQVUsVUFBTyxVQUFJLENBQU8sT0FBTSxNQUFPLFVBQVUsT0FBUyxTQUM3RTtBQUFDO0FBT3FCOzs7Ozs7Ozs2QkFBVztBQUN2QixhQUFNLFVBQWMsYUFBUyxVQUFTLFFBQUksT0FBWSxVQUFhLFlBQUksQ0FBTyxPQUFNLE1BQU8sVUFBVSxPQUFTLFNBQ3hIO0FBQUM7QUFPMEI7Ozs7Ozs7O2tDQUFjO0FBQy9CLGFBQWdCLGdCQUFLLEtBQy9CO0FBQUM7QUFPNEI7Ozs7Ozs7O29DQUFjO0FBQ2pDLGFBQVUsVUFBSyxLQUN6QjtBQUNIOzs7Ozs7QUFwQ0QsdUJBb0NDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRDs7Ozs7Ozs7Ozs7Ozs7QUFNMEI7Ozs7OzZCQUFXO0FBQ3ZCLGFBQU0sVUFBUyxRQUFTLFVBQ3pCLFlBQVEsUUFBTyxPQUFVLFVBQVMsU0FBSyxLQUFPLFdBQ3ZEO0FBQUM7QUFPb0I7Ozs7Ozs7OzRCQUFXO0FBQ3RCLGFBQUMsQ0FBYSxhQUFTLFNBQU8sVUFBUyxNQUFPLFdBQ3hEO0FBQUM7QUFPb0I7Ozs7Ozs7OzRCQUFjO0FBQ3pCLGFBQU0sVUFBUyxRQUFTLFVBQ3pCLFlBQVEsUUFBaUIsaUJBQUssS0FDdkM7QUFBQztBQU8yQjs7Ozs7Ozs7bUNBQWM7QUFDaEMsMEJBQXNCLFNBQVMsZUFBYyxRQUFtQiw4QkFBVztBQUFULDRCQUFnQixjQUFVLElBQVcsV0FBRyxHQUFTLFNBQU8sS0FBTyxPQUFDLENBQVE7T0FBckcsQ0FBeEIsR0FDdkI7QUFBQztBQU8yQjs7Ozs7Ozs7bUNBQWM7QUFDaEMsMEJBQXNCLFNBQVMsZUFBYyxRQUFtQiw4QkFBUSxPQUFTO0FBQWYsZUFBc0IsT0FBYSxhQUFTLFNBQUksS0FBUztPQUF0RixDQUF4QixHQUN2QjtBQUNIOzs7Ozs7QUEvQ0QsdUJBK0NDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREQseUNBQXlFOztBQUN6RSxzQ0FBK0M7O0FBQy9DLG1DQUFrQztBQUtsQzs7Ozs7Ozs7QUF3Qm1CO0FBQ2YsbUJBQXlDLGVBQXdCOzs7QUFDekQsU0FBZSxpQkFBaUI7QUFDaEMsU0FBZ0Isa0JBQ3hCO0FBQUM7QUFPdUI7Ozs7Ozs7Ozs7QUF1QlQ7Ozs7O0FBQ0wsYUFBQyxTQUFNLE9BQVcsV0FBSyxLQUNqQztBQUFDO0FBTTBCOzs7Ozs7OztBQUNwQixVQUFDLENBQUMsZUFBWSxhQUFRLFFBQUssS0FBa0Isa0JBQUU7QUFDeEMsZUFBQyxTQUFNLE9BQVcsV0FBSyxLQUFlLGlCQUFPLEtBQ3ZEO0FBQU0sYUFBRTtBQUNKLGNBQU0sSUFBSSxZQUNkO0FBQ0o7QUFBQztBQU1jOzs7Ozs7OztBQUNSLFVBQUMsQ0FBQyxlQUFZLGFBQVEsUUFBSyxLQUFrQixrQkFBRTtBQUN4QyxlQUFLLEtBQWUsaUJBQU8sS0FDckM7QUFBTSxhQUFFO0FBQ0UsZUFBSyxLQUNmO0FBQ0o7QUFBQzs7OytCQWpEdUM7QUFDakMsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFRLFNBQUUsU0FBUSxTQUFFO0FBQ3hDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUQsVUFBa0IsZUFBVSxRQUFZOztBQUVyQyxVQUFhLGFBQU8sV0FBWSxRQUFPLFVBQWdCLGFBQU8sV0FBWSxRQUFzQixzQkFBRTtBQUNqRyxrQkFBVSxZQUFVLGlEQUF1QyxRQUFPLHVCQUFjLFFBQTRDO0FBQVUsa0JBQWMsYUFDeEo7QUFEa0ksU0FBeEg7QUFDVDs7QUFFRCxVQUFtQixnQkFBZSxhQUFPLE9BQUUsR0FBUyxRQUFTO0FBQzdELFVBQW1COztBQUNoQixVQUFhLGFBQU8sV0FBWSxRQUFzQixzQkFBRTtBQUN6Qyx5QkFBZSxhQUFPLE9BQVEsUUFDaEQ7QUFBQzs7QUFDSyxhQUFDLElBQVcsUUFBYyxlQUNwQztBQUFDOzs7OztBQWpERTs7Ozs7QUFDb0IsUUFBTSxTQUFjO0FBR3hDOzs7O0FBQ29CLFFBQWUsa0JBQWE7QUFHaEQ7Ozs7QUFDb0IsUUFBb0IsdUJBQWtCLFFBQU8sU0FBVSxRQUFpQjtBQUk1Rjs7OztBQUNvQixRQUFLLFFBQW1CLFFBQVcsV0FBQyxTQUFNLE9BQVcsV0FBSSxJQUFPLE9BQVEsUUFBVztBQWpCOUcsa0JBcUZDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkQseUNBQXlFOztBQUN6RSxzQ0FBK0M7O0FBQy9DLG1DQUFrQztBQUtsQzs7Ozs7Ozs7QUFhbUI7QUFDZixlQUFrQzs7O0FBQzFCLFNBQVEsVUFDaEI7QUFBQztBQU91Qjs7Ozs7Ozs7OztBQXNCVDs7Ozs7QUFDTCxhQUFDLFNBQU0sT0FBVyxXQUFLLEtBQ2pDO0FBQUM7QUFNYzs7Ozs7Ozs7QUFDTCxhQUFLLEtBQ2Y7QUFBQzs7OytCQWhDbUM7QUFDN0IsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFJLEtBQUUsU0FBUSxTQUFFO0FBQ3BDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUQsVUFBZ0IsZUFBTSxJQUFZOztBQUUvQixVQUFhLGFBQU8sU0FBTSxJQUFRLFFBQUU7QUFDbkMsa0JBQVUsWUFBVSw4Q0FBZ0MsSUFBOEI7QUFBVSxrQkFBYyxhQUM5RztBQUR3RixTQUE5RTtBQUNUOztBQUVELGFBQW1CLGFBQU8sU0FBTSxJQUFPLFFBQUc7QUFDMUIsd0JBQ2hCO0FBQUM7O0FBRUssYUFBQyxJQUFPLElBQ2xCO0FBQUM7Ozs7O0FBcENFOzs7OztBQUNvQixJQUFNLFNBQWM7QUFHeEM7Ozs7QUFDb0IsSUFBSyxRQUFXLElBQVcsV0FBQyxTQUFNLE9BQVcsV0FBSSxJQUFPLE9BQUksSUFBVztBQVJsRyxjQXdEQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RELHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUMvQyxtQ0FBa0M7QUFLbEM7Ozs7Ozs7O0FBYW1CO0FBQ2YsZ0JBQWtDOzs7QUFDMUIsU0FBUSxVQUNoQjtBQUFDO0FBT3VCOzs7Ozs7Ozs7O0FBaUJUOzs7OztBQUNMLGFBQUssS0FDZjtBQUFDO0FBTWM7Ozs7Ozs7O0FBQ0wsYUFBSyxLQUFRLFFBQ3ZCO0FBQUM7OzsrQkEzQm9DO0FBQzlCLFVBQUMsQ0FBQyxlQUFZLGFBQU8sT0FBSyxNQUFFLFNBQVEsU0FBRTtBQUNyQyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVELFVBQVksU0FBTyxLQUFVOztBQUMxQixVQUFPLFdBQVMsS0FBUSxRQUFFO0FBQ3pCLGtCQUFVLFlBQVUsdUNBQTBCLEtBQThCO0FBQ2hGO0FBRGtGLFNBQXhFO0FBQ1Q7O0FBRUssYUFBQyxJQUFRLEtBQ25CO0FBQUM7Ozs7O0FBL0JFOzs7OztBQUNvQixLQUFNLFNBQWM7QUFHeEM7Ozs7QUFDb0IsS0FBSyxRQUFhLEtBQVcsV0FBQyxTQUFNLE9BQVcsV0FBSSxJQUFPLE9BQUssS0FBVztBQVJyRyxlQW1EQyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURELHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUMvQyxtQ0FBa0M7QUFLbEM7Ozs7Ozs7O0FBYW1CO0FBQ2Ysb0NBQWtDOzs7QUFDMUIsU0FBUSxVQUNoQjtBQUFDO0FBT3VCOzs7Ozs7Ozs7O0FBZ0JUOzs7OztBQUNMLGFBQUssS0FDZjtBQUFDO0FBTWM7Ozs7Ozs7O0FBQ0wsYUFBSyxLQUFRLFFBQ3ZCO0FBQUM7OzsrQkExQndEO0FBQ2xELFVBQUMsQ0FBQyxlQUFZLGFBQU8sT0FBeUIsMEJBQUUsU0FBUSxTQUFFO0FBQ3pELGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUQsVUFBWSxTQUEyQix5QkFBVTs7QUFDOUMsVUFBTyxXQUE2Qix5QkFBUSxRQUFFO0FBQzdDLGtCQUFVLFlBQVUsMkRBQWtFLHlCQUE4QjtBQUN4SDtBQUQwSCxTQUFoSDtBQUNUOztBQUNLLGFBQUMsSUFBNEIseUJBQ3ZDO0FBQUM7Ozs7O0FBOUJFOzs7OztBQUNvQix5QkFBTSxTQUFnQjtBQUcxQzs7OztBQUNvQix5QkFBSyxRQUFxRCx5QkFBVyxXQUFDLFNBQU0sT0FBVyxXQUFJLElBQU8sT0FBeUIseUJBQVc7QUFSakssbUNBa0RDLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRELHlDQUF5RTs7QUFDekUseUNBQXlFOztBQUN6RSxzQ0FBK0M7O0FBQy9DLGtDQUFnQzs7QUFDaEMsbUNBQWtDO0FBS2xDOzs7Ozs7OztBQWFtQjtBQUNmLHVCQUFrQzs7O0FBQzFCLFNBQVEsVUFDaEI7QUFBQztBQVF1Qjs7Ozs7Ozs7Ozs7QUF5RFQ7Ozs7O0FBQ0wsYUFBQyxTQUFNLE9BQVcsV0FBSyxLQUNqQztBQUFDO0FBTWM7Ozs7Ozs7O0FBQ0wsYUFBQyxRQUFLLE1BQVcsV0FBQyxTQUFNLE9BQVcsV0FBSyxLQUFVLFVBQzVEO0FBQUM7QUFNYzs7Ozs7Ozs7QUFDTCxhQUFLLEtBQ2Y7QUFBQztBQU1hOzs7Ozs7OztBQUNKLGFBQUssS0FDZjtBQUFDOzs7K0JBbkZxQztVQUFFLDZFQUE0QixZQUFTO0FBQ3pFLFVBQVc7O0FBRVIsVUFBQyxDQUFDLGVBQVksYUFBVSxVQUFRLFdBQVUsVUFBTSxHQUFFO0FBQ2pELGtCQUFVLFlBQVMsVUFBb0M7QUFDM0Q7QUFENkQsU0FBbkQ7QUFDVDs7QUFFRSxVQUFDLGVBQVksYUFBUSxRQUFRLFFBQUU7QUFDeEIsaUJBQU0sSUFBTyxPQUN2QjtBQUFNLGFBQUU7QUFDRCxZQUFDLENBQUMsZUFBWSxhQUFVLFVBQVEsUUFBRTtBQUNqQyxvQkFBVSxZQUFTLFVBQThCO0FBQ3JEO0FBRHVELFdBQTdDO0FBQ1Q7O0FBRUQsWUFBVyxRQUFHLFFBQUssTUFBVyxXQUFPLE9BQWlCOztBQUV0RCxlQUFZLE1BQU8sU0FBUyxTQUFJLEdBQUc7QUFDMUIsZ0JBQUssS0FDZDtBQUFDOztBQUVLLGlCQUFHLFFBQUssTUFBZ0IsZ0JBQU8sT0FBVyxXQUNwRDtBQUFDOztBQUVLLGFBQUMsSUFBZSxZQUMxQjtBQUFDO0FBUXVCOzs7Ozs7Ozs7K0JBQWM7VUFBRSw2RUFBNEIsWUFBUzs7QUFDdEUsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFNLE9BQUUsU0FBUSxTQUFFO0FBQ3RDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBQ0QsVUFBZSxjQUFRLE1BQVk7O0FBRWhDLFVBQUMsQ0FBQyxlQUFZLGFBQVUsVUFBUSxXQUFVLFVBQU0sR0FBRTtBQUNqRCxrQkFBVSxZQUFTLFVBQW9DO0FBQzNEO0FBRDZELFNBQW5EO0FBQ1Q7O0FBRUUsVUFBWSxZQUFPLFNBQVUsUUFBRTtBQUM5QixrQkFBVSxZQUFTLFVBQXlDO0FBQVUsa0JBQWEsWUFDdkY7QUFEa0UsU0FBeEQ7QUFDVDs7QUFFRCxhQUFrQixZQUFPLFNBQVMsUUFBRztBQUN0Qix1QkFDZjtBQUFDOztBQUVLLGFBQUMsSUFBZSxZQUMxQjtBQUFDOzs7OztBQXhFRTs7Ozs7QUFDb0IsWUFBUSxXQUFhO0FBR3pDOzs7O0FBQ29CLFlBQU8sVUFBMkIsWUFBVyxXQUFFLEdBQWEsWUFBVztBQVJsRyxzQkE0R0MsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIRCx5Q0FBeUU7O0FBQ3pFLHlDQUF5RTs7QUFDekUsbUNBQXdDOztBQUN4QyxzQ0FBK0M7QUFNL0M7Ozs7Ozs7Ozs7Ozs7OztBQU1hOzs7Ozt1QkFBYztBQUNoQixVQUFDLENBQUMsZUFBWSxhQUFTLFNBQVEsUUFBRTtBQUNoQyxrQkFBVSxZQUFTLFVBQTZCO0FBQ3BEO0FBRHNELFNBQTVDO0FBQ1Q7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBUSxRQUFRLFFBQUU7QUFDL0Isa0JBQVUsWUFBUyxVQUEwQztBQUNqRTtBQURtRSxTQUF6RDtBQUNUOztBQUVELFVBQVUsU0FBTTs7QUFFWixXQUFDLElBQUssSUFBSSxHQUFHLElBQVEsTUFBTyxRQUFLLEtBQUc7QUFDcEMsWUFBZ0IsYUFBUSxNQUFXLFdBQUk7QUFFdkMsWUFBZ0IsYUFBYSxhQUFNO0FBQ25DLFlBQWlCLGNBQUcsQ0FBVyxhQUFjLGNBQU07QUFFN0Msa0JBQUksU0FBTSxPQUFTLFNBQVksY0FBRyxTQUFNLE9BQVMsU0FDM0Q7QUFBQzs7QUFFSyxhQUFDLFNBQU0sT0FBVyxXQUM1QjtBQUFDO0FBT1U7Ozs7Ozs7O3lCQUFlO0FBQ25CLFVBQUMsQ0FBQyxlQUFZLGFBQU8sT0FBTyxRQUFFLFNBQVEsU0FBRTtBQUN2QyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUNELFVBQWtCLGVBQVMsT0FBWTs7QUFFcEMsVUFBYSxhQUFPLFNBQUksTUFBTyxHQUFFO0FBQ2hDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUQsVUFBUyxRQUFNOztBQUVYLFdBQUMsSUFBSyxJQUFJLEdBQUcsSUFBZSxhQUFPLFFBQUcsS0FBSyxHQUFHO0FBQzlDLFlBQWdCLGFBQWUsYUFBRyxLQUFlLGFBQUUsSUFBTTtBQUV6RCxZQUFnQixhQUFHLFNBQU0sT0FBUyxTQUFRLFFBQVcsV0FBSztBQUMxRCxZQUFpQixjQUFHLFNBQU0sT0FBUyxTQUFRLFFBQVcsV0FBSztBQUUzRCxZQUFrQixlQUFhLGFBQWMsY0FBTTtBQUU5QyxpQkFBVSxPQUFhLGFBQ2hDO0FBQUM7O0FBRUssYUFDVjtBQUNIOzs7Ozs7QUEzREQsK0JBMkRDLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFRDs7Ozs7Ozs7Ozs7Ozs7QUFRMkI7Ozs7Ozs7OEJBQVcsT0FBNkMsVUFBeUI7QUFDeEQ7QUFDNUMsVUFBVyxRQUFhOztBQUV4QixVQUFzQixtQkFBRywwQkFBWSxLQUF1QjtBQUNyRCxZQUFDLFFBQW1CLGtCQUFhLFlBQVMsVUFBUyxRQUFnQixpQkFBZSxXQUFFO0FBQ2hGLGNBQU0sTUFBUSxRQUFjLGtCQUFLLENBQUcsR0FBRTtBQUNHO0FBRTVDO0FBQU0saUJBQUU7QUFDQyxrQkFBSyxLQUNkO0FBQ0o7QUFBQzs7QUFFSyxlQUFXLFdBQVMsU0FBSSxLQUFpQixnQkFDbkQ7QUFBRTs7QUFFSSxhQUFLLEtBQVUsVUFBTSxPQUFrQixrQkFDakQ7QUFDSDs7Ozs7O0FBM0JELHFCQTJCQyxXOzs7Ozs7Ozs7Ozs7QUM1QkU7Ozs7QUFDSCxJQUlDOztBQUpELFdBQTJCO0FBQ3ZCLGdEQUFRO0FBQ1IsbURBQVU7QUFDVixpREFDSjtBQUFDLEdBSjBCLGtCQUFmLFFBQWUsb0JBQWYsUUFBZSxrQkFJMUIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BELHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUMvQyxvQ0FBb0M7O0FBQ3BDLGlDQUE4Qjs7QUFDOUIscURBQXNFOztBQUN0RSxnQ0FBNEI7O0FBQzVCLHdDQUE0Qzs7QUFDNUMsbUNBQWtDO0FBS2xDOzs7Ozs7OztBQWdGbUI7QUFDZjtBQUNBO0FBQUM7QUFxQnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR1Q7Ozs7O0FBQ1IsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFLLEtBQXlCLDBCQUFFLDJCQUEwQiwyQkFBRTtBQUNoRixrQkFBVSxZQUFpRjtBQUE0QixvQ0FBTSxLQUNqSTtBQURpRyxTQUF2RjtBQUNUOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQU8sT0FBSyxLQUFRLFNBQUUsVUFBUyxVQUFFO0FBQzlDLGtCQUFVLFlBQWdFO0FBQVcsbUJBQU0sS0FDL0Y7QUFEZ0YsU0FBdEU7QUFDVDs7QUFFRSxVQUFDLENBQUMsZUFBWSxhQUFPLE9BQUssS0FBWSxhQUFFLE1BQUssTUFBRTtBQUM5QyxrQkFBVSxZQUFvRTtBQUFlLHVCQUFNLEtBQ3ZHO0FBRG9GLFNBQTFFO0FBQ1Q7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFLLEtBQU8sUUFBRSxPQUFNLE9BQUU7QUFDMUMsa0JBQVUsWUFBK0Q7QUFBVSxrQkFBTSxLQUM3RjtBQUQrRSxTQUFyRTtBQUNUOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQU8sT0FBSyxLQUFpQixrQkFBRSxPQUFNLE9BQUU7QUFDcEQsa0JBQVUsWUFBeUU7QUFBb0IsNEJBQU0sS0FDakg7QUFEeUYsU0FBL0U7QUFDVDs7QUFFRSxVQUFDLENBQUMsZUFBWSxhQUFPLE9BQUssS0FBa0IsbUJBQUUsT0FBTSxPQUFFO0FBQ3JELGtCQUFVLFlBQTBFO0FBQXFCLDZCQUFNLEtBQ25IO0FBRDBGLFNBQWhGO0FBQ1Q7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFLLEtBQU0sT0FBRSxNQUFLLE1BQUU7QUFDeEMsa0JBQVUsWUFBOEQ7QUFBUyxpQkFBTSxLQUMzRjtBQUQ4RSxTQUFwRTtBQUNUOztBQUVELFVBQVksU0FBTyxLQUF5Qix5QkFBVyxXQUFXLGFBQ3hELEtBQVEsUUFBVyxXQUFXLGFBQ2xDLENBQUssS0FBTSxTQUFlLFlBQVUsVUFBVyxXQUFXLGFBQy9DLFlBQVksY0FDbkIsS0FBWSxZQUFXLFdBQVcsYUFDdEMsQ0FBSyxLQUFVLGFBQUksY0FBVyxZQUFTLFNBQVcsV0FBVyxhQUM3RCxDQUFLLEtBQWEsZ0JBQUksY0FBVyxZQUFTLFNBQVcsV0FBVyxhQUNoRSxDQUFLLEtBQVUsYUFBSSxjQUFXLFlBQVMsU0FBVyxXQUFXLGFBQ3pELEtBQU8sT0FBVyxXQUFXLGFBQzdCLEtBQWlCLGlCQUFXLFdBQVcsYUFDdkMsS0FBa0Isa0JBQVcsV0FBVyxhQUM1QyxDQUFLLEtBQUksT0FBUSxLQUFhLGFBQVcsV0FBVyxhQUNwRCxDQUFLLEtBQW9CLHVCQUFJLGNBQVcsWUFBUyxTQUFXLFdBQVcsYUFDdkUsQ0FBSyxLQUE4QixpQ0FBSSxjQUFXLFlBQVMsU0FBVyxXQUFXLGFBQ2pGLENBQUssS0FBOEIsaUNBQUksY0FBVyxZQUFTLFNBQVcsV0FBVyxhQUM3RSxLQUFNLE1BQVcsV0FBWTtBQUV2QyxVQUFZLFNBQVMsT0FBUTs7QUFDMUIsVUFBTyxXQUFnQixZQUFRLFFBQUU7QUFDaEMsa0JBQVUsWUFBVSx1Q0FBaUMsWUFBTyw4QkFBc0I7QUFDdEY7QUFEd0YsU0FBOUU7QUFDVDs7QUFFSyxhQUFDLFNBQU0sT0FBVyxXQUM1QjtBQUFDO0FBTWM7Ozs7Ozs7O0FBQ0osd0RBQ2dCLENBQUssS0FBeUIsNEJBQUksMkJBQXdCLHlCQUFPLE9BQVcsV0FBVyx3Q0FDeEcsQ0FBSyxLQUFRLFdBQUksVUFBTyxRQUFPLE9BQVcsV0FBVyxvQ0FDeEQsQ0FBSyxLQUFNLFNBQWUsWUFBVSxVQUFXLDBDQUN4QyxDQUFLLEtBQVksZUFBSSxNQUFHLElBQU8sT0FBVyxXQUFXLHdDQUN4RCxDQUFLLEtBQVUsYUFBSSxjQUFXLFlBQVMsU0FBVyx5Q0FDL0MsQ0FBSyxLQUFhLGdCQUFJLGNBQVcsWUFBUyxTQUFXLHNDQUN4RCxDQUFLLEtBQVUsYUFBSSxjQUFXLFlBQVMsU0FBVyxxQ0FDcEQsQ0FBSyxLQUFPLFVBQUksT0FBSSxLQUFPLE9BQVcsV0FBVyxpREFDdkMsQ0FBSyxLQUFpQixvQkFBSSxPQUFJLEtBQU8sT0FBVyxXQUFXLGtEQUMxRCxDQUFLLEtBQWtCLHFCQUFJLE9BQUksS0FBTyxPQUFXLFdBQVcsb0NBQzFFLENBQUssS0FBSSxPQUFRLEtBQVksZUFBSSxNQUFHLElBQU8sT0FBVyxXQUFXLGtEQUNsRCxDQUFLLEtBQW9CLHVCQUFJLGNBQVcsWUFBUyxTQUFXLDBEQUNsRCxDQUFLLEtBQThCLGlDQUFJLGNBQVcsWUFBUyxTQUFXLDBEQUN0RSxDQUFLLEtBQThCLGlDQUFJLGNBQVcsWUFBUyxTQUFXLG9DQUM3RixDQUFLLEtBQU0sU0FBSSxNQUFHLElBQU8sT0FBVyxXQUU1QztBQUFDOzs7K0JBOUswRSwwQkFDbEMsU0FDSCxPQUNHLGFBQ0MsV0FDRyxjQUNILFdBQ0wsUUFDVSxrQkFDQyxtQkFDZixLQUNtQixxQkFDVSwrQkFDQSwrQkFDM0I7QUFDL0IsVUFBUSxLQUFHLElBQWtCO0FBQzNCLFNBQXlCLDJCQUE0QjtBQUNyRCxTQUFRLFVBQVc7QUFDbkIsU0FBTSxRQUFHLGNBQVcsWUFBVyxXQUFNLE9BQU07QUFDM0MsU0FBWSxjQUFlO0FBQzNCLFNBQVUsWUFBRyxjQUFXLFlBQVcsV0FBWTtBQUMvQyxTQUFhLGVBQUcsY0FBVyxZQUFXLFdBQWU7QUFDckQsU0FBVSxZQUFHLGNBQVcsWUFBVyxXQUFZO0FBQy9DLFNBQU8sU0FBVTtBQUNqQixTQUFpQixtQkFBb0I7QUFDckMsU0FBa0Isb0JBQXFCO0FBQ3ZDLFNBQUksTUFBTztBQUNYLFNBQW9CLHNCQUFHLGNBQVcsWUFBVyxXQUFzQjtBQUNuRSxTQUE4QixnQ0FBRyxjQUFXLFlBQVcsV0FBZ0M7QUFDdkYsU0FBOEIsZ0NBQUcsY0FBVyxZQUFXLFdBQWdDO0FBQ3ZGLFNBQU0sUUFBUztBQUNYLGFBQ1Y7QUFBQztBQU91Qjs7Ozs7Ozs7K0JBQWU7QUFDaEMsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFPLFFBQUUsU0FBUSxTQUFFO0FBQ3ZDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUQsVUFBWSxTQUFTLE9BQVU7O0FBQzVCLFVBQU8sV0FBZ0IsWUFBUSxRQUFFO0FBQ2hDLGtCQUFVLFlBQVUsdUNBQWlDLFlBQW1CO0FBQzVFO0FBRDhFLFNBQXBFO0FBQ1Q7O0FBRUQsVUFBcUIsa0JBQVE7QUFDN0IsVUFBc0IsbUJBQU07QUFDNUIsVUFBVyxRQUFTLE9BQUksSUFBZ0IsaUJBQW1CLGtCQUFZOztBQUVwRSxVQUFNLFVBQWdCLFlBQWEsYUFBRTtBQUNwQyxrQkFBVSxZQUFVLHVDQUFxQyxpQ0FBdUIsa0JBQXNDO0FBQzFIO0FBRDRILFNBQWxIO0FBQ1Q7O0FBRUQsVUFBUSxLQUFHLElBQWtCO0FBRTdCLFVBQVksV0FBSztBQUNmLFNBQXlCLDJCQUFHLDJCQUF3Qix5QkFBVyxXQUFPLE9BQUksSUFBUyxVQUFFLDJCQUF3Qix5QkFBVTtBQUNqSCxrQkFBSSwyQkFBd0IseUJBQVE7QUFDMUMsU0FBUSxVQUFHLFVBQU8sUUFBVyxXQUFPLE9BQUksSUFBUyxVQUFFLFVBQU8sUUFBVTtBQUM5RCxrQkFBSSxVQUFPLFFBQVE7QUFDekIsU0FBTSxRQUFHLGNBQVcsWUFBVyxXQUFPLE9BQUksSUFBUyxVQUFLLEtBQU07QUFDeEQsa0JBQU87QUFDUCxrQkFBZSxZQUFvQjtBQUN6QyxTQUFZLGNBQUcsTUFBRyxJQUFXLFdBQU8sT0FBSSxJQUFTLFVBQUUsTUFBRyxJQUFVO0FBQzFELGtCQUFJLE1BQUcsSUFBUTtBQUNyQixTQUFVLFlBQUcsY0FBVyxZQUFXLFdBQU8sT0FBSSxJQUFTLFVBQUUsY0FBVyxZQUFZO0FBQzFFLGtCQUFJLGNBQVcsWUFBVTtBQUMvQixTQUFhLGVBQUcsY0FBVyxZQUFXLFdBQU8sT0FBSSxJQUFTLFVBQUUsY0FBVyxZQUFZO0FBQzdFLGtCQUFJLGNBQVcsWUFBVTtBQUMvQixTQUFVLFlBQUcsY0FBVyxZQUFXLFdBQU8sT0FBSSxJQUFTLFVBQUUsY0FBVyxZQUFZO0FBQzFFLGtCQUFJLGNBQVcsWUFBVTtBQUMvQixTQUFPLFNBQUcsT0FBSSxLQUFXLFdBQU8sT0FBSSxJQUFTLFVBQUUsT0FBSSxLQUFVO0FBQ3ZELGtCQUFJLE9BQUksS0FBUTtBQUN0QixTQUFpQixtQkFBRyxPQUFJLEtBQVcsV0FBTyxPQUFJLElBQVMsVUFBRSxPQUFJLEtBQVU7QUFDakUsa0JBQUksT0FBSSxLQUFRO0FBQ3RCLFNBQWtCLG9CQUFHLE9BQUksS0FBVyxXQUFPLE9BQUksSUFBUyxVQUFFLE9BQUksS0FBVTtBQUNsRSxrQkFBSSxPQUFJLEtBQVE7QUFDdEIsU0FBSSxNQUFHLE1BQUcsSUFBVyxXQUFPLE9BQUksSUFBUyxVQUFFLE1BQUcsSUFBVTtBQUNsRCxrQkFBSSxNQUFHLElBQVE7QUFDckIsU0FBb0Isc0JBQUcsY0FBVyxZQUFXLFdBQU8sT0FBSSxJQUFTLFVBQUUsY0FBVyxZQUFZO0FBQ3BGLGtCQUFJLGNBQVcsWUFBVTtBQUMvQixTQUE4QixnQ0FBRyxjQUFXLFlBQVcsV0FBTyxPQUFJLElBQVMsVUFBRSxjQUFXLFlBQVk7QUFDOUYsa0JBQUksY0FBVyxZQUFVO0FBQy9CLFNBQThCLGdDQUFHLGNBQVcsWUFBVyxXQUFPLE9BQUksSUFBUyxVQUFFLGNBQVcsWUFBWTtBQUM5RixrQkFBSSxjQUFXLFlBQVU7QUFDL0IsU0FBTSxRQUFHLE1BQUcsSUFBVyxXQUFPLE9BQUksSUFBUyxVQUFFLE1BQUcsSUFBVTtBQUV0RCxhQUNWO0FBQUM7Ozs7O0FBaE1FOzs7OztBQUNvQixZQUFNLFNBQWdCO0FBSTFDOzs7O0FBQ29CLFlBQWtCLHFCQUFjO0FBSXBEOzs7O0FBQ29CLFlBQVcsY0FBYyxJQUFPLE9BQVksWUFBcUI7QUFFekU7O0FBQ1MsWUFBUSxXQUFnQixjQUFXLFlBQVcsV0FBRSxHQUFNO0FBakJsRixzQkFzUkMsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xTRCx3Q0FBdUU7O0FBQ3ZFLHlDQUF5RTs7QUFDekUseUNBQXlFOztBQUN6RSxzQ0FBK0M7O0FBQy9DLG1DQUFrQztBQUtsQzs7Ozs7Ozs7QUFtQ21CO0FBQ2YsaUJBQW9DOzs7QUFDNUIsU0FBTyxTQUNmO0FBQUM7QUFPc0I7Ozs7Ozs7Ozs7QUFxSlQ7Ozs7O0FBQ0osYUFBSyxLQUNmO0FBQUM7QUFNbUI7Ozs7Ozs7O0FBQ1YsYUFBTSxNQUFLLEtBQUssS0FDMUI7QUFBQztBQU1jOzs7Ozs7OztBQUNYLFVBQVUsU0FBTTs7QUFFWixXQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBTyxPQUFPLFFBQUcsS0FBSyxHQUFHO0FBQ2dDO0FBQ3pFLGFBQUMsSUFBSyxJQUFJLEdBQUcsSUFBRyxTQUFNLE9BQVMsU0FBTyxRQUFLLEtBQUc7QUFDM0MsY0FBTSxNQUFhLGFBQUcsR0FBRyxPQUFTLEtBQU8sT0FBRyxNQUN0QyxNQUFhLGFBQUcsR0FBRyxPQUFTLEtBQU8sT0FBRSxJQUFLLE1BQzFDLE1BQWEsYUFBRyxHQUFHLE9BQVMsS0FBTyxPQUFFLElBQU0sSUFBRTtBQUM1QyxzQkFBSSxTQUFNLE9BQVMsU0FBTyxPQUFJO0FBRXhDO0FBQ0o7QUFDSjtBQUFDOztBQUVLLGFBQUMsU0FBTSxPQUFXLFdBQzVCO0FBQUM7QUFNYzs7Ozs7Ozs7QUFDWCxVQUFlLGNBQUs7O0FBRWhCLFdBQUMsSUFBSyxJQUFPLEtBQU8sT0FBTyxTQUFJLEdBQUcsS0FBSyxHQUFLLEtBQUc7QUFDcEMsc0JBQWMsY0FBSSxJQUFPLEtBQU8sT0FDL0M7QUFBQzs7QUFFSyxhQUNWO0FBQUM7QUFNWTs7Ozs7Ozs7QUFDSCxhQUFLLEtBQU8sT0FDdEI7QUFBQztBQVFTOzs7Ozs7Ozs7d0JBQWMsT0FBZ0I7QUFDakMsVUFBQyxDQUFDLGVBQVksYUFBVSxVQUFPLFVBQVMsUUFBSyxHQUFFO0FBQzlDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBQ0UsVUFBQyxDQUFDLGVBQVksYUFBVSxVQUFRLFdBQVUsUUFBVSxNQUFoQixHQUF1QixLQUFPLE9BQVEsUUFBRTtBQUMzRSxjQUFNLElBQUksWUFBVSwrQ0FBa0MsS0FBTyxPQUNqRTtBQUFDOztBQUNLLGFBQU0sTUFBVSxVQUFLLEtBQU8sT0FBTSxNQUFNLE9BQU8sUUFDekQ7QUFBQzs7OzhCQTNOdUM7QUFDakMsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFNLE9BQWEsWUFBRTtBQUN6QyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUNLLGFBQUMsSUFBUyxNQUNwQjtBQUFDO0FBTzRCOzs7Ozs7OztvQ0FBZ0I7QUFDdEMsVUFBQyxDQUFDLGNBQVcsWUFBUSxRQUFNLE9BQVUsU0FBRTtBQUN0QyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUNLLGFBQUMsSUFBUyxNQUFDLElBQWEsVUFDbEM7QUFBQztBQU91Qjs7Ozs7Ozs7K0JBQWM7QUFDL0IsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFNLE9BQUUsU0FBUSxTQUFFO0FBQ3RDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBQ0QsVUFBa0IsZUFBUSxNQUFZO0FBQ3RDLFVBQVcsUUFBYyxJQUFhLFVBQWEsYUFBTyxTQUFNOztBQUM1RCxXQUFDLElBQUssSUFBSSxHQUFHLElBQWUsYUFBTyxRQUFLLEtBQUc7QUFDM0MsWUFBUyxNQUFHLFNBQU0sT0FBUyxTQUFRLFFBQWEsYUFBTyxPQUFLO0FBQ3ZELGNBQUUsSUFBSyxLQUFRLE1BQWEsYUFBSyxLQUFJO0FBQ3JDLGNBQUUsSUFBSSxJQUFLLEtBQVEsTUFBYSxhQUFLLEtBQUk7QUFDekMsY0FBRSxJQUFJLElBQUssS0FBUSxNQUFhLGFBQUssS0FDOUM7QUFBQzs7QUFDSyxhQUFDLElBQVMsTUFDcEI7QUFBQztBQU91Qjs7Ozs7Ozs7K0JBQWM7QUFDL0IsVUFBQyxDQUFDLGVBQVksYUFBVSxVQUFRLFFBQUU7QUFDakMsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFDRCxVQUFXLFFBQWdCO0FBQzNCLFVBQWlCLGdCQUFRLFFBQU0sSUFBQyxDQUFRLFFBQU87O0FBRS9DLGFBQW9CLGdCQUFJLEdBQUc7QUFDdkIsWUFBYSxZQUFnQixnQkFBSztBQUNyQix3QkFBTyxLQUFNLE1BQWMsZ0JBQU07O0FBRTNDLFlBQVUsWUFBSyxHQUFFO0FBQ1Asc0JBQUcsQ0FBRztBQUVuQjtBQUFDOztBQUVJLGNBQU0sTUFBUSxVQUN2QjtBQUFDOztBQUNFLFVBQU0sUUFBSyxHQUFFO0FBQ1IsYUFBQyxJQUFLLElBQUksR0FBRyxJQUFRLE1BQU8sUUFBSyxLQUFHO0FBQy9CLGdCQUFHLEtBQUcsQ0FBTSxNQUNyQjtBQUNKO0FBQUM7O0FBRUssYUFBQyxJQUFTLE1BQUMsSUFBYSxVQUNsQztBQUFDO0FBUWdCOzs7Ozs7Ozs7d0JBQWEsT0FBZTtBQUN0QyxVQUFDLENBQUMsZUFBWSxhQUFPLE9BQU0sT0FBUyxRQUFFO0FBQ3JDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBQ0UsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFPLFFBQVMsUUFBRTtBQUN0QyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVELFVBQVMsTUFBRyxJQUFhLFVBQUssS0FBSSxJQUFNLE1BQU8sT0FBTyxRQUFRLE9BQU8sT0FBVTtBQUMvRSxVQUFTLFFBQUs7QUFDZCxVQUFPO0FBQ1AsVUFBTzs7QUFFSCxXQUFDLElBQUssSUFBSSxHQUFHLElBQU0sSUFBTyxRQUFLLEtBQUc7QUFFaEMsYUFBSSxJQUFRLE1BQU8sT0FBUyxTQUFNLE1BQU8sT0FBSyxLQUFHO0FBQ2pELGFBQUksSUFBUyxPQUFPLE9BQVMsU0FBTyxPQUFPLE9BQUssS0FBRztBQUNyRCxZQUFRLEtBQVEsTUFBUSxRQUFHLElBQUksSUFBUztBQUNyQyxZQUFHLEtBQUssR0FBSTtBQUNWLGdCQUFLLEdBQ2Q7QUFBQzs7QUFFSyxhQUFNLE1BQVUsVUFDMUI7QUFBQztBQUdxQjs7Ozs0QkFBVSxHQUFXLEdBQVc7QUFDbEQsVUFBUSxLQUFRLE1BQUksSUFBRSxHQUFLO0FBQzNCLFVBQVEsS0FBUSxNQUFLLEtBQUUsR0FBSztBQUM1QixVQUFRLEtBQVEsTUFBSyxLQUFHLElBQUs7QUFDN0IsVUFBVSxPQUFRLE1BQUksSUFBRyxJQUFNO0FBQy9CLFVBQVUsT0FBUSxNQUFJLElBQUcsSUFBSztBQUV4QixhQUFDLElBQWEsVUFBQyxDQUFLLE1BQzlCO0FBQUM7QUFHaUI7Ozs7d0JBQVUsR0FBVztBQUNuQyxVQUFPLElBQUksSUFBSzs7QUFFVCxjQUFLO0FBQ1IsYUFBTTtBQUFRLGlCQUFDLENBQUc7O0FBQ2xCLGFBQUssQ0FBRTtBQUFRLGlCQUFHOztBQUNsQjtBQUFlLGlCQUV2Qjs7QUFBQztBQUdrQjs7Ozt5QkFBVSxHQUFXO0FBQ2pDLFVBQUUsTUFBTyxHQUFFO0FBQ0osZUFDVjtBQUFDOztBQUNLLGFBQ1Y7QUFBQztBQUdpQjs7Ozt3QkFBVSxHQUFXO0FBQ25DLFVBQU8sSUFBSSxJQUFLOztBQUViLFVBQUUsSUFBSyxHQUFFO0FBQ0YsZUFDVjtBQUFNLGFBQUksSUFBRSxJQUFLLEdBQUU7QUFDVCxlQUFDLENBQ1g7QUFBQzs7QUFFSyxhQUNWO0FBQUM7Ozs7O0FBM0xjOzs7QUFDUyxNQUFZLGVBQWdCLENBQ2hELElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBSyxLQUN4QixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUssS0FDeEIsSUFBYSxVQUFDLENBQUMsQ0FBRSxHQUFHLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFLLEtBQ3hCLElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBSyxLQUN4QixJQUFhLFVBQUMsQ0FBQyxDQUFFLEdBQUUsQ0FBRSxHQUFLLEtBQzFCLElBQWEsVUFBQyxDQUFFLEdBQUUsQ0FBRSxHQUFLLEtBQ3pCLElBQWEsVUFBQyxDQUFFLEdBQUUsQ0FBRSxHQUFLLEtBQ3pCLElBQWEsVUFBQyxDQUFDLENBQUUsR0FBRyxHQUFLLEtBQ3pCLElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBSyxLQUN4QixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUssS0FDeEIsSUFBYSxVQUFDLENBQUMsQ0FBRSxHQUFHLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFLLEtBQ3hCLElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBSyxLQUN4QixJQUFhLFVBQUMsQ0FBQyxDQUFFLEdBQUUsQ0FBRSxHQUFFLENBQUksS0FDM0IsSUFBYSxVQUFDLENBQUUsR0FBRSxDQUFFLEdBQUUsQ0FBSSxLQUMxQixJQUFhLFVBQUMsQ0FBRSxHQUFFLENBQUUsR0FBRSxDQUFJLEtBQzFCLElBQWEsVUFBQyxDQUFDLENBQUUsR0FBRyxHQUFFLENBQUksS0FDMUIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFFLENBQUksS0FDekIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFFLENBQUksS0FDekIsSUFBYSxVQUFDLENBQUMsQ0FBRSxHQUFHLEdBQUUsQ0FBSSxLQUMxQixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUUsQ0FBSSxLQUN6QixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUUsQ0FBSSxLQUN6QixJQUFhLFVBQUMsQ0FBQyxDQUFFLEdBQUUsQ0FBRSxHQUFLLEtBQzFCLElBQWEsVUFBQyxDQUFFLEdBQUUsQ0FBRSxHQUFLLEtBQ3pCLElBQWEsVUFBQyxDQUFFLEdBQUUsQ0FBRSxHQUFLLEtBQ3pCLElBQWEsVUFBQyxDQUFDLENBQUUsR0FBRyxHQUN0QjtBQTlCTixnQkEwUUMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalJFOzs7O0FBQ0gsNkJBQWtEOztBQUNsRCw2QkFBbUQ7O0FBQ25ELDZCQUErQjs7QUFDL0IsNkJBQXVDOztBQUN2Qyw2QkFBOEI7O0FBQzlCLDZCQUE0Qjs7QUFDNUIsNkJBQTZCOztBQUM3Qiw2QkFBZ0Q7O0FBQ2hELDZCQUEyQjs7QUFDM0IsNkJBQW1DOztBQUNuQyw2QkFBZ0M7O0FBQ2hDLDZCQUE2Qjs7QUFDN0IsNkJBQW1DOztBQUNuQyw2QkFBOEI7O0FBQzlCLDZCQUFrQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJsQyx1Q0FBbUQ7O0FBQ25ELHlDQUF1RDtBQUt2RDs7Ozs7SUFBdUI7Ozs7O0FBcUJoQjs7Ozs7O0FBQ0gscUJBQTJCLFNBQW9DLFlBQW9COzs7OztBQUMxRSxrSEFBVTtBQUNYLFVBQVcsYUFBZSxhQUFhLGFBQUk7QUFDM0MsVUFBVyxhQUFjO0FBQ3pCLFVBQU8sU0FDZjs7QUFBQztBQU9vQjs7Ozs7Ozs7OztBQU9SOzs7Ozs7QUFDVCxVQUFPLE1BQU07O0FBRVYsVUFBQyxDQUFDLGVBQVksYUFBUSxRQUFLLEtBQVMsU0FBRTtBQUM5Qix5QkFBTyxLQUNsQjtBQUFDOztBQUNFLFVBQUMsQ0FBQyxlQUFZLGFBQVEsUUFBSyxLQUFVLFVBQUU7QUFDL0IseUJBQU8sS0FDbEI7QUFBQzs7QUFFRCxVQUFVLE9BQVMsT0FBSyxLQUFLLEtBQWE7O0FBQ3ZDLFVBQUssS0FBTyxTQUFLLEdBQUU7QUFDZixZQUFJLElBQU8sU0FBSyxHQUFFO0FBQ2QsaUJBQ1A7QUFBQzs7QUFDRyxhQUFRLFFBQU87QUFDUiw2QkFBUSxrQkFBSyxhQUFVLFdBQVUsVUFBSyxPQUFXLFdBQzVEO0FBQ0o7QUFBQzs7QUFFSyxhQUNWO0FBQ0g7Ozs0QkE3QmlDO0FBQ3BCLGFBQUksUUFBYyxhQUFPLFFBQVMsUUFBSSxRQUFVLFNBQWEsWUFBYSxhQUFPLE9BQWdCLGdCQUMzRztBQUFDOzs7O3FCQXBDK0I7O0FBQXBDLG9CQStEQyxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVELHVDQUFxRTs7QUFDckUseUNBQXlFOztBQUN6RSx5Q0FBeUU7O0FBQ3pFLG1DQUF3Qzs7QUFDeEMsc0NBQStDOztBQUUvQyxpREFBOEQ7QUFNOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYTs7Ozs7dUJBQVM7QUFDWCxVQUFDLGVBQVksYUFBUSxRQUFRLFFBQUU7QUFDOUIsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFFRCxVQUFTOztBQUNULFVBQUs7QUFDRyxlQUFHLGFBQVUsV0FBVSxVQUMvQjtBQUFDLFFBQU8sT0FBSyxLQUFFO0FBQ1gsa0JBQVUsWUFBUyxVQUFvRDtBQUMzRTtBQUQ2RSxTQUFuRTtBQUNUOztBQUVLLGFBQUMsSUFBSSx1QkFBc0IsdUJBQUcsR0FBQyxlQUFZLGFBQWUsZUFDcEU7QUFBQztBQU9VOzs7Ozs7Ozt5QkFBZTtBQUNuQixVQUFDLENBQUMsZUFBWSxhQUFPLE9BQU8sUUFBRSxTQUFRLFNBQUU7QUFDdkMsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFFRCxVQUFXLFFBQUcsSUFBSSx1QkFBc0IsdUJBQUssS0FBUyxTQUVkOztBQUNyQyxVQUFNLE1BQU8sU0FBSyxHQUFFO0FBQ25CLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUMsUUFFMEU7OztBQUN4RSxVQUFFLEVBQU8sTUFBRyxPQUFRLE9BQVMsTUFBTSxNQUFPLFNBQUssT0FDNUMsR0FEQSxJQUNNLE1BQUcsT0FBUSxPQUFTLE1BQU0sTUFBTyxTQUFLLE9BQzVDLE9BQU0sTUFBRyxPQUFTLFFBQVMsTUFBTSxNQUFPLFNBQUssT0FBWSxPQUFFO0FBQzdELGtCQUFVLFlBQVMsVUFBd0M7QUFDL0Q7QUFEaUUsU0FBdkQ7QUFDVDs7QUFFRCxVQUFhLFVBQUcsZUFBWSxhQUFlLGVBQVE7QUFFbkQsVUFBUTs7QUFDUixVQUFLO0FBQ0UsY0FBTyxLQUFNLE1BQ3BCO0FBQUMsUUFBTyxPQUFLLEtBQUU7QUFDWCxrQkFBVSxZQUFTLFVBQXNEO0FBQzdFO0FBRCtFLFNBQXJFO0FBQ1Q7O0FBRUssYUFDVjtBQUNIOzs7Ozs7QUF4REQsZ0NBd0RDLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVELHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUUvQyxpQ0FBOEI7O0FBQzlCLHFEQUFzRTs7QUFDdEUsZ0NBQTRCOztBQUM1Qix3Q0FBNEM7O0FBQzVDLHdDQUE0QztBQUs1Qzs7Ozs7Ozs7QUFZTzs7O0FBQ0g7OztBQUNRLFNBQWEsZUFDckI7QUFBQztBQVVxQjs7Ozs7Ozs7Ozs7O29DQUErQix3QkFBa0IsU0FBZSxPQUFVLEtBQW1CO0FBQzNHLFdBQUMsSUFBSyxJQUFJLEdBQUcsSUFBeUIsd0JBQUssS0FBRztBQUMxQyxhQUFhLGFBQUssS0FBQyxjQUFXLFlBQVcsV0FBVSxXQUFTLFNBQUcsTUFBUSxJQUFRLFFBQUUsR0FBSyxLQUNuQyxXQUFXLFdBQVcsV0FBVyxXQUNqQyxXQUFXLFdBQUssS0FBVyxXQUMzQixXQUFXLFdBQ3RFO0FBQ0o7QUFBQztBQU1rQzs7Ozs7OztpREFBc0Q7QUFDbEYsVUFBQyxlQUFZLGFBQVEsUUFBNEIsNEJBQUU7QUFDbEQsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFFRyxXQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBYSxhQUFPLFFBQUssS0FBRztBQUM1QyxhQUFhLGFBQUcsR0FBNEIsMkJBQTBCLDBCQUFHLE1BQUksMkJBQXdCLHlCQUFRO0FBQzdHLGFBQWEsYUFBRyxHQUFpQixtQkFBRyxPQUFJLEtBQU87QUFDL0MsYUFBYSxhQUFHLEdBQWtCLG9CQUFHLE9BQUksS0FBTztBQUNoRCxhQUFhLGFBQUcsR0FBb0Isc0JBQUcsY0FBVyxZQUFTO0FBQzNELGFBQWEsYUFBRyxHQUE4QixnQ0FBRyxjQUFXLFlBQVM7QUFDckUsYUFBYSxhQUFHLEdBQThCLGdDQUFHLGNBQVcsWUFBUztBQUNyRSxhQUFhLGFBQUcsR0FBTSxRQUFHLE1BQUcsSUFDcEM7QUFDSjtBQUNIOzs7Ozs7QUFyREQsaUJBcURDLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUQseUNBQThDO0FBSzlDOzs7Ozs7Ozs7Ozs7Ozs7QUFNeUI7Ozs7OzRCQUFXO0FBQ3RCLGFBQU0sVUFBUyxRQUFTLFVBQ3pCLFlBQVEsUUFBTSxNQUFRLFFBQy9CO0FBQUM7QUFPb0I7Ozs7Ozs7OzRCQUFXO0FBQ3RCLGFBQUMsQ0FBWSxZQUFRLFFBQU8sVUFBUyxNQUFPLFdBQ3REO0FBQUM7QUFRb0I7Ozs7Ozs7Ozs0QkFBVyxPQUFnQjtBQUN0QyxhQUFDLENBQVksWUFBUSxRQUFPLFVBQzlCLENBQU0sTUFBUyxTQUFXLGNBQzFCLENBQU0sTUFBUyxTQUFNLGVBQ1YsZ0JBQVk7QUFBWCxlQUFZLGVBQVksYUFBTyxPQUFFLEdBQ3JEO09BRGE7QUFHaEI7Ozs7OztBQWpDRCxzQkFpQ0MsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRCx5Q0FBeUU7O0FBQ3pFLHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUMvQyxvQ0FBb0M7O0FBQ3BDLDRDQUFvRDtBQUtwRDs7Ozs7Ozs7QUFrQm1CO0FBQ2Y7QUFDQTtBQUFDO0FBVXVCOzs7Ozs7Ozs7Ozs7K0JBQWlCLFNBQ1MsVUFDVCxVQUNEO0FBQ2pDLFVBQUMsQ0FBQyxlQUFZLGFBQU8sT0FBUSxTQUFFLFVBQVMsVUFBRTtBQUN6QyxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQVUsVUFBVSxhQUFZLFdBQUcsa0JBQWUsZ0JBQUksT0FBWSxXQUFHLGtCQUFlLGdCQUFNLE1BQUU7QUFDekcsY0FBTSxJQUFJLFlBQVUsNERBQTJDLGtCQUFlLGdCQUFJLHFCQUFRLGtCQUFlLGdCQUM3RztBQUFDOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQVUsVUFBVSxhQUFZLFdBQUssR0FBRTtBQUNwRCxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQVUsVUFBUyxZQUFXLFVBQUssR0FBRTtBQUNsRCxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVELFVBQVcsUUFBRyxJQUFZO0FBQ3JCLFlBQVEsVUFBVztBQUNuQixZQUFTLFdBQVk7QUFDckIsWUFBUyxXQUFZO0FBQ3JCLFlBQVEsVUFBVztBQUNsQixhQUNWO0FBQ0g7Ozs7OztBQXpERCxnQkF5REMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRCx5Q0FBeUU7O0FBQ3pFLHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUMvQyxvQ0FBb0M7O0FBQ3BDLGdDQUE0Qjs7QUFDNUIsbUNBQWtDO0FBS2xDOzs7Ozs7OztBQWtCbUI7QUFDZjtBQUNBO0FBQUM7QUFVdUI7Ozs7Ozs7Ozs7OzsrQkFBaUIsU0FDSCxPQUNFLFNBQ1A7QUFDMUIsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFRLFNBQUUsVUFBUyxVQUFFO0FBQ3pDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBVSxVQUFPLFVBQVMsUUFBSyxHQUFFO0FBQzlDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBUSxRQUFTLFlBQUksQ0FBQyxlQUFZLGFBQU8sT0FBUSxTQUFFLFNBQVEsU0FBRTtBQUMxRSxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQVEsUUFBSyxRQUFJLENBQUMsZUFBWSxhQUFPLE9BQUksS0FBRSxNQUFLLE1BQUU7QUFDL0QsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFFRCxVQUFjLFdBQUcsSUFBZTtBQUN4QixlQUFRLFVBQVc7QUFDbkIsZUFBTSxRQUFTO0FBQ2YsZUFBUSxVQUFXO0FBQ25CLGVBQUksTUFBTztBQUNiLGFBQ1Y7QUFDSDs7Ozs7O0FBekRELG1CQXlEQyxTIiwiZmlsZSI6ImlvdGEtcGljby1kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL2RhdGFcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9kYXRhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvRGF0YVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI1OTIxOWFlMTM5MjIxYjE3YTA0IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGRhdGEgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBEYXRhRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRGF0YUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkRhdGFcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFFcnJvciA9IERhdGFFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdGMFlVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyUmhkR0ZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwVkJRV2xGTzBGQlJXcEZPenRIUVVWSE8wRkJRMGdzWlVGQmRVSXNVMEZCVVN4eFFrRkJVenRKUVVOd1F6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LTzBGQldFUXNPRUpCVjBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZWTzFGQlF6ZENMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzUkZMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCVlN4RlFVRkZMR1ZCUVhsQ08xRkJRM1JFTEUxQlFVMHNZMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hEUVVGRExHTkJRV01zUzBGQlN5eFRRVUZUTEVsQlFVa3NZMEZCWXl4TFFVRkxMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFWYzdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeExRVUZMTEVsQlFVa3NTVUZCU1N4TlFVRk5MRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0pDTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0JGTEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNRMFFzYjBOQk5rTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cnl0ZXMuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZXMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZXMgZnJvbSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB0byBjcmVhdGUgdGhlIHRyeXRlcyBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZSwgbGVuZ3RoID0gMCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFUcnl0ZXMuaXNWYWxpZCh2YWx1ZSwgbGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGFuZCBsZW5ndGggZG8gbm90IGNvbnRhaW4gdmFsaWQgdHJ5dGVzXCIsIHsgdmFsdWUsIGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZXModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSB2YWx1ZSBjb250YWluIHZhbGlkIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB0byB2YWxpZGF0ZSBhcyB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpbnB1dCB3YXMgdmFsaWQgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNWYWxpZCh2YWx1ZSwgbGVuZ3RoID0gMCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXls5QS1aXXske2xlbmd0aCA/IGxlbmd0aCA6IFwiMCxcIn19JGApLnRlc3QodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGVzIHRvIGEgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uIHRvIGdldCB0aGUgc3ViLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdWIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyeXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cnl0ZXMubGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzLnN1YnN0cihzdGFydCwgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEFsbCB0aGUgY2hhcmFjdGVycyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyeXRlcy5cclxuICovXHJcblRyeXRlcy5BTFBIQUJFVCA9IFwiOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbmV4cG9ydHMuVHJ5dGVzID0gVHJ5dGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZkSEo1ZEdWekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNORVZCUVhsRk8wRkJRM3BGTEd0RVFVRXJRenRCUVVVdlF6czdSMEZGUnp0QlFVTklPMGxCVTBrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzUTBGQlF6dFJRVU4wUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRMEZCYzBNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdVVUZEYmtRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR3RFUVVGclJDeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGREwwWXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVdFc1JVRkJSU3hUUVVGcFFpeERRVUZETzFGQlEyNUVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaERMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGFrSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFZEJRVWNzUTBGQlF5eExRVUZoTEVWQlFVVXNUVUZCWXp0UlFVTndReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkZMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERoQ1FVRTRRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROMFVzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN08wRkJOVVZFT3p0SFFVVkhPMEZCUTFjc1pVRkJVU3hIUVVGWExEWkNRVUUyUWl4RFFVRkRPMEZCU201RkxIZENRVGhGUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRmxvYXRTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCpcXC4/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBpbnRlZ2VyIG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlSW50LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXJTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5vU1N4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQllUdFJRVU55UXl4TlFVRk5MRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWVR0UlFVTjJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlEwbzdRVUZ3UTBRc2IwTkJiME5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTdHJpbmcgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBzdHJpbmd5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZyB0aGF0IGlzIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbm8gZW1wdHluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIVN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgc3RyaW5nIGFsbCBBU0NJSSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHN0cmluZyB0byB0ZXN0IGlmIGlzIGlzIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFsbCBBU0NJSS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXNjaWkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogL15bXFx4MDAtXFx4RkZdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgbm9uIEFTQ0lJIGNoYXJhY3RlcnMgd2l0aCBjb250cm9sIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB2YWx1ZSB0byBlc2NhcGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXNjYXBlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbmNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvW1xcdTAwN0YtXFx1RkZGRl0vZywgKGNocikgPT4gYFxcXFx1JHsoYDAwMDAke2Noci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKS5zdWJzdHIoLTQpfWApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzIHRvIEFTQ0lJLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHN0cmluZyB0byBjb252ZXJ0IGJhY2sgdG8gQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvXFxcXHUoW1xcZFxcd117NH0pL2dpLCAobWF0Y2gsIGdycCkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChncnAsIDE2KSkpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nSGVscGVyID0gU3RyaW5nSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1J5YVc1blNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZjM1J5YVc1blNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NhVUpCUVdsQ0xFTkJRVU03U1VGRE9VVXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlU3VVVGRE5VSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU12UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQllUdFJRVU12UWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU12U2l4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQllUdFJRVU4wUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTm9TaXhEUVVGRE8wTkJRMG83UVVFdlEwUXNiME5CSzBOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGFkZHJlc3Nlcy5cclxuICovXHJcbmNsYXNzIEFkZHJlc3Mge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX2FkZHJlc3NUcnl0ZXMgPSBhZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrc3VtVHJ5dGVzID0gY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhZGRyZXNzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGFkZHJlc3MpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGFkZHJlc3Mgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gYWRkcmVzcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSCAmJiB0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBhZGRyZXNzIHNob3VsZCBlaXRoZXIgYmUgJHtBZGRyZXNzLkxFTkdUSH0gb3IgJHtBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cigwLCBBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgbGV0IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID09PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIGNoZWNrc3VtVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cihBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzcyhhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggYSBjaGVja3N1bSwgY3JlYXRpbmcgYSBibGFuayBvbmUgaWYgbmVlZGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBjaGVja3N1LC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXNXaXRoQ2hlY2tzdW0oKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGlzIGFkZHJlc3MgaGFzIG5vIGNoZWNrc3VtIGNhbGN1bGF0ZWQgZm9yIGl0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBhZGRyZXNzIHdpdGhvdXQgY2hlY2tzdW0gKDgxKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhbiBhZGRyZXNzIGNoZWNrc3VtICg5KS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNID0gOTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIHZhbGlkIGFkZHJlc3Mgd2l0aCBjaGVja3N1bSAoOTApLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSA9IEFkZHJlc3MuTEVOR1RIICsgQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU07XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkFkZHJlc3MuRU1QVFkgPSBBZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEFkZHJlc3MuTEVOR1RIKSkpO1xyXG5leHBvcnRzLkFkZHJlc3MgPSBBZGRyZXNzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMkZrWkhKbGMzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGM1Fra3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRWEZDTEVWQlFVVXNZMEZCYzBJN1VVRkROMFFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCU1N4alFVRmpMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVdVN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1VVRkRka1VzUTBGQlF6dFJRVVZFTEUxQlFVMHNXVUZCV1N4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVY0UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUzBGQlN5eFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEhMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRFFVRm5ReXhQUVVGUExFTkJRVU1zVFVGQlRTeFBRVUZQTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRia3NzUTBGQlF6dFJRVVZFTEUxQlFVMHNZVUZCWVN4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNM1JDeEpRVUZKTEdOQlFXTXNRMEZCUXp0UlFVTnVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzcEVMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNZVUZCWVN4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUVUZCVFN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3h2UWtGQmIwSTdVVUZEZGtJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRVFVRm5SQ3hEUVVGRExFTkJRVU03VVVGRE1VVXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRGRFUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRMMElzUTBGQlF6dEpRVU5NTEVOQlFVTTdPMEZCYmtaRU96dEhRVVZITzBGQlEyOUNMR05CUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE0wTTdPMGRCUlVjN1FVRkRiMElzZFVKQlFXVXNSMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkRia1E3TzBkQlJVYzdRVUZEYjBJc05FSkJRVzlDTEVkQlFWY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETzBGQlJTOUdPenRIUVVWSE8wRkJRMjlDTEdGQlFVc3NSMEZCV1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCYWtJNVJ5d3dRa0Z4UmtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvYWRkcmVzcy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0YWdzLlxyXG4gKi9cclxuY2xhc3MgVGFnIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGFnIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHRhZyBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgdGFnIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUYWcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHRhZykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0YWcsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0YWcgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlc1N0cmluZyA9IHRhZy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID4gVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdGFnIHNob3VsZCBiZSBhdCBtb3N0ICR7VGFnLkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aDogdHJ5dGVzU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRyeXRlc1N0cmluZy5sZW5ndGggPCBUYWcuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRyeXRlc1N0cmluZyArPSBcIjlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWcodHJ5dGVzU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdGFnIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0YWcuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIHRhZyAoMjcpLlxyXG4gKi9cclxuVGFnLkxFTkdUSCA9IDI3O1xyXG4vKipcclxuICogQW4gZW1wdHkgdGFnIGFsbCA5cy5cclxuICovXHJcblRhZy5FTVBUWSA9IFRhZy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChUYWcuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlRhZyA9IFRhZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdGbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZkR0ZuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVZjN1VVRkRhRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIbERRVUY1UXl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVVZFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVZzUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEWkNRVUUyUWl4SFFVRkhMRU5CUVVNc1RVRkJUU3gxUWtGQmRVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3haUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZTQ3hEUVVGRE8xRkJSVVFzVDBGQlR5eFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFpRVU4wUXl4WlFVRlpMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRM2hDTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPenRCUVhSRVJEczdSMEZGUnp0QlFVTnZRaXhWUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZOQlFVc3NSMEZCVVN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW14SExHdENRWGRFUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90YWcudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgaGFzaGVzLlxyXG4gKi9cclxuY2xhc3MgSGFzaCB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGhhc2ggZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gaGFzaCBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgaGFzaCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgSGFzaC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoaGFzaCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShoYXNoLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgaGFzaCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBoYXNoLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IEhhc2guTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBoYXNoIHNob3VsZCBiZSAke0hhc2guTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEhhc2goaGFzaCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGhhc2ggdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGhhc2guXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGEgdmFsaWQgaGFzaCAoODEpLlxyXG4gKi9cclxuSGFzaC5MRU5HVEggPSA4MTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IGhhc2ggYWxsIDlzLlxyXG4gKi9cclxuSGFzaC5FTVBUWSA9IEhhc2guZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoSGFzaC5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuSGFzaCA9IEhhc2g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFHRnphQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDJoaGMyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGaFNTeGxRVUZsTzBsQlEyWXNXVUZCYjBJc1RVRkJZenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVOcVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4bFFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNrTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNc1EwRkJRenRSUVVOd1JTeERRVUZETzFGQlJVUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlFpeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc2RVSkJRWFZDTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxHTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRMjVETEVOQlFVTTdPMEZCYWtSRU96dEhRVVZITzBGQlEyOUNMRmRCUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE0wTTdPMGRCUlVjN1FVRkRiMElzVlVGQlN5eEhRVUZUTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZTY2tjc2IwSkJiVVJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS9oYXNoLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50cy5cclxuICovXHJcbmNsYXNzIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHNpZ25hdHVyZSBmcmFnbWVudCBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgc2hvdWxkIGJlICR7U2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgc2lnbmF0dXJlIGZyYWdtZW50IHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudCAoMjE4NylcclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEggPSAyMTg3O1xyXG4vKipcclxuICogQW4gZW1wdHkgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgYWxsIDlzLlxyXG4gKi9cclxuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkVNUFRZID0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmxuYm1GMGRYSmxUV1Z6YzJGblpVWnlZV2R0Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZjMmxuYm1GMGRYSmxUV1Z6YzJGblpVWnlZV2R0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEhkQ1FVRm5RenRSUVVOeVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxHVkJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZSQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3NFJFRkJPRVFzUTBGQlF5eERRVUZETzFGQlEzaEdMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU5xUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3dRMEZCTUVNc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRkRWtzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4SlFVRkpMSGRDUVVGM1FpeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03U1VGRGJFVXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTI1RExFTkJRVU03TzBGQmFFUkVPenRIUVVWSE8wRkJRMjlDTEN0Q1FVRk5MRWRCUVZjc1NVRkJTU3hEUVVGRE8wRkJRemRET3p0SFFVVkhPMEZCUTI5Q0xEaENRVUZMTEVkQlFUWkNMSGRDUVVGM1FpeERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW1wTExEUkVRV3RFUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIi4vdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJ5dGUgbnVtYmVyLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVOdW1iZXIge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgbGV0IHRyeXRlcztcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRyeXRlcyA9IFwiOVwiLnJlcGVhdChsZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiLCB7IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tTnVtYmVyKHZhbHVlKS50b051bWJlckFycmF5KCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cml0cy5sZW5ndGggPCBsZW5ndGggKiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0cy5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeXRlcyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlckFycmF5KHRyaXRzKS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVOdW1iZXIodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlIG51bWJlciBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHZhbHVlIHRvIGNyZWF0ZSB0aGUgb2JqZWN0IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSB0cnl0ZSBsZW5ndGggdG8gcGFkIHRoZSBudW1iZXIgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlTnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh2YWx1ZSwgbGVuZ3RoID0gVHJ5dGVOdW1iZXIuTEVOR1RIXzkpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHJ5dGVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlciA+IDBcIiwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cnl0ZVN0cmluZy5sZW5ndGggPiBsZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBjb250YWlucyB0b28gbWFueSBjaGFyYWN0ZXJzXCIsIHsgbGVuZ3RoOiB0cnl0ZVN0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZVN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgdHJ5dGVTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVOdW1iZXIodHJ5dGVTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHRyeXRlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlIG51bWJlciB0byBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBudW1iZXIgdmFsdWUgb2YgdGhlIHRyeXRlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpKS50b051bWJlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHZhbHVlT2YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9OdW1iZXIoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogTGVuZ3RoIG9mIGEgbnVtYmVyIHRoYXQgdXNlcyA5IHRyeXRlcy5cclxuICovXHJcblRyeXRlTnVtYmVyLkxFTkdUSF85ID0gOTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IDkgbGVuZ3RoIHRyeXRlIG51bWJlci5cclxuICovXHJcblRyeXRlTnVtYmVyLkVNUFRZXzkgPSBUcnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIFRyeXRlTnVtYmVyLkxFTkdUSF85KTtcclxuZXhwb3J0cy5Ucnl0ZU51bWJlciA9IFRyeXRlTnVtYmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWT2RXMWlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNubDBaVTUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNiVU5CUVdkRE8wRkJRMmhETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzVjBGQlZ5eERRVUZETEZGQlFWRTdVVUZEZWtVc1NVRkJTU3hOUVVGTkxFTkJRVU03VVVGRldDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEcxRFFVRnRReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZSU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRMmhETEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOcVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcyUWtGQk5rSXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGJFVXNRMEZCUXp0WlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExHRkJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03V1VGRmRFUXNUMEZCVHl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRMMElzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeERRVUZETzFsQlJVUXNUVUZCVFN4SFFVRkhMR0ZCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGFFVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFc1JVRkJSU3hUUVVGcFFpeFhRVUZYTEVOQlFVTXNVVUZCVVR0UlFVTjZSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc01rTkJRVEpETEVOQlFVTXNRMEZCUXp0UlFVTnlSU3hEUVVGRE8xRkJRMFFzU1VGQlNTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSVzVETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNiVU5CUVcxRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZET1VJc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkME5CUVhkRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGJFY3NRMEZCUXp0UlFVVkVMRTlCUVU4c1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVTnFReXhYUVVGWExFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlEzWkNMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM2hGTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEU5QlFVODdVVUZEVml4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF6TkNMRU5CUVVNN08wRkJNVWRFT3p0SFFVVkhPMEZCUTI5Q0xHOUNRVUZSTEVkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUXpWRE96dEhRVVZITzBGQlEyOUNMRzFDUVVGUExFZEJRV2RDTEZkQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFWSnNSeXhyUTBFMFIwTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyeXRlTnVtYmVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4uL2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBUcnl0ZXMgY29udmVydGVyIHRoYXQgY29udmVydHMgdG8gYW5kIGZyb20gYSBzdHJpbmcuXHJcbiAqL1xyXG5jbGFzcyBBc2NpaVRyeXRlc0NvbnZlcnRlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBzdHJpbmcgdmFsdWUgaW50byB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHZhbHVlIHRvIGNvbnZlcnQgaW50byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgdG8odmFsdWUpIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nXCIsIHsgdmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzQXNjaWkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgbm9uIEFTQ0lJIGNoYXJhY3RlcnNcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBhc2NpaVZhbHVlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYWx1ZSA9IGFzY2lpVmFsdWUgJSAyNztcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVmFsdWUgPSAoYXNjaWlWYWx1ZSAtIGZpcnN0VmFsdWUpIC8gMjc7XHJcbiAgICAgICAgICAgIHRyeXRlcyArPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVRbZmlyc3RWYWx1ZV0gKyB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVRbc2Vjb25kVmFsdWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0cnl0ZXMgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgdG8gY29udmVydCBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyB2YWx1ZSBjb252ZXJ0ZWQgZnJvbSB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBmcm9tKHRyeXRlcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0cnl0ZXMgcGFyYW1ldGVyIGlzIGVtcHR5IG9yIG5vdCB0aGUgY29ycmVjdCB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB0cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0cnl0ZXMgbGVuZ3RoIG11c3QgYmUgYW4gZXZlbiBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhc2NpaSA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXNTdHJpbmcubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJ5dGVzUGFpciA9IHRyeXRlc1N0cmluZ1tpXSArIHRyeXRlc1N0cmluZ1tpICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VmFsdWUgPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuaW5kZXhPZih0cnl0ZXNQYWlyWzBdKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVmFsdWUgPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuaW5kZXhPZih0cnl0ZXNQYWlyWzFdKTtcclxuICAgICAgICAgICAgY29uc3QgZGVjaW1hbFZhbHVlID0gZmlyc3RWYWx1ZSArIHNlY29uZFZhbHVlICogMjc7XHJcbiAgICAgICAgICAgIGFzY2lpICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGVjaW1hbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzY2lpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXNjaWlUcnl0ZXNDb252ZXJ0ZXIgPSBBc2NpaVRyeXRlc0NvbnZlcnRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhOamFXbFVjbmwwWlhORGIyNTJaWEowWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WTI5dWRtVnlkR1Z5Y3k5aGMyTnBhVlJ5ZVhSbGMwTnZiblpsY25SbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN3eVEwRkJkME03UVVGRGVFTXNhMFJCUVN0RE8wRkJSeTlET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1JVRkJSU3hEUVVGRExFdEJRV0U3VVVGRGJrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTkVKQlFUUkNMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEycEZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4NVEwRkJlVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRPVVVzUTBGQlF6dFJRVVZFTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWb1FpeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU53UXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhaRExFMUJRVTBzVlVGQlZTeEhRVUZITEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRia01zVFVGQlRTeFhRVUZYTEVkQlFVY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlJXNUVMRTFCUVUwc1NVRkJTU3hsUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMR1ZCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEZWtVc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTVUZCU1N4RFFVRkRMRTFCUVdNN1VVRkRkRUlzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1VVRkRha1lzUTBGQlF6dFJRVU5FTEUxQlFVMHNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVYyUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEQkRRVUV3UXl4RFFVRkRMRU5CUVVNN1VVRkRjRVVzUTBGQlF6dFJRVVZFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWbUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03V1VGRE9VTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmVrUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VUXNUVUZCVFN4WFFVRlhMRWRCUVVjc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRk0wUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1ZVRkJWU3hIUVVGSExGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZGYmtRc1MwRkJTeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1VVRkRMME1zUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dERRVU5LTzBGQk0wUkVMRzlFUVRKRVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2NvbnZlcnRlcnMvYXNjaWlUcnl0ZXNDb252ZXJ0ZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBKc29uIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgSnNvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIFN0cmluZ2lmeSBhbiBvYmplY3Qgd2l0aCByZWN1cnNpb24gYnJlYWtpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheSwgdG8gYmUgY29udmVydGVkLlxyXG4gICAgICogQHBhcmFtIHJlcGxhY2VyIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSByZXN1bHRzLlxyXG4gICAgICogQHBhcmFtIHNwYWNlIEFkZHMgaW5kZW50YXRpb24sIHdoaXRlIHNwYWNlLCBhbmQgbGluZSBicmVhayBjaGFyYWN0ZXJzIHRvIHRoZSByZXR1cm4tdmFsdWUgSlNPTiB0ZXh0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHJlYWQuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgdmVyc2lvbiBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcclxuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gW107XHJcbiAgICAgICAgY29uc3QgcmVjdXNpb25SZXBsYWNlciA9IChrZXksIHJlcGxhY2VWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiByZXBsYWNlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YocmVwbGFjZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaChyZXBsYWNlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlciA/IHJlcGxhY2VyKGtleSwgcmVwbGFjZVZhbHVlKSA6IHJlcGxhY2VWYWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVjdXNpb25SZXBsYWNlciwgc3BhY2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSnNvbkhlbHBlciA9IEpzb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuTnZia2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJwemIyNUlaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVFeVF5eEZRVUZGTEV0QlFYVkNPMUZCUTNCSExEUkRRVUUwUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlZTeEZRVUZGTEVOQlFVTTdVVUZGZUVJc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRWRCUVZjc1JVRkJSU3haUVVGcFFpeEZRVUZGTEVWQlFVVTdXVUZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eFpRVUZaTEV0QlFVc3NVVUZCVVN4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzV1VGQldTeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMjVHTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU55UXl4M1EwRkJkME03YjBKQlEzaERMRTFCUVUwc1EwRkJRenRuUWtGRFdDeERRVUZETzJkQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yOUNRVU5LTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03WjBKQlF6ZENMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xbEJSVVFzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRMnBGTEVOQlFVTXNRMEZCUXp0UlFVVkdMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlN4blFrRkJaMElzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3hEUVVGRE8wTkJRMG83UVVFelFrUXNaME5CTWtKREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvanNvbkhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYW4gZW51bSBmb3IgdGhlIGFkZHJlc3Mgc2VjdXJpdHkgdmFsdWVzLlxyXG4gKi9cclxudmFyIEFkZHJlc3NTZWN1cml0eTtcclxuKGZ1bmN0aW9uIChBZGRyZXNzU2VjdXJpdHkpIHtcclxuICAgIEFkZHJlc3NTZWN1cml0eVtBZGRyZXNzU2VjdXJpdHlbXCJsb3dcIl0gPSAxXSA9IFwibG93XCI7XHJcbiAgICBBZGRyZXNzU2VjdXJpdHlbQWRkcmVzc1NlY3VyaXR5W1wibWVkaXVtXCJdID0gMl0gPSBcIm1lZGl1bVwiO1xyXG4gICAgQWRkcmVzc1NlY3VyaXR5W0FkZHJlc3NTZWN1cml0eVtcImhpZ2hcIl0gPSAzXSA9IFwiaGlnaFwiO1xyXG59KShBZGRyZXNzU2VjdXJpdHkgPSBleHBvcnRzLkFkZHJlc3NTZWN1cml0eSB8fCAoZXhwb3J0cy5BZGRyZXNzU2VjdXJpdHkgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemMxTmxZM1Z5YVhSNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZZV1JrY21WemMxTmxZM1Z5YVhSNUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSUxFbEJRVmtzWlVGSldEdEJRVXBFTEZkQlFWa3NaVUZCWlR0SlFVTjJRaXh0UkVGQlVTeERRVUZCTzBsQlExSXNlVVJCUVZVc1EwRkJRVHRKUVVOV0xIRkVRVUZSTEVOQlFVRTdRVUZEV2l4RFFVRkRMRVZCU2xjc1pVRkJaU3hIUVVGbUxIVkNRVUZsTEV0QlFXWXNkVUpCUVdVc1VVRkpNVUlpZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS9hZGRyZXNzU2VjdXJpdHkudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IGFkZHJlc3NfMSA9IHJlcXVpcmUoXCIuL2FkZHJlc3NcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCIuL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyYW5zYWN0aW9ucy5cclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBvYnNvbGV0ZVRhZyBPYnNvbGV0ZSB0cmFuc2FjdGlvbiB0YWcuXHJcbiAgICAgKiBAcGFyYW0gdGltZXN0YW1wIFRoZSB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gY3VycmVudEluZGV4IFRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGxhc3RJbmRleCBUaGUgbGFzdCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVuayB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRhZyBUaGUgdGFnLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCBsb3dlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIHVwcGVyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIG5vbmNlIFRoZSBub25jZS5cclxuICAgICAqIEByZXR1cm5zIE5ldyBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBhZGRyZXNzLCB2YWx1ZSwgb2Jzb2xldGVUYWcsIHRpbWVzdGFtcCwgY3VycmVudEluZGV4LCBsYXN0SW5kZXgsIGJ1bmRsZSwgdHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRhZywgYXR0YWNobWVudFRpbWVzdGFtcCwgYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQsIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kLCBub25jZSkge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHZhbHVlLCAxMSk7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSBvYnNvbGV0ZVRhZztcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGltZXN0YW1wKTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoY3VycmVudEluZGV4KTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIobGFzdEluZGV4KTtcclxuICAgICAgICB0eC5idW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC50YWcgPSB0YWc7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQpO1xyXG4gICAgICAgIHR4Lm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgZm9yIHRoZSB0aGlzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgdGhpcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhTdGFydCA9IDIyNzk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleExlbmd0aCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdHJ5dGVzLnN1YihjaGVja0luZGV4U3RhcnQsIGNoZWNrSW5kZXhMZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9PSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIGJldHdlZW4gJHtjaGVja0luZGV4U3RhcnR9IGFuZCAke2NoZWNrSW5kZXhTdGFydCArIGNoZWNrSW5kZXhMZW5ndGh9IHNob3VsZCBiZSBhbGwgOXNgLCB7IGNoZWNrIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEg7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3NfMS5BZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIDExKSwgMTEpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IDExO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSDtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cmFuc2FjdGlvbiB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNhY3Rpb24gYXMgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ6IHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5hZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3MgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYWRkcmVzczogdGhpcy5hZGRyZXNzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5vYnNvbGV0ZVRhZywgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgb2Jzb2xldGVUYWcgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgb2Jzb2xldGVUYWc6IHRoaXMub2Jzb2xldGVUYWcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmJ1bmRsZSwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBidW5kbGUgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnVuZGxlOiB0aGlzLmJ1bmRsZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMudHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHRydW5rVHJhbnNhY3Rpb246IHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnJhbmNoVHJhbnNhY3Rpb246IHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm5vbmNlLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBub25jZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBub25jZTogdGhpcy5ub25jZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzID0gdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnZhbHVlIHx8IFRyYW5zYWN0aW9uLkVNUFRZXzExKS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRVxyXG4gICAgICAgICAgICArIHRoaXMub2Jzb2xldGVUYWcudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuY3VycmVudEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5idW5kbGUudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy50cnVua1RyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGFnIHx8IHRoaXMub2Jzb2xldGVUYWcpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5ub25jZS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGggJHtsZW5ndGh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcblxcdHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogXCIkeyh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB8fCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YWRkcmVzczogXCIkeyh0aGlzLmFkZHJlc3MgfHwgYWRkcmVzc18xLkFkZHJlc3MuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dmFsdWU6ICR7KHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvTnVtYmVyKCl9XG5cXHRvYnNvbGV0ZVRhZzogXCIkeyh0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0aW1lc3RhbXA6ICR7KHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGN1cnJlbnRJbmRleDogJHsodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bGFzdEluZGV4OiAkeyh0aGlzLmxhc3RJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRidW5kbGU6IFwiJHsodGhpcy5idW5kbGUgfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dHJ1bmtUcmFuc2FjdGlvbjogXCIkeyh0aGlzLnRydW5rVHJhbnNhY3Rpb24gfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YnJhbmNoVHJhbnNhY3Rpb246IFwiJHsodGhpcy5icmFuY2hUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0YWc6IFwiJHsodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZyB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YXR0YWNobWVudFRpbWVzdGFtcDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdG5vbmNlOiBcIiR7KHRoaXMubm9uY2UgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcbn1gO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdHJhbnNhY3Rpb24gKDI2NzMpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uTEVOR1RIID0gMjY3MztcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBjaGVjayB2YWx1ZSAoMTYpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIID0gMTY7XHJcbi8qKlxyXG4gKiBUaGUgY2hlY2sgdmFsdWUgZm9yIGJ1bmRsZXMgYWxsIDlzLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUgPSBcIjlcIi5yZXBlYXQoVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIKTtcclxuLyogQGludGVybmFsICovXHJcblRyYW5zYWN0aW9uLkVNUFRZXzExID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIDExKTtcclxuZXhwb3J0cy5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtRnVjMkZqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVU12UXl4MVEwRkJiME03UVVGRGNFTXNhVU5CUVRoQ08wRkJRemxDTEhsRlFVRnpSVHRCUVVOMFJTd3JRa0ZCTkVJN1FVRkROVUlzSzBOQlFUUkRPMEZCUXpWRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQlowWkpMR1ZCUVdVN1NVRkRaanRKUVVOQkxFTkJRVU03U1VGRlJEczdPenM3T3pzN096czdPenM3T3pzN08wOUJhMEpITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXgzUWtGQmEwUXNSVUZEYkVRc1QwRkJaMElzUlVGRGFFSXNTMEZCWVN4RlFVTmlMRmRCUVdkQ0xFVkJRMmhDTEZOQlFXbENMRVZCUTJwQ0xGbEJRVzlDTEVWQlEzQkNMRk5CUVdsQ0xFVkJRMnBDTEUxQlFWa3NSVUZEV2l4blFrRkJjMElzUlVGRGRFSXNhVUpCUVhWQ0xFVkJRM1pDTEVkQlFWRXNSVUZEVWl4dFFrRkJNa0lzUlVGRE0wSXNOa0pCUVhGRExFVkJRM0pETERaQ1FVRnhReXhGUVVOeVF5eExRVUZWTzFGQlF5OUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEzWkVMRVZCUVVVc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEzSkNMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZERMRVZCUVVVc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGFrUXNSVUZCUlN4RFFVRkRMRmxCUVZrc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNVMEZCVXl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTI1Q0xFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0UlFVTjJReXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWWl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRSUVVOeVJTeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU42Uml4RlFVRkZMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVdNN1VVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2MwSkJRWE5DTEZkQlFWY3NRMEZCUXl4TlFVRk5MRmxCUVZrc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVZc1EwRkJRenRSUVVWRUxFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTNRaXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNMVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExHVkJRV1VzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJYWkZMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNaVUZCWlN4UlFVRlJMR1ZCUVdVc1IwRkJSeXhuUWtGQlowSXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNaSkxFTkJRVU03VVVGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVGRDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVFpeEZRVUZGTEVOQlFVTXNkMEpCUVhkQ0xFZEJRVWNzYlVSQlFYZENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRzFFUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla2dzVVVGQlVTeEpRVUZKTEcxRVFVRjNRaXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0xUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUlN4UlFVRlJMRWxCUVVrc2FVSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETTBJc1JVRkJSU3hEUVVGRExFdEJRVXNzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5vUlN4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMllzVVVGQlVTeEpRVUZKTEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU16UXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhIUVVGSExGTkJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVVzVVVGQlVTeEpRVUZKTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRka0lzUlVGQlJTeERRVUZETEZOQlFWTXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzVVVGQlVTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRMnBETEVWQlFVVXNRMEZCUXl4WlFVRlpMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlFTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BGTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1UwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hSUVVGUkxFbEJRVWtzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSSExGRkJRVkVzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkhMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk5VUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzYlVSQlFYZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFWXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVWQlFYVkZMRVZCUVVVc1JVRkJSU3gzUWtGQmQwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsS0xFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elJFRkJjMFFzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16Unl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UkVGQk1FUXNSVUZCUlN4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjJTQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHhSRUZCY1VRc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJ5eERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExDdEVRVUVyUkN4RlFVRkZMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjBTU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2RGUVVGblJTeEZRVUZGTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42U1N4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh2UkVGQmIwUXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlSeXhEUVVGRE8xRkJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNMVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5zUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU14UkN4WFFVRlhMRU5CUVVNc1YwRkJWenRqUVVOMlFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU4wUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETjBRc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJoRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNM1JDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5xUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRek5ETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRjRVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZGtVc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGFrWXNRMEZCUXl4SlFVRkpMRU5CUVVNc05rSkJRVFpDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRha1lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVYyUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNWMEZCVnl4RFFVRkRMRTFCUVUwc1kwRkJZeXhOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRjRWNzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzSkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1RVRkJUU3hEUVVGRE95dENRVU5uUWl4RFFVRkRMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNTVUZCU1N4dFJFRkJkMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGVFY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFkQlEzaEVMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8ydENRVU40UXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzVTBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGxRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3YTBKQlF5OURMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdGxRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3WVVGRGNFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxGZEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3ZFVKQlEzWkRMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRmRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN2QwSkJRekZFTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEpRVUZKTEZkQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdWVUZETVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1UwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQ1UWtGRGJFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdiVU5CUTJ4RUxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yMURRVU4wUlN4RFFVRkRMRWxCUVVrc1EwRkJReXcyUWtGQk5rSXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTTNSaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NVMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0RlFVTjZSQ3hEUVVGRE8wbEJRME1zUTBGQlF6czdRVUZ3VWtRN08wZEJSVWM3UVVGRGIwSXNhMEpCUVUwc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGRk4wTTdPMGRCUlVjN1FVRkRiMElzT0VKQlFXdENMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJSWFpFT3p0SFFVVkhPMEZCUTI5Q0xIVkNRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRCUVVWNFJpeGxRVUZsTzBGQlExTXNiMEpCUVZFc1IwRkJaMElzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBGQmFrSnNSaXhyUTBGelVrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyYW5zYWN0aW9uLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyaXRzLlxyXG4gKi9cclxuY2xhc3MgVHJpdHMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cml0cykge1xyXG4gICAgICAgIHRoaXMuX3RyaXRzID0gdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIEludDhBcnJheSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21BcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyQXJyYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh2YWx1ZSwgTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0cml0cyA9IG5ldyBJbnQ4QXJyYXkodHJ5dGVzU3RyaW5nLmxlbmd0aCAqIDMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1N0cmluZy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICB0cml0c1tpICogM10gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVswXTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDMgKyAxXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzFdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDJdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBOdW1iZXIgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gW107XHJcbiAgICAgICAgbGV0IGFic29sdXRlVmFsdWUgPSB2YWx1ZSA8IDAgPyAtdmFsdWUgOiB2YWx1ZTtcclxuICAgICAgICB3aGlsZSAoYWJzb2x1dGVWYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUgJSAzO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gTWF0aC5mbG9vcihhYnNvbHV0ZVZhbHVlIC8gMyk7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSAtMTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1t0cml0cy5sZW5ndGhdID0gcmVtYWluZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2ldID0gLXRyaXRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh0cml0cykpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdHdvIHRyaXRzIHRvZ2V0aGVyLlxyXG4gICAgICogQHBhcmFtIGZpcnN0IFRoZSBmaXJzdCB0cml0LlxyXG4gICAgICogQHBhcmFtIHNlY29uZCBUaGUgc2Vjb25kIHRyaXQuXHJcbiAgICAgKiBAcmV0dXJucyBOZXcgdHJpdCB3aGljaCBpcyB0aGUgYWRkaXRpb24gb2YgdGhlIGEgKyBiLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkKGZpcnN0LCBzZWNvbmQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZmlyc3QsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGZpcnN0IHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlY29uZCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc2Vjb25kcyBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBJbnQ4QXJyYXkoTWF0aC5tYXgoZmlyc3QuX3RyaXRzLmxlbmd0aCwgc2Vjb25kLl90cml0cy5sZW5ndGgpKTtcclxuICAgICAgICBsZXQgY2FycnkgPSAwO1xyXG4gICAgICAgIGxldCBpQTtcclxuICAgICAgICBsZXQgaUI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaUEgPSBpIDwgZmlyc3QuX3RyaXRzLmxlbmd0aCA/IGZpcnN0Ll90cml0c1tpXSA6IDA7XHJcbiAgICAgICAgICAgIGlCID0gaSA8IHNlY29uZC5fdHJpdHMubGVuZ3RoID8gc2Vjb25kLl90cml0c1tpXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZBID0gVHJpdHMuZnVsbEFkZChpQSwgaUIsIGNhcnJ5KTtcclxuICAgICAgICAgICAgb3V0W2ldID0gZkFbMF07XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gZkFbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkob3V0KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGZ1bGxBZGQoYSwgYiwgYykge1xyXG4gICAgICAgIGNvbnN0IHNBID0gVHJpdHMuc3VtKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNBID0gVHJpdHMuY29ucyhhLCBiKTtcclxuICAgICAgICBjb25zdCBjQiA9IFRyaXRzLmNvbnMoc0EsIGMpO1xyXG4gICAgICAgIGNvbnN0IGNPdXQgPSBUcml0cy5hbnkoY0EsIGNCKTtcclxuICAgICAgICBjb25zdCBzT1V0ID0gVHJpdHMuc3VtKHNBLCBjKTtcclxuICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShbc09VdCwgY091dF0pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgc3VtKGEsIGIpIHtcclxuICAgICAgICBjb25zdCBzID0gYSArIGI7XHJcbiAgICAgICAgc3dpdGNoIChzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBjYXNlIC0yOiByZXR1cm4gMTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgY29ucyhhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgYW55KGEsIGIpIHtcclxuICAgICAgICBjb25zdCBzID0gYSArIGI7XHJcbiAgICAgICAgaWYgKHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9BcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5IGFzIGEgbnVtYmVyIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlckFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3RyaXRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBJbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGxldCB0cnl0ZXMgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdHJpdHMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBwb3NzaWJsZSB0cnl0ZSB2YWx1ZXMgdG8gZmluZCBjb3JyZWN0IHRyaXQgcmVwcmVzZW50YXRpb25cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChUcml0cy5UUllURVNfVFJJVFNbal1bMF0gPT09IHRoaXMuX3RyaXRzW2ldICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzFdID09PSB0aGlzLl90cml0c1tpICsgMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMl0gPT09IHRoaXMuX3RyaXRzW2kgKyAyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeXRlcyArPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuY2hhckF0KGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIGEgbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIGNvbnZlcnRlZCB0byBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXIoKSB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdHJpdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZSAqIDMgKyB0aGlzLl90cml0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGF0IGlzIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgTGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uIHRvIGdldCB0aGUgc3ViLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdWIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJpdHMubGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KHRoaXMuX3RyaXRzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5Ucml0cy5UUllURVNfVFJJVFMgPSBbXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAwXSlcclxuXTtcclxuZXhwb3J0cy5Ucml0cyA9IFRyaXRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpwZEhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbWwwY3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTUVWQlFYVkZPMEZCUTNaRkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJiVU5KTEdWQlFXVTdTVUZEWml4WlFVRnZRaXhMUVVGblFqdFJRVU5vUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlowSTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVTTdVVUZEYkVVc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJaVHRSUVVONlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRU5CUVVNc1EwRkJRenRSUVVOc1JTeERRVUZETzFGQlEwUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1VVRkRja1VzUTBGQlF6dFJRVU5FTEUxQlFVMHNXVUZCV1N4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU4wUXl4TlFVRk5MRXRCUVVzc1IwRkJZeXhKUVVGSkxGTkJRVk1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6TkRMRTFCUVUwc1IwRkJSeXhIUVVGSExHVkJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRV0U3VVVGRGJFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVOMlJDeERRVUZETzFGQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVdFc1JVRkJSU3hEUVVGRE8xRkJRek5DTEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRkwwTXNUMEZCVHl4aFFVRmhMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU03V1VGRGRrSXNTVUZCU1N4VFFVRlRMRWRCUVVjc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZPVU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyaENMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWml4aFFVRmhMRVZCUVVVc1EwRkJRenRaUVVOd1FpeERRVUZETzFsQlJVUXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEY0VNc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMW9zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlEzQkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlFpeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRek5ETEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQldTeEZRVUZGTEUxQlFXRTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMREJEUVVFd1F5eERRVUZETEVOQlFVTTdVVUZEY0VVc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcwUTBGQk5FTXNRMEZCUXl4RFFVRkRPMUZCUTNSRkxFTkJRVU03VVVGRlJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlJTeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5RTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUlZBc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkZiRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RUxFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEZUVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVObUxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyaERMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGJFUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNMElzVFVGQlRTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRMMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGT1VJc1RVRkJUU3hEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTI1RExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZhRUlzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFdEJRVXNzUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFSXNVMEZCVXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1JDTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFZpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJJc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRia01zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWb1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5TTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRZaXhEUVVGRE8xRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyWXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMlFzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1QwRkJUenRSUVVOV0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hoUVVGaE8xRkJRMmhDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU0zUXl3MlJVRkJOa1U3V1VGRE4wVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4bFFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMmRDUVVNNVF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTXpReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGREwwTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMnhFTEUxQlFVMHNTVUZCU1N4bFFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRjRU1zUzBGQlN5eERRVUZETzJkQ1FVTldMRU5CUVVNN1dVRkRUQ3hEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzSkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1NVRkJTU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJYQkNMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGREwwTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVJDeERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU01UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hIUVVGSExFTkJRVU1zUzBGQllTeEZRVUZGTEUxQlFXTTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU16UlN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRRa0ZCT0VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRkxFTkJRVU03VVVGRFJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY2tVc1EwRkJRenM3UVVGMlVVUXNaVUZCWlR0QlFVTlRMR3RDUVVGWkxFZEJRV2RDTzBsQlEyaEVMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNMElzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBOQlF6VkNMRU5CUVVNN1FVRTVRazRzYzBKQk1GRkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyaXRzLnRzIiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NvbnZlcnRlcnMvYXNjaWlUcnl0ZXNDb252ZXJ0ZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb252ZXJ0ZXJzL29iamVjdFRyeXRlc0NvbnZlcnRlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvYWRkcmVzc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9idW5kbGVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL2hhc2hcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL2lucHV0XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3RhZ1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvdHJhbnNhY3Rpb25cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3RyYW5zZmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS90cml0c1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvdHJ5dGVOdW1iZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3RyeXRlc1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2Vycm9yL2RhdGFFcnJvclwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2RVUkJRV3RFTzBGQlEyeEVMSGRFUVVGdFJEdEJRVU51UkN4dlEwRkJLMEk3UVVGREwwSXNORU5CUVhWRE8wRkJRM1pETEcxRFFVRTRRanRCUVVNNVFpeHBRMEZCTkVJN1FVRkROVUlzYTBOQlFUWkNPMEZCUXpkQ0xIRkVRVUZuUkR0QlFVTm9SQ3huUTBGQk1rSTdRVUZETTBJc2QwTkJRVzFETzBGQlEyNURMSEZEUVVGblF6dEJRVU5vUXl4clEwRkJOa0k3UVVGRE4wSXNkME5CUVcxRE8wRkJRMjVETEcxRFFVRTRRanRCUVVNNVFpeDFRMEZCYTBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2luZGV4LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEdWQlFYVkNMRk5CUVZFc1MwRkJTenRKUVdkQ2FFTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlVUdFJRVU14UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExGTkJRVk1zU1VGQlNTeEhRVUZITEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzU1VGQlNTeFRRVUZUTEVsQlFVa3NSMEZCUnl4SlFVRkpMRmxCUVZrc1NVRkJTU3hIUVVGSExFTkJRVU03U1VGRGJrZ3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWaUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VVVGRE9VSXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkROMElzUTBGQlF6dFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUWl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNN1dVRkRhRUlzUTBGQlF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEyWXNSMEZCUnl4SlFVRkpMRXRCUVVzc1IwRkJSeXhMUVVGTExIVkNRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNaRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUV2UkVRc09FSkJLMFJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZXJyb3IvY29yZUVycm9yLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4uL2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IGFzY2lpVHJ5dGVzQ29udmVydGVyXzEgPSByZXF1aXJlKFwiLi9hc2NpaVRyeXRlc0NvbnZlcnRlclwiKTtcclxuLyoqXHJcbiAqIFRyeXRlcyBjb252ZXJ0ZXIgdGhhdCBjb252ZXJ0cyB0byBhbmQgZnJvbSBhbiBvYmplY3QuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgY29udmVyc2lvbiBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgT2JqZWN0VHJ5dGVzQ29udmVydGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhbiBvYmplY3QgdmFsdWUgaW50byB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IHRvIGNvbnZlcnQgaW50byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRvKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGNhbiBub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBqc29uO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGpzb24gPSBqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGNvbnZlcnRpbmcgdGhlIG9iamVjdCB0byBKU09OXCIsIHsgZXJyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGFzY2lpVHJ5dGVzQ29udmVydGVyXzEuQXNjaWlUcnl0ZXNDb252ZXJ0ZXIoKS50byhzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuZW5jb2RlTm9uQVNDSUkoanNvbikpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyeXRlcyBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyB0byBjb252ZXJ0IGludG8gYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyaW5nIHZhbHVlIGNvbnZlcnRlZCBmcm9tIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIGZyb20odHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBwYXJhbWV0ZXIgaXMgZW1wdHkgb3Igbm90IHRoZSBjb3JyZWN0IHR5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzY2lpID0gbmV3IGFzY2lpVHJ5dGVzQ29udmVydGVyXzEuQXNjaWlUcnl0ZXNDb252ZXJ0ZXIoKS5mcm9tKHRyeXRlcyk7XHJcbiAgICAgICAgLy8gTXVzdCBoYXZlIGEgYSBzdGFydCBhbmQgY2xvc2luZyBwYWlyc1xyXG4gICAgICAgIGlmIChhc2NpaS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdHJ5dGVzIGRvIG5vdCByZXByZXNlbnQgYW4gb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUaGUgc3RhcnQgYW5kIGVuZCBtdXN0IGJlIGVpdGhlciB7fSwgW10gb3IgXCJcIiB0byByZXByZXNlbnQgYSBKU09OIG9iamVjdFxyXG4gICAgICAgIGlmICghKChhc2NpaVswXSA9PT0gXCJ7XCIgJiYgYXNjaWlbYXNjaWkubGVuZ3RoIC0gMV0gPT09IFwifVwiKSB8fFxyXG4gICAgICAgICAgICAoYXNjaWlbMF0gPT09IFwiW1wiICYmIGFzY2lpW2FzY2lpLmxlbmd0aCAtIDFdID09PSBcIl1cIikgfHxcclxuICAgICAgICAgICAgKGFzY2lpWzBdID09PSBcIlxcXCJcIiAmJiBhc2NpaVthc2NpaS5sZW5ndGggLSAxXSA9PT0gXCJcXFwiXCIpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBkbyBub3QgcmVwcmVzZW50IGFuIG9iamVjdFwiLCB7IGFzY2lpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWNvZGVkID0gc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmRlY29kZU5vbkFTQ0lJKGFzY2lpKTtcclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2UoZGVjb2RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW0gY29udmVydGluZyB0aGUgb2JqZWN0IGZyb20gSlNPTlwiLCB7IGVyciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdFRyeXRlc0NvbnZlcnRlciA9IE9iamVjdFRyeXRlc0NvbnZlcnRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBWSEo1ZEdWelEyOXVkbVZ5ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJOdmJuWmxjblJsY25NdmIySnFaV04wVkhKNWRHVnpRMjl1ZG1WeWRHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTeDNSVUZCY1VVN1FVRkRja1VzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3d5UTBGQmQwTTdRVUZEZUVNc2EwUkJRU3RETzBGQlJTOURMR2xGUVVFNFJEdEJRVVU1UkRzN08wZEJSMGM3UVVGRFNEdEpRVU5KT3pzN08wOUJTVWM3U1VGRFNTeEZRVUZGTEVOQlFVTXNTMEZCVVR0UlFVTmtMRVZCUVVVc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8xRkJRM1JFTEVOQlFVTTdVVUZGUkN4SlFVRkpMRWxCUVVrc1EwRkJRenRSUVVOVUxFbEJRVWtzUTBGQlF6dFpRVU5FTEVsQlFVa3NSMEZCUnl4MVFrRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhEUVVGRE8xRkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOWUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRzFFUVVGdFJDeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFJpeERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkRMRWxCUVVrc01rTkJRVzlDTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc01rSkJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNMVJTeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEVsQlFVa3NRMEZCUXl4TlFVRmpPMUZCUTNSQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEdWQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMUZCUTJwR0xFTkJRVU03VVVGRlJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMREpEUVVGdlFpeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFJFTEhkRFFVRjNRenRSUVVONFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtJc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkVU5CUVhWRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRPMUZCUlVRc01rVkJRVEpGTzFGQlF6TkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETzFsQlEzSkVMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNN1dVRkRja1FzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpkRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSFZEUVVGMVF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNMVJTeERRVUZETzFGQlJVUXNUVUZCVFN4UFFVRlBMRWRCUVVjc01rSkJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkZia1FzU1VGQlNTeEhRVUZITEVOQlFVTTdVVUZEVWl4SlFVRkpMRU5CUVVNN1dVRkRSQ3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVNNVFpeERRVUZETzFGQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5ZTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIRkVRVUZ4UkN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40Uml4RFFVRkRPMUZCUlVRc1RVRkJUU3hEUVVGSkxFZEJRVWNzUTBGQlF6dEpRVU5zUWl4RFFVRkRPME5CUTBvN1FVRjRSRVFzYzBSQmQwUkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9jb252ZXJ0ZXJzL29iamVjdFRyeXRlc0NvbnZlcnRlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIi4vaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIi4vdGFnXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIi4vdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiLi90cnl0ZU51bWJlclwiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGJ1bmRsZXMuXHJcbiAqL1xyXG5jbGFzcyBCdW5kbGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQnVuZGxlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbmV3IHRyYW5zYWN0aW9ucyB0byB0aGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VMZW5ndGggVGhlIG51bWJlciBvZiB0cmFuc2FjdGlvbnMgdG8gYWRkLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MgZm9yIHRoZSB0cmFuc2FjdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlyc3Qgb2YgdGhlIHRyYW5zYWN0aW9ucy5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRhZyB0byBpbmNsdWRlIGluIHRoZSB0cmFuc2FjdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gdGltZXN0YW1wIFRoZSB0aW1lc3RhbXAgZm9yIHRoZSB0cmFuc2FjdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGFkZFRyYW5zYWN0aW9ucyhzaWduYXR1cmVNZXNzYWdlTGVuZ3RoLCBhZGRyZXNzLCB2YWx1ZSwgdGFnLCB0aW1lc3RhbXApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25hdHVyZU1lc3NhZ2VMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucy5wdXNoKHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVBhcmFtcyh1bmRlZmluZWQsIGFkZHJlc3MsIGkgPT09IDAgPyB2YWx1ZSA6IDAsIHRhZywgdGltZXN0YW1wLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBzaWduYXR1cmUgZnJhZ21lbnRzIHRvIHRoZSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBUaGUgc2lnbmF0dXJlIGZyYWdtZW50cyB0byBhZGQgdG8gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGFkZFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cykge1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgc2hvdWxkIGJlIGFuIGFycmF5IG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNbaV0uc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHNbaV0gfHwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkVNUFRZKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNbaV0udHJ1bmtUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLkVNUFRZO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1tpXS5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLkVNUFRZO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1tpXS5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1tpXS5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNbaV0uYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zW2ldLm5vbmNlID0gdGFnXzEuVGFnLkVNUFRZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJ1bmRsZSA9IEJ1bmRsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW5WdVpHeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2WW5WdVpHeGxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUlM5RExHbERRVUU0UWp0QlFVTTVRaXg1UlVGQmMwVTdRVUZEZEVVc0swSkJRVFJDTzBGQlF6VkNMQ3REUVVFMFF6dEJRVU0xUXl3clEwRkJORU03UVVGRk5VTTdPMGRCUlVjN1FVRkRTRHRKUVZWSk96dFBRVVZITzBsQlEwZzdVVUZEU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU16UWl4RFFVRkRPMGxCUlVRN096czdPenM3VDBGUFJ6dEpRVU5KTEdWQlFXVXNRMEZCUXl4elFrRkJPRUlzUlVGQlJTeFBRVUZuUWl4RlFVRkZMRXRCUVdFc1JVRkJSU3hIUVVGUkxFVkJRVVVzVTBGQmFVSTdVVUZETDBjc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXh6UWtGQmMwSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRemxETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVTTFReXhUUVVGVExFVkJRVVVzVTBGQlV5eEZRVUZGTEZOQlFWTXNSVUZCUlN4VFFVRlRMRVZCUXpGRExGTkJRVk1zUlVGQlJTeFRRVUZUTEVWQlFVVXNSMEZCUnl4RlFVRkZMRk5CUVZNc1JVRkRjRU1zVTBGQlV5eEZRVUZGTEZOQlFWTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JHTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NORUpCUVRSQ0xFTkJRVU1zZVVKQlFYRkVPMUZCUTNKR0xFVkJRVVVzUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnhFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExDdEZRVUVyUlN4RFFVRkRMRU5CUVVNN1VVRkRla2NzUTBGQlF6dFJRVVZFTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXp0WlFVTm9SQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NiVVJCUVhkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEYWtnc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eFhRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTI1RUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVOd1JDeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHMUNRVUZ0UWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETzFsQlF5OUVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkRla1VzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXcyUWtGQk5rSXNSMEZCUnl4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU42UlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRek5ETEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRnlSRVFzZDBKQmNVUkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL2J1bmRsZS50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiLi9vYmplY3RIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBcnJheSBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBlbXB0eSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG5vbiBlbXB0eSBhcnJheSBvZiBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBub24gZW1wdHkgYXJyYXkgb2YgYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlZCh2YWx1ZSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNFbXB0eSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKHVuZGVmaW5lZCkgJiZcclxuICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKG51bGwpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmV2ZXJ5KChhKSA9PiBvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGEsIHR5cGUpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFycmF5SGVscGVyID0gQXJyYXlIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYSnlZWGxJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5aGNuSmhlVWhsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2FVUkJRVGhETzBGQlJUbERPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1JDeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVlVzUlVGQlJTeEpRVUZqTzFGQlF6VkRMRTFCUVUwc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRNVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOeVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTVSQ3hEUVVGRE8wTkJSVW83UVVGcVEwUXNhME5CYVVOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzXCIpO1xyXG5jb25zdCBhZGRyZXNzU2VjdXJpdHlfMSA9IHJlcXVpcmUoXCIuL2FkZHJlc3NTZWN1cml0eVwiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGlucHV0cy5cclxuICovXHJcbmNsYXNzIElucHV0IHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiBpbnB1dCBmcm9tIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgYWRkcmVzcyBzZWN1cml0eS5cclxuICAgICAqIEBwYXJhbSBrZXlJbmRleCBUaGUga2V5IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGJhbGFuY2UgVGhlIGJhbGFuY2Ugb2YgdGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcmV0dXJucyBOZXcgaW5zdGFuY2Ugb2YgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tUGFyYW1zKGFkZHJlc3MsIHNlY3VyaXR5LCBrZXlJbmRleCwgYmFsYW5jZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhIHZhbGlkIEFkZHJlc3Mgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHkpIHx8IHNlY3VyaXR5IDwgYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmxvdyB8fCBzZWN1cml0eSA+IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzZWN1cml0eSBzaG91bGQgYmUgYSBudW1iZXIgYmV0d2VlbiAke2FkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5sb3d9IGFuZCAke2FkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoa2V5SW5kZXgpIHx8IGtleUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGtleUluZGV4IHNob3VsZCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoYmFsYW5jZSkgfHwgYmFsYW5jZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBiYWxhbmNlIHNob3VsZCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgICAgIGlucHV0LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIGlucHV0LnNlY3VyaXR5ID0gc2VjdXJpdHk7XHJcbiAgICAgICAgaW5wdXQua2V5SW5kZXggPSBrZXlJbmRleDtcclxuICAgICAgICBpbnB1dC5iYWxhbmNlID0gYmFsYW5jZTtcclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbnB1dCA9IElucHV0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXBibkIxZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2RVTkJRVzlETzBGQlEzQkRMSFZFUVVGdlJEdEJRVVZ3UkRzN1IwRkZSenRCUVVOSU8wbEJhMEpKTEdWQlFXVTdTVUZEWmp0SlFVTkJMRU5CUVVNN1NVRkZSRHM3T3pzN096dFBRVTlITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGblFpeEZRVU5vUWl4UlFVRjVRaXhGUVVONlFpeFJRVUZuUWl4RlFVTm9RaXhQUVVGbE8xRkJRM0JETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2xDUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRU5CUVRoRExFTkJRVU1zUTBGQlF6dFJRVU40UlN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhIUVVGSExFbEJRVWtzVVVGQlVTeEhRVUZITEdsRFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42Unl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3lRMEZCTWtNc2FVTkJRV1VzUTBGQlF5eEhRVUZITEZGQlFWRXNhVU5CUVdVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzUklMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkRRVUZ6UXl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFJRVU12UkN4RFFVRkRPMUZCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTjRRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTjRRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1EwRkRTanRCUVhwRVJDeHpRa0Y1UkVNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvaW5wdXQudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cmFuc2ZlcnMuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2ZlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNmZXIgZnJvbSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG1lc3NzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgdHJhbnNmZXIuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcuXHJcbiAgICAgKiBAcmV0dXJucyBOZXcgaW5zdGFuY2Ugb2YgVHJhbnNmZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tUGFyYW1zKGFkZHJlc3MsIHZhbHVlLCBtZXNzYWdlLCB0YWcpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgYWRkcmVzc18xLkFkZHJlc3MpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgYWRkcmVzcyBzaG91bGQgYmUgYSB2YWxpZCBBZGRyZXNzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHZhbHVlKSB8fCB2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShtZXNzYWdlKSAmJiAhb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShtZXNzYWdlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbWVzc2FnZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRhZykgJiYgIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGFnLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdGFnIHNob3VsZCBiZSBhIHZhbGlkIFRhZyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyYW5zZmVyID0gbmV3IFRyYW5zZmVyKCk7XHJcbiAgICAgICAgdHJhbnNmZXIuYWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgdHJhbnNmZXIudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0cmFuc2Zlci5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0cmFuc2Zlci50YWcgPSB0YWc7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNmZXIgPSBUcmFuc2ZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTm1aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtRnVjMlpsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2RVTkJRVzlETzBGQlEzQkRMQ3RDUVVFMFFqdEJRVU0xUWl4eFEwRkJhME03UVVGRmJFTTdPMGRCUlVjN1FVRkRTRHRKUVd0Q1NTeGxRVUZsTzBsQlEyWTdTVUZEUVN4RFFVRkRPMGxCUlVRN096czdPenM3VDBGUFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJaMElzUlVGRGFFSXNTMEZCWVN4RlFVTmlMRTlCUVdVc1JVRkRaaXhIUVVGUk8xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2xDUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRU5CUVRoRExFTkJRVU1zUTBGQlF6dFJRVU40UlN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh0UTBGQmJVTXNRMEZCUXl4RFFVRkRPMUZCUXpkRUxFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMR1ZCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UlN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzJRMEZCTmtNc1EwRkJReXhEUVVGRE8xRkJRM1pGTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxGTkJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzFGQlEyaEZMRU5CUVVNN1VVRkZSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJoRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUXpOQ0xGRkJRVkVzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTNaQ0xGRkJRVkVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUXpOQ0xGRkJRVkVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRPMUZCUTI1Q0xFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEY0VJc1EwRkJRenREUVVOS08wRkJla1JFTERSQ1FYbEVReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyYW5zZmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==