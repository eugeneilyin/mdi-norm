"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledForum = require("./FilledForum");

var _OutlineForum = require("./OutlineForum");

var _RoundForum = require("./RoundForum");

var _SharpForum = require("./SharpForum");

var _TwoToneForum = require("./TwoToneForum");

var Forum =
/*#__PURE__*/
function Forum(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledForum.FilledForum, _OutlineForum.OutlineForum, _RoundForum.RoundForum, _SharpForum.SharpForum, _TwoToneForum.TwoToneForum);
};

exports.Forum = Forum;