"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRoundedCorner = require("./FilledRoundedCorner");

var _OutlineRoundedCorner = require("./OutlineRoundedCorner");

var _RoundRoundedCorner = require("./RoundRoundedCorner");

var _SharpRoundedCorner = require("./SharpRoundedCorner");

var _TwoToneRoundedCorner = require("./TwoToneRoundedCorner");

var RoundedCorner =
/*#__PURE__*/
function RoundedCorner(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRoundedCorner.FilledRoundedCorner, _OutlineRoundedCorner.OutlineRoundedCorner, _RoundRoundedCorner.RoundRoundedCorner, _SharpRoundedCorner.SharpRoundedCorner, _TwoToneRoundedCorner.TwoToneRoundedCorner);
};

exports.RoundedCorner = RoundedCorner;