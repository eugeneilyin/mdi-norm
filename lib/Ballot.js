"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBallot = require("./FilledBallot");

var _OutlineBallot = require("./OutlineBallot");

var _RoundBallot = require("./RoundBallot");

var _SharpBallot = require("./SharpBallot");

var _TwoToneBallot = require("./TwoToneBallot");

var Ballot =
/*#__PURE__*/
function Ballot(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBallot.FilledBallot, _OutlineBallot.OutlineBallot, _RoundBallot.RoundBallot, _SharpBallot.SharpBallot, _TwoToneBallot.TwoToneBallot);
};

exports.Ballot = Ballot;