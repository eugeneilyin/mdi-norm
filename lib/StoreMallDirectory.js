"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStoreMallDirectory = require("./FilledStoreMallDirectory");

var _OutlineStoreMallDirectory = require("./OutlineStoreMallDirectory");

var _RoundStoreMallDirectory = require("./RoundStoreMallDirectory");

var _SharpStoreMallDirectory = require("./SharpStoreMallDirectory");

var _TwoToneStoreMallDirectory = require("./TwoToneStoreMallDirectory");

var StoreMallDirectory =
/*#__PURE__*/
function StoreMallDirectory(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStoreMallDirectory.FilledStoreMallDirectory, _OutlineStoreMallDirectory.OutlineStoreMallDirectory, _RoundStoreMallDirectory.RoundStoreMallDirectory, _SharpStoreMallDirectory.SharpStoreMallDirectory, _TwoToneStoreMallDirectory.TwoToneStoreMallDirectory);
};

exports.StoreMallDirectory = StoreMallDirectory;