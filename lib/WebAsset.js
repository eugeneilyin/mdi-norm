"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWebAsset = require("./FilledWebAsset");

var _OutlineWebAsset = require("./OutlineWebAsset");

var _RoundWebAsset = require("./RoundWebAsset");

var _SharpWebAsset = require("./SharpWebAsset");

var _TwoToneWebAsset = require("./TwoToneWebAsset");

var WebAsset =
/*#__PURE__*/
function WebAsset(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWebAsset.FilledWebAsset, _OutlineWebAsset.OutlineWebAsset, _RoundWebAsset.RoundWebAsset, _SharpWebAsset.SharpWebAsset, _TwoToneWebAsset.TwoToneWebAsset);
};

exports.WebAsset = WebAsset;