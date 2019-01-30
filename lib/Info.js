"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledInfo = require("./FilledInfo");

var _OutlineInfo = require("./OutlineInfo");

var _RoundInfo = require("./RoundInfo");

var _SharpInfo = require("./SharpInfo");

var _TwoToneInfo = require("./TwoToneInfo");

var Info =
/*#__PURE__*/
function Info(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledInfo.FilledInfo, _OutlineInfo.OutlineInfo, _RoundInfo.RoundInfo, _SharpInfo.SharpInfo, _TwoToneInfo.TwoToneInfo);
};

exports.Info = Info;