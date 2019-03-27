"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineRoom =
/*#__PURE__*/
function OutlineRoom(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13" + _fragments.hm + "zM7 9" + _fragments.uj + "s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  }));
};

exports.OutlineRoom = OutlineRoom;