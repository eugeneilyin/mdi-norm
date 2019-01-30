"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPausePresentation = require("./FilledPausePresentation");

var _OutlinePausePresentation = require("./OutlinePausePresentation");

var _RoundPausePresentation = require("./RoundPausePresentation");

var _SharpPausePresentation = require("./SharpPausePresentation");

var _TwoTonePausePresentation = require("./TwoTonePausePresentation");

var PausePresentation =
/*#__PURE__*/
function PausePresentation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPausePresentation.FilledPausePresentation, _OutlinePausePresentation.OutlinePausePresentation, _RoundPausePresentation.RoundPausePresentation, _SharpPausePresentation.SharpPausePresentation, _TwoTonePausePresentation.TwoTonePausePresentation);
};

exports.PausePresentation = PausePresentation;