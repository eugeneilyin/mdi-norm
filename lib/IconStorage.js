"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconStorageFilled = require("./IconStorageFilled");

var _IconStorageOutlined = require("./IconStorageOutlined");

var _IconStorageRounded = require("./IconStorageRounded");

var _IconStorageSharp = require("./IconStorageSharp");

var _IconStorageTwoTone = require("./IconStorageTwoTone");

var IconStorage =
/*#__PURE__*/
function IconStorage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconStorageFilled.IconStorageFilled, _IconStorageOutlined.IconStorageOutlined, _IconStorageRounded.IconStorageRounded, _IconStorageSharp.IconStorageSharp, _IconStorageTwoTone.IconStorageTwoTone);
};

exports.IconStorage = IconStorage;