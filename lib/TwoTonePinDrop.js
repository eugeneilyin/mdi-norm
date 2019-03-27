"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePinDrop =
/*#__PURE__*/
function TwoTonePinDrop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 4C9.79 4 8 5.79 8 8c0 2.13 2.08 5.47 4 7.91 1.92-2.44 4-5.78 4-7.91 0-2.21-1.79-4-4-4zm0 6" + _fragments.bo + "s.9-2 2-2 2 .9 2 2-.89 2-2 2z"
  }), _react.default.createElement("path", {
    d: "M5 20h14v2H5zm7-18C8.69 2 6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11c0-3.31-2.69-6-6-6zm0 13.91C10.08 13.47 8 10.13 8 8" + _fragments.pl + "c0 2.13-2.08 5.46-4 7.91zM12 6" + _fragments.c + "s.9 2 2 2" + _fragments.dy + "s-.9-2-2-2z"
  }));
};

exports.TwoTonePinDrop = TwoTonePinDrop;