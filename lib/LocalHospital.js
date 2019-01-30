"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalHospital = require("./FilledLocalHospital");

var _OutlineLocalHospital = require("./OutlineLocalHospital");

var _RoundLocalHospital = require("./RoundLocalHospital");

var _SharpLocalHospital = require("./SharpLocalHospital");

var _TwoToneLocalHospital = require("./TwoToneLocalHospital");

var LocalHospital =
/*#__PURE__*/
function LocalHospital(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalHospital.FilledLocalHospital, _OutlineLocalHospital.OutlineLocalHospital, _RoundLocalHospital.RoundLocalHospital, _SharpLocalHospital.SharpLocalHospital, _TwoToneLocalHospital.TwoToneLocalHospital);
};

exports.LocalHospital = LocalHospital;