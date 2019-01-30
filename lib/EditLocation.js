"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEditLocation = require("./FilledEditLocation");

var _OutlineEditLocation = require("./OutlineEditLocation");

var _RoundEditLocation = require("./RoundEditLocation");

var _SharpEditLocation = require("./SharpEditLocation");

var _TwoToneEditLocation = require("./TwoToneEditLocation");

var EditLocation =
/*#__PURE__*/
function EditLocation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEditLocation.FilledEditLocation, _OutlineEditLocation.OutlineEditLocation, _RoundEditLocation.RoundEditLocation, _SharpEditLocation.SharpEditLocation, _TwoToneEditLocation.TwoToneEditLocation);
};

exports.EditLocation = EditLocation;