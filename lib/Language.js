"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLanguage = require("./FilledLanguage");

var _OutlineLanguage = require("./OutlineLanguage");

var _RoundLanguage = require("./RoundLanguage");

var _SharpLanguage = require("./SharpLanguage");

var _TwoToneLanguage = require("./TwoToneLanguage");

var Language =
/*#__PURE__*/
function Language(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLanguage.FilledLanguage, _OutlineLanguage.OutlineLanguage, _RoundLanguage.RoundLanguage, _SharpLanguage.SharpLanguage, _TwoToneLanguage.TwoToneLanguage);
};

exports.Language = Language;