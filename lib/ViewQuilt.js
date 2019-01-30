"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewQuilt = require("./FilledViewQuilt");

var _OutlineViewQuilt = require("./OutlineViewQuilt");

var _RoundViewQuilt = require("./RoundViewQuilt");

var _SharpViewQuilt = require("./SharpViewQuilt");

var _TwoToneViewQuilt = require("./TwoToneViewQuilt");

var ViewQuilt =
/*#__PURE__*/
function ViewQuilt(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewQuilt.FilledViewQuilt, _OutlineViewQuilt.OutlineViewQuilt, _RoundViewQuilt.RoundViewQuilt, _SharpViewQuilt.SharpViewQuilt, _TwoToneViewQuilt.TwoToneViewQuilt);
};

exports.ViewQuilt = ViewQuilt;