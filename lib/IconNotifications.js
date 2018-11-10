"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconNotificationsFilled = require("./IconNotificationsFilled");

var _IconNotificationsOutlined = require("./IconNotificationsOutlined");

var _IconNotificationsRounded = require("./IconNotificationsRounded");

var _IconNotificationsSharp = require("./IconNotificationsSharp");

var _IconNotificationsTwoTone = require("./IconNotificationsTwoTone");

var IconNotifications =
/*#__PURE__*/
function IconNotifications(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconNotificationsFilled.IconNotificationsFilled, _IconNotificationsOutlined.IconNotificationsOutlined, _IconNotificationsRounded.IconNotificationsRounded, _IconNotificationsSharp.IconNotificationsSharp, _IconNotificationsTwoTone.IconNotificationsTwoTone);
};

exports.IconNotifications = IconNotifications;