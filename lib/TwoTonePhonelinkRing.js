"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhonelinkRing =
/*#__PURE__*/
function TwoTonePhonelinkRing(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 4h10v16H4z"
  }), _react.default.createElement("path", {
    d: "M14 1H4" + _fragments.c + "v18" + _fragments.ey + "zm0 19H4V4h10zm6.1-12.3l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM17 10.8c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3z"
  }));
};

exports.TwoTonePhonelinkRing = TwoTonePhonelinkRing;