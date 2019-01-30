"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFiberNew = require("./FilledFiberNew");

var _OutlineFiberNew = require("./OutlineFiberNew");

var _RoundFiberNew = require("./RoundFiberNew");

var _SharpFiberNew = require("./SharpFiberNew");

var _TwoToneFiberNew = require("./TwoToneFiberNew");

var FiberNew =
/*#__PURE__*/
function FiberNew(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFiberNew.FilledFiberNew, _OutlineFiberNew.OutlineFiberNew, _RoundFiberNew.RoundFiberNew, _SharpFiberNew.SharpFiberNew, _TwoToneFiberNew.TwoToneFiberNew);
};

exports.FiberNew = FiberNew;