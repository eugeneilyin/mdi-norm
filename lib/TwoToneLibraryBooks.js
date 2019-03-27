"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLibraryBooks =
/*#__PURE__*/
function TwoToneLibraryBooks(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 16h12V4H8zm2-10h8v2h-8zm0 3h8v2h-8zm0 3h4v2h-4z"
  }), _react.default.createElement("path", {
    d: "M4 22h14v-2H4V6H2v14" + _fragments.d + "zM6 4v12" + _fragments.d + "h12" + _fragments.a + "V4" + _fragments.b + "H8" + _fragments.c + "zm14 12H8V4h12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"
  }));
};

exports.TwoToneLibraryBooks = TwoToneLibraryBooks;