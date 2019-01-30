"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGroup = require("./FilledGroup");

var _OutlineGroup = require("./OutlineGroup");

var _RoundGroup = require("./RoundGroup");

var _SharpGroup = require("./SharpGroup");

var _TwoToneGroup = require("./TwoToneGroup");

var Group =
/*#__PURE__*/
function Group(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGroup.FilledGroup, _OutlineGroup.OutlineGroup, _RoundGroup.RoundGroup, _SharpGroup.SharpGroup, _TwoToneGroup.TwoToneGroup);
};

exports.Group = Group;