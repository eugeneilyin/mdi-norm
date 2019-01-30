"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCancel = require("./FilledCancel");

var _OutlineCancel = require("./OutlineCancel");

var _RoundCancel = require("./RoundCancel");

var _SharpCancel = require("./SharpCancel");

var _TwoToneCancel = require("./TwoToneCancel");

var Cancel =
/*#__PURE__*/
function Cancel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCancel.FilledCancel, _OutlineCancel.OutlineCancel, _RoundCancel.RoundCancel, _SharpCancel.SharpCancel, _TwoToneCancel.TwoToneCancel);
};

exports.Cancel = Cancel;