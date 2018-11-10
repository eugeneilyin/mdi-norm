"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconDetailsFilled = require("./IconDetailsFilled");

var _IconDetailsOutlined = require("./IconDetailsOutlined");

var _IconDetailsRounded = require("./IconDetailsRounded");

var _IconDetailsSharp = require("./IconDetailsSharp");

var _IconDetailsTwoTone = require("./IconDetailsTwoTone");

var IconDetails =
/*#__PURE__*/
function IconDetails(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconDetailsFilled.IconDetailsFilled, _IconDetailsOutlined.IconDetailsOutlined, _IconDetailsRounded.IconDetailsRounded, _IconDetailsSharp.IconDetailsSharp, _IconDetailsTwoTone.IconDetailsTwoTone);
};

exports.IconDetails = IconDetails;