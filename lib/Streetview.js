"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStreetview = require("./FilledStreetview");

var _OutlineStreetview = require("./OutlineStreetview");

var _RoundStreetview = require("./RoundStreetview");

var _SharpStreetview = require("./SharpStreetview");

var _TwoToneStreetview = require("./TwoToneStreetview");

var Streetview =
/*#__PURE__*/
function Streetview(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStreetview.FilledStreetview, _OutlineStreetview.OutlineStreetview, _RoundStreetview.RoundStreetview, _SharpStreetview.SharpStreetview, _TwoToneStreetview.TwoToneStreetview);
};

exports.Streetview = Streetview;