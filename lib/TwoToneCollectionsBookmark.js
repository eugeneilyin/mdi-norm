"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCollectionsBookmark =
/*#__PURE__*/
function TwoToneCollectionsBookmark(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M20 4h-1v9l-3-2.25L13 13V4H8v12h12z"
  }), _react.default.createElement("path", {
    d: "M4 22h14v-2H4V6H2v14" + _fragments.d + "zm18-6V4" + _fragments.b + "H8" + _fragments.cy + "h12" + _fragments.a + "zM15 4h2v5l-1-.75L15 9zM8 4h5v9l3-2.25L19 13V4h1v12H8z"
  }));
};

exports.TwoToneCollectionsBookmark = TwoToneCollectionsBookmark;