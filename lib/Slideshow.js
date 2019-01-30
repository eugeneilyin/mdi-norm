"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSlideshow = require("./FilledSlideshow");

var _OutlineSlideshow = require("./OutlineSlideshow");

var _RoundSlideshow = require("./RoundSlideshow");

var _SharpSlideshow = require("./SharpSlideshow");

var _TwoToneSlideshow = require("./TwoToneSlideshow");

var Slideshow =
/*#__PURE__*/
function Slideshow(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSlideshow.FilledSlideshow, _OutlineSlideshow.OutlineSlideshow, _RoundSlideshow.RoundSlideshow, _SharpSlideshow.SharpSlideshow, _TwoToneSlideshow.TwoToneSlideshow);
};

exports.Slideshow = Slideshow;