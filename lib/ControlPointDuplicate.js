"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledControlPointDuplicate = require("./FilledControlPointDuplicate");

var _OutlineControlPointDuplicate = require("./OutlineControlPointDuplicate");

var _RoundControlPointDuplicate = require("./RoundControlPointDuplicate");

var _SharpControlPointDuplicate = require("./SharpControlPointDuplicate");

var _TwoToneControlPointDuplicate = require("./TwoToneControlPointDuplicate");

var ControlPointDuplicate =
/*#__PURE__*/
function ControlPointDuplicate(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledControlPointDuplicate.FilledControlPointDuplicate, _OutlineControlPointDuplicate.OutlineControlPointDuplicate, _RoundControlPointDuplicate.RoundControlPointDuplicate, _SharpControlPointDuplicate.SharpControlPointDuplicate, _TwoToneControlPointDuplicate.TwoToneControlPointDuplicate);
};

exports.ControlPointDuplicate = ControlPointDuplicate;