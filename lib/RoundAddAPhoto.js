"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundAddAPhoto =
/*#__PURE__*/
function RoundAddAPhoto(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M3 8" + _fragments.cc + "V6h2" + _fragments.o + "H5V2" + _fragments.bu + "v2H1" + _fragments.bf + "h2z"
  }), _react.default.createElement("circle", {
    cx: "13",
    cy: "14",
    r: "3"
  }), _react.default.createElement("path", {
    d: "M21 6h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65h-6.4c.17.3.28.63.28 1 0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2-.37 0-.7-.11-1-.28V20" + _fragments.jo + "V8" + _fragments.b + "zm-8 13" + _fragments.bv
  }));
};

exports.RoundAddAPhoto = RoundAddAPhoto;