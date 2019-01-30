"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhotoFilter = require("./FilledPhotoFilter");

var _OutlinePhotoFilter = require("./OutlinePhotoFilter");

var _RoundPhotoFilter = require("./RoundPhotoFilter");

var _SharpPhotoFilter = require("./SharpPhotoFilter");

var _TwoTonePhotoFilter = require("./TwoTonePhotoFilter");

var PhotoFilter =
/*#__PURE__*/
function PhotoFilter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhotoFilter.FilledPhotoFilter, _OutlinePhotoFilter.OutlinePhotoFilter, _RoundPhotoFilter.RoundPhotoFilter, _SharpPhotoFilter.SharpPhotoFilter, _TwoTonePhotoFilter.TwoTonePhotoFilter);
};

exports.PhotoFilter = PhotoFilter;