"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconLayersFilled = require("./IconLayersFilled");

var _IconLayersOutlined = require("./IconLayersOutlined");

var _IconLayersRounded = require("./IconLayersRounded");

var _IconLayersSharp = require("./IconLayersSharp");

var _IconLayersTwoTone = require("./IconLayersTwoTone");

var IconLayers =
/*#__PURE__*/
function IconLayers(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconLayersFilled.IconLayersFilled, _IconLayersOutlined.IconLayersOutlined, _IconLayersRounded.IconLayersRounded, _IconLayersSharp.IconLayersSharp, _IconLayersTwoTone.IconLayersTwoTone);
};

exports.IconLayers = IconLayers;