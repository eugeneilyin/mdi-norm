"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpSpeakerGroup =
/*#__PURE__*/
function SharpSpeakerGroup(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 1H8v17.99h12zm-6 2" + _fragments.bme + "m0 13.5" + _fragments.dd
  }), _react.default.createElement("circle", {
    cx: "14",
    cy: "12.5",
    r: "2.5"
  }), _react.default.createElement("path", {
    d: "M6 5H4v18h12v-2H6z"
  }));
};

exports.SharpSpeakerGroup = SharpSpeakerGroup;