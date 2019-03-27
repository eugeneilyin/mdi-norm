"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneStore =
/*#__PURE__*/
function TwoToneStore(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5.64 9l-.6 3h13.92l-.6-3z"
  }), _react.default.createElement("path", {
    d: "M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zm-8 11H6v-4h6zm-6.96-6l.6-3h12.72l.6 3z"
  }));
};

exports.TwoToneStore = TwoToneStore;