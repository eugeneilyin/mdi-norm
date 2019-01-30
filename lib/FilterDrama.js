"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFilterDrama = require("./FilledFilterDrama");

var _OutlineFilterDrama = require("./OutlineFilterDrama");

var _RoundFilterDrama = require("./RoundFilterDrama");

var _SharpFilterDrama = require("./SharpFilterDrama");

var _TwoToneFilterDrama = require("./TwoToneFilterDrama");

var FilterDrama =
/*#__PURE__*/
function FilterDrama(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFilterDrama.FilledFilterDrama, _OutlineFilterDrama.OutlineFilterDrama, _RoundFilterDrama.RoundFilterDrama, _SharpFilterDrama.SharpFilterDrama, _TwoToneFilterDrama.TwoToneFilterDrama);
};

exports.FilterDrama = FilterDrama;