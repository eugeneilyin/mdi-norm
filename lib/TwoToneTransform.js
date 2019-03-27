"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTransform =
/*#__PURE__*/
function TwoToneTransform(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8 4h2L7 1 4 4h2v2H2v2h4v8" + _fragments.d + "h8v2h-2l3 3 3-3h-2v-2h4v-2H8zm10 10V8" + _fragments.b + "h-6v2h6v6z"
  }));
};

exports.TwoToneTransform = TwoToneTransform;