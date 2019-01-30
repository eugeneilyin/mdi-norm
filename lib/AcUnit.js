"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAcUnit = require("./FilledAcUnit");

var _OutlineAcUnit = require("./OutlineAcUnit");

var _RoundAcUnit = require("./RoundAcUnit");

var _SharpAcUnit = require("./SharpAcUnit");

var _TwoToneAcUnit = require("./TwoToneAcUnit");

var AcUnit =
/*#__PURE__*/
function AcUnit(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAcUnit.FilledAcUnit, _OutlineAcUnit.OutlineAcUnit, _RoundAcUnit.RoundAcUnit, _SharpAcUnit.SharpAcUnit, _TwoToneAcUnit.TwoToneAcUnit);
};

exports.AcUnit = AcUnit;