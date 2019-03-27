"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineLocalLaundryService =
/*#__PURE__*/
function OutlineLocalLaundryService(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.xl + "M18 20H6L5.99 4H18z"
  }), _react.default.createElement("circle", {
    cx: "8",
    cy: "6",
    r: "1"
  }), _react.default.createElement("circle", {
    cx: "11",
    cy: "6",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M12 19" + _fragments.bao + "m2.36-7.36c1.3 1.3 1.3 3.42 0 4.72-1.3 1.3-3.42 1.3-4.72 0z"
  }));
};

exports.OutlineLocalLaundryService = OutlineLocalLaundryService;