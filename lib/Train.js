"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTrain = require("./FilledTrain");

var _OutlineTrain = require("./OutlineTrain");

var _RoundTrain = require("./RoundTrain");

var _SharpTrain = require("./SharpTrain");

var _TwoToneTrain = require("./TwoToneTrain");

var Train =
/*#__PURE__*/
function Train(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTrain.FilledTrain, _OutlineTrain.OutlineTrain, _RoundTrain.RoundTrain, _SharpTrain.SharpTrain, _TwoToneTrain.TwoToneTrain);
};

exports.Train = Train;