"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStyle = require("./FilledStyle");

var _OutlineStyle = require("./OutlineStyle");

var _RoundStyle = require("./RoundStyle");

var _SharpStyle = require("./SharpStyle");

var _TwoToneStyle = require("./TwoToneStyle");

var Style =
/*#__PURE__*/
function Style(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStyle.FilledStyle, _OutlineStyle.OutlineStyle, _RoundStyle.RoundStyle, _SharpStyle.SharpStyle, _TwoToneStyle.TwoToneStyle);
};

exports.Style = Style;