"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSmartphone = require("./FilledSmartphone");

var _OutlineSmartphone = require("./OutlineSmartphone");

var _RoundSmartphone = require("./RoundSmartphone");

var _SharpSmartphone = require("./SharpSmartphone");

var _TwoToneSmartphone = require("./TwoToneSmartphone");

var Smartphone =
/*#__PURE__*/
function Smartphone(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSmartphone.FilledSmartphone, _OutlineSmartphone.OutlineSmartphone, _RoundSmartphone.RoundSmartphone, _SharpSmartphone.SharpSmartphone, _TwoToneSmartphone.TwoToneSmartphone);
};

exports.Smartphone = Smartphone;