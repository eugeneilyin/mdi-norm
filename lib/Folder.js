"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFolder = require("./FilledFolder");

var _OutlineFolder = require("./OutlineFolder");

var _RoundFolder = require("./RoundFolder");

var _SharpFolder = require("./SharpFolder");

var _TwoToneFolder = require("./TwoToneFolder");

var Folder =
/*#__PURE__*/
function Folder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFolder.FilledFolder, _OutlineFolder.OutlineFolder, _RoundFolder.RoundFolder, _SharpFolder.SharpFolder, _TwoToneFolder.TwoToneFolder);
};

exports.Folder = Folder;