"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHighlight = require("./FilledHighlight");

var _OutlineHighlight = require("./OutlineHighlight");

var _RoundHighlight = require("./RoundHighlight");

var _SharpHighlight = require("./SharpHighlight");

var _TwoToneHighlight = require("./TwoToneHighlight");

var Highlight =
/*#__PURE__*/
function Highlight(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHighlight.FilledHighlight, _OutlineHighlight.OutlineHighlight, _RoundHighlight.RoundHighlight, _SharpHighlight.SharpHighlight, _TwoToneHighlight.TwoToneHighlight);
};

exports.Highlight = Highlight;