"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledHighQuality = require("./FilledHighQuality");

var _OutlineHighQuality = require("./OutlineHighQuality");

var _RoundHighQuality = require("./RoundHighQuality");

var _SharpHighQuality = require("./SharpHighQuality");

var _TwoToneHighQuality = require("./TwoToneHighQuality");

var HighQuality =
/*#__PURE__*/
function HighQuality(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledHighQuality.FilledHighQuality, _OutlineHighQuality.OutlineHighQuality, _RoundHighQuality.RoundHighQuality, _SharpHighQuality.SharpHighQuality, _TwoToneHighQuality.TwoToneHighQuality);
};

exports.HighQuality = HighQuality;