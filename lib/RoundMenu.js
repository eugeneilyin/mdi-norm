"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundMenu =
/*#__PURE__*/
function RoundMenu(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 18h16" + _fragments.ro + "m0-5h16" + _fragments.ro + "M3 7" + _fragments.wb
  }));
};

exports.RoundMenu = RoundMenu;