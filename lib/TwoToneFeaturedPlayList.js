"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFeaturedPlayList =
/*#__PURE__*/
function TwoToneFeaturedPlayList(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zM5 7h9v2H5zm0 3h9v2H5z"
  }), _react.default.createElement("path", {
    d: _fragments.xh + "M5 10h9v2H5zm0-3h9v2H5z"
  }));
};

exports.TwoToneFeaturedPlayList = TwoToneFeaturedPlayList;