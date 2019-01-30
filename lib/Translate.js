"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTranslate = require("./FilledTranslate");

var _OutlineTranslate = require("./OutlineTranslate");

var _RoundTranslate = require("./RoundTranslate");

var _SharpTranslate = require("./SharpTranslate");

var _TwoToneTranslate = require("./TwoToneTranslate");

var Translate =
/*#__PURE__*/
function Translate(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTranslate.FilledTranslate, _OutlineTranslate.OutlineTranslate, _RoundTranslate.RoundTranslate, _SharpTranslate.SharpTranslate, _TwoToneTranslate.TwoToneTranslate);
};

exports.Translate = Translate;