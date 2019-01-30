"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCategory = require("./FilledCategory");

var _OutlineCategory = require("./OutlineCategory");

var _RoundCategory = require("./RoundCategory");

var _SharpCategory = require("./SharpCategory");

var _TwoToneCategory = require("./TwoToneCategory");

var Category =
/*#__PURE__*/
function Category(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCategory.FilledCategory, _OutlineCategory.OutlineCategory, _RoundCategory.RoundCategory, _SharpCategory.SharpCategory, _TwoToneCategory.TwoToneCategory);
};

exports.Category = Category;