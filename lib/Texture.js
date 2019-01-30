"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTexture = require("./FilledTexture");

var _OutlineTexture = require("./OutlineTexture");

var _RoundTexture = require("./RoundTexture");

var _SharpTexture = require("./SharpTexture");

var _TwoToneTexture = require("./TwoToneTexture");

var Texture =
/*#__PURE__*/
function Texture(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTexture.FilledTexture, _OutlineTexture.OutlineTexture, _RoundTexture.RoundTexture, _SharpTexture.SharpTexture, _TwoToneTexture.TwoToneTexture);
};

exports.Texture = Texture;