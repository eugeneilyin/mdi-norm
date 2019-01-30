"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPeopleOutline = require("./FilledPeopleOutline");

var _OutlinePeopleOutline = require("./OutlinePeopleOutline");

var _RoundPeopleOutline = require("./RoundPeopleOutline");

var _SharpPeopleOutline = require("./SharpPeopleOutline");

var _TwoTonePeopleOutline = require("./TwoTonePeopleOutline");

var PeopleOutline =
/*#__PURE__*/
function PeopleOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPeopleOutline.FilledPeopleOutline, _OutlinePeopleOutline.OutlinePeopleOutline, _RoundPeopleOutline.RoundPeopleOutline, _SharpPeopleOutline.SharpPeopleOutline, _TwoTonePeopleOutline.TwoTonePeopleOutline);
};

exports.PeopleOutline = PeopleOutline;