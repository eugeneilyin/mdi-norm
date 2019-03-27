"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledCategory =
/*#__PURE__*/
function FilledCategory(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 2l-5.5 9h11z"
  }), _react.default.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "4.5"
  }), _react.default.createElement("path", {
    d: "M3 13.5h8v8H3z"
  }));
};

exports.FilledCategory = FilledCategory;