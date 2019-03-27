"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDvr =
/*#__PURE__*/
function TwoToneDvr(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 17h18V5H3zm5-9h11v2H8zm0 4h11v2H8zM5 8h2v2H5zm0 4h2v2H5z"
  }), _react.default.createElement("path", {
    d: "M8 12h11v2H8zm0-4h11v2H8zm13-5" + _fragments.bjw + "M5 12h2v2H5zm0-4h2v2H5z"
  }));
};

exports.TwoToneDvr = TwoToneDvr;