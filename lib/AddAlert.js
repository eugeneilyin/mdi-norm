"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAddAlert = require("./FilledAddAlert");

var _OutlineAddAlert = require("./OutlineAddAlert");

var _RoundAddAlert = require("./RoundAddAlert");

var _SharpAddAlert = require("./SharpAddAlert");

var _TwoToneAddAlert = require("./TwoToneAddAlert");

var AddAlert =
/*#__PURE__*/
function AddAlert(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAddAlert.FilledAddAlert, _OutlineAddAlert.OutlineAddAlert, _RoundAddAlert.RoundAddAlert, _SharpAddAlert.SharpAddAlert, _TwoToneAddAlert.TwoToneAddAlert);
};

exports.AddAlert = AddAlert;