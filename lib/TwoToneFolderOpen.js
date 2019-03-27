"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFolderOpen =
/*#__PURE__*/
function TwoToneFolderOpen(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 8h16v10H4z"
  }), _react.default.createElement("path", {
    d: _fragments.bft + "V8h16z"
  }));
};

exports.TwoToneFolderOpen = TwoToneFolderOpen;