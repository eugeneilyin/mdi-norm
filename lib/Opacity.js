"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledOpacity = require("./FilledOpacity");

var _OutlineOpacity = require("./OutlineOpacity");

var _RoundOpacity = require("./RoundOpacity");

var _SharpOpacity = require("./SharpOpacity");

var _TwoToneOpacity = require("./TwoToneOpacity");

var Opacity =
/*#__PURE__*/
function Opacity(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledOpacity.FilledOpacity, _OutlineOpacity.OutlineOpacity, _RoundOpacity.RoundOpacity, _SharpOpacity.SharpOpacity, _TwoToneOpacity.TwoToneOpacity);
};

exports.Opacity = Opacity;