"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRssFeed = require("./FilledRssFeed");

var _OutlineRssFeed = require("./OutlineRssFeed");

var _RoundRssFeed = require("./RoundRssFeed");

var _SharpRssFeed = require("./SharpRssFeed");

var _TwoToneRssFeed = require("./TwoToneRssFeed");

var RssFeed =
/*#__PURE__*/
function RssFeed(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRssFeed.FilledRssFeed, _OutlineRssFeed.OutlineRssFeed, _RoundRssFeed.RoundRssFeed, _SharpRssFeed.SharpRssFeed, _TwoToneRssFeed.TwoToneRssFeed);
};

exports.RssFeed = RssFeed;