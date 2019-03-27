"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneVideoLibrary =
/*#__PURE__*/
function TwoToneVideoLibrary(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 16h12V4H8zm4-10.5l6 4.5-6 4.5z"
  }), _react.default.createElement("path", {
    d: _fragments.nh + "m0 14H8V4h12zM12 5.5v9l6-4.5z"
  }));
};

exports.TwoToneVideoLibrary = TwoToneVideoLibrary;