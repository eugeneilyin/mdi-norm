"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTabletAndroid =
/*#__PURE__*/
function TwoToneTabletAndroid(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4.75 3h14.5v16H4.75z"
  }), _react.default.createElement("path", {
    d: _fragments.bla + "m-4 22h-4v-1h4zm5.25-3H4.75V3h14.5z"
  }));
};

exports.TwoToneTabletAndroid = TwoToneTabletAndroid;