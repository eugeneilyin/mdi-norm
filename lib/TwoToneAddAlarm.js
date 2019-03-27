"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAddAlarm =
/*#__PURE__*/
function TwoToneAddAlarm(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 6" + _fragments.bkk + "m4 8" + _fragments.blq + "V9h2v3h3z"
  }), _react.default.createElement("path", {
    d: "M12 4" + _fragments.fc + "s4.02 9 9 9" + _fragments.bkf + "zm0 16" + _fragments.gi + "m1-11" + _fragments.bbd + "h-3zm9-3.28l-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53z"
  }));
};

exports.TwoToneAddAlarm = TwoToneAddAlarm;