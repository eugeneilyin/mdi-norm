"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledMap =
/*#__PURE__*/
function FilledMap(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.pv + "M15 19l-6-2.11V5l6 2.11z"
  }));
};

exports.FilledMap = FilledMap;