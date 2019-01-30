"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccessibility = require("./FilledAccessibility");

var _OutlineAccessibility = require("./OutlineAccessibility");

var _RoundAccessibility = require("./RoundAccessibility");

var _SharpAccessibility = require("./SharpAccessibility");

var _TwoToneAccessibility = require("./TwoToneAccessibility");

var Accessibility =
/*#__PURE__*/
function Accessibility(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccessibility.FilledAccessibility, _OutlineAccessibility.OutlineAccessibility, _RoundAccessibility.RoundAccessibility, _SharpAccessibility.SharpAccessibility, _TwoToneAccessibility.TwoToneAccessibility);
};

exports.Accessibility = Accessibility;