"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSwitchCamera =
/*#__PURE__*/
function TwoToneSwitchCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M14.12 4H9.88L8.05 6H4v12h16V6h-4.05zM15 15.5" + _fragments.bnc
  }), _react.default.createElement("path", {
    d: _fragments.nb + "m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zm-5-7H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z"
  }));
};

exports.TwoToneSwitchCamera = TwoToneSwitchCamera;