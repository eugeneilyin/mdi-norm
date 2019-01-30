"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTraffic = require("./FilledTraffic");

var _OutlineTraffic = require("./OutlineTraffic");

var _RoundTraffic = require("./RoundTraffic");

var _SharpTraffic = require("./SharpTraffic");

var _TwoToneTraffic = require("./TwoToneTraffic");

var Traffic =
/*#__PURE__*/
function Traffic(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTraffic.FilledTraffic, _OutlineTraffic.OutlineTraffic, _RoundTraffic.RoundTraffic, _SharpTraffic.SharpTraffic, _TwoToneTraffic.TwoToneTraffic);
};

exports.Traffic = Traffic;