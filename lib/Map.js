"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMap = require("./FilledMap");

var _OutlineMap = require("./OutlineMap");

var _RoundMap = require("./RoundMap");

var _SharpMap = require("./SharpMap");

var _TwoToneMap = require("./TwoToneMap");

var Map =
/*#__PURE__*/
function Map(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMap.FilledMap, _OutlineMap.OutlineMap, _RoundMap.RoundMap, _SharpMap.SharpMap, _TwoToneMap.TwoToneMap);
};

exports.Map = Map;