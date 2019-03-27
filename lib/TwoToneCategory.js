"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCategory =
/*#__PURE__*/
function TwoToneCategory(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z"
  }), _react.default.createElement("path", {
    d: "M12 2l-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13" + _fragments.tf + "m0 7" + _fragments.gh + "M11 13.5H3v8h8zm-2 6H5v-4h4z"
  }));
};

exports.TwoToneCategory = TwoToneCategory;