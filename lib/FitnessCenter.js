"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFitnessCenter = require("./FilledFitnessCenter");

var _OutlineFitnessCenter = require("./OutlineFitnessCenter");

var _RoundFitnessCenter = require("./RoundFitnessCenter");

var _SharpFitnessCenter = require("./SharpFitnessCenter");

var _TwoToneFitnessCenter = require("./TwoToneFitnessCenter");

var FitnessCenter =
/*#__PURE__*/
function FitnessCenter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFitnessCenter.FilledFitnessCenter, _OutlineFitnessCenter.OutlineFitnessCenter, _RoundFitnessCenter.RoundFitnessCenter, _SharpFitnessCenter.SharpFitnessCenter, _TwoToneFitnessCenter.TwoToneFitnessCenter);
};

exports.FitnessCenter = FitnessCenter;