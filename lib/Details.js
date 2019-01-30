"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDetails = require("./FilledDetails");

var _OutlineDetails = require("./OutlineDetails");

var _RoundDetails = require("./RoundDetails");

var _SharpDetails = require("./SharpDetails");

var _TwoToneDetails = require("./TwoToneDetails");

var Details =
/*#__PURE__*/
function Details(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDetails.FilledDetails, _OutlineDetails.OutlineDetails, _RoundDetails.RoundDetails, _SharpDetails.SharpDetails, _TwoToneDetails.TwoToneDetails);
};

exports.Details = Details;