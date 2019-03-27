"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBallot =
/*#__PURE__*/
function TwoToneBallot(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 14h3v3H7zm0-7h3v3H7z" + _fragments.blc + "m8-11.5h5v2h-5zm0 7h5v2h-5zM6 6h5v5H6zm0 7h5v5H6z"
  }), _react.default.createElement("path", {
    d: "M13 7.5h5v2h-5zm0 7h5v2h-5z" + _fragments.qi + "M11 6H6v5h5zm-1 4H7V7h3zm1 3H6v5h5zm-1 4H7v-3h3z"
  }));
};

exports.TwoToneBallot = TwoToneBallot;