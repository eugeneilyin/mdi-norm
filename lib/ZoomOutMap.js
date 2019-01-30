"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledZoomOutMap = require("./FilledZoomOutMap");

var _OutlineZoomOutMap = require("./OutlineZoomOutMap");

var _RoundZoomOutMap = require("./RoundZoomOutMap");

var _SharpZoomOutMap = require("./SharpZoomOutMap");

var _TwoToneZoomOutMap = require("./TwoToneZoomOutMap");

var ZoomOutMap =
/*#__PURE__*/
function ZoomOutMap(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledZoomOutMap.FilledZoomOutMap, _OutlineZoomOutMap.OutlineZoomOutMap, _RoundZoomOutMap.RoundZoomOutMap, _SharpZoomOutMap.SharpZoomOutMap, _TwoToneZoomOutMap.TwoToneZoomOutMap);
};

exports.ZoomOutMap = ZoomOutMap;