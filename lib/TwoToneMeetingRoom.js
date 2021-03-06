"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMeetingRoom =
/*#__PURE__*/
function TwoToneMeetingRoom(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 19h6V5H7zm3-8" + _fragments.fs
  }), _react.default.createElement("path", {
    d: "M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2zm-6 0H7V5h6zm-3-8" + _fragments.fs
  }));
};

exports.TwoToneMeetingRoom = TwoToneMeetingRoom;