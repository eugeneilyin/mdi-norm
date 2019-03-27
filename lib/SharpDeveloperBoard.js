"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpDeveloperBoard =
/*#__PURE__*/
function SharpDeveloperBoard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M22 9V7h-2V3H2v18h18v-4" + _fragments.bpa
  }));
};

exports.SharpDeveloperBoard = SharpDeveloperBoard;