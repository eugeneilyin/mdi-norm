"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconPoolFilled = require("./IconPoolFilled");

var _IconPoolOutlined = require("./IconPoolOutlined");

var _IconPoolRounded = require("./IconPoolRounded");

var _IconPoolSharp = require("./IconPoolSharp");

var _IconPoolTwoTone = require("./IconPoolTwoTone");

var IconPool =
/*#__PURE__*/
function IconPool(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconPoolFilled.IconPoolFilled, _IconPoolOutlined.IconPoolOutlined, _IconPoolRounded.IconPoolRounded, _IconPoolSharp.IconPoolSharp, _IconPoolTwoTone.IconPoolTwoTone);
};

exports.IconPool = IconPool;