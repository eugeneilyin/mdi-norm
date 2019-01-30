"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFormatQuote = require("./FilledFormatQuote");

var _OutlineFormatQuote = require("./OutlineFormatQuote");

var _RoundFormatQuote = require("./RoundFormatQuote");

var _SharpFormatQuote = require("./SharpFormatQuote");

var _TwoToneFormatQuote = require("./TwoToneFormatQuote");

var FormatQuote =
/*#__PURE__*/
function FormatQuote(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFormatQuote.FilledFormatQuote, _OutlineFormatQuote.OutlineFormatQuote, _RoundFormatQuote.RoundFormatQuote, _SharpFormatQuote.SharpFormatQuote, _TwoToneFormatQuote.TwoToneFormatQuote);
};

exports.FormatQuote = FormatQuote;