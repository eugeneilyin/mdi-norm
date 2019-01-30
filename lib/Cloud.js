"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCloud = require("./FilledCloud");

var _OutlineCloud = require("./OutlineCloud");

var _RoundCloud = require("./RoundCloud");

var _SharpCloud = require("./SharpCloud");

var _TwoToneCloud = require("./TwoToneCloud");

var Cloud =
/*#__PURE__*/
function Cloud(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCloud.FilledCloud, _OutlineCloud.OutlineCloud, _RoundCloud.RoundCloud, _SharpCloud.SharpCloud, _TwoToneCloud.TwoToneCloud);
};

exports.Cloud = Cloud;