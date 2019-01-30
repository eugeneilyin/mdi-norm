"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTonality = require("./FilledTonality");

var _OutlineTonality = require("./OutlineTonality");

var _RoundTonality = require("./RoundTonality");

var _SharpTonality = require("./SharpTonality");

var _TwoToneTonality = require("./TwoToneTonality");

var Tonality =
/*#__PURE__*/
function Tonality(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTonality.FilledTonality, _OutlineTonality.OutlineTonality, _RoundTonality.RoundTonality, _SharpTonality.SharpTonality, _TwoToneTonality.TwoToneTonality);
};

exports.Tonality = Tonality;