"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFace = require("./FilledFace");

var _OutlineFace = require("./OutlineFace");

var _RoundFace = require("./RoundFace");

var _SharpFace = require("./SharpFace");

var _TwoToneFace = require("./TwoToneFace");

var Face =
/*#__PURE__*/
function Face(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFace.FilledFace, _OutlineFace.OutlineFace, _RoundFace.RoundFace, _SharpFace.SharpFace, _TwoToneFace.TwoToneFace);
};

exports.Face = Face;