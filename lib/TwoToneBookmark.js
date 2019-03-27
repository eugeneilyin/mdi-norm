"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBookmark =
/*#__PURE__*/
function TwoToneBookmark(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 17.97l5-2.15 5 2.15V5H7z"
  }), _react.default.createElement("path", {
    d: "M17 3H7" + _fragments.c + "v16l7-3 7 3V5" + _fragments.b + "zm0 14.97l-5-2.14-5 2.14V5h10z"
  }));
};

exports.TwoToneBookmark = TwoToneBookmark;