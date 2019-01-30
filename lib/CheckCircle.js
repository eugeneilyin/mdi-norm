"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCheckCircle = require("./FilledCheckCircle");

var _OutlineCheckCircle = require("./OutlineCheckCircle");

var _RoundCheckCircle = require("./RoundCheckCircle");

var _SharpCheckCircle = require("./SharpCheckCircle");

var _TwoToneCheckCircle = require("./TwoToneCheckCircle");

var CheckCircle =
/*#__PURE__*/
function CheckCircle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCheckCircle.FilledCheckCircle, _OutlineCheckCircle.OutlineCheckCircle, _RoundCheckCircle.RoundCheckCircle, _SharpCheckCircle.SharpCheckCircle, _TwoToneCheckCircle.TwoToneCheckCircle);
};

exports.CheckCircle = CheckCircle;