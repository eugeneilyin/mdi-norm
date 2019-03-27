"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVideoLabel =
/*#__PURE__*/
function TwoToneVideoLabel(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 5h18v11H3z"
  }), _react.default.createElement("path", {
    d: _fragments.cf + "m0 13H3V5h18z"
  }));
};

exports.TwoToneVideoLabel = TwoToneVideoLabel;