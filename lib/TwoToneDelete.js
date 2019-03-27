"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDelete =
/*#__PURE__*/
function TwoToneDelete(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 9h8v10H8z"
  }), _react.default.createElement("path", {
    d: "M15.5 4" + _fragments.wd + "V4z" + _fragments.we + "V7H6zM8 9h8v10H8z"
  }));
};

exports.TwoToneDelete = TwoToneDelete;