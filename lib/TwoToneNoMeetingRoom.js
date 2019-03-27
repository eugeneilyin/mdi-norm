"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNoMeetingRoom =
/*#__PURE__*/
function TwoToneNoMeetingRoom(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 5H8.12L12 8.88zM7 19h5v-4.46l-5-5z"
  }), _react.default.createElement("path", {
    d: _fragments.bfy
  }));
};

exports.TwoToneNoMeetingRoom = TwoToneNoMeetingRoom;