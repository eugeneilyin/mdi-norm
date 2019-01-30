"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFontDownload = require("./FilledFontDownload");

var _OutlineFontDownload = require("./OutlineFontDownload");

var _RoundFontDownload = require("./RoundFontDownload");

var _SharpFontDownload = require("./SharpFontDownload");

var _TwoToneFontDownload = require("./TwoToneFontDownload");

var FontDownload =
/*#__PURE__*/
function FontDownload(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFontDownload.FilledFontDownload, _OutlineFontDownload.OutlineFontDownload, _RoundFontDownload.RoundFontDownload, _SharpFontDownload.SharpFontDownload, _TwoToneFontDownload.TwoToneFontDownload);
};

exports.FontDownload = FontDownload;