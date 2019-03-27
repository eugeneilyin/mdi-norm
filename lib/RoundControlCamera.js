"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundControlCamera =
/*#__PURE__*/
function RoundControlCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4.65 9.35L2.7 11.3" + _fragments.dc + "l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0zm12.93 0c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95" + _fragments.fo + "l-1.95-1.95c-.49-.48-1.29-.48-1.77.01zM12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0-.49.49-.49 1.28 0 1.77l1.95 1.95" + _fragments.du + "l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7" + _fragments.cg + "L9.35 4.65c-.49.49-.49 1.29 0 1.77z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
};

exports.RoundControlCamera = RoundControlCamera;