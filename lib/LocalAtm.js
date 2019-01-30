"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalAtm = require("./FilledLocalAtm");

var _OutlineLocalAtm = require("./OutlineLocalAtm");

var _RoundLocalAtm = require("./RoundLocalAtm");

var _SharpLocalAtm = require("./SharpLocalAtm");

var _TwoToneLocalAtm = require("./TwoToneLocalAtm");

var LocalAtm =
/*#__PURE__*/
function LocalAtm(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalAtm.FilledLocalAtm, _OutlineLocalAtm.OutlineLocalAtm, _RoundLocalAtm.RoundLocalAtm, _SharpLocalAtm.SharpLocalAtm, _TwoToneLocalAtm.TwoToneLocalAtm);
};

exports.LocalAtm = LocalAtm;