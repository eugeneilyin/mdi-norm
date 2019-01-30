"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLink = require("./FilledLink");

var _OutlineLink = require("./OutlineLink");

var _RoundLink = require("./RoundLink");

var _SharpLink = require("./SharpLink");

var _TwoToneLink = require("./TwoToneLink");

var Link =
/*#__PURE__*/
function Link(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLink.FilledLink, _OutlineLink.OutlineLink, _RoundLink.RoundLink, _SharpLink.SharpLink, _TwoToneLink.TwoToneLink);
};

exports.Link = Link;