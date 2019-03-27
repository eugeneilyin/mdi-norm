"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewList =
/*#__PURE__*/
function TwoToneViewList(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 11h2v2H5zm0 4h2v2H5zm0-8h2v2H5zm4 0h9v2H9zm0 8h9v2H9zm0-4h9v2H9z"
  }), _react.default.createElement("path", {
    d: "M3 5v14h17V5zm4 12H5v-2h2zm0-4H5v-2h2zm0-4H5V7h2zm11 8H9v-2h9zm0-4H9v-2h9zm0-4H9V7h9z"
  }));
};

exports.TwoToneViewList = TwoToneViewList;