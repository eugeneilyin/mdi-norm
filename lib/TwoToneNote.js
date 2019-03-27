"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNote =
/*#__PURE__*/
function TwoToneNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 6H4v12.01h16V11h-5z"
  }), _react.default.createElement("path", {
    d: "M4 4" + _fragments.c + "v12.01" + _fragments.mk + "h16" + _fragments.a + "v-8l-6-6zm16 14.01H4V6h11v5h5z"
  }));
};

exports.TwoToneNote = TwoToneNote;