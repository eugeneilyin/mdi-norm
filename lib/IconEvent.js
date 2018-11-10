"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconEventFilled = require("./IconEventFilled");

var _IconEventOutlined = require("./IconEventOutlined");

var _IconEventRounded = require("./IconEventRounded");

var _IconEventSharp = require("./IconEventSharp");

var _IconEventTwoTone = require("./IconEventTwoTone");

var IconEvent =
/*#__PURE__*/
function IconEvent(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconEventFilled.IconEventFilled, _IconEventOutlined.IconEventOutlined, _IconEventRounded.IconEventRounded, _IconEventSharp.IconEventSharp, _IconEventTwoTone.IconEventTwoTone);
};

exports.IconEvent = IconEvent;