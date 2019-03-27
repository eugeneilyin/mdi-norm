"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundHome =
/*#__PURE__*/
function RoundHome(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M10 19v-5h4v5" + _fragments.j + "h3" + _fragments.f + "v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7" + _fragments.j + "h3" + _fragments.f + "z"
  }));
};

exports.RoundHome = RoundHome;