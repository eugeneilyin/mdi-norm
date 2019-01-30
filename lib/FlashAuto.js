"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFlashAuto = require("./FilledFlashAuto");

var _OutlineFlashAuto = require("./OutlineFlashAuto");

var _RoundFlashAuto = require("./RoundFlashAuto");

var _SharpFlashAuto = require("./SharpFlashAuto");

var _TwoToneFlashAuto = require("./TwoToneFlashAuto");

var FlashAuto =
/*#__PURE__*/
function FlashAuto(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFlashAuto.FilledFlashAuto, _OutlineFlashAuto.OutlineFlashAuto, _RoundFlashAuto.RoundFlashAuto, _SharpFlashAuto.SharpFlashAuto, _TwoToneFlashAuto.TwoToneFlashAuto);
};

exports.FlashAuto = FlashAuto;