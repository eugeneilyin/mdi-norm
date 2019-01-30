"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLineStyle = require("./FilledLineStyle");

var _OutlineLineStyle = require("./OutlineLineStyle");

var _RoundLineStyle = require("./RoundLineStyle");

var _SharpLineStyle = require("./SharpLineStyle");

var _TwoToneLineStyle = require("./TwoToneLineStyle");

var LineStyle =
/*#__PURE__*/
function LineStyle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLineStyle.FilledLineStyle, _OutlineLineStyle.OutlineLineStyle, _RoundLineStyle.RoundLineStyle, _SharpLineStyle.SharpLineStyle, _TwoToneLineStyle.TwoToneLineStyle);
};

exports.LineStyle = LineStyle;