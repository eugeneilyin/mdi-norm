"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalAtm =
/*#__PURE__*/
function TwoToneLocalAtm(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 18h16V6H4zm5-4h4v-1h-3" + _fragments.k + "V9" + _fragments.bc + "h1V7h2v1h2v2h-4v1h3" + _fragments.n + "v3" + _fragments.x + "h-1v1h-2v-1H9z"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.cx + "m0 14H4V6h16zm-9-1h2v-1h1" + _fragments.f + "v-3" + _fragments.g + "h-3v-1h4V8h-2V7h-2v1h-1" + _fragments.e + "v3" + _fragments.j + "h3v1H9v2h2z"
  }));
};

exports.TwoToneLocalAtm = TwoToneLocalAtm;