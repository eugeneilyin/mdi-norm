"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneShopTwo =
/*#__PURE__*/
function TwoToneShopTwo(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 7v9h14V7zm5 8V8l5.5 3-5.5 4z"
  }), _react.default.createElement("path", {
    d: _fragments.ya + "m9 13H7V7h14zm-9-1l5.5-4L12 8z"
  }));
};

exports.TwoToneShopTwo = TwoToneShopTwo;