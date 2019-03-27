"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSupervisedUserCircle =
/*#__PURE__*/
function TwoToneSupervisedUserCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "9.5",
    cy: "10",
    r: "1"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M11.5 17.21c0-1.88 2.98-2.7 4.5-2.7.88 0 2.24.27 3.24.87.48-1.02.75-2.16.75-3.37 0-4.41-3.59-8-8-8s-8 3.59-8 8c0 1.23.29 2.39.78 3.43 1.34-.98 3.43-1.43 4.73-1.43.44 0 .97.05 1.53.16-.63.57-1.06 1.22-1.3 1.86-.08 0-.15-.01-.23-.01-1.38 0-2.98.57-3.66 1.11 1.37 1.65 3.39 2.73 5.66 2.86zM16 9c1.11 0 2 .89 2 2 0 1.11-.89 2-2 2-1.11 0-2-.89-2-2-.01-1.11.89-2 2-2zm-6.5 4" + _fragments.is
  }), _react.default.createElement("path", {
    d: _fragments.hs
  }));
};

exports.TwoToneSupervisedUserCircle = TwoToneSupervisedUserCircle;