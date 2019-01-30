"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWarning = require("./FilledWarning");

var _OutlineWarning = require("./OutlineWarning");

var _RoundWarning = require("./RoundWarning");

var _SharpWarning = require("./SharpWarning");

var _TwoToneWarning = require("./TwoToneWarning");

var Warning =
/*#__PURE__*/
function Warning(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWarning.FilledWarning, _OutlineWarning.OutlineWarning, _RoundWarning.RoundWarning, _SharpWarning.SharpWarning, _TwoToneWarning.TwoToneWarning);
};

exports.Warning = Warning;