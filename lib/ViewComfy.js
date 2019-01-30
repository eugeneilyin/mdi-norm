"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewComfy = require("./FilledViewComfy");

var _OutlineViewComfy = require("./OutlineViewComfy");

var _RoundViewComfy = require("./RoundViewComfy");

var _SharpViewComfy = require("./SharpViewComfy");

var _TwoToneViewComfy = require("./TwoToneViewComfy");

var ViewComfy =
/*#__PURE__*/
function ViewComfy(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewComfy.FilledViewComfy, _OutlineViewComfy.OutlineViewComfy, _RoundViewComfy.RoundViewComfy, _SharpViewComfy.SharpViewComfy, _TwoToneViewComfy.TwoToneViewComfy);
};

exports.ViewComfy = ViewComfy;