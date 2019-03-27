"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBookmarks =
/*#__PURE__*/
function TwoToneBookmarks(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 1H8.99C7.89 1 7 1.9 7 3h10" + _fragments.cm + "v13l2 1V3" + _fragments.b + "zm-4 4H5" + _fragments.c + "v16l7-3 7 3V7" + _fragments.b + "zm0 14.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 19.97l5-2.15 5 2.15V7H5z"
  }));
};

exports.TwoToneBookmarks = TwoToneBookmarks;