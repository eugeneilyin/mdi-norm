"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineMoney =
/*#__PURE__*/
function OutlineMoney(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.wn + "M5 8h2v8H5zM2 4v16h20V4zm18 14H4V6h16z"
  }));
};

exports.OutlineMoney = OutlineMoney;