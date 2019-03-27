"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPause =
/*#__PURE__*/
function RoundPause(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8 19" + _fragments.a + "V7" + _fragments.b + "s-2 .9-2 2v10" + _fragments.d + "zm6-12v10" + _fragments.d + "s2-.9 2-2V7" + _fragments.b + "s-2 .9-2 2z"
  }));
};

exports.RoundPause = RoundPause;