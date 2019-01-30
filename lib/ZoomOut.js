"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledZoomOut = require("./FilledZoomOut");

var _OutlineZoomOut = require("./OutlineZoomOut");

var _RoundZoomOut = require("./RoundZoomOut");

var _SharpZoomOut = require("./SharpZoomOut");

var _TwoToneZoomOut = require("./TwoToneZoomOut");

var ZoomOut =
/*#__PURE__*/
function ZoomOut(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledZoomOut.FilledZoomOut, _OutlineZoomOut.OutlineZoomOut, _RoundZoomOut.RoundZoomOut, _SharpZoomOut.SharpZoomOut, _TwoToneZoomOut.TwoToneZoomOut);
};

exports.ZoomOut = ZoomOut;