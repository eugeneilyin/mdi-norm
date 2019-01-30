"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTab = require("./FilledTab");

var _OutlineTab = require("./OutlineTab");

var _RoundTab = require("./RoundTab");

var _SharpTab = require("./SharpTab");

var _TwoToneTab = require("./TwoToneTab");

var Tab =
/*#__PURE__*/
function Tab(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTab.FilledTab, _OutlineTab.OutlineTab, _RoundTab.RoundTab, _SharpTab.SharpTab, _TwoToneTab.TwoToneTab);
};

exports.Tab = Tab;