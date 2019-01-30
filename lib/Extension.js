"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledExtension = require("./FilledExtension");

var _OutlineExtension = require("./OutlineExtension");

var _RoundExtension = require("./RoundExtension");

var _SharpExtension = require("./SharpExtension");

var _TwoToneExtension = require("./TwoToneExtension");

var Extension =
/*#__PURE__*/
function Extension(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledExtension.FilledExtension, _OutlineExtension.OutlineExtension, _RoundExtension.RoundExtension, _SharpExtension.SharpExtension, _TwoToneExtension.TwoToneExtension);
};

exports.Extension = Extension;