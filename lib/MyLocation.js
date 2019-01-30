"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMyLocation = require("./FilledMyLocation");

var _OutlineMyLocation = require("./OutlineMyLocation");

var _RoundMyLocation = require("./RoundMyLocation");

var _SharpMyLocation = require("./SharpMyLocation");

var _TwoToneMyLocation = require("./TwoToneMyLocation");

var MyLocation =
/*#__PURE__*/
function MyLocation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMyLocation.FilledMyLocation, _OutlineMyLocation.OutlineMyLocation, _RoundMyLocation.RoundMyLocation, _SharpMyLocation.SharpMyLocation, _TwoToneMyLocation.TwoToneMyLocation);
};

exports.MyLocation = MyLocation;