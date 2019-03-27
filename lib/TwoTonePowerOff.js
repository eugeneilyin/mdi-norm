"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePowerOff =
/*#__PURE__*/
function TwoTonePowerOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12.12 9L16 12.88V9zm-.62 8.17V19h1v-1.83l1.07-1.06L8 10.54v3.11z"
  }), _react.default.createElement("path", {
    d: _fragments.vc
  }));
};

exports.TwoTonePowerOff = TwoTonePowerOff;