"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundViewColumn =
/*#__PURE__*/
function RoundViewColumn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M11 18h3" + _fragments.zi + "h-3" + _fragments.e + "v11" + _fragments.j + "zm-6 0h3" + _fragments.zi + "H5" + _fragments.e + "v11" + _fragments.j + "zM16 6v11" + _fragments.j + "h3" + _fragments.zi + "h-3" + _fragments.e + "z"
  }));
};

exports.RoundViewColumn = RoundViewColumn;