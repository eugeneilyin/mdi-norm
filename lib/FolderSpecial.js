"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFolderSpecial = require("./FilledFolderSpecial");

var _OutlineFolderSpecial = require("./OutlineFolderSpecial");

var _RoundFolderSpecial = require("./RoundFolderSpecial");

var _SharpFolderSpecial = require("./SharpFolderSpecial");

var _TwoToneFolderSpecial = require("./TwoToneFolderSpecial");

var FolderSpecial =
/*#__PURE__*/
function FolderSpecial(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFolderSpecial.FilledFolderSpecial, _OutlineFolderSpecial.OutlineFolderSpecial, _RoundFolderSpecial.RoundFolderSpecial, _SharpFolderSpecial.SharpFolderSpecial, _TwoToneFolderSpecial.TwoToneFolderSpecial);
};

exports.FolderSpecial = FolderSpecial;