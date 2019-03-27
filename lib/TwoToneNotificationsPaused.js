"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNotificationsPaused =
/*#__PURE__*/
function TwoToneNotificationsPaused(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bhl + "m2.5 3.3l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5z"
  }), _react.default.createElement("path", {
    d: _fragments.bpq
  }));
};

exports.TwoToneNotificationsPaused = TwoToneNotificationsPaused;