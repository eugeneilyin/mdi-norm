"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDialerSip = require("./FilledDialerSip");

var _OutlineDialerSip = require("./OutlineDialerSip");

var _RoundDialerSip = require("./RoundDialerSip");

var _SharpDialerSip = require("./SharpDialerSip");

var _TwoToneDialerSip = require("./TwoToneDialerSip");

var DialerSip =
/*#__PURE__*/
function DialerSip(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDialerSip.FilledDialerSip, _OutlineDialerSip.OutlineDialerSip, _RoundDialerSip.RoundDialerSip, _SharpDialerSip.SharpDialerSip, _TwoToneDialerSip.TwoToneDialerSip);
};

exports.DialerSip = DialerSip;