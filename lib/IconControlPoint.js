"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconControlPointFilled = require("./IconControlPointFilled");

var _IconControlPointOutlined = require("./IconControlPointOutlined");

var _IconControlPointRounded = require("./IconControlPointRounded");

var _IconControlPointSharp = require("./IconControlPointSharp");

var _IconControlPointTwoTone = require("./IconControlPointTwoTone");

var IconControlPoint =
/*#__PURE__*/
function IconControlPoint(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconControlPointFilled.IconControlPointFilled, _IconControlPointOutlined.IconControlPointOutlined, _IconControlPointRounded.IconControlPointRounded, _IconControlPointSharp.IconControlPointSharp, _IconControlPointTwoTone.IconControlPointTwoTone);
};

exports.IconControlPoint = IconControlPoint;