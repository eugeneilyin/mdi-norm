"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalTaxi = require("./FilledLocalTaxi");

var _OutlineLocalTaxi = require("./OutlineLocalTaxi");

var _RoundLocalTaxi = require("./RoundLocalTaxi");

var _SharpLocalTaxi = require("./SharpLocalTaxi");

var _TwoToneLocalTaxi = require("./TwoToneLocalTaxi");

var LocalTaxi =
/*#__PURE__*/
function LocalTaxi(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalTaxi.FilledLocalTaxi, _OutlineLocalTaxi.OutlineLocalTaxi, _RoundLocalTaxi.RoundLocalTaxi, _SharpLocalTaxi.SharpLocalTaxi, _TwoToneLocalTaxi.TwoToneLocalTaxi);
};

exports.LocalTaxi = LocalTaxi;