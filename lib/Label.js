"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLabel = require("./FilledLabel");

var _OutlineLabel = require("./OutlineLabel");

var _RoundLabel = require("./RoundLabel");

var _SharpLabel = require("./SharpLabel");

var _TwoToneLabel = require("./TwoToneLabel");

var Label =
/*#__PURE__*/
function Label(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLabel.FilledLabel, _OutlineLabel.OutlineLabel, _RoundLabel.RoundLabel, _SharpLabel.SharpLabel, _TwoToneLabel.TwoToneLabel);
};

exports.Label = Label;