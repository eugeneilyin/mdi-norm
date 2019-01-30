"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWatch = require("./FilledWatch");

var _OutlineWatch = require("./OutlineWatch");

var _RoundWatch = require("./RoundWatch");

var _SharpWatch = require("./SharpWatch");

var _TwoToneWatch = require("./TwoToneWatch");

var Watch =
/*#__PURE__*/
function Watch(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWatch.FilledWatch, _OutlineWatch.OutlineWatch, _RoundWatch.RoundWatch, _SharpWatch.SharpWatch, _TwoToneWatch.TwoToneWatch);
};

exports.Watch = Watch;