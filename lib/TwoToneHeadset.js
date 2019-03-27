"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHeadset =
/*#__PURE__*/
function TwoToneHeadset(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 18h1" + _fragments.f + "v-3h-2zM5 17" + _fragments.j + "h1v-4H5z"
  }), _react.default.createElement("path", {
    d: "M12 1" + _fragments.lz + "h3" + _fragments.la + "v-7" + _fragments.bfd + "zM7 14v4H6" + _fragments.k + "v-3zm12 3" + _fragments.x + "h-1v-4h2z"
  }));
};

exports.TwoToneHeadset = TwoToneHeadset;