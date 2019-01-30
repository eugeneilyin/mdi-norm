"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledContactSupport = require("./FilledContactSupport");

var _OutlineContactSupport = require("./OutlineContactSupport");

var _RoundContactSupport = require("./RoundContactSupport");

var _SharpContactSupport = require("./SharpContactSupport");

var _TwoToneContactSupport = require("./TwoToneContactSupport");

var ContactSupport =
/*#__PURE__*/
function ContactSupport(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledContactSupport.FilledContactSupport, _OutlineContactSupport.OutlineContactSupport, _RoundContactSupport.RoundContactSupport, _SharpContactSupport.SharpContactSupport, _TwoToneContactSupport.TwoToneContactSupport);
};

exports.ContactSupport = ContactSupport;