"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledChangeHistory = require("./FilledChangeHistory");

var _OutlineChangeHistory = require("./OutlineChangeHistory");

var _RoundChangeHistory = require("./RoundChangeHistory");

var _SharpChangeHistory = require("./SharpChangeHistory");

var _TwoToneChangeHistory = require("./TwoToneChangeHistory");

var ChangeHistory =
/*#__PURE__*/
function ChangeHistory(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledChangeHistory.FilledChangeHistory, _OutlineChangeHistory.OutlineChangeHistory, _RoundChangeHistory.RoundChangeHistory, _SharpChangeHistory.SharpChangeHistory, _TwoToneChangeHistory.TwoToneChangeHistory);
};

exports.ChangeHistory = ChangeHistory;