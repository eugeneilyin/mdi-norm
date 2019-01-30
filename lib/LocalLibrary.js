"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalLibrary = require("./FilledLocalLibrary");

var _OutlineLocalLibrary = require("./OutlineLocalLibrary");

var _RoundLocalLibrary = require("./RoundLocalLibrary");

var _SharpLocalLibrary = require("./SharpLocalLibrary");

var _TwoToneLocalLibrary = require("./TwoToneLocalLibrary");

var LocalLibrary =
/*#__PURE__*/
function LocalLibrary(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalLibrary.FilledLocalLibrary, _OutlineLocalLibrary.OutlineLocalLibrary, _RoundLocalLibrary.RoundLocalLibrary, _SharpLocalLibrary.SharpLocalLibrary, _TwoToneLocalLibrary.TwoToneLocalLibrary);
};

exports.LocalLibrary = LocalLibrary;