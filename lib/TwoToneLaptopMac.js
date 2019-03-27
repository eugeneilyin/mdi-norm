"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLaptopMac =
/*#__PURE__*/
function TwoToneLaptopMac(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 5h16v11H4z"
  }), _react.default.createElement("path", {
    d: _fragments.bkg + "M4 5h16v11H4zm8 14" + _fragments.bj
  }));
};

exports.TwoToneLaptopMac = TwoToneLaptopMac;