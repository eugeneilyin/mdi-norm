"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTransform = require("./FilledTransform");

var _OutlineTransform = require("./OutlineTransform");

var _RoundTransform = require("./RoundTransform");

var _SharpTransform = require("./SharpTransform");

var _TwoToneTransform = require("./TwoToneTransform");

var Transform =
/*#__PURE__*/
function Transform(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTransform.FilledTransform, _OutlineTransform.OutlineTransform, _RoundTransform.RoundTransform, _SharpTransform.SharpTransform, _TwoToneTransform.TwoToneTransform);
};

exports.Transform = Transform;