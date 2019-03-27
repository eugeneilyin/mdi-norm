"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTvOff =
/*#__PURE__*/
function TwoToneTvOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h13.46l-12-12H3zm7.12-12L21 17.88V7z"
  }), _react.default.createElement("path", {
    d: "M21 7v10.88l1.85 1.85c.09-.23.15-.47.15-.73V7" + _fragments.cw + "h-7.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2zM2.41 2.13L1 3.54l1.53 1.53C1.65 5.28 1 6.06 1 7v12" + _fragments.d + "h15.46l1.99 1.99 1.26-1.26.15-.15zM3 19V7h1.46l12 12z"
  }));
};

exports.TwoToneTvOff = TwoToneTvOff;