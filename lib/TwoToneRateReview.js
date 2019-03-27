"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRateReview =
/*#__PURE__*/
function TwoToneRateReview(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17.17l.59-.59.58-.58H20V4H4zM18 14h-7.5l2-2H18zM6 11.53l5.88-5.88" + _fragments.bbk + "H6z"
  }), _react.default.createElement("path", {
    d: _fragments.bik
  }));
};

exports.TwoToneRateReview = TwoToneRateReview;