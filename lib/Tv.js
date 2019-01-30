"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTv = require("./FilledTv");

var _OutlineTv = require("./OutlineTv");

var _RoundTv = require("./RoundTv");

var _SharpTv = require("./SharpTv");

var _TwoToneTv = require("./TwoToneTv");

var Tv =
/*#__PURE__*/
function Tv(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTv.FilledTv, _OutlineTv.OutlineTv, _RoundTv.RoundTv, _SharpTv.SharpTv, _TwoToneTv.TwoToneTv);
};

exports.Tv = Tv;