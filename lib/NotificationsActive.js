"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNotificationsActive = require("./FilledNotificationsActive");

var _OutlineNotificationsActive = require("./OutlineNotificationsActive");

var _RoundNotificationsActive = require("./RoundNotificationsActive");

var _SharpNotificationsActive = require("./SharpNotificationsActive");

var _TwoToneNotificationsActive = require("./TwoToneNotificationsActive");

var NotificationsActive =
/*#__PURE__*/
function NotificationsActive(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNotificationsActive.FilledNotificationsActive, _OutlineNotificationsActive.OutlineNotificationsActive, _RoundNotificationsActive.RoundNotificationsActive, _SharpNotificationsActive.SharpNotificationsActive, _TwoToneNotificationsActive.TwoToneNotificationsActive);
};

exports.NotificationsActive = NotificationsActive;