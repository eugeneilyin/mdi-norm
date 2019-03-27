"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpTab =
/*#__PURE__*/
function SharpTab(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 3H3" + _fragments.bd + "h18zm0 16H3V5h10v4h8zm2-16H1v18h22zm-2 16H3V5h10h8z"
  }));
};

exports.SharpTab = SharpTab;