"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCastConnected =
/*#__PURE__*/
function TwoToneCastConnected(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17 9H5.95c2.83 1.17 5.15 3.3 6.56 6H17z"
  }), _react.default.createElement("path", {
    d: _fragments.hn + "m20-7" + _fragments.bhx + "M5 7v1.63c.32.1.63.24.95.37H17v6h-4.49c.15.29.29.58.42.88.16.36.31.74.44 1.12H19V7z"
  }));
};

exports.TwoToneCastConnected = TwoToneCastConnected;