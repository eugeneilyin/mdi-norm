"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFastfood =
/*#__PURE__*/
function TwoToneFastfood(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M8.5 10.99c-1.42 0-3.77.46-4.88 2.01h9.77c-1.12-1.55-3.47-2.01-4.89-2.01z"
  }), _react.default.createElement("path", {
    d: _fragments.up
  }));
};

exports.TwoToneFastfood = TwoToneFastfood;