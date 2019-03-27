"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEvStation =
/*#__PURE__*/
function TwoToneEvStation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 13.5H6V19h6v-8l-4 7zm-2 0L10 6v5h2V5H6z"
  }), _react.default.createElement("path", {
    d: "M12 3" + _fragments.eo + _fragments.en + "zm0 8v8H6V5h6zm6-1" + _fragments.bj + "m-8-4l-4 7.5h2V18l4-7h-2z"
  }));
};

exports.TwoToneEvStation = TwoToneEvStation;