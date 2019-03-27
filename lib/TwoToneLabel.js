"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLabel =
/*#__PURE__*/
function TwoToneLabel(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M16 7H5v10h11l3.55-5z"
  }), _react.default.createElement("path", {
    d: _fragments.ml + "L22 12zM16 17H5V7h11l3.55 5z"
  }));
};

exports.TwoToneLabel = TwoToneLabel;