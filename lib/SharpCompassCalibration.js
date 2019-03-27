"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpCompassCalibration =
/*#__PURE__*/
function SharpCompassCalibration(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "17",
    r: "4"
  }), _react.default.createElement("path", {
    d: "M12 3" + _fragments.blj
  }));
};

exports.SharpCompassCalibration = SharpCompassCalibration;