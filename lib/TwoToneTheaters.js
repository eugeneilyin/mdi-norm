"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTheaters =
/*#__PURE__*/
function TwoToneTheaters(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.yr + "m6 10h-4V5h4zm4-2" + _fragments.me + "m0-4" + _fragments.zt + "V7h2z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 5h4v14h-4z"
  }));
};

exports.TwoToneTheaters = TwoToneTheaters;