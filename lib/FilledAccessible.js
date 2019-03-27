"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledAccessible =
/*#__PURE__*/
function FilledAccessible(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "4",
    r: "2"
  }), _react.default.createElement("path", {
    d: "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83" + _fragments.bfv + "c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15" + _fragments.d + "h5v5h2v-5.5" + _fragments.b + "h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5" + _fragments.qs
  }));
};

exports.FilledAccessible = FilledAccessible;