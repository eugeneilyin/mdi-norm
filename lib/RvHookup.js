"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRvHookup = require("./FilledRvHookup");

var _OutlineRvHookup = require("./OutlineRvHookup");

var _RoundRvHookup = require("./RoundRvHookup");

var _SharpRvHookup = require("./SharpRvHookup");

var _TwoToneRvHookup = require("./TwoToneRvHookup");

var RvHookup =
/*#__PURE__*/
function RvHookup(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRvHookup.FilledRvHookup, _OutlineRvHookup.OutlineRvHookup, _RoundRvHookup.RoundRvHookup, _SharpRvHookup.SharpRvHookup, _TwoToneRvHookup.TwoToneRvHookup);
};

exports.RvHookup = RvHookup;