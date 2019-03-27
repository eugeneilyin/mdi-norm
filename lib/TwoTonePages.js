"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePages =
/*#__PURE__*/
function TwoTonePages(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 7l4 1V5H5v6h3zm1 6H5v6h6v-3l-4 1zm9 4l-4-1v3h6v-6h-3zm-4-9l4-1-1 4h3V5h-6z"
  }), _react.default.createElement("path", {
    d: _fragments.dp + "M5 5h6v3L7 7l1 4H5zm6 14H5v-6h3l-1 4 4-1zm-1.63-4.37l.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63-2.63-.91-2.63.91zM19 19h-6v-3l4 1-1-4h3zm0-8h-3l1-4-4 1V5h6z"
  }));
};

exports.TwoTonePages = TwoTonePages;