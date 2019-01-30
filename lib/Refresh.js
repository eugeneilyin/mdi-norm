"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRefresh = require("./FilledRefresh");

var _OutlineRefresh = require("./OutlineRefresh");

var _RoundRefresh = require("./RoundRefresh");

var _SharpRefresh = require("./SharpRefresh");

var _TwoToneRefresh = require("./TwoToneRefresh");

var Refresh =
/*#__PURE__*/
function Refresh(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRefresh.FilledRefresh, _OutlineRefresh.OutlineRefresh, _RoundRefresh.RoundRefresh, _SharpRefresh.SharpRefresh, _TwoToneRefresh.TwoToneRefresh);
};

exports.Refresh = Refresh;