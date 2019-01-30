"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSubscriptions = require("./FilledSubscriptions");

var _OutlineSubscriptions = require("./OutlineSubscriptions");

var _RoundSubscriptions = require("./RoundSubscriptions");

var _SharpSubscriptions = require("./SharpSubscriptions");

var _TwoToneSubscriptions = require("./TwoToneSubscriptions");

var Subscriptions =
/*#__PURE__*/
function Subscriptions(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSubscriptions.FilledSubscriptions, _OutlineSubscriptions.OutlineSubscriptions, _RoundSubscriptions.RoundSubscriptions, _SharpSubscriptions.SharpSubscriptions, _TwoToneSubscriptions.TwoToneSubscriptions);
};

exports.Subscriptions = Subscriptions;