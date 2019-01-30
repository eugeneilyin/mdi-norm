"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBusinessCenter = require("./FilledBusinessCenter");

var _OutlineBusinessCenter = require("./OutlineBusinessCenter");

var _RoundBusinessCenter = require("./RoundBusinessCenter");

var _SharpBusinessCenter = require("./SharpBusinessCenter");

var _TwoToneBusinessCenter = require("./TwoToneBusinessCenter");

var BusinessCenter =
/*#__PURE__*/
function BusinessCenter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBusinessCenter.FilledBusinessCenter, _OutlineBusinessCenter.OutlineBusinessCenter, _RoundBusinessCenter.RoundBusinessCenter, _SharpBusinessCenter.SharpBusinessCenter, _TwoToneBusinessCenter.TwoToneBusinessCenter);
};

exports.BusinessCenter = BusinessCenter;