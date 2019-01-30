"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledToday = require("./FilledToday");

var _OutlineToday = require("./OutlineToday");

var _RoundToday = require("./RoundToday");

var _SharpToday = require("./SharpToday");

var _TwoToneToday = require("./TwoToneToday");

var Today =
/*#__PURE__*/
function Today(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledToday.FilledToday, _OutlineToday.OutlineToday, _RoundToday.RoundToday, _SharpToday.SharpToday, _TwoToneToday.TwoToneToday);
};

exports.Today = Today;