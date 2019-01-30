"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddLocation = require("./FilledAddLocation");

var _OutlineAddLocation = require("./OutlineAddLocation");

var _RoundAddLocation = require("./RoundAddLocation");

var _SharpAddLocation = require("./SharpAddLocation");

var _TwoToneAddLocation = require("./TwoToneAddLocation");

var AddLocation =
/*#__PURE__*/
function AddLocation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddLocation.FilledAddLocation, _OutlineAddLocation.OutlineAddLocation, _RoundAddLocation.RoundAddLocation, _SharpAddLocation.SharpAddLocation, _TwoToneAddLocation.TwoToneAddLocation);
};

exports.AddLocation = AddLocation;