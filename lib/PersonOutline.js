"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPersonOutline = require("./FilledPersonOutline");

var _OutlinePersonOutline = require("./OutlinePersonOutline");

var _RoundPersonOutline = require("./RoundPersonOutline");

var _SharpPersonOutline = require("./SharpPersonOutline");

var _TwoTonePersonOutline = require("./TwoTonePersonOutline");

var PersonOutline =
/*#__PURE__*/
function PersonOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPersonOutline.FilledPersonOutline, _OutlinePersonOutline.OutlinePersonOutline, _RoundPersonOutline.RoundPersonOutline, _SharpPersonOutline.SharpPersonOutline, _TwoTonePersonOutline.TwoTonePersonOutline);
};

exports.PersonOutline = PersonOutline;