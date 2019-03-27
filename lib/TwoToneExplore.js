"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneExplore =
/*#__PURE__*/
function TwoToneExplore(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m2.01 10.01L6.5 17.5l3.49-7.51L17.5 6.5z"
  }), _react.default.createElement("path", {
    d: _fragments.bbx
  }));
};

exports.TwoToneExplore = TwoToneExplore;