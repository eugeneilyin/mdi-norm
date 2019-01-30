"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPersonAdd = require("./FilledPersonAdd");

var _OutlinePersonAdd = require("./OutlinePersonAdd");

var _RoundPersonAdd = require("./RoundPersonAdd");

var _SharpPersonAdd = require("./SharpPersonAdd");

var _TwoTonePersonAdd = require("./TwoTonePersonAdd");

var PersonAdd =
/*#__PURE__*/
function PersonAdd(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPersonAdd.FilledPersonAdd, _OutlinePersonAdd.OutlinePersonAdd, _RoundPersonAdd.RoundPersonAdd, _SharpPersonAdd.SharpPersonAdd, _TwoTonePersonAdd.TwoTonePersonAdd);
};

exports.PersonAdd = PersonAdd;