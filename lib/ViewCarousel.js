"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewCarousel = require("./FilledViewCarousel");

var _OutlineViewCarousel = require("./OutlineViewCarousel");

var _RoundViewCarousel = require("./RoundViewCarousel");

var _SharpViewCarousel = require("./SharpViewCarousel");

var _TwoToneViewCarousel = require("./TwoToneViewCarousel");

var ViewCarousel =
/*#__PURE__*/
function ViewCarousel(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewCarousel.FilledViewCarousel, _OutlineViewCarousel.OutlineViewCarousel, _RoundViewCarousel.RoundViewCarousel, _SharpViewCarousel.SharpViewCarousel, _TwoToneViewCarousel.TwoToneViewCarousel);
};

exports.ViewCarousel = ViewCarousel;