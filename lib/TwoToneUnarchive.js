"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneUnarchive =
/*#__PURE__*/
function TwoToneUnarchive(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 19h14V8H5zm7-9l4 4h-2.55v3h-2.91v-3H8z"
  }), _react.default.createElement("path", {
    d: "M20.54 5.23" + _fragments.fn + "M6.24 5h11.52l.83 1H5.42zM19 19H5V8h14zm-8.45-2h2.9v-3H16l-4-4-4 4h2.55z"
  }));
};

exports.TwoToneUnarchive = TwoToneUnarchive;