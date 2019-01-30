"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCallToAction = require("./FilledCallToAction");

var _OutlineCallToAction = require("./OutlineCallToAction");

var _RoundCallToAction = require("./RoundCallToAction");

var _SharpCallToAction = require("./SharpCallToAction");

var _TwoToneCallToAction = require("./TwoToneCallToAction");

var CallToAction =
/*#__PURE__*/
function CallToAction(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCallToAction.FilledCallToAction, _OutlineCallToAction.OutlineCallToAction, _RoundCallToAction.RoundCallToAction, _SharpCallToAction.SharpCallToAction, _TwoToneCallToAction.TwoToneCallToAction);
};

exports.CallToAction = CallToAction;