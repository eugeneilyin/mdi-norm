"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconCategoryFilled = require("./IconCategoryFilled");

var _IconCategoryOutlined = require("./IconCategoryOutlined");

var _IconCategoryRounded = require("./IconCategoryRounded");

var _IconCategorySharp = require("./IconCategorySharp");

var _IconCategoryTwoTone = require("./IconCategoryTwoTone");

var IconCategory =
/*#__PURE__*/
function IconCategory(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconCategoryFilled.IconCategoryFilled, _IconCategoryOutlined.IconCategoryOutlined, _IconCategoryRounded.IconCategoryRounded, _IconCategorySharp.IconCategorySharp, _IconCategoryTwoTone.IconCategoryTwoTone);
};

exports.IconCategory = IconCategory;