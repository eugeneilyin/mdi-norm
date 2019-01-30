"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFeedback = require("./FilledFeedback");

var _OutlineFeedback = require("./OutlineFeedback");

var _RoundFeedback = require("./RoundFeedback");

var _SharpFeedback = require("./SharpFeedback");

var _TwoToneFeedback = require("./TwoToneFeedback");

var Feedback =
/*#__PURE__*/
function Feedback(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFeedback.FilledFeedback, _OutlineFeedback.OutlineFeedback, _RoundFeedback.RoundFeedback, _SharpFeedback.SharpFeedback, _TwoToneFeedback.TwoToneFeedback);
};

exports.Feedback = Feedback;