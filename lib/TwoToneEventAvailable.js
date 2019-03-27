"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEventAvailable =
/*#__PURE__*/
function TwoToneEventAvailable(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5h14v2H5z"
  }), _react.default.createElement("path", {
    d: _fragments.sj + "m0-12H5V5h14zm-2.51 4.53l-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06 3.17 3.17z"
  }));
};

exports.TwoToneEventAvailable = TwoToneEventAvailable;