"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPermDataSetting = require("./FilledPermDataSetting");

var _OutlinePermDataSetting = require("./OutlinePermDataSetting");

var _RoundPermDataSetting = require("./RoundPermDataSetting");

var _SharpPermDataSetting = require("./SharpPermDataSetting");

var _TwoTonePermDataSetting = require("./TwoTonePermDataSetting");

var PermDataSetting =
/*#__PURE__*/
function PermDataSetting(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPermDataSetting.FilledPermDataSetting, _OutlinePermDataSetting.OutlinePermDataSetting, _RoundPermDataSetting.RoundPermDataSetting, _SharpPermDataSetting.SharpPermDataSetting, _TwoTonePermDataSetting.TwoTonePermDataSetting);
};

exports.PermDataSetting = PermDataSetting;