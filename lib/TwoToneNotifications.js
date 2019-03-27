"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNotifications =
/*#__PURE__*/
function TwoToneNotifications(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bhl
  }), _react.default.createElement("path", {
    d: "M12 22" + _fragments.a + "h-4" + _fragments.d + "zm6-6" + _fragments.hc
  }));
};

exports.TwoToneNotifications = TwoToneNotifications;