"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLinearScale = require("./FilledLinearScale");

var _OutlineLinearScale = require("./OutlineLinearScale");

var _RoundLinearScale = require("./RoundLinearScale");

var _SharpLinearScale = require("./SharpLinearScale");

var _TwoToneLinearScale = require("./TwoToneLinearScale");

var LinearScale =
/*#__PURE__*/
function LinearScale(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLinearScale.FilledLinearScale, _OutlineLinearScale.OutlineLinearScale, _RoundLinearScale.RoundLinearScale, _SharpLinearScale.SharpLinearScale, _TwoToneLinearScale.TwoToneLinearScale);
};

exports.LinearScale = LinearScale;