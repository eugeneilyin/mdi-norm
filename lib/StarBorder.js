"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStarBorder = require("./FilledStarBorder");

var _OutlineStarBorder = require("./OutlineStarBorder");

var _RoundStarBorder = require("./RoundStarBorder");

var _SharpStarBorder = require("./SharpStarBorder");

var _TwoToneStarBorder = require("./TwoToneStarBorder");

var StarBorder =
/*#__PURE__*/
function StarBorder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStarBorder.FilledStarBorder, _OutlineStarBorder.OutlineStarBorder, _RoundStarBorder.RoundStarBorder, _SharpStarBorder.SharpStarBorder, _TwoToneStarBorder.TwoToneStarBorder);
};

exports.StarBorder = StarBorder;