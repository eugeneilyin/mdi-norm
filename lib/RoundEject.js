"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundEject =
/*#__PURE__*/
function RoundEject(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M6 17h12" + _fragments.dk + "H6" + _fragments.el + "zm5.17-10.75l-4.8 7.2c-.45.66.03 1.55.83 1.55h9.6c.8 0 1.28-.89.83-1.55l-4.8-7.2c-.39-.6-1.27-.6-1.66 0z"
  }));
};

exports.RoundEject = RoundEject;