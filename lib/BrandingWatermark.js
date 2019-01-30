"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBrandingWatermark = require("./FilledBrandingWatermark");

var _OutlineBrandingWatermark = require("./OutlineBrandingWatermark");

var _RoundBrandingWatermark = require("./RoundBrandingWatermark");

var _SharpBrandingWatermark = require("./SharpBrandingWatermark");

var _TwoToneBrandingWatermark = require("./TwoToneBrandingWatermark");

var BrandingWatermark =
/*#__PURE__*/
function BrandingWatermark(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBrandingWatermark.FilledBrandingWatermark, _OutlineBrandingWatermark.OutlineBrandingWatermark, _RoundBrandingWatermark.RoundBrandingWatermark, _SharpBrandingWatermark.SharpBrandingWatermark, _TwoToneBrandingWatermark.TwoToneBrandingWatermark);
};

exports.BrandingWatermark = BrandingWatermark;