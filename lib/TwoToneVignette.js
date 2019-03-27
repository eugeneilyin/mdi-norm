"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVignette =
/*#__PURE__*/
function TwoToneVignette(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zm9-13c4.42 0 8 2.69 8 6s-3.58 6-8 6-8-2.69-8-6 3.58-6 8-6z"
  }), _react.default.createElement("path", {
    d: _fragments.xh + "m-9-1c4.42 0 8-2.69 8-6s-3.58-6-8-6-8 2.69-8 6 3.58 6 8 6zm0-10c3.25 0 6 1.83 6 4s-2.75 4-6 4-6-1.83-6-4 2.75-4 6-4z"
  }));
};

exports.TwoToneVignette = TwoToneVignette;