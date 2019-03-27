"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundStop =
/*#__PURE__*/
function RoundStop(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8 6h8" + _fragments.cm + "v8" + _fragments.nr + "H8" + _fragments.bo + "V8" + _fragments.ez + "z"
  }));
};

exports.RoundStop = RoundStop;