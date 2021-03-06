"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLock =
/*#__PURE__*/
function TwoToneLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 20h12V10H6zm6-7" + _fragments.cn + "z"
  }), _react.default.createElement("path", {
    d: _fragments.ju + "M9 6" + _fragments.nc + "s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3" + _fragments.dg
  }));
};

exports.TwoToneLock = TwoToneLock;