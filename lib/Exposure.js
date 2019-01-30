"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledExposure = require("./FilledExposure");

var _OutlineExposure = require("./OutlineExposure");

var _RoundExposure = require("./RoundExposure");

var _SharpExposure = require("./SharpExposure");

var _TwoToneExposure = require("./TwoToneExposure");

var Exposure =
/*#__PURE__*/
function Exposure(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledExposure.FilledExposure, _OutlineExposure.OutlineExposure, _RoundExposure.RoundExposure, _SharpExposure.SharpExposure, _TwoToneExposure.TwoToneExposure);
};

exports.Exposure = Exposure;