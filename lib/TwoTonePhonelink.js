"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhonelink =
/*#__PURE__*/
function TwoTonePhonelink(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M18 10h4v7h-4z"
  }), _react.default.createElement("path", {
    d: "M4 6h18V4H4" + _fragments.c + "v11H0v3h14v-3H4zm19 2" + _fragments.bek
  }));
};

exports.TwoTonePhonelink = TwoTonePhonelink;