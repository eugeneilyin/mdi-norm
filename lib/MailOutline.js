"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMailOutline = require("./FilledMailOutline");

var _OutlineMailOutline = require("./OutlineMailOutline");

var _RoundMailOutline = require("./RoundMailOutline");

var _SharpMailOutline = require("./SharpMailOutline");

var _TwoToneMailOutline = require("./TwoToneMailOutline");

var MailOutline =
/*#__PURE__*/
function MailOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMailOutline.FilledMailOutline, _OutlineMailOutline.OutlineMailOutline, _RoundMailOutline.RoundMailOutline, _SharpMailOutline.SharpMailOutline, _TwoToneMailOutline.TwoToneMailOutline);
};

exports.MailOutline = MailOutline;