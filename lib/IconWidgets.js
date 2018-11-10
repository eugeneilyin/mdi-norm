"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconWidgetsFilled = require("./IconWidgetsFilled");

var _IconWidgetsOutlined = require("./IconWidgetsOutlined");

var _IconWidgetsRounded = require("./IconWidgetsRounded");

var _IconWidgetsSharp = require("./IconWidgetsSharp");

var _IconWidgetsTwoTone = require("./IconWidgetsTwoTone");

var IconWidgets =
/*#__PURE__*/
function IconWidgets(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconWidgetsFilled.IconWidgetsFilled, _IconWidgetsOutlined.IconWidgetsOutlined, _IconWidgetsRounded.IconWidgetsRounded, _IconWidgetsSharp.IconWidgetsSharp, _IconWidgetsTwoTone.IconWidgetsTwoTone);
};

exports.IconWidgets = IconWidgets;