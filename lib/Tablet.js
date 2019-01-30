"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTablet = require("./FilledTablet");

var _OutlineTablet = require("./OutlineTablet");

var _RoundTablet = require("./RoundTablet");

var _SharpTablet = require("./SharpTablet");

var _TwoToneTablet = require("./TwoToneTablet");

var Tablet =
/*#__PURE__*/
function Tablet(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTablet.FilledTablet, _OutlineTablet.OutlineTablet, _RoundTablet.RoundTablet, _SharpTablet.SharpTablet, _TwoToneTablet.TwoToneTablet);
};

exports.Tablet = Tablet;