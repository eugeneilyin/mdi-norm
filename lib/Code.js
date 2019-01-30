"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCode = require("./FilledCode");

var _OutlineCode = require("./OutlineCode");

var _RoundCode = require("./RoundCode");

var _SharpCode = require("./SharpCode");

var _TwoToneCode = require("./TwoToneCode");

var Code =
/*#__PURE__*/
function Code(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCode.FilledCode, _OutlineCode.OutlineCode, _RoundCode.RoundCode, _SharpCode.SharpCode, _TwoToneCode.TwoToneCode);
};

exports.Code = Code;