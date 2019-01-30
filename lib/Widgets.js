"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWidgets = require("./FilledWidgets");

var _OutlineWidgets = require("./OutlineWidgets");

var _RoundWidgets = require("./RoundWidgets");

var _SharpWidgets = require("./SharpWidgets");

var _TwoToneWidgets = require("./TwoToneWidgets");

var Widgets =
/*#__PURE__*/
function Widgets(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWidgets.FilledWidgets, _OutlineWidgets.OutlineWidgets, _RoundWidgets.RoundWidgets, _SharpWidgets.SharpWidgets, _TwoToneWidgets.TwoToneWidgets);
};

exports.Widgets = Widgets;