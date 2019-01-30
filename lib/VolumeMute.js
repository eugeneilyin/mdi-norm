"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVolumeMute = require("./FilledVolumeMute");

var _OutlineVolumeMute = require("./OutlineVolumeMute");

var _RoundVolumeMute = require("./RoundVolumeMute");

var _SharpVolumeMute = require("./SharpVolumeMute");

var _TwoToneVolumeMute = require("./TwoToneVolumeMute");

var VolumeMute =
/*#__PURE__*/
function VolumeMute(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVolumeMute.FilledVolumeMute, _OutlineVolumeMute.OutlineVolumeMute, _RoundVolumeMute.RoundVolumeMute, _SharpVolumeMute.SharpVolumeMute, _TwoToneVolumeMute.TwoToneVolumeMute);
};

exports.VolumeMute = VolumeMute;