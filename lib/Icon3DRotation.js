"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _Filled3DRotation = require("./Filled3DRotation");

var _Outline3DRotation = require("./Outline3DRotation");

var _Round3DRotation = require("./Round3DRotation");

var _Sharp3DRotation = require("./Sharp3DRotation");

var _TwoTone3DRotation = require("./TwoTone3DRotation");

var Icon3DRotation =
/*#__PURE__*/
function Icon3DRotation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _Filled3DRotation.Filled3DRotation, _Outline3DRotation.Outline3DRotation, _Round3DRotation.Round3DRotation, _Sharp3DRotation.Sharp3DRotation, _TwoTone3DRotation.TwoTone3DRotation);
};

exports.Icon3DRotation = Icon3DRotation;