"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconStoreFilled = require("./IconStoreFilled");

var _IconStoreOutlined = require("./IconStoreOutlined");

var _IconStoreRounded = require("./IconStoreRounded");

var _IconStoreSharp = require("./IconStoreSharp");

var _IconStoreTwoTone = require("./IconStoreTwoTone");

var IconStore =
/*#__PURE__*/
function IconStore(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconStoreFilled.IconStoreFilled, _IconStoreOutlined.IconStoreOutlined, _IconStoreRounded.IconStoreRounded, _IconStoreSharp.IconStoreSharp, _IconStoreTwoTone.IconStoreTwoTone);
};

exports.IconStore = IconStore;