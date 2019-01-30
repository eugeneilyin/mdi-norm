"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledArrowDropDown = require("./FilledArrowDropDown");

var _OutlineArrowDropDown = require("./OutlineArrowDropDown");

var _RoundArrowDropDown = require("./RoundArrowDropDown");

var _SharpArrowDropDown = require("./SharpArrowDropDown");

var _TwoToneArrowDropDown = require("./TwoToneArrowDropDown");

var ArrowDropDown =
/*#__PURE__*/
function ArrowDropDown(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledArrowDropDown.FilledArrowDropDown, _OutlineArrowDropDown.OutlineArrowDropDown, _RoundArrowDropDown.RoundArrowDropDown, _SharpArrowDropDown.SharpArrowDropDown, _TwoToneArrowDropDown.TwoToneArrowDropDown);
};

exports.ArrowDropDown = ArrowDropDown;