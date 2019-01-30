"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewArray = require("./FilledViewArray");

var _OutlineViewArray = require("./OutlineViewArray");

var _RoundViewArray = require("./RoundViewArray");

var _SharpViewArray = require("./SharpViewArray");

var _TwoToneViewArray = require("./TwoToneViewArray");

var ViewArray =
/*#__PURE__*/
function ViewArray(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewArray.FilledViewArray, _OutlineViewArray.OutlineViewArray, _RoundViewArray.RoundViewArray, _SharpViewArray.SharpViewArray, _TwoToneViewArray.TwoToneViewArray);
};

exports.ViewArray = ViewArray;