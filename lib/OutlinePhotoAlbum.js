"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlinePhotoAlbum =
/*#__PURE__*/
function OutlinePhotoAlbum(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M18 2H6" + _fragments.c + "v16" + _fragments.d + "h12" + _fragments.eh + "m-7 2v5l-1-.75L9 9V4zm7 16H6V4h1v9l3-2.25L13 13V4h5zm-6.72-2.04L9.5 15.81 7 19h10l-3.22-4.26z"
  }));
};

exports.OutlinePhotoAlbum = OutlinePhotoAlbum;