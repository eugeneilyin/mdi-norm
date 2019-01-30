"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWeb = require("./FilledWeb");

var _OutlineWeb = require("./OutlineWeb");

var _RoundWeb = require("./RoundWeb");

var _SharpWeb = require("./SharpWeb");

var _TwoToneWeb = require("./TwoToneWeb");

var Web =
/*#__PURE__*/
function Web(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWeb.FilledWeb, _OutlineWeb.OutlineWeb, _RoundWeb.RoundWeb, _SharpWeb.SharpWeb, _TwoToneWeb.TwoToneWeb);
};

exports.Web = Web;