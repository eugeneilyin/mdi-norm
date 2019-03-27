"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpDeveloperMode =
/*#__PURE__*/
function SharpDeveloperMode(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M7 5h10v2h2V1.01L5 1v6" + _fragments.beh + "v6h14v-6h-2z"
  }));
};

exports.SharpDeveloperMode = SharpDeveloperMode;