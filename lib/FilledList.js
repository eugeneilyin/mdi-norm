"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledList =
/*#__PURE__*/
function FilledList(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M3 13" + _fragments.bck + "V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"
  }));
};

exports.FilledList = FilledList;