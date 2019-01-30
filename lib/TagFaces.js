"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTagFaces = require("./FilledTagFaces");

var _OutlineTagFaces = require("./OutlineTagFaces");

var _RoundTagFaces = require("./RoundTagFaces");

var _SharpTagFaces = require("./SharpTagFaces");

var _TwoToneTagFaces = require("./TwoToneTagFaces");

var TagFaces =
/*#__PURE__*/
function TagFaces(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTagFaces.FilledTagFaces, _OutlineTagFaces.OutlineTagFaces, _RoundTagFaces.RoundTagFaces, _SharpTagFaces.SharpTagFaces, _TwoToneTagFaces.TwoToneTagFaces);
};

exports.TagFaces = TagFaces;