"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconViewColumnFilled = require("./IconViewColumnFilled");

var _IconViewColumnOutlined = require("./IconViewColumnOutlined");

var _IconViewColumnRounded = require("./IconViewColumnRounded");

var _IconViewColumnSharp = require("./IconViewColumnSharp");

var _IconViewColumnTwoTone = require("./IconViewColumnTwoTone");

var IconViewColumn =
/*#__PURE__*/
function IconViewColumn(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconViewColumnFilled.IconViewColumnFilled, _IconViewColumnOutlined.IconViewColumnOutlined, _IconViewColumnRounded.IconViewColumnRounded, _IconViewColumnSharp.IconViewColumnSharp, _IconViewColumnTwoTone.IconViewColumnTwoTone);
};

exports.IconViewColumn = IconViewColumn;