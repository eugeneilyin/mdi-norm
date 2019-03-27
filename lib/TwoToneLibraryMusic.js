"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLibraryMusic =
/*#__PURE__*/
function TwoToneLibraryMusic(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 16h12V4H8zm4.5-6c.57 0 1.08.19 1.5.51V5h4v2" + _fragments.bea + "z"
  }), _react.default.createElement("path", {
    d: _fragments.bfb + "M2 6v14" + _fragments.d + "h14v-2H4V6z"
  }));
};

exports.TwoToneLibraryMusic = TwoToneLibraryMusic;