"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePictureInPictureAlt =
/*#__PURE__*/
function TwoTonePictureInPictureAlt(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bfo
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 13h4v2h-4z"
  }));
};

exports.TwoTonePictureInPictureAlt = TwoTonePictureInPictureAlt;