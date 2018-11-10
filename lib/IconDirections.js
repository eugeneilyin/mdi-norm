"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconDirectionsFilled = require("./IconDirectionsFilled");

var _IconDirectionsOutlined = require("./IconDirectionsOutlined");

var _IconDirectionsRounded = require("./IconDirectionsRounded");

var _IconDirectionsSharp = require("./IconDirectionsSharp");

var _IconDirectionsTwoTone = require("./IconDirectionsTwoTone");

var IconDirections =
/*#__PURE__*/
function IconDirections(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconDirectionsFilled.IconDirectionsFilled, _IconDirectionsOutlined.IconDirectionsOutlined, _IconDirectionsRounded.IconDirectionsRounded, _IconDirectionsSharp.IconDirectionsSharp, _IconDirectionsTwoTone.IconDirectionsTwoTone);
};

exports.IconDirections = IconDirections;