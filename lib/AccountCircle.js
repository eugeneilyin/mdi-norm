"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccountCircle = require("./FilledAccountCircle");

var _OutlineAccountCircle = require("./OutlineAccountCircle");

var _RoundAccountCircle = require("./RoundAccountCircle");

var _SharpAccountCircle = require("./SharpAccountCircle");

var _TwoToneAccountCircle = require("./TwoToneAccountCircle");

var AccountCircle =
/*#__PURE__*/
function AccountCircle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccountCircle.FilledAccountCircle, _OutlineAccountCircle.OutlineAccountCircle, _RoundAccountCircle.RoundAccountCircle, _SharpAccountCircle.SharpAccountCircle, _TwoToneAccountCircle.TwoToneAccountCircle);
};

exports.AccountCircle = AccountCircle;