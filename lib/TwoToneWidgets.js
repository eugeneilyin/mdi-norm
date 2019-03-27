"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneWidgets =
/*#__PURE__*/
function TwoToneWidgets(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z"
  }), _react.default.createElement("path", {
    d: "M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3zm6 6H5V5h4zM3 21h8v-8H3zm2-6h4v4H5zm8-2v8h8v-8zm6 6h-4v-4h4z"
  }));
};

exports.TwoToneWidgets = TwoToneWidgets;