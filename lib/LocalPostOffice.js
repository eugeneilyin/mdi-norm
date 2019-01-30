"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalPostOffice = require("./FilledLocalPostOffice");

var _OutlineLocalPostOffice = require("./OutlineLocalPostOffice");

var _RoundLocalPostOffice = require("./RoundLocalPostOffice");

var _SharpLocalPostOffice = require("./SharpLocalPostOffice");

var _TwoToneLocalPostOffice = require("./TwoToneLocalPostOffice");

var LocalPostOffice =
/*#__PURE__*/
function LocalPostOffice(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalPostOffice.FilledLocalPostOffice, _OutlineLocalPostOffice.OutlineLocalPostOffice, _RoundLocalPostOffice.RoundLocalPostOffice, _SharpLocalPostOffice.SharpLocalPostOffice, _TwoToneLocalPostOffice.TwoToneLocalPostOffice);
};

exports.LocalPostOffice = LocalPostOffice;