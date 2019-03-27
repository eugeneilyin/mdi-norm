"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundEqualizer =
/*#__PURE__*/
function RoundEqualizer(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 20" + _fragments.sq + "s-2 .9-2 2v12" + _fragments.d + "zm-6 0" + _fragments.a + "v-4" + _fragments.b + "s-2 .9-2 2v4" + _fragments.d + "zm10-9v7" + _fragments.d + "s2-.9 2-2v-7" + _fragments.b + "s-2 .9-2 2z"
  }));
};

exports.RoundEqualizer = RoundEqualizer;