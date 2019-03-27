"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundReorder =
/*#__PURE__*/
function RoundReorder(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 15h16" + _fragments.ro + "m0 4h16" + _fragments.ro + "m0-8h16" + _fragments.ro + "M3 6" + _fragments.wb
  }));
};

exports.RoundReorder = RoundReorder;