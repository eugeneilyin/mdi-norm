"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneExplicit =
/*#__PURE__*/
function TwoToneExplicit(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "M9 7h6v2h-4v2h4v2h-4v2h4v2H9z"
  }), _react.default.createElement("path", {
    d: "M21 19V5" + _fragments.b + "H5" + _fragments.be + "zm-2 0H5V5h14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"
  }));
};

exports.TwoToneExplicit = TwoToneExplicit;