"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTitle = require("./FilledTitle");

var _OutlineTitle = require("./OutlineTitle");

var _RoundTitle = require("./RoundTitle");

var _SharpTitle = require("./SharpTitle");

var _TwoToneTitle = require("./TwoToneTitle");

var Title =
/*#__PURE__*/
function Title(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTitle.FilledTitle, _OutlineTitle.OutlineTitle, _RoundTitle.RoundTitle, _SharpTitle.SharpTitle, _TwoToneTitle.TwoToneTitle);
};

exports.Title = Title;