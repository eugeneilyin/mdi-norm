"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconFilterFilled = require("./IconFilterFilled");

var _IconFilterOutlined = require("./IconFilterOutlined");

var _IconFilterRounded = require("./IconFilterRounded");

var _IconFilterSharp = require("./IconFilterSharp");

var _IconFilterTwoTone = require("./IconFilterTwoTone");

var IconFilter =
/*#__PURE__*/
function IconFilter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconFilterFilled.IconFilterFilled, _IconFilterOutlined.IconFilterOutlined, _IconFilterRounded.IconFilterRounded, _IconFilterSharp.IconFilterSharp, _IconFilterTwoTone.IconFilterTwoTone);
};

exports.IconFilter = IconFilter;