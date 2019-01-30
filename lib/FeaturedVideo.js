"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFeaturedVideo = require("./FilledFeaturedVideo");

var _OutlineFeaturedVideo = require("./OutlineFeaturedVideo");

var _RoundFeaturedVideo = require("./RoundFeaturedVideo");

var _SharpFeaturedVideo = require("./SharpFeaturedVideo");

var _TwoToneFeaturedVideo = require("./TwoToneFeaturedVideo");

var FeaturedVideo =
/*#__PURE__*/
function FeaturedVideo(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFeaturedVideo.FilledFeaturedVideo, _OutlineFeaturedVideo.OutlineFeaturedVideo, _RoundFeaturedVideo.RoundFeaturedVideo, _SharpFeaturedVideo.SharpFeaturedVideo, _TwoToneFeaturedVideo.TwoToneFeaturedVideo);
};

exports.FeaturedVideo = FeaturedVideo;