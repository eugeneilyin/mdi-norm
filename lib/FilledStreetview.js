"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledStreetview =
/*#__PURE__*/
function FilledStreetview(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7" + _fragments.a + "v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"
  }), _react.default.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "5"
  }), _react.default.createElement("path", {
    d: "M11.5 6c0-1.08.27-2.1.74-3H5" + _fragments.c + "v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"
  }));
};

exports.FilledStreetview = FilledStreetview;