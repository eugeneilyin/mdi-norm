"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledIso = require("./FilledIso");

var _OutlineIso = require("./OutlineIso");

var _RoundIso = require("./RoundIso");

var _SharpIso = require("./SharpIso");

var _TwoToneIso = require("./TwoToneIso");

var Iso =
/*#__PURE__*/
function Iso(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledIso.FilledIso, _OutlineIso.OutlineIso, _RoundIso.RoundIso, _SharpIso.SharpIso, _TwoToneIso.TwoToneIso);
};

exports.Iso = Iso;