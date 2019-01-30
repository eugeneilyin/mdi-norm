"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledArchive = require("./FilledArchive");

var _OutlineArchive = require("./OutlineArchive");

var _RoundArchive = require("./RoundArchive");

var _SharpArchive = require("./SharpArchive");

var _TwoToneArchive = require("./TwoToneArchive");

var Archive =
/*#__PURE__*/
function Archive(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledArchive.FilledArchive, _OutlineArchive.OutlineArchive, _RoundArchive.RoundArchive, _SharpArchive.SharpArchive, _TwoToneArchive.TwoToneArchive);
};

exports.Archive = Archive;