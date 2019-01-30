"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLooks = require("./FilledLooks");

var _OutlineLooks = require("./OutlineLooks");

var _RoundLooks = require("./RoundLooks");

var _SharpLooks = require("./SharpLooks");

var _TwoToneLooks = require("./TwoToneLooks");

var Looks =
/*#__PURE__*/
function Looks(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLooks.FilledLooks, _OutlineLooks.OutlineLooks, _RoundLooks.RoundLooks, _SharpLooks.SharpLooks, _TwoToneLooks.TwoToneLooks);
};

exports.Looks = Looks;