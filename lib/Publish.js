"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPublish = require("./FilledPublish");

var _OutlinePublish = require("./OutlinePublish");

var _RoundPublish = require("./RoundPublish");

var _SharpPublish = require("./SharpPublish");

var _TwoTonePublish = require("./TwoTonePublish");

var Publish =
/*#__PURE__*/
function Publish(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPublish.FilledPublish, _OutlinePublish.OutlinePublish, _RoundPublish.RoundPublish, _SharpPublish.SharpPublish, _TwoTonePublish.TwoTonePublish);
};

exports.Publish = Publish;