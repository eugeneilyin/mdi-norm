"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePhotoAlbum =
/*#__PURE__*/
function TwoTonePhotoAlbum(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 13l-3-2.25L7 13V4H6v16h12V4h-5zm4 6H7l2.5-3.19 1.78 2.15 2.5-3.22z"
  }), _react.default.createElement("path", {
    d: _fragments.zp + "m-8.5-4.19L7 19h10l-3.22-4.26-2.5 3.22z"
  }));
};

exports.TwoTonePhotoAlbum = TwoTonePhotoAlbum;