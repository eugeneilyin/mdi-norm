"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalGroceryStore =
/*#__PURE__*/
function TwoToneLocalGroceryStore(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8.53 11h7.02l2.76-5H6.16z"
  }), _react.default.createElement("path", {
    d: _fragments.vh
  }));
};

exports.TwoToneLocalGroceryStore = TwoToneLocalGroceryStore;