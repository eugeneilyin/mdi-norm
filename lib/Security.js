"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSecurity = require("./FilledSecurity");

var _OutlineSecurity = require("./OutlineSecurity");

var _RoundSecurity = require("./RoundSecurity");

var _SharpSecurity = require("./SharpSecurity");

var _TwoToneSecurity = require("./TwoToneSecurity");

var Security =
/*#__PURE__*/
function Security(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSecurity.FilledSecurity, _OutlineSecurity.OutlineSecurity, _RoundSecurity.RoundSecurity, _SharpSecurity.SharpSecurity, _TwoToneSecurity.TwoToneSecurity);
};

exports.Security = Security;