"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCheck = require("./FilledCheck");

var _OutlineCheck = require("./OutlineCheck");

var _RoundCheck = require("./RoundCheck");

var _SharpCheck = require("./SharpCheck");

var _TwoToneCheck = require("./TwoToneCheck");

var Check =
/*#__PURE__*/
function Check(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCheck.FilledCheck, _OutlineCheck.OutlineCheck, _RoundCheck.RoundCheck, _SharpCheck.SharpCheck, _TwoToneCheck.TwoToneCheck);
};

exports.Check = Check;