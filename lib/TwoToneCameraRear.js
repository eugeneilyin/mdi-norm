"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCameraRear =
/*#__PURE__*/
function TwoToneCameraRear(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 16h10V2H7zm4.99-13" + _fragments.cm + "C14 6.1 13.1 7 12 7" + _fragments.mw + "s.89-2 1.99-2z"
  }), _react.default.createElement("path", {
    d: "M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm5-18" + _fragments.b + "H7C5.9 0 5 .9 5 2v14" + _fragments.d + "h10" + _fragments.a + "zm-2 14H7V2h10zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2z"
  }));
};

exports.TwoToneCameraRear = TwoToneCameraRear;