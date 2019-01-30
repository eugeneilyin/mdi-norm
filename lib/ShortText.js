"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledShortText = require("./FilledShortText");

var _OutlineShortText = require("./OutlineShortText");

var _RoundShortText = require("./RoundShortText");

var _SharpShortText = require("./SharpShortText");

var _TwoToneShortText = require("./TwoToneShortText");

var ShortText =
/*#__PURE__*/
function ShortText(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledShortText.FilledShortText, _OutlineShortText.OutlineShortText, _RoundShortText.RoundShortText, _SharpShortText.SharpShortText, _TwoToneShortText.TwoToneShortText);
};

exports.ShortText = ShortText;