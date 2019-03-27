"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhoneCallback =
/*#__PURE__*/
function TwoTonePhoneCallback(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6.54 5h-1.5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.24-.84-.39-1.71-.45-2.6zm8.66 13.21c1.2.41 2.48.67 3.8.75v-1.49c-.88-.07-1.75-.22-2.6-.45z"
  }), _react.default.createElement("path", {
    d: _fragments.lp
  }));
};

exports.TwoTonePhoneCallback = TwoTonePhoneCallback;