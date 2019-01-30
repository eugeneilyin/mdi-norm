"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSystemUpdate = require("./FilledSystemUpdate");

var _OutlineSystemUpdate = require("./OutlineSystemUpdate");

var _RoundSystemUpdate = require("./RoundSystemUpdate");

var _SharpSystemUpdate = require("./SharpSystemUpdate");

var _TwoToneSystemUpdate = require("./TwoToneSystemUpdate");

var SystemUpdate =
/*#__PURE__*/
function SystemUpdate(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSystemUpdate.FilledSystemUpdate, _OutlineSystemUpdate.OutlineSystemUpdate, _RoundSystemUpdate.RoundSystemUpdate, _SharpSystemUpdate.SharpSystemUpdate, _TwoToneSystemUpdate.TwoToneSystemUpdate);
};

exports.SystemUpdate = SystemUpdate;