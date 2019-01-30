"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledImageSearch = require("./FilledImageSearch");

var _OutlineImageSearch = require("./OutlineImageSearch");

var _RoundImageSearch = require("./RoundImageSearch");

var _SharpImageSearch = require("./SharpImageSearch");

var _TwoToneImageSearch = require("./TwoToneImageSearch");

var ImageSearch =
/*#__PURE__*/
function ImageSearch(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledImageSearch.FilledImageSearch, _OutlineImageSearch.OutlineImageSearch, _RoundImageSearch.RoundImageSearch, _SharpImageSearch.SharpImageSearch, _TwoToneImageSearch.TwoToneImageSearch);
};

exports.ImageSearch = ImageSearch;