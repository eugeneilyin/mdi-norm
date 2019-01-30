"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCasino = require("./FilledCasino");

var _OutlineCasino = require("./OutlineCasino");

var _RoundCasino = require("./RoundCasino");

var _SharpCasino = require("./SharpCasino");

var _TwoToneCasino = require("./TwoToneCasino");

var Casino =
/*#__PURE__*/
function Casino(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCasino.FilledCasino, _OutlineCasino.OutlineCasino, _RoundCasino.RoundCasino, _SharpCasino.SharpCasino, _TwoToneCasino.TwoToneCasino);
};

exports.Casino = Casino;