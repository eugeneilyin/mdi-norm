"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNotifications = require("./FilledNotifications");

var _OutlineNotifications = require("./OutlineNotifications");

var _RoundNotifications = require("./RoundNotifications");

var _SharpNotifications = require("./SharpNotifications");

var _TwoToneNotifications = require("./TwoToneNotifications");

var Notifications =
/*#__PURE__*/
function Notifications(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNotifications.FilledNotifications, _OutlineNotifications.OutlineNotifications, _RoundNotifications.RoundNotifications, _SharpNotifications.SharpNotifications, _TwoToneNotifications.TwoToneNotifications);
};

exports.Notifications = Notifications;