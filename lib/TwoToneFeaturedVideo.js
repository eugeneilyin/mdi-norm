"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFeaturedVideo =
/*#__PURE__*/
function TwoToneFeaturedVideo(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zM4 6h9v7H4z"
  }), _react.default.createElement("path", {
    d: _fragments.xh + "M4 6h9v7H4z"
  }));
};

exports.TwoToneFeaturedVideo = TwoToneFeaturedVideo;