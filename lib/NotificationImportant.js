"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledNotificationImportant = require("./FilledNotificationImportant");

var _OutlineNotificationImportant = require("./OutlineNotificationImportant");

var _RoundNotificationImportant = require("./RoundNotificationImportant");

var _SharpNotificationImportant = require("./SharpNotificationImportant");

var _TwoToneNotificationImportant = require("./TwoToneNotificationImportant");

var NotificationImportant =
/*#__PURE__*/
function NotificationImportant(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledNotificationImportant.FilledNotificationImportant, _OutlineNotificationImportant.OutlineNotificationImportant, _RoundNotificationImportant.RoundNotificationImportant, _SharpNotificationImportant.SharpNotificationImportant, _TwoToneNotificationImportant.TwoToneNotificationImportant);
};

exports.NotificationImportant = NotificationImportant;