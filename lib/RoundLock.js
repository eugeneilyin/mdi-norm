"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundLock =
/*#__PURE__*/
function RoundLock(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.ju + "m-6 9" + _fragments.bp + "M9 8V6" + _fragments.nc + "s3 1.34 3 3v2z"
  }));
};

exports.RoundLock = RoundLock;