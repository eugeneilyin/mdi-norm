"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneGpsFixed =
/*#__PURE__*/
function TwoToneGpsFixed(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "12",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M12 8" + _fragments.dr + "m8.94-3" + _fragments.mt
  }));
};

exports.TwoToneGpsFixed = TwoToneGpsFixed;