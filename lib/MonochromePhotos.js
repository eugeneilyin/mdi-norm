"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMonochromePhotos = require("./FilledMonochromePhotos");

var _OutlineMonochromePhotos = require("./OutlineMonochromePhotos");

var _RoundMonochromePhotos = require("./RoundMonochromePhotos");

var _SharpMonochromePhotos = require("./SharpMonochromePhotos");

var _TwoToneMonochromePhotos = require("./TwoToneMonochromePhotos");

var MonochromePhotos =
/*#__PURE__*/
function MonochromePhotos(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMonochromePhotos.FilledMonochromePhotos, _OutlineMonochromePhotos.OutlineMonochromePhotos, _RoundMonochromePhotos.RoundMonochromePhotos, _SharpMonochromePhotos.SharpMonochromePhotos, _TwoToneMonochromePhotos.TwoToneMonochromePhotos);
};

exports.MonochromePhotos = MonochromePhotos;