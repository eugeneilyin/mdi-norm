"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRateReview = require("./FilledRateReview");

var _OutlineRateReview = require("./OutlineRateReview");

var _RoundRateReview = require("./RoundRateReview");

var _SharpRateReview = require("./SharpRateReview");

var _TwoToneRateReview = require("./TwoToneRateReview");

var RateReview =
/*#__PURE__*/
function RateReview(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRateReview.FilledRateReview, _OutlineRateReview.OutlineRateReview, _RoundRateReview.RoundRateReview, _SharpRateReview.SharpRateReview, _TwoToneRateReview.TwoToneRateReview);
};

exports.RateReview = RateReview;