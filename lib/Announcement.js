"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAnnouncement = require("./FilledAnnouncement");

var _OutlineAnnouncement = require("./OutlineAnnouncement");

var _RoundAnnouncement = require("./RoundAnnouncement");

var _SharpAnnouncement = require("./SharpAnnouncement");

var _TwoToneAnnouncement = require("./TwoToneAnnouncement");

var Announcement =
/*#__PURE__*/
function Announcement(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAnnouncement.FilledAnnouncement, _OutlineAnnouncement.OutlineAnnouncement, _RoundAnnouncement.RoundAnnouncement, _SharpAnnouncement.SharpAnnouncement, _TwoToneAnnouncement.TwoToneAnnouncement);
};

exports.Announcement = Announcement;