"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNotificationsActive =
/*#__PURE__*/
function TwoToneNotificationsActive(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.bhl
  }), _react.default.createElement("path", {
    d: "M12 22" + _fragments.a + "h-4" + _fragments.d + "zm6-11c0-3.07-1.63-5.64-4.5-6.32V4" + _fragments.ha + "v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 6" + _fragments.hb + _fragments.ib
  }));
};

exports.TwoToneNotificationsActive = TwoToneNotificationsActive;