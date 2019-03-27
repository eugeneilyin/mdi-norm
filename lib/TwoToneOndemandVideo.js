"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneOndemandVideo =
/*#__PURE__*/
function TwoToneOndemandVideo(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 17h18V5H3zM9 7l7 4-7 4z"
  }), _react.default.createElement("path", {
    d: "M9 7v8l7-4zm12-4" + _fragments.bjw
  }));
};

exports.TwoToneOndemandVideo = TwoToneOndemandVideo;