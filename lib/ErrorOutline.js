"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledErrorOutline = require("./FilledErrorOutline");

var _OutlineErrorOutline = require("./OutlineErrorOutline");

var _RoundErrorOutline = require("./RoundErrorOutline");

var _SharpErrorOutline = require("./SharpErrorOutline");

var _TwoToneErrorOutline = require("./TwoToneErrorOutline");

var ErrorOutline =
/*#__PURE__*/
function ErrorOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledErrorOutline.FilledErrorOutline, _OutlineErrorOutline.OutlineErrorOutline, _RoundErrorOutline.RoundErrorOutline, _SharpErrorOutline.SharpErrorOutline, _TwoToneErrorOutline.TwoToneErrorOutline);
};

exports.ErrorOutline = ErrorOutline;