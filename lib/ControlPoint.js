"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledControlPoint = require("./FilledControlPoint");

var _OutlineControlPoint = require("./OutlineControlPoint");

var _RoundControlPoint = require("./RoundControlPoint");

var _SharpControlPoint = require("./SharpControlPoint");

var _TwoToneControlPoint = require("./TwoToneControlPoint");

var ControlPoint =
/*#__PURE__*/
function ControlPoint(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledControlPoint.FilledControlPoint, _OutlineControlPoint.OutlineControlPoint, _RoundControlPoint.RoundControlPoint, _SharpControlPoint.SharpControlPoint, _TwoToneControlPoint.TwoToneControlPoint);
};

exports.ControlPoint = ControlPoint;