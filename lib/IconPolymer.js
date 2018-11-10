"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconPolymerFilled = require("./IconPolymerFilled");

var _IconPolymerOutlined = require("./IconPolymerOutlined");

var _IconPolymerRounded = require("./IconPolymerRounded");

var _IconPolymerSharp = require("./IconPolymerSharp");

var _IconPolymerTwoTone = require("./IconPolymerTwoTone");

var IconPolymer =
/*#__PURE__*/
function IconPolymer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconPolymerFilled.IconPolymerFilled, _IconPolymerOutlined.IconPolymerOutlined, _IconPolymerRounded.IconPolymerRounded, _IconPolymerSharp.IconPolymerSharp, _IconPolymerTwoTone.IconPolymerTwoTone);
};

exports.IconPolymer = IconPolymer;