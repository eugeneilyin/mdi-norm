"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPermIdentity = require("./FilledPermIdentity");

var _OutlinePermIdentity = require("./OutlinePermIdentity");

var _RoundPermIdentity = require("./RoundPermIdentity");

var _SharpPermIdentity = require("./SharpPermIdentity");

var _TwoTonePermIdentity = require("./TwoTonePermIdentity");

var PermIdentity =
/*#__PURE__*/
function PermIdentity(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPermIdentity.FilledPermIdentity, _OutlinePermIdentity.OutlinePermIdentity, _RoundPermIdentity.RoundPermIdentity, _SharpPermIdentity.SharpPermIdentity, _TwoTonePermIdentity.TwoTonePermIdentity);
};

exports.PermIdentity = PermIdentity;