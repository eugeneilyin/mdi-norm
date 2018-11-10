"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconViewModuleFilled = require("./IconViewModuleFilled");

var _IconViewModuleOutlined = require("./IconViewModuleOutlined");

var _IconViewModuleRounded = require("./IconViewModuleRounded");

var _IconViewModuleSharp = require("./IconViewModuleSharp");

var _IconViewModuleTwoTone = require("./IconViewModuleTwoTone");

var IconViewModule =
/*#__PURE__*/
function IconViewModule(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconViewModuleFilled.IconViewModuleFilled, _IconViewModuleOutlined.IconViewModuleOutlined, _IconViewModuleRounded.IconViewModuleRounded, _IconViewModuleSharp.IconViewModuleSharp, _IconViewModuleTwoTone.IconViewModuleTwoTone);
};

exports.IconViewModule = IconViewModule;