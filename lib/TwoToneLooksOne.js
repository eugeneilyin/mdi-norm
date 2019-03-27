"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLooksOne =
/*#__PURE__*/
function TwoToneLooksOne(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 5H5v14h14zm-5 12h-2V9h-2V7h4z"
  }), _react.default.createElement("path", {
    d: "M5 21" + _fragments.bky + "m5 4h2v8h2V7h-4z"
  }));
};

exports.TwoToneLooksOne = TwoToneLooksOne;