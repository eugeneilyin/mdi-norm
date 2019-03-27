"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneUnsubscribe =
/*#__PURE__*/
function TwoToneUnsubscribe(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M18.99 5H5l7 3.5zV7l-7 3.5L5 7v8h10.35c.56-1.18 1.76-2 3.15-2 .17 0 .34.03.5.05z"
  }), _react.default.createElement("path", {
    d: _fragments.sd
  }));
};

exports.TwoToneUnsubscribe = TwoToneUnsubscribe;