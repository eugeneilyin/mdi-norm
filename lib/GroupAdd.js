"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGroupAdd = require("./FilledGroupAdd");

var _OutlineGroupAdd = require("./OutlineGroupAdd");

var _RoundGroupAdd = require("./RoundGroupAdd");

var _SharpGroupAdd = require("./SharpGroupAdd");

var _TwoToneGroupAdd = require("./TwoToneGroupAdd");

var GroupAdd =
/*#__PURE__*/
function GroupAdd(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGroupAdd.FilledGroupAdd, _OutlineGroupAdd.OutlineGroupAdd, _RoundGroupAdd.RoundGroupAdd, _SharpGroupAdd.SharpGroupAdd, _TwoToneGroupAdd.TwoToneGroupAdd);
};

exports.GroupAdd = GroupAdd;