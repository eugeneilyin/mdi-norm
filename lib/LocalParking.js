"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalParking = require("./FilledLocalParking");

var _OutlineLocalParking = require("./OutlineLocalParking");

var _RoundLocalParking = require("./RoundLocalParking");

var _SharpLocalParking = require("./SharpLocalParking");

var _TwoToneLocalParking = require("./TwoToneLocalParking");

var LocalParking =
/*#__PURE__*/
function LocalParking(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalParking.FilledLocalParking, _OutlineLocalParking.OutlineLocalParking, _RoundLocalParking.RoundLocalParking, _SharpLocalParking.SharpLocalParking, _TwoToneLocalParking.TwoToneLocalParking);
};

exports.LocalParking = LocalParking;