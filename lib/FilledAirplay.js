"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledAirplay =
/*#__PURE__*/
function FilledAirplay(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M6 22h12l-6-6zM21 3H3" + _fragments.cy + "h4v-2H3V5h18v12h-4v2h4" + _fragments.br
  }));
};

exports.FilledAirplay = FilledAirplay;