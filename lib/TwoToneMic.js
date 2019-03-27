"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMic =
/*#__PURE__*/
function TwoToneMic(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 12" + _fragments.f + "V5" + _fragments.bu + "v6" + _fragments.j + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bgk + "m6 6" + _fragments.xf
  }));
};

exports.TwoToneMic = TwoToneMic;