"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccountBox = require("./FilledAccountBox");

var _OutlineAccountBox = require("./OutlineAccountBox");

var _RoundAccountBox = require("./RoundAccountBox");

var _SharpAccountBox = require("./SharpAccountBox");

var _TwoToneAccountBox = require("./TwoToneAccountBox");

var AccountBox =
/*#__PURE__*/
function AccountBox(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccountBox.FilledAccountBox, _OutlineAccountBox.OutlineAccountBox, _RoundAccountBox.RoundAccountBox, _SharpAccountBox.SharpAccountBox, _TwoToneAccountBox.TwoToneAccountBox);
};

exports.AccountBox = AccountBox;