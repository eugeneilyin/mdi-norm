"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewModule = require("./FilledViewModule");

var _OutlineViewModule = require("./OutlineViewModule");

var _RoundViewModule = require("./RoundViewModule");

var _SharpViewModule = require("./SharpViewModule");

var _TwoToneViewModule = require("./TwoToneViewModule");

var ViewModule =
/*#__PURE__*/
function ViewModule(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewModule.FilledViewModule, _OutlineViewModule.OutlineViewModule, _RoundViewModule.RoundViewModule, _SharpViewModule.SharpViewModule, _TwoToneViewModule.TwoToneViewModule);
};

exports.ViewModule = ViewModule;