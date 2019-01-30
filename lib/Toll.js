"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledToll = require("./FilledToll");

var _OutlineToll = require("./OutlineToll");

var _RoundToll = require("./RoundToll");

var _SharpToll = require("./SharpToll");

var _TwoToneToll = require("./TwoToneToll");

var Toll =
/*#__PURE__*/
function Toll(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledToll.FilledToll, _OutlineToll.OutlineToll, _RoundToll.RoundToll, _SharpToll.SharpToll, _TwoToneToll.TwoToneToll);
};

exports.Toll = Toll;