"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconCollectionsFilled = require("./IconCollectionsFilled");

var _IconCollectionsOutlined = require("./IconCollectionsOutlined");

var _IconCollectionsRounded = require("./IconCollectionsRounded");

var _IconCollectionsSharp = require("./IconCollectionsSharp");

var _IconCollectionsTwoTone = require("./IconCollectionsTwoTone");

var IconCollections =
/*#__PURE__*/
function IconCollections(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconCollectionsFilled.IconCollectionsFilled, _IconCollectionsOutlined.IconCollectionsOutlined, _IconCollectionsRounded.IconCollectionsRounded, _IconCollectionsSharp.IconCollectionsSharp, _IconCollectionsTwoTone.IconCollectionsTwoTone);
};

exports.IconCollections = IconCollections;