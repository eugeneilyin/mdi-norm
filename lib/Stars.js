"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStars = require("./FilledStars");

var _OutlineStars = require("./OutlineStars");

var _RoundStars = require("./RoundStars");

var _SharpStars = require("./SharpStars");

var _TwoToneStars = require("./TwoToneStars");

var Stars =
/*#__PURE__*/
function Stars(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStars.FilledStars, _OutlineStars.OutlineStars, _RoundStars.RoundStars, _SharpStars.SharpStars, _TwoToneStars.TwoToneStars);
};

exports.Stars = Stars;