"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledEvent =
/*#__PURE__*/
function FilledEvent(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M17 12h-5v5h5zM16 1v2H8V1H6v2" + _fragments.mq + _fragments.a + "V5" + _fragments.b + "h-1V1zm3 18H5V8h14z"
  }));
};

exports.FilledEvent = FilledEvent;