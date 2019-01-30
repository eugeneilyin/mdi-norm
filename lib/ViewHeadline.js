"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewHeadline = require("./FilledViewHeadline");

var _OutlineViewHeadline = require("./OutlineViewHeadline");

var _RoundViewHeadline = require("./RoundViewHeadline");

var _SharpViewHeadline = require("./SharpViewHeadline");

var _TwoToneViewHeadline = require("./TwoToneViewHeadline");

var ViewHeadline =
/*#__PURE__*/
function ViewHeadline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewHeadline.FilledViewHeadline, _OutlineViewHeadline.OutlineViewHeadline, _RoundViewHeadline.RoundViewHeadline, _SharpViewHeadline.SharpViewHeadline, _TwoToneViewHeadline.TwoToneViewHeadline);
};

exports.ViewHeadline = ViewHeadline;