"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewAgenda = require("./FilledViewAgenda");

var _OutlineViewAgenda = require("./OutlineViewAgenda");

var _RoundViewAgenda = require("./RoundViewAgenda");

var _SharpViewAgenda = require("./SharpViewAgenda");

var _TwoToneViewAgenda = require("./TwoToneViewAgenda");

var ViewAgenda =
/*#__PURE__*/
function ViewAgenda(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewAgenda.FilledViewAgenda, _OutlineViewAgenda.OutlineViewAgenda, _RoundViewAgenda.RoundViewAgenda, _SharpViewAgenda.SharpViewAgenda, _TwoToneViewAgenda.TwoToneViewAgenda);
};

exports.ViewAgenda = ViewAgenda;