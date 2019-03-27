"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneWeb =
/*#__PURE__*/
function TwoToneWeb(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM16.5 9H20v9h-3.5z"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.sg + "V6" + _fragments.b + "zm-5.5 14H4v-3.5h10.5zm0-5.5H4V9h10.5zM20 18h-3.5V9H20z"
  }));
};

exports.TwoToneWeb = TwoToneWeb;