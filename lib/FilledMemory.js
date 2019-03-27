"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledMemory =
/*#__PURE__*/
function FilledMemory(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M15 9H9v6h6zm-2 4" + _fragments.me + "m8-2" + _fragments.bgc
  }));
};

exports.FilledMemory = FilledMemory;