"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVideoLibrary = require("./FilledVideoLibrary");

var _OutlineVideoLibrary = require("./OutlineVideoLibrary");

var _RoundVideoLibrary = require("./RoundVideoLibrary");

var _SharpVideoLibrary = require("./SharpVideoLibrary");

var _TwoToneVideoLibrary = require("./TwoToneVideoLibrary");

var VideoLibrary =
/*#__PURE__*/
function VideoLibrary(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVideoLibrary.FilledVideoLibrary, _OutlineVideoLibrary.OutlineVideoLibrary, _RoundVideoLibrary.RoundVideoLibrary, _SharpVideoLibrary.SharpVideoLibrary, _TwoToneVideoLibrary.TwoToneVideoLibrary);
};

exports.VideoLibrary = VideoLibrary;