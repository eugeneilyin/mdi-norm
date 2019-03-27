"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpRoundedCorner =
/*#__PURE__*/
function SharpRoundedCorner(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bcl + "M21 3H11v2h8v8h2z"
  }));
};

exports.SharpRoundedCorner = SharpRoundedCorner;