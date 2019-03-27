"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledDirectionsRailway =
/*#__PURE__*/
function FilledDirectionsRailway(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 15.5" + _fragments.ri + "V5" + _fragments.rr + "s-8 .5-8 4zm8 1.5" + _fragments.bp + "m6-7H6V5h12z"
  }));
};

exports.FilledDirectionsRailway = FilledDirectionsRailway;