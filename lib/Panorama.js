"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPanorama = require("./FilledPanorama");

var _OutlinePanorama = require("./OutlinePanorama");

var _RoundPanorama = require("./RoundPanorama");

var _SharpPanorama = require("./SharpPanorama");

var _TwoTonePanorama = require("./TwoTonePanorama");

var Panorama =
/*#__PURE__*/
function Panorama(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPanorama.FilledPanorama, _OutlinePanorama.OutlinePanorama, _RoundPanorama.RoundPanorama, _SharpPanorama.SharpPanorama, _TwoTonePanorama.TwoTonePanorama);
};

exports.Panorama = Panorama;