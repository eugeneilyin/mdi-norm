"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledMoveToInbox =
/*#__PURE__*/
function FilledMoveToInbox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19" + _fragments.br + "m0 12" + _fragments.boj + "H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4 4-4z"
  }));
};

exports.FilledMoveToInbox = FilledMoveToInbox;