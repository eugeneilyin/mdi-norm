"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneStopScreenShare =
/*#__PURE__*/
function TwoToneStopScreenShare(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M10.67 12.54C9.13 12.92 7.96 13.71 7 15c.31-1.48.94-2.93 2.08-4.05L4.13 6.02H4v10.01h10.14z"
  }), _react.default.createElement("path", {
    d: _fragments.mr
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M20 6.02H9.8l3.13 3.13c.02 0 .04-.01.07-.02V7l4 3.73-1.28 1.2L20 16.21z"
  }));
};

exports.TwoToneStopScreenShare = TwoToneStopScreenShare;