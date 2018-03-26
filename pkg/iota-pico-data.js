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
     * @return True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @return True if the number is formatted correctly.
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
   * @return New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
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
     * @return New trit which is the addition of the a + b.
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
   * @return New instance of Input.
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
   * @return New instance of Transfer.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYzc3YzkxYTRkYjc0YzMxMzlhMSIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL251bWJlckhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90YWcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvdHJ5dGVOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9jb252ZXJ0ZXJzL2FzY2lpVHJ5dGVzQ29udmVydGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzU2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL3RyYW5zYWN0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZXJyb3IvY29yZUVycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvY29udmVydGVycy9vYmplY3RUcnl0ZXNDb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL2J1bmRsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvYXJyYXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRhL2lucHV0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsc0NBQWlFO0FBS2pFOzs7OztJQUF1Qjs7Ozs7QUFNaEI7Ozs7OztBQUNILHFCQUEyQixTQUFvQyxZQUFvQjs7Ozs7QUFDMUUsa0hBQVEsU0FBWSxZQUFjO0FBQ25DLFVBQU8sU0FDZjs7QUFDSDs7O0VBWDhCLFlBQVM7O0FBQXhDLG9CQVdDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7Ozs7Ozs7Ozs7Ozs7O0FBTXlCOzs7Ozs0QkFBVztBQUN0QixhQUFNLFVBQVMsUUFBUyxVQUNsQztBQUFDO0FBT3FCOzs7Ozs7Ozs2QkFBVztBQUN2QixhQUFNLFVBQVMsUUFBUyxVQUN6QixZQUFRLFFBQU8sUUFBTyxXQUFhLFlBQUksQ0FBTSxN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QUNWO0FBQ0g7Ozs7OztBQXpERCxnQkF5REMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRCx5Q0FBeUU7O0FBQ3pFLHlDQUF5RTs7QUFDekUsc0NBQStDOztBQUMvQyxvQ0FBb0M7O0FBQ3BDLGdDQUE0Qjs7QUFDNUIsbUNBQWtDO0FBS2xDOzs7Ozs7OztBQWtCbUI7QUFDZjtBQUNBO0FBQUM7QUFVdUI7Ozs7Ozs7Ozs7OzsrQkFBaUIsU0FDSCxPQUNFLFNBQ1A7QUFDMUIsVUFBQyxDQUFDLGVBQVksYUFBTyxPQUFRLFNBQUUsVUFBUyxVQUFFO0FBQ3pDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBVSxVQUFPLFVBQVMsUUFBSyxHQUFFO0FBQzlDLGNBQU0sSUFBSSxZQUFTLFVBQ3ZCO0FBQUM7O0FBRUUsVUFBQyxDQUFDLGVBQVksYUFBUSxRQUFTLFlBQUksQ0FBQyxlQUFZLGFBQU8sT0FBUSxTQUFFLFNBQVEsU0FBRTtBQUMxRSxjQUFNLElBQUksWUFBUyxVQUN2QjtBQUFDOztBQUVFLFVBQUMsQ0FBQyxlQUFZLGFBQVEsUUFBSyxRQUFJLENBQUMsZUFBWSxhQUFPLE9BQUksS0FBRSxNQUFLLE1BQUU7QUFDL0QsY0FBTSxJQUFJLFlBQVMsVUFDdkI7QUFBQzs7QUFFRCxVQUFjLFdBQUcsSUFBZTtBQUN4QixlQUFRLFVBQVc7QUFDbkIsZUFBTSxRQUFTO0FBQ2YsZUFBUSxVQUFXO0FBQ25CLGVBQUksTUFBTztBQUNiLGFBQ1Y7QUFDSDs7Ozs7O0FBekRELG1CQXlEQyxTIiwiZmlsZSI6ImlvdGEtcGljby1kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL2RhdGFcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9kYXRhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvRGF0YVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRjNzdjOTFhNGRiNzRjMzEzOWExIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGRhdGEgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBEYXRhRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRGF0YUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkRhdGFcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFFcnJvciA9IERhdGFFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdGMFlVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyUmhkR0ZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwVkJRV2xGTzBGQlJXcEZPenRIUVVWSE8wRkJRMGdzWlVGQmRVSXNVMEZCVVN4eFFrRkJVenRKUVVOd1F6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LTzBGQldFUXNPRUpCVjBNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNUeXBlKHZhbHVlLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZUNsYXNzTmFtZSA9IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZUNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlQ2xhc3NOYW1lID09PSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHR5cGVDb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QgaWYgaXQgaGFzIG9uZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgVGhlIG9iamVjdCB0byBnZXQgdGhlIGNsYXNzIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUgaWYgaXQgaGFzIG9uZSBvciB1bmRlZmluZWQgaWYgbm90LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Q2xhc3NOYW1lKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZW9mIG9iamVjdCA9PT0gXCJmdW5jdGlvblwiID8gb2JqZWN0LnRvU3RyaW5nKCkgOiBvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGNvbnN0cnVjdG9yLm1hdGNoKC9cXHcrL2cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSA/IHJlc3VsdHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuT2JqZWN0SGVscGVyID0gT2JqZWN0SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liMkpxWldOMFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiMkpxWldOMFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV5eERRVUZETzBsQlEycEVMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZWTzFGQlF6ZENMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eFJRVUZSTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzUkZMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCVlN4RlFVRkZMR1ZCUVhsQ08xRkJRM1JFTEUxQlFVMHNZMEZCWXl4SFFVRkhMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hEUVVGRExHTkJRV01zUzBGQlN5eFRRVUZUTEVsQlFVa3NZMEZCWXl4TFFVRkxMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFWYzdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeExRVUZMTEVsQlFVa3NTVUZCU1N4TlFVRk5MRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0pDTEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0JGTEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNRMFFzYjBOQk5rTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cnl0ZXMuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZXMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZXMgZnJvbSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB0byBjcmVhdGUgdGhlIHRyeXRlcyBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZSwgbGVuZ3RoID0gMCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFUcnl0ZXMuaXNWYWxpZCh2YWx1ZSwgbGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGFuZCBsZW5ndGggZG8gbm90IGNvbnRhaW4gdmFsaWQgdHJ5dGVzXCIsIHsgdmFsdWUsIGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZXModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSB2YWx1ZSBjb250YWluIHZhbGlkIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB0byB2YWxpZGF0ZSBhcyB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpbnB1dCB3YXMgdmFsaWQgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNWYWxpZCh2YWx1ZSwgbGVuZ3RoID0gMCkge1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXls5QS1aXXske2xlbmd0aCA/IGxlbmd0aCA6IFwiMCxcIn19JGApLnRlc3QodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGVzIHRvIGEgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uIHRvIGdldCB0aGUgc3ViLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdWIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyeXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cnl0ZXMubGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzLnN1YnN0cihzdGFydCwgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEFsbCB0aGUgY2hhcmFjdGVycyB0aGF0IGNhbiBiZSB1c2VkIGluIHRyeXRlcy5cclxuICovXHJcblRyeXRlcy5BTFBIQUJFVCA9IFwiOUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbmV4cG9ydHMuVHJ5dGVzID0gVHJ5dGVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEo1ZEdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJSaGRHRXZkSEo1ZEdWekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNORVZCUVhsRk8wRkJRM3BGTEd0RVFVRXJRenRCUVVVdlF6czdSMEZGUnp0QlFVTklPMGxCVTBrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzUTBGQlF6dFJRVU4wUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRMEZCYzBNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdVVUZEYmtRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR3RFUVVGclJDeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGREwwWXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVdFc1JVRkJSU3hUUVVGcFFpeERRVUZETzFGQlEyNUVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyaERMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRGFrSXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFZEJRVWNzUTBGQlF5eExRVUZoTEVWQlFVVXNUVUZCWXp0UlFVTndReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1VVRkRNMFFzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkZMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERoQ1FVRTRRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROMFVzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEycEZMRU5CUVVNN08wRkJOVVZFT3p0SFFVVkhPMEZCUTFjc1pVRkJVU3hIUVVGWExEWkNRVUUyUWl4RFFVRkRPMEZCU201RkxIZENRVGhGUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGbG9hdFN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKlxcLj9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGludGVnZXIgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VJbnQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlZUdFJRVU01UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU55Uml4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOb1NTeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJZVHRSUVVOeVF5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQllUdFJRVU4yUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wTkJRMG83UVVGd1EwUXNiME5CYjBOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJZVHRSUVVNdlFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNdlNpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJZVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRXZRMFFzYjBOQkswTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBhZGRyZXNzZXMuXHJcbiAqL1xyXG5jbGFzcyBBZGRyZXNzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoYWRkcmVzc1RyeXRlcywgY2hlY2tzdW1Ucnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl9hZGRyZXNzVHJ5dGVzID0gYWRkcmVzc1RyeXRlcztcclxuICAgICAgICB0aGlzLl9jaGVja3N1bVRyeXRlcyA9IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYWRkcmVzcyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBhZGRyZXNzIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBBZGRyZXNzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhhZGRyZXNzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGFkZHJlc3MsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IGFkZHJlc3MudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCAhPT0gQWRkcmVzcy5MRU5HVEggJiYgdHJ5dGVzU3RyaW5nLmxlbmd0aCAhPT0gQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBzaG91bGQgZWl0aGVyIGJlICR7QWRkcmVzcy5MRU5HVEh9IG9yICR7QWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTX0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aDogdHJ5dGVzU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc1RyeXRlcyA9IHRyeXRlc1N0cmluZy5zdWJzdHIoMCwgQWRkcmVzcy5MRU5HVEgpO1xyXG4gICAgICAgIGxldCBjaGVja3N1bVRyeXRlcztcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA9PT0gQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSkge1xyXG4gICAgICAgICAgICBjaGVja3N1bVRyeXRlcyA9IHRyeXRlc1N0cmluZy5zdWJzdHIoQWRkcmVzcy5MRU5HVEgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3MoYWRkcmVzc1RyeXRlcywgY2hlY2tzdW1Ucnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhZGRyZXNzIHRvIHRyeXRlcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBubyBjaGVja3N1bS5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBhZGRyZXNzIHRvIHRyeXRlcyB3aXRoIGEgY2hlY2tzdW0sIGNyZWF0aW5nIGEgYmxhbmsgb25lIGlmIG5lZWRlZC5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBhZGRyZXNzIHdpdGggY2hlY2tzdSwuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzV2l0aENoZWNrc3VtKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fY2hlY2tzdW1Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl9hZGRyZXNzVHJ5dGVzICsgdGhpcy5fY2hlY2tzdW1Ucnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhpcyBhZGRyZXNzIGhhcyBubyBjaGVja3N1bSBjYWxjdWxhdGVkIGZvciBpdGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGhpcy5fY2hlY2tzdW1Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzICsgdGhpcy5fY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1RyeXRlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGEgdmFsaWQgYWRkcmVzcyB3aXRob3V0IGNoZWNrc3VtICg4MSkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYW4gYWRkcmVzcyBjaGVja3N1bSAoOSkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSF9DSEVDS1NVTSA9IDk7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciB2YWxpZCBhZGRyZXNzIHdpdGggY2hlY2tzdW0gKDkwKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0gPSBBZGRyZXNzLkxFTkdUSCArIEFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5BZGRyZXNzLkVNUFRZID0gQWRkcmVzcy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChBZGRyZXNzLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5BZGRyZXNzID0gQWRkcmVzcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdSa2NtVnpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDJGa1pISmxjM011ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRjNRa2tzWlVGQlpUdEpRVU5tTEZsQlFXOUNMR0ZCUVhGQ0xFVkJRVVVzWTBGQmMwSTdVVUZETjBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlNTeGpRVUZqTEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFXVTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNoRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVVUZEZGtVc1EwRkJRenRSUVVWRUxFMUJRVTBzV1VGQldTeEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWNFF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hMUVVGTExFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBITEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZERRVUZuUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hQUVVGUExFOUJRVThzUTBGQlF5eHZRa0ZCYjBJc2RVSkJRWFZDTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYmtzc1EwRkJRenRSUVVWRUxFMUJRVTBzWVVGQllTeEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hKUVVGSkxHTkJRV01zUTBGQlF6dFJRVU51UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtRc1kwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRM3BFTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zWVVGQllTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUTNSRUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4dlFrRkJiMEk3VVVGRGRrSXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZEVRVUZuUkN4RFFVRkRMRU5CUVVNN1VVRkRNVVVzUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNN1VVRkRkRVFzUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZETDBJc1EwRkJRenRKUVVOTUxFTkJRVU03TzBGQmJrWkVPenRIUVVWSE8wRkJRMjlDTEdOQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRNME03TzBkQlJVYzdRVUZEYjBJc2RVSkJRV1VzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZEYmtRN08wZEJSVWM3UVVGRGIwSXNORUpCUVc5Q0xFZEJRVmNzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRE8wRkJSUzlHT3p0SFFVVkhPMEZCUTI5Q0xHRkJRVXNzUjBGQldTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQmFrSTVSeXd3UWtGeFJrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdGFncy5cclxuICovXHJcbmNsYXNzIFRhZyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRhZyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHRhZyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVGFnLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0YWcpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGFnLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdGFnIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZXNTdHJpbmcgPSB0YWcudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA+IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRhZyBzaG91bGQgYmUgYXQgbW9zdCAke1RhZy5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZXNTdHJpbmcubGVuZ3RoIDwgVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0cnl0ZXNTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVGFnKHRyeXRlc1N0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRhZyB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdGFnLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0YWcgKDI3KS5cclxuICovXHJcblRhZy5MRU5HVEggPSAyNztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHRhZyBhbGwgOXMuXHJcbiAqL1xyXG5UYWcuRU1QVFkgPSBUYWcuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoVGFnLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5UYWcgPSBUYWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHRm5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEdGbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFWYzdVVUZEYUVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdVVUZEYmtVc1EwRkJRenRSUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWc1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42U0N4RFFVRkRPMUZCUlVRc1QwRkJUeXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRaUVVOMFF5eFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRPMUZCUTNoQ0xFTkJRVU03VVVGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZET3p0QlFYUkVSRHM3UjBGRlJ6dEJRVU52UWl4VlFVRk5MRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRek5ET3p0SFFVVkhPMEZCUTI5Q0xGTkJRVXNzUjBGQlVTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVteEhMR3RDUVhkRVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdGFnLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGhhc2hlcy5cclxuICovXHJcbmNsYXNzIEhhc2gge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBoYXNoIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGhhc2ggVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGhhc2ggZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEhhc2guXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGhhc2gpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaGFzaCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGhhc2ggc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gaGFzaC5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBIYXNoLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgaGFzaCBzaG91bGQgYmUgJHtIYXNoLkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIYXNoKGhhc2gpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBoYXNoIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBoYXNoLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGhhc2ggKDgxKS5cclxuICovXHJcbkhhc2guTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkhhc2guRU1QVFkgPSBIYXNoLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEhhc2guTEVOR1RIKSkpO1xyXG5leHBvcnRzLkhhc2ggPSBIYXNoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhR0Z6YUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyaGhjMmd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRmhTU3hsUVVGbE8wbEJRMllzV1VGQmIwSXNUVUZCWXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTnFReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeGxRVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRja01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc01FTkJRVEJETEVOQlFVTXNRMEZCUXp0UlFVTndSU3hEUVVGRE8xRkJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRemRDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1MwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzU1VGQlNTeERRVUZETEUxQlFVMHNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsR0xFTkJRVU03VVVGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTI1RExFTkJRVU03TzBGQmFrUkVPenRIUVVWSE8wRkJRMjlDTEZkQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRNME03TzBkQlJVYzdRVUZEYjBJc1ZVRkJTeXhIUVVGVExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGU2NrY3NiMEpCYlVSREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvaGFzaC50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudHMuXHJcbiAqL1xyXG5jbGFzcyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSAke1NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgc2lnbmF0dXJlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgKDIxODcpXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIID0gMjE4NztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFsbCA5cy5cclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2YzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUZuUXp0UlFVTnlSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMR1ZCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UkN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRSRUZCT0VRc1EwRkJReXhEUVVGRE8xRkJRM2hHTEVOQlFVTTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOcVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNM1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UTBGQk1FTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVrc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEhkQ1FVRjNRaXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEyNURMRU5CUVVNN08wRkJhRVJFT3p0SFFVVkhPMEZCUTI5Q0xDdENRVUZOTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCUXpkRE96dEhRVVZITzBGQlEyOUNMRGhDUVVGTExFZEJRVFpDTEhkQ1FVRjNRaXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVtcExMRFJFUVd0RVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCIuL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlIG51bWJlci5cclxuICovXHJcbmNsYXNzIFRyeXRlTnVtYmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXM7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cnl0ZXMgPSBcIjlcIi5yZXBlYXQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcih2YWx1ZSkudG9OdW1iZXJBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJpdHMubGVuZ3RoIDwgbGVuZ3RoICogMykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHMucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnl0ZXMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheSh0cml0cykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVTdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgY2hhcmFjdGVyc1wiLCB7IGxlbmd0aDogdHJ5dGVTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVTdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeXRlU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHZhbHVlIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKSkudG9OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZU9mKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExlbmd0aCBvZiBhIG51bWJlciB0aGF0IHVzZXMgOSB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5MRU5HVEhfOSA9IDk7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSA5IGxlbmd0aCB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5FTVBUWV85ID0gVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCBUcnl0ZU51bWJlci5MRU5HVEhfOSk7XHJcbmV4cG9ydHMuVHJ5dGVOdW1iZXIgPSBUcnl0ZU51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbmwwWlU1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zYlVOQlFXZERPMEZCUTJoRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkZXQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHMURRVUZ0UXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJoRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlFrRkJOa0lzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRVVzUTBGQlF6dFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkZkRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZETDBJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhEUVVGRE8xbEJSVVFzVFVGQlRTeEhRVUZITEdGQlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRhRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRXNSVUZCUlN4VFFVRnBRaXhYUVVGWExFTkJRVU1zVVVGQlVUdFJRVU42UlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNa05CUVRKRExFTkJRVU1zUTBGQlF6dFJRVU55UlN4RFFVRkRPMUZCUTBRc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlc1RExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYlVOQlFXMURMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRiRWNzUTBGQlF6dFJRVVZFTEU5QlFVOHNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF6dFpRVU5xUXl4WFFVRlhMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRM1pDTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRkxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVTg3VVVGRFZpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdPMEZCTVVkRU96dEhRVVZITzBGQlEyOUNMRzlDUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETzBGQlF6VkRPenRIUVVWSE8wRkJRMjlDTEcxQ1FVRlBMRWRCUVdkQ0xGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVkpzUnl4clEwRTBSME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG4vKipcclxuICogVHJ5dGVzIGNvbnZlcnRlciB0aGF0IGNvbnZlcnRzIHRvIGFuZCBmcm9tIGEgc3RyaW5nLlxyXG4gKi9cclxuY2xhc3MgQXNjaWlUcnl0ZXNDb252ZXJ0ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgc3RyaW5nIHZhbHVlIGludG8gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHN0cmluZyB2YWx1ZSB0byBjb252ZXJ0IGludG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHRvKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIHN0cmluZ1wiLCB7IHZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0FzY2lpKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGNvbnRhaW5zIG5vbiBBU0NJSSBjaGFyYWN0ZXJzXCIsIHsgdmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZXMgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYXNjaWlWYWx1ZSA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VmFsdWUgPSBhc2NpaVZhbHVlICUgMjc7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFZhbHVlID0gKGFzY2lpVmFsdWUgLSBmaXJzdFZhbHVlKSAvIDI3O1xyXG4gICAgICAgICAgICB0cnl0ZXMgKz0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVUW2ZpcnN0VmFsdWVdICsgdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVUW3NlY29uZFZhbHVlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdHJ5dGVzIGludG8gYSBzdHJpbmcgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIHRvIGNvbnZlcnQgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgdmFsdWUgY29udmVydGVkIGZyb20gdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgZnJvbSh0cnl0ZXMpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdHJ5dGVzIHBhcmFtZXRlciBpcyBlbXB0eSBvciBub3QgdGhlIGNvcnJlY3QgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdHJ5dGVzIGxlbmd0aCBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXNjaWkgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzU3RyaW5nLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyeXRlc1BhaXIgPSB0cnl0ZXNTdHJpbmdbaV0gKyB0cnl0ZXNTdHJpbmdbaSArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFZhbHVlID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzUGFpclswXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFZhbHVlID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzUGFpclsxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxWYWx1ZSA9IGZpcnN0VmFsdWUgKyBzZWNvbmRWYWx1ZSAqIDI3O1xyXG4gICAgICAgICAgICBhc2NpaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRlY2ltYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhc2NpaTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFzY2lpVHJ5dGVzQ29udmVydGVyID0gQXNjaWlUcnl0ZXNDb252ZXJ0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYTmphV2xVY25sMFpYTkRiMjUyWlhKMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlkyOXVkbVZ5ZEdWeWN5OWhjMk5wYVZSeWVYUmxjME52Ym5abGNuUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTd3lRMEZCZDBNN1FVRkRlRU1zYTBSQlFTdERPMEZCUnk5RE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NSVUZCUlN4RFFVRkRMRXRCUVdFN1VVRkRia0lzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05FSkJRVFJDTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UWl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eDVRMEZCZVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZET1VVc1EwRkJRenRSUVVWRUxFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOd1F5eE5RVUZOTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYWkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEYmtNc1RVRkJUU3hYUVVGWExFZEJRVWNzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJSVzVFTEUxQlFVMHNTVUZCU1N4bFFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEdWQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGVrVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzU1VGQlNTeERRVUZETEUxQlFXTTdVVUZEZEVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSFZFUVVGMVJDeERRVUZETEVOQlFVTTdVVUZEYWtZc1EwRkJRenRSUVVORUxFMUJRVTBzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWMlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMREJEUVVFd1F5eERRVUZETEVOQlFVTTdVVUZEY0VVc1EwRkJRenRSUVVWRUxFbEJRVWtzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVm1MRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRPVU1zVFVGQlRTeFZRVUZWTEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZla1FzVFVGQlRTeFZRVUZWTEVkQlFVY3NaVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVVFzVFVGQlRTeFhRVUZYTEVkQlFVY3NaVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZNMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NWVUZCVlN4SFFVRkhMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRmJrUXNTMEZCU3l4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVVUZETDBNc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenREUVVOS08wRkJNMFJFTEc5RVFUSkVReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9jb252ZXJ0ZXJzL2FzY2lpVHJ5dGVzQ29udmVydGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogSnNvbiBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIEpzb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdHJpbmdpZnkgYW4gb2JqZWN0IHdpdGggcmVjdXJzaW9uIGJyZWFraW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXksIHRvIGJlIGNvbnZlcnRlZC5cclxuICAgICAqIEBwYXJhbSByZXBsYWNlciBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgcmVzdWx0cy5cclxuICAgICAqIEBwYXJhbSBzcGFjZSBBZGRzIGluZGVudGF0aW9uLCB3aGl0ZSBzcGFjZSwgYW5kIGxpbmUgYnJlYWsgY2hhcmFjdGVycyB0byB0aGUgcmV0dXJuLXZhbHVlIEpTT04gdGV4dCB0byBtYWtlIGl0IGVhc2llciB0byByZWFkLlxyXG4gICAgICogQHJldHVybnMgU3RyaW5nIHZlcnNpb24gb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XHJcbiAgICAgICAgLy8gZWxpbWluYXRlcyBhbnkgcmVjdXJzaW9uIGluIHRoZSBzdHJpbmdpZnlcclxuICAgICAgICBjb25zdCBjYWNoZSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlY3VzaW9uUmVwbGFjZXIgPSAoa2V5LCByZXBsYWNlVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgcmVwbGFjZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZS5pbmRleE9mKHJlcGxhY2VWYWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2gocmVwbGFjZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIgPyByZXBsYWNlcihrZXksIHJlcGxhY2VWYWx1ZSkgOiByZXBsYWNlVmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlY3VzaW9uUmVwbGFjZXIsIHNwYWNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkpzb25IZWxwZXIgPSBKc29uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhbk52YmtobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwycHpiMjVJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRXlReXhGUVVGRkxFdEJRWFZDTzFGQlEzQkhMRFJEUVVFMFF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJWU3hGUVVGRkxFTkJRVU03VVVGRmVFSXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEVkQlFWY3NSVUZCUlN4WlFVRnBRaXhGUVVGRkxFVkJRVVU3V1VGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhaUVVGWkxFdEJRVXNzVVVGQlVTeEpRVUZKTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1dVRkJXU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTI1R0xFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOeVF5eDNRMEZCZDBNN2IwSkJRM2hETEUxQlFVMHNRMEZCUXp0blFrRkRXQ3hEUVVGRE8yZENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVOS0xFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1owSkJRemRDTEVOQlFVTTdXVUZEVEN4RFFVRkRPMWxCUlVRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTJwRkxFTkJRVU1zUTBGQlF6dFJRVVZHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBvN1FVRXpRa1FzWjBOQk1rSkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGFuIGVudW0gZm9yIHRoZSBhZGRyZXNzIHNlY3VyaXR5IHZhbHVlcy5cclxuICovXHJcbnZhciBBZGRyZXNzU2VjdXJpdHk7XHJcbihmdW5jdGlvbiAoQWRkcmVzc1NlY3VyaXR5KSB7XHJcbiAgICBBZGRyZXNzU2VjdXJpdHlbQWRkcmVzc1NlY3VyaXR5W1wibG93XCJdID0gMV0gPSBcImxvd1wiO1xyXG4gICAgQWRkcmVzc1NlY3VyaXR5W0FkZHJlc3NTZWN1cml0eVtcIm1lZGl1bVwiXSA9IDJdID0gXCJtZWRpdW1cIjtcclxuICAgIEFkZHJlc3NTZWN1cml0eVtBZGRyZXNzU2VjdXJpdHlbXCJoaWdoXCJdID0gM10gPSBcImhpZ2hcIjtcclxufSkoQWRkcmVzc1NlY3VyaXR5ID0gZXhwb3J0cy5BZGRyZXNzU2VjdXJpdHkgfHwgKGV4cG9ydHMuQWRkcmVzc1NlY3VyaXR5ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVdSa2NtVnpjMU5sWTNWeWFYUjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2WVdSa2NtVnpjMU5sWTNWeWFYUjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklMRWxCUVZrc1pVRkpXRHRCUVVwRUxGZEJRVmtzWlVGQlpUdEpRVU4yUWl4dFJFRkJVU3hEUVVGQk8wbEJRMUlzZVVSQlFWVXNRMEZCUVR0SlFVTldMSEZFUVVGUkxFTkJRVUU3UVVGRFdpeERRVUZETEVWQlNsY3NaVUZCWlN4SFFVRm1MSFZDUVVGbExFdEJRV1lzZFVKQlFXVXNVVUZKTVVJaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1NlY3VyaXR5LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiLi9oYXNoXCIpO1xyXG5jb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMSA9IHJlcXVpcmUoXCIuL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiLi90YWdcIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiLi90cnl0ZU51bWJlclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cmFuc2FjdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbiB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgYWRkcmVzcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gb2Jzb2xldGVUYWcgT2Jzb2xldGUgdHJhbnNhY3Rpb24gdGFnLlxyXG4gICAgICogQHBhcmFtIHRpbWVzdGFtcCBUaGUgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGN1cnJlbnRJbmRleCBUaGUgY3VycmVudCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBsYXN0SW5kZXggVGhlIGxhc3QgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlIFRoZSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gdHJ1bmtUcmFuc2FjdGlvbiBUaGUgdHJ1bmsgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnJhbmNoVHJhbnNhY3Rpb24gVGhlIGJyYW5jaCB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRhZy5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgbG93ZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCB1cHBlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBub25jZSBUaGUgbm9uY2UuXHJcbiAgICAgKiBAcmV0dXJuIE5ldyBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBhZGRyZXNzLCB2YWx1ZSwgb2Jzb2xldGVUYWcsIHRpbWVzdGFtcCwgY3VycmVudEluZGV4LCBsYXN0SW5kZXgsIGJ1bmRsZSwgdHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRhZywgYXR0YWNobWVudFRpbWVzdGFtcCwgYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQsIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kLCBub25jZSkge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHZhbHVlLCAxMSk7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSBvYnNvbGV0ZVRhZztcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGltZXN0YW1wKTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoY3VycmVudEluZGV4KTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIobGFzdEluZGV4KTtcclxuICAgICAgICB0eC5idW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC50YWcgPSB0YWc7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQpO1xyXG4gICAgICAgIHR4Lm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgZm9yIHRoZSB0aGlzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgdGhpcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhTdGFydCA9IDIyNzk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleExlbmd0aCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdHJ5dGVzLnN1YihjaGVja0luZGV4U3RhcnQsIGNoZWNrSW5kZXhMZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9PSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIGJldHdlZW4gJHtjaGVja0luZGV4U3RhcnR9IGFuZCAke2NoZWNrSW5kZXhTdGFydCArIGNoZWNrSW5kZXhMZW5ndGh9IHNob3VsZCBiZSBhbGwgOXNgLCB7IGNoZWNrIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEg7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3NfMS5BZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIDExKSwgMTEpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IDExO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSDtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cmFuc2FjdGlvbiB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSB0cmFuc2FjdGlvbiBhcyB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBhZGRyZXNzOiB0aGlzLmFkZHJlc3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm9ic29sZXRlVGFnLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBvYnNvbGV0ZVRhZyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBvYnNvbGV0ZVRhZzogdGhpcy5vYnNvbGV0ZVRhZyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnVuZGxlLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGJ1bmRsZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBidW5kbGU6IHRoaXMuYnVuZGxlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy50cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgdHJ1bmtUcmFuc2FjdGlvbjogdGhpcy50cnVua1RyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5icmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBicmFuY2hUcmFuc2FjdGlvbjogdGhpcy5icmFuY2hUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMubm9uY2UsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIG5vbmNlIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IG5vbmNlOiB0aGlzLm5vbmNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXMgPSB0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFXHJcbiAgICAgICAgICAgICsgdGhpcy5vYnNvbGV0ZVRhZy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5sYXN0SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmJ1bmRsZS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLnRydW5rVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5icmFuY2hUcmFuc2FjdGlvbi50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZykudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLm5vbmNlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aCAke2xlbmd0aH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBge1xuXFx0c2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50OiBcIiR7KHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHx8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhZGRyZXNzOiBcIiR7KHRoaXMuYWRkcmVzcyB8fCBhZGRyZXNzXzEuQWRkcmVzcy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR2YWx1ZTogJHsodGhpcy52YWx1ZSB8fCBUcmFuc2FjdGlvbi5FTVBUWV8xMSkudG9OdW1iZXIoKX1cblxcdG9ic29sZXRlVGFnOiBcIiR7KHRoaXMub2Jzb2xldGVUYWcgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRpbWVzdGFtcDogJHsodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0Y3VycmVudEluZGV4OiAkeyh0aGlzLmN1cnJlbnRJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRsYXN0SW5kZXg6ICR7KHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGJ1bmRsZTogXCIkeyh0aGlzLmJ1bmRsZSB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0cnVua1RyYW5zYWN0aW9uOiBcIiR7KHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRicmFuY2hUcmFuc2FjdGlvbjogXCIkeyh0aGlzLmJyYW5jaFRyYW5zYWN0aW9uIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRhZzogXCIkeyh0aGlzLnRhZyB8fCB0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhdHRhY2htZW50VGltZXN0YW1wOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bm9uY2U6IFwiJHsodGhpcy5ub25jZSB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxufWA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0cmFuc2FjdGlvbiAoMjY3MykuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5MRU5HVEggPSAyNjczO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIGNoZWNrIHZhbHVlICgxNikuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEggPSAxNjtcclxuLyoqXHJcbiAqIFRoZSBjaGVjayB2YWx1ZSBmb3IgYnVuZGxlcyBhbGwgOXMuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRSA9IFwiOVwiLnJlcGVhdChUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb24uRU1QVFlfMTEgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgMTEpO1xyXG5leHBvcnRzLlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21GdWMyRmpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVTXZReXgxUTBGQmIwTTdRVUZEY0VNc2FVTkJRVGhDTzBGQlF6bENMSGxGUVVGelJUdEJRVU4wUlN3clFrRkJORUk3UVVGRE5VSXNLME5CUVRSRE8wRkJRelZETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWjBaSkxHVkJRV1U3U1VGRFpqdEpRVU5CTEVOQlFVTTdTVUZGUkRzN096czdPenM3T3pzN096czdPenM3TzA5QmEwSkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eDNRa0ZCYTBRc1JVRkRiRVFzVDBGQlowSXNSVUZEYUVJc1MwRkJZU3hGUVVOaUxGZEJRV2RDTEVWQlEyaENMRk5CUVdsQ0xFVkJRMnBDTEZsQlFXOUNMRVZCUTNCQ0xGTkJRV2xDTEVWQlEycENMRTFCUVZrc1JVRkRXaXhuUWtGQmMwSXNSVUZEZEVJc2FVSkJRWFZDTEVWQlEzWkNMRWRCUVZFc1JVRkRVaXh0UWtGQk1rSXNSVUZETTBJc05rSkJRWEZETEVWQlEzSkRMRFpDUVVGeFF5eEZRVU55UXl4TFFVRlZPMUZCUXk5Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMUZCUTNaRUxFVkJRVVVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNKQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYWtRc1JVRkJSU3hEUVVGRExGbEJRVmtzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMjVDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRZaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVONlJpeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRV003VVVGRGJrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1pVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERSRFFVRTBReXhEUVVGRExFTkJRVU03VVVGRGRFVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTXZRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYzBKQlFYTkNMRmRCUVZjc1EwRkJReXhOUVVGTkxGbEJRVmtzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNVVlzUTBGQlF6dFJRVVZFTEUxQlFVMHNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVNM1FpeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0xUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEdWQlFXVXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlhaRkxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1pVRkJaU3hSUVVGUkxHVkJRV1VzUjBGQlJ5eG5Ra0ZCWjBJc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1pKTEVOQlFVTTdVVUZGUkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJUZENMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4RlFVRkZMRU5CUVVNc2QwSkJRWGRDTEVkQlFVY3NiVVJCUVhkQ0xFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxHMUVRVUYzUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrZ3NVVUZCVVN4SlFVRkpMRzFFUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTFReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMR2xDUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSU3hSUVVGUkxFbEJRVWtzYVVKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRNMElzUlVGQlJTeERRVUZETEV0QlFVc3NSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTm9SU3hSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEyWXNVVUZCVVN4SlFVRkpMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0UlFVTXpReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFVXNVVUZCVVN4SlFVRkpMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGRrSXNSVUZCUlN4RFFVRkRMRk5CUVZNc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFWXNVVUZCVVN4SlFVRkpMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETzFGQlEycERMRVZCUVVVc1EwRkJReXhaUVVGWkxFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEUxQlFVMHNSMEZCUnl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRkZCUVZFc1NVRkJTU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcEZMRkZCUVZFc1NVRkJTU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkZMRkZCUVZFc1NVRkJTU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzaENMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzVTBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeFRRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNeFJDeFJRVUZSTEVsQlFVa3NVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVOMlFpeEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM1JITEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSSExGRkJRVkVzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRk5CUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1UwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGTlVRc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNiVVJCUVhkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVZc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNkVVZCUVhWRkxFVkJRVVVzUlVGQlJTeDNRa0ZCZDBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemxLTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzYVVKQlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UkVGQmMwUXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpSeXhEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRk5CUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3dSRUZCTUVRc1JVRkJSU3hGUVVGRkxGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMlNDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGZEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU40Unl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1YwRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEN0RVFVRXJSQ3hGUVVGRkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFNTeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHZEZRVUZuUlN4RlFVRkZMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjZTU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHZSRUZCYjBRc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOeVJ5eERRVUZETzFGQlJVUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU0xUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTnNReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTXhSQ3hYUVVGWExFTkJRVU1zVjBGQlZ6dGpRVU4yUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTjBReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROMFFzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRMmhGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU0zUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTnFReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlF6TkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE5VTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGNFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRka1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNOa0pCUVRaQ0xFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEYWtZc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGFrWXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVjJReXhOUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1YwRkJWeXhEUVVGRExFMUJRVTBzWTBGQll5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGNFY3NRMEZCUXp0UlFVVkVMRTFCUVUwc1EwRkJReXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZET3l0Q1FVTm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1NVRkJTU3h0UkVGQmQwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZUVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWRCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzJ0Q1FVTjRReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NVMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0bFFVTjRSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdhMEpCUXk5RExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0bFFVTjRSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdZVUZEY0VRc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZkQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdkVUpCUTNaRExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxGZEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3ZDBKQlF6RkVMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4SlFVRkpMRmRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1ZVRkRNVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzVTBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdDVRa0ZEYkVRc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2JVTkJRMnhFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzIxRFFVTjBSU3hEUVVGRExFbEJRVWtzUTBGQlF5dzJRa0ZCTmtJc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVNM1JpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1UwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRGUVVONlJDeERRVUZETzBsQlEwTXNRMEZCUXpzN1FVRndVa1E3TzBkQlJVYzdRVUZEYjBJc2EwSkJRVTBzUjBGQlZ5eEpRVUZKTEVOQlFVTTdRVUZGTjBNN08wZEJSVWM3UVVGRGIwSXNPRUpCUVd0Q0xFZEJRVmNzUlVGQlJTeERRVUZETzBGQlJYWkVPenRIUVVWSE8wRkJRMjlDTEhWQ1FVRlhMRWRCUVZjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dEJRVVY0Uml4bFFVRmxPMEZCUTFNc2IwSkJRVkVzUjBGQlowSXNlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCYWtKc1JpeHJRMEZ6VWtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdHJhbnNhY3Rpb24udHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJpdHMuXHJcbiAqL1xyXG5jbGFzcyBUcml0cyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJpdHMgPSB0cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gSW50OEFycmF5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlciBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXJBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHZhbHVlLCBOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gbmV3IEludDhBcnJheSh0cnl0ZXNTdHJpbmcubGVuZ3RoICogMyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXNTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzU3RyaW5nLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzBdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDFdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMV07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMl0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh0cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIE51bWJlciB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBbXTtcclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlIDwgMCA/IC12YWx1ZSA6IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZSAlIDM7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBNYXRoLmZsb29yKGFic29sdXRlVmFsdWUgLyAzKTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW3RyaXRzLmxlbmd0aF0gPSByZW1haW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cml0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbaV0gPSAtdHJpdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHRyaXRzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0d28gdHJpdHMgdG9nZXRoZXIuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IHRyaXQuXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kIFRoZSBzZWNvbmQgdHJpdC5cclxuICAgICAqIEByZXR1cm4gTmV3IHRyaXQgd2hpY2ggaXMgdGhlIGFkZGl0aW9uIG9mIHRoZSBhICsgYi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGZpcnN0LCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBmaXJzdCBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWNvbmQsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNlY29uZHMgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgSW50OEFycmF5KE1hdGgubWF4KGZpcnN0Ll90cml0cy5sZW5ndGgsIHNlY29uZC5fdHJpdHMubGVuZ3RoKSk7XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gMDtcclxuICAgICAgICBsZXQgaUE7XHJcbiAgICAgICAgbGV0IGlCO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlBID0gaSA8IGZpcnN0Ll90cml0cy5sZW5ndGggPyBmaXJzdC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBpQiA9IGkgPCBzZWNvbmQuX3RyaXRzLmxlbmd0aCA/IHNlY29uZC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBmQSA9IFRyaXRzLmZ1bGxBZGQoaUEsIGlCLCBjYXJyeSk7XHJcbiAgICAgICAgICAgIG91dFtpXSA9IGZBWzBdO1xyXG4gICAgICAgICAgICBjYXJyeSA9IGZBWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KG91dCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBmdWxsQWRkKGEsIGIsIGMpIHtcclxuICAgICAgICBjb25zdCBzQSA9IFRyaXRzLnN1bShhLCBiKTtcclxuICAgICAgICBjb25zdCBjQSA9IFRyaXRzLmNvbnMoYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0IgPSBUcml0cy5jb25zKHNBLCBjKTtcclxuICAgICAgICBjb25zdCBjT3V0ID0gVHJpdHMuYW55KGNBLCBjQik7XHJcbiAgICAgICAgY29uc3Qgc09VdCA9IFRyaXRzLnN1bShzQSwgYyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoW3NPVXQsIGNPdXRdKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHN1bShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIHN3aXRjaCAocykge1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiAtMTtcclxuICAgICAgICAgICAgY2FzZSAtMjogcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGNvbnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGFueShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIGlmIChzID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocyA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheSBhcyBhIG51bWJlciBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXJBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl90cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgSW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RyaXRzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgdHJ5dGUgdmFsdWVzIHRvIGZpbmQgY29ycmVjdCB0cml0IHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzBdID09PSB0aGlzLl90cml0c1tpXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsxXSA9PT0gdGhpcy5fdHJpdHNbaSArIDFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzJdID09PSB0aGlzLl90cml0c1tpICsgMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnl0ZXMgKz0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmNoYXJBdChqKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyBhIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBjb252ZXJ0ZWQgdG8gYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX3RyaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWUgKiAzICsgdGhpcy5fdHJpdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV2hhdCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIExlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyaXRzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheSh0aGlzLl90cml0cy5zbGljZShzdGFydCwgc3RhcnQgKyBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJpdHMuVFJZVEVTX1RSSVRTID0gW1xyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMF0pXHJcbl07XHJcbmV4cG9ydHMuVHJpdHMgPSBUcml0cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKcGRITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21sMGN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCYlVOSkxHVkJRV1U3U1VGRFppeFpRVUZ2UWl4TFFVRm5RanRSUVVOb1F5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJaMEk3VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03VVVGRGJFVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWlR0UlFVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2QwTkJRWGRETEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMREpEUVVFeVF5eERRVUZETEVOQlFVTTdVVUZEY2tVc1EwRkJRenRSUVVORUxFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOMFF5eE5RVUZOTEV0QlFVc3NSMEZCWXl4SlFVRkpMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRek5ETEUxQlFVMHNSMEZCUnl4SFFVRkhMR1ZCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeExRVUZMTEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZMME1zVDBGQlR5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRka0lzU1VGQlNTeFRRVUZUTEVkQlFVY3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOc1F5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGT1VNc1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFppeGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTndRaXhEUVVGRE8xbEJSVVFzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFvc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRM0JETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJXU3hGUVVGRkxFMUJRV0U3VVVGRGVrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VVVGRGNFVXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzFGQlEzUkZMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZSU3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOUUxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlJWQXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZGYkVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUVMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGVFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm1MRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRiRVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETDBJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk9VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEyNURMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYUVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRXRCUVVzc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRUlzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEYmtNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm9RaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMllzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJRc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUMEZCVHp0UlFVTldMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4aFFVRmhPMUZCUTJoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZvUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNM1F5dzJSVUZCTmtVN1dVRkROMFVzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTTVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU16UXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRMME1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJ4RUxFMUJRVTBzU1VGQlNTeGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY0VNc1MwRkJTeXhEUVVGRE8yZENRVU5XTEVOQlFVTTdXVUZEVEN4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRMME1zVjBGQlZ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFGQlF6TkVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelJTeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXc0UWtGQk9FSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkZMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNrVXNRMEZCUXpzN1FVRjJVVVFzWlVGQlpUdEJRVU5UTEd0Q1FVRlpMRWRCUVdkQ08wbEJRMmhFTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRelZDTEVOQlFVTTdRVUU1UWs0c2MwSkJNRkZESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cml0cy50cyIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jb252ZXJ0ZXJzL2FzY2lpVHJ5dGVzQ29udmVydGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vY29udmVydGVycy9vYmplY3RUcnl0ZXNDb252ZXJ0ZXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL2FkZHJlc3NcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL2FkZHJlc3NTZWN1cml0eVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvYnVuZGxlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9oYXNoXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9pbnB1dFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS90YWdcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3RyYW5zYWN0aW9uXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS90cmFuc2ZlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2RhdGEvdHJpdHNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3RyeXRlTnVtYmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS90cnl0ZXNcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9lcnJvci9kYXRhRXJyb3JcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NkVVJCUVd0RU8wRkJRMnhFTEhkRVFVRnRSRHRCUVVOdVJDeHZRMEZCSzBJN1FVRkRMMElzTkVOQlFYVkRPMEZCUTNaRExHMURRVUU0UWp0QlFVTTVRaXhwUTBGQk5FSTdRVUZETlVJc2EwTkJRVFpDTzBGQlF6ZENMSEZFUVVGblJEdEJRVU5vUkN4blEwRkJNa0k3UVVGRE0wSXNkME5CUVcxRE8wRkJRMjVETEhGRFFVRm5RenRCUVVOb1F5eHJRMEZCTmtJN1FVRkROMElzZDBOQlFXMURPMEZCUTI1RExHMURRVUU0UWp0QlFVTTVRaXgxUTBGQmEwTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9pbmRleC50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNvcmUgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDb3JlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsID8gYWRkaXRpb25hbCA6IHt9O1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNvcmVcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGNvdWxkIGJlIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBJZiB0aGUgdGVzdGVkIG9iamVjdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIFwibWVzc2FnZVwiIGluIG9iaiAmJiBcImFkZGl0aW9uYWxcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgZXJyb3IgdG8gYSByZWFkYWJsZSB2ZXJzaW9uLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLmRvbWFpbikpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMuZG9tYWlufTogYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWRkaXRpb25hbCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGBcXHQke2tleX06ICR7anNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHRoaXMuYWRkaXRpb25hbFtrZXldKX1cXG5gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvcmVFcnJvciA9IENvcmVFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyTnZjbVZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2MwUkJRVzFFTzBGQlEyNUVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxHVkJRWFZDTEZOQlFWRXNTMEZCU3p0SlFXZENhRU03T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJVVHRSUVVNeFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRk5CUVZNc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1NVRkJTU3hUUVVGVExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWa3NTVUZCU1N4SFFVRkhMRU5CUVVNN1NVRkRia2dzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVmlMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNN1VVRkRPVUlzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1EwRkJRenRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwQ0xFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJRenRaUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMllzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzWkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUFzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wTkJRMG83UVVFdlJFUXNPRUpCSzBSREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuLi9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhc2NpaVRyeXRlc0NvbnZlcnRlcl8xID0gcmVxdWlyZShcIi4vYXNjaWlUcnl0ZXNDb252ZXJ0ZXJcIik7XHJcbi8qKlxyXG4gKiBUcnl0ZXMgY29udmVydGVyIHRoYXQgY29udmVydHMgdG8gYW5kIGZyb20gYW4gb2JqZWN0LlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIGNvbnZlcnNpb24gbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdFRyeXRlc0NvbnZlcnRlciB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYW4gb2JqZWN0IHZhbHVlIGludG8gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCB0byBjb252ZXJ0IGludG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB0byh2YWx1ZSkge1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBjYW4gbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQganNvbjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBqc29uID0ganNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBjb252ZXJ0aW5nIHRoZSBvYmplY3QgdG8gSlNPTlwiLCB7IGVyciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBhc2NpaVRyeXRlc0NvbnZlcnRlcl8xLkFzY2lpVHJ5dGVzQ29udmVydGVyKCkudG8oc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmVuY29kZU5vbkFTQ0lJKGpzb24pKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0cnl0ZXMgaW50byBhIHN0cmluZyB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgdG8gY29udmVydCBpbnRvIGEgc3RyaW5nIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyB2YWx1ZSBjb252ZXJ0ZWQgZnJvbSB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBmcm9tKHRyeXRlcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0cnl0ZXMgcGFyYW1ldGVyIGlzIGVtcHR5IG9yIG5vdCB0aGUgY29ycmVjdCB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhc2NpaSA9IG5ldyBhc2NpaVRyeXRlc0NvbnZlcnRlcl8xLkFzY2lpVHJ5dGVzQ29udmVydGVyKCkuZnJvbSh0cnl0ZXMpO1xyXG4gICAgICAgIC8vIE11c3QgaGF2ZSBhIGEgc3RhcnQgYW5kIGNsb3NpbmcgcGFpcnNcclxuICAgICAgICBpZiAoYXNjaWkubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBkbyBub3QgcmVwcmVzZW50IGFuIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVGhlIHN0YXJ0IGFuZCBlbmQgbXVzdCBiZSBlaXRoZXIge30sIFtdIG9yIFwiXCIgdG8gcmVwcmVzZW50IGEgSlNPTiBvYmplY3RcclxuICAgICAgICBpZiAoISgoYXNjaWlbMF0gPT09IFwie1wiICYmIGFzY2lpW2FzY2lpLmxlbmd0aCAtIDFdID09PSBcIn1cIikgfHxcclxuICAgICAgICAgICAgKGFzY2lpWzBdID09PSBcIltcIiAmJiBhc2NpaVthc2NpaS5sZW5ndGggLSAxXSA9PT0gXCJdXCIpIHx8XHJcbiAgICAgICAgICAgIChhc2NpaVswXSA9PT0gXCJcXFwiXCIgJiYgYXNjaWlbYXNjaWkubGVuZ3RoIC0gMV0gPT09IFwiXFxcIlwiKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0cnl0ZXMgZG8gbm90IHJlcHJlc2VudCBhbiBvYmplY3RcIiwgeyBhc2NpaSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5kZWNvZGVOb25BU0NJSShhc2NpaSk7XHJcbiAgICAgICAgbGV0IG9iajtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBvYmogPSBKU09OLnBhcnNlKGRlY29kZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGNvbnZlcnRpbmcgdGhlIG9iamVjdCBmcm9tIEpTT05cIiwgeyBlcnIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RUcnl0ZXNDb252ZXJ0ZXIgPSBPYmplY3RUcnl0ZXNDb252ZXJ0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wVkhKNWRHVnpRMjl1ZG1WeWRHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyTnZiblpsY25SbGNuTXZiMkpxWldOMFZISjVkR1Z6UTI5dWRtVnlkR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3gzUlVGQmNVVTdRVUZEY2tVc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN3eVEwRkJkME03UVVGRGVFTXNhMFJCUVN0RE8wRkJSUzlETEdsRlFVRTRSRHRCUVVVNVJEczdPMGRCUjBjN1FVRkRTRHRKUVVOSk96czdPMDlCU1VjN1NVRkRTU3hGUVVGRkxFTkJRVU1zUzBGQlVUdFJRVU5rTEVWQlFVVXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVFpeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUTNSRUxFTkJRVU03VVVGRlJDeEpRVUZKTEVsQlFVa3NRMEZCUXp0UlFVTlVMRWxCUVVrc1EwRkJRenRaUVVORUxFbEJRVWtzUjBGQlJ5eDFRa0ZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4RFFVRkRPMUZCUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTllMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEcxRVFVRnRSQ3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjBSaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEVsQlFVa3NNa05CUVc5Q0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTFSU3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFbEJRVWtzUTBGQlF5eE5RVUZqTzFGQlEzUkNMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4MVJFRkJkVVFzUTBGQlF5eERRVUZETzFGQlEycEdMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTERKRFFVRnZRaXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUlhSRUxIZERRVUYzUXp0UlFVTjRReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVOQlFYVkRMRU5CUVVNc1EwRkJRenRSUVVOcVJTeERRVUZETzFGQlJVUXNNa1ZCUVRKRk8xRkJRek5GTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRE8xbEJRM0pFTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTTdXVUZEY2tRc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6ZEVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhWRFFVRjFReXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSU3hEUVVGRE8xRkJSVVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NNa0pCUVZrc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGYmtRc1NVRkJTU3hIUVVGSExFTkJRVU03VVVGRFVpeEpRVUZKTEVOQlFVTTdXVUZEUkN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTTVRaXhEUVVGRE8xRkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOWUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSEZFUVVGeFJDeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJpeERRVUZETzFGQlJVUXNUVUZCVFN4RFFVRkpMRWRCUVVjc1EwRkJRenRKUVVOc1FpeERRVUZETzBOQlEwbzdRVUY0UkVRc2MwUkJkMFJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvY29udmVydGVycy9vYmplY3RUcnl0ZXNDb252ZXJ0ZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCIuL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIi4vdHJ5dGVOdW1iZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBidW5kbGVzLlxyXG4gKi9cclxuY2xhc3MgQnVuZGxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEJ1bmRsZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG5ldyB0cmFuc2FjdGlvbnMgdG8gdGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlTGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJhbnNhY3Rpb25zIHRvIGFkZC5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSBhZGRyZXNzIGZvciB0aGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpcnN0IG9mIHRoZSB0cmFuc2FjdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcgdG8gaW5jbHVkZSBpbiB0aGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIHRpbWVzdGFtcCBUaGUgdGltZXN0YW1wIGZvciB0aGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBhZGRUcmFuc2FjdGlvbnMoc2lnbmF0dXJlTWVzc2FnZUxlbmd0aCwgYWRkcmVzcywgdmFsdWUsIHRhZywgdGltZXN0YW1wKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWduYXR1cmVNZXNzYWdlTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMucHVzaCh0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21QYXJhbXModW5kZWZpbmVkLCBhZGRyZXNzLCBpID09PSAwID8gdmFsdWUgOiAwLCB0YWcsIHRpbWVzdGFtcCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhZywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgc2lnbmF0dXJlIGZyYWdtZW50cyB0byB0aGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgVGhlIHNpZ25hdHVyZSBmcmFnbWVudHMgdG8gYWRkIHRvIHRoZSBidW5kbGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBhZGRTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMpIHtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzIHNob3VsZCBiZSBhbiBhcnJheSBvZiBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zW2ldLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzW2ldIHx8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zW2ldLnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5FTVBUWTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNbaV0uYnJhbmNoVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5FTVBUWTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNbaV0uYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvbnNbaV0uYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25zW2ldLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uc1tpXS5ub25jZSA9IHRhZ18xLlRhZy5FTVBUWTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CdW5kbGUgPSBCdW5kbGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVluVnVaR3hsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdlluVnVaR3hsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlJTOURMR2xEUVVFNFFqdEJRVU01UWl4NVJVRkJjMFU3UVVGRGRFVXNLMEpCUVRSQ08wRkJRelZDTEN0RFFVRTBRenRCUVVNMVF5d3JRMEZCTkVNN1FVRkZOVU03TzBkQlJVYzdRVUZEU0R0SlFWVkpPenRQUVVWSE8wbEJRMGc3VVVGRFNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVNelFpeERRVUZETzBsQlJVUTdPenM3T3pzN1QwRlBSenRKUVVOSkxHVkJRV1VzUTBGQlF5eHpRa0ZCT0VJc1JVRkJSU3hQUVVGblFpeEZRVUZGTEV0QlFXRXNSVUZCUlN4SFFVRlJMRVZCUVVVc1UwRkJhVUk3VVVGREwwY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4elFrRkJjMElzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUXpsRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVU0xUXl4VFFVRlRMRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFRRVUZUTEVWQlF6RkRMRk5CUVZNc1JVRkJSU3hUUVVGVExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSVUZEY0VNc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNCR0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzTkVKQlFUUkNMRU5CUVVNc2VVSkJRWEZFTzFGQlEzSkdMRVZCUVVVc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMQ3RGUVVFclJTeERRVUZETEVOQlFVTTdVVUZEZWtjc1EwRkJRenRSUVVWRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU5vUkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEhkQ1FVRjNRaXhIUVVGSExFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzYlVSQlFYZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGFrZ3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhYUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlEyNUVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTndSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJReTlFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEZWtVc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl3MlFrRkJOa0lzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVONlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpORExFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwbzdRVUZ5UkVRc2QwSkJjVVJESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS9idW5kbGUudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNSQ3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVc1JVRkJSU3hKUVVGak8xRkJRelZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6bENMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETVVJc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPME5CUlVvN1FVRnFRMFFzYTBOQmFVTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIi4vYWRkcmVzc1wiKTtcclxuY29uc3QgYWRkcmVzc1NlY3VyaXR5XzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzU2VjdXJpdHlcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBpbnB1dHMuXHJcbiAqL1xyXG5jbGFzcyBJbnB1dCB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgaW5wdXQgZnJvbSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gc2VjdXJpdHkgVGhlIGFkZHJlc3Mgc2VjdXJpdHkuXHJcbiAgICAgKiBAcGFyYW0ga2V5SW5kZXggVGhlIGtleSBpbmRleC5cclxuICAgICAqIEBwYXJhbSBiYWxhbmNlIFRoZSBiYWxhbmNlIG9mIHRoZSBhZGRyZXNzLlxyXG4gICAgICogQHJldHVybiBOZXcgaW5zdGFuY2Ugb2YgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tUGFyYW1zKGFkZHJlc3MsIHNlY3VyaXR5LCBrZXlJbmRleCwgYmFsYW5jZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhIHZhbGlkIEFkZHJlc3Mgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHkpIHx8IHNlY3VyaXR5IDwgYWRkcmVzc1NlY3VyaXR5XzEuQWRkcmVzc1NlY3VyaXR5LmxvdyB8fCBzZWN1cml0eSA+IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzZWN1cml0eSBzaG91bGQgYmUgYSBudW1iZXIgYmV0d2VlbiAke2FkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5sb3d9IGFuZCAke2FkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5oaWdofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoa2V5SW5kZXgpIHx8IGtleUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGtleUluZGV4IHNob3VsZCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoYmFsYW5jZSkgfHwgYmFsYW5jZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBiYWxhbmNlIHNob3VsZCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG4gICAgICAgIGlucHV0LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIGlucHV0LnNlY3VyaXR5ID0gc2VjdXJpdHk7XHJcbiAgICAgICAgaW5wdXQua2V5SW5kZXggPSBrZXlJbmRleDtcclxuICAgICAgICBpbnB1dC5iYWxhbmNlID0gYmFsYW5jZTtcclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JbnB1dCA9IElucHV0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXBibkIxZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2RVTkJRVzlETzBGQlEzQkRMSFZFUVVGdlJEdEJRVVZ3UkRzN1IwRkZSenRCUVVOSU8wbEJhMEpKTEdWQlFXVTdTVUZEWmp0SlFVTkJMRU5CUVVNN1NVRkZSRHM3T3pzN096dFBRVTlITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGblFpeEZRVU5vUWl4UlFVRjVRaXhGUVVONlFpeFJRVUZuUWl4RlFVTm9RaXhQUVVGbE8xRkJRM0JETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2xDUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZWtNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRU5CUVRoRExFTkJRVU1zUTBGQlF6dFJRVU40UlN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NhVU5CUVdVc1EwRkJReXhIUVVGSExFbEJRVWtzVVVGQlVTeEhRVUZITEdsRFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42Unl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3lRMEZCTWtNc2FVTkJRV1VzUTBGQlF5eEhRVUZITEZGQlFWRXNhVU5CUVdVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzUklMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkRRVUZ6UXl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFJRVU12UkN4RFFVRkRPMUZCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTjRRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTjRRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN1EwRkRTanRCUVhwRVJDeHpRa0Y1UkVNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvaW5wdXQudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiLi9hZGRyZXNzXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cmFuc2ZlcnMuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2ZlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNmZXIgZnJvbSBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG1lc3NzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgdHJhbnNmZXIuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcuXHJcbiAgICAgKiBAcmV0dXJuIE5ldyBpbnN0YW5jZSBvZiBUcmFuc2Zlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoYWRkcmVzcywgdmFsdWUsIG1lc3NhZ2UsIHRhZykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhIHZhbGlkIEFkZHJlc3Mgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpIHx8IHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG1lc3NhZ2UpICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKG1lc3NhZ2UsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBtZXNzYWdlIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkodGFnKSAmJiAhb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0YWcsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0YWcgc2hvdWxkIGJlIGEgdmFsaWQgVGFnIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJhbnNmZXIgPSBuZXcgVHJhbnNmZXIoKTtcclxuICAgICAgICB0cmFuc2Zlci5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICB0cmFuc2Zlci52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRyYW5zZmVyLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRyYW5zZmVyLnRhZyA9IHRhZztcclxuICAgICAgICByZXR1cm4gdHJhbnNmZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2ZlciA9IFRyYW5zZmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5ObVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21GdWMyWmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zZFVOQlFXOURPMEZCUTNCRExDdENRVUUwUWp0QlFVTTFRaXh4UTBGQmEwTTdRVUZGYkVNN08wZEJSVWM3UVVGRFNEdEpRV3RDU1N4bFFVRmxPMGxCUTJZN1NVRkRRU3hEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlowSXNSVUZEYUVJc1MwRkJZU3hGUVVOaUxFOUJRV1VzUlVGRFppeEhRVUZSTzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxHbENRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRla01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FTkJRVGhETEVOQlFVTXNRMEZCUXp0UlFVTjRSU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHRRMEZCYlVNc1EwRkJReXhEUVVGRE8xRkJRemRFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxHVkJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhSU3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzFGQlEzWkZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNdlJDeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UTBGQmMwTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFTkJRVU03VVVGRlJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJRMmhETEZGQlFWRXNRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRE8xRkJRek5DTEZGQlFWRXNRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM1pDTEZGQlFWRXNRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRE8xRkJRek5DTEZGQlFWRXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRE8xRkJRMjVDTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkRjRUlzUTBGQlF6dERRVU5LTzBGQmVrUkVMRFJDUVhsRVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvdHJhbnNmZXIudHMiXSwic291cmNlUm9vdCI6IiJ9