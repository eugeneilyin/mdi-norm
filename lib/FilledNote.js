"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledNote =
/*#__PURE__*/
function FilledNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M22 10l-6-6H4" + _fragments.c + "v12.01" + _fragments.mk + "l16-.01c1.1 0 2-.89 2-1.99zm-7-4.5l5.5 5.5H15z"
  }));
};

exports.FilledNote = FilledNote;