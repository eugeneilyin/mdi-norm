"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHdrWeak = require("./FilledHdrWeak");

var _OutlineHdrWeak = require("./OutlineHdrWeak");

var _RoundHdrWeak = require("./RoundHdrWeak");

var _SharpHdrWeak = require("./SharpHdrWeak");

var _TwoToneHdrWeak = require("./TwoToneHdrWeak");

var HdrWeak =
/*#__PURE__*/
function HdrWeak(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHdrWeak.FilledHdrWeak, _OutlineHdrWeak.OutlineHdrWeak, _RoundHdrWeak.RoundHdrWeak, _SharpHdrWeak.SharpHdrWeak, _TwoToneHdrWeak.TwoToneHdrWeak);
};

exports.HdrWeak = HdrWeak;