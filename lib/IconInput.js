"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconInputFilled = require("./IconInputFilled");

var _IconInputOutlined = require("./IconInputOutlined");

var _IconInputRounded = require("./IconInputRounded");

var _IconInputSharp = require("./IconInputSharp");

var _IconInputTwoTone = require("./IconInputTwoTone");

var IconInput =
/*#__PURE__*/
function IconInput(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconInputFilled.IconInputFilled, _IconInputOutlined.IconInputOutlined, _IconInputRounded.IconInputRounded, _IconInputSharp.IconInputSharp, _IconInputTwoTone.IconInputTwoTone);
};

exports.IconInput = IconInput;