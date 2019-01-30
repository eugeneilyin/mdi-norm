"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHistory = require("./FilledHistory");

var _OutlineHistory = require("./OutlineHistory");

var _RoundHistory = require("./RoundHistory");

var _SharpHistory = require("./SharpHistory");

var _TwoToneHistory = require("./TwoToneHistory");

var History =
/*#__PURE__*/
function History(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHistory.FilledHistory, _OutlineHistory.OutlineHistory, _RoundHistory.RoundHistory, _SharpHistory.SharpHistory, _TwoToneHistory.TwoToneHistory);
};

exports.History = History;