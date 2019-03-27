"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneArchive =
/*#__PURE__*/
function TwoToneArchive(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 19h14V8H5zm5.55-6v-3h2.91v3H16l-4 4-4-4z"
  }), _react.default.createElement("path", {
    d: "M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77" + _fragments.fn + "M6.24 5h11.52l.81.97H5.44zM19 19H5V8h14z"
  }));
};

exports.TwoToneArchive = TwoToneArchive;