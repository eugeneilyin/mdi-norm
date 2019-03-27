"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledSpeakerGroup =
/*#__PURE__*/
function FilledSpeakerGroup(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.mf + "M14 3" + _fragments.bme + "m0 13.5" + _fragments.dd
  }), _react.default.createElement("circle", {
    cx: "14",
    cy: "12.5",
    r: "2.5"
  }), _react.default.createElement("path", {
    d: "M6 5H4v16" + _fragments.cr + "h10v-2H6z"
  }));
};

exports.FilledSpeakerGroup = FilledSpeakerGroup;