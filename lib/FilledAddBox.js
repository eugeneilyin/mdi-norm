"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledAddBox =
/*#__PURE__*/
function FilledAddBox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 3" + _fragments.dx + _fragments.br + "m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"
  }));
};

exports.FilledAddBox = FilledAddBox;