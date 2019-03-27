"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneAssistantPhoto =
/*#__PURE__*/
function TwoToneAssistantPhoto(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M14.24 12l.4 2H18V8h-5.24l-.4-2H7v6z"
  }), _react.default.createElement("path", {
    d: "M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z"
  }));
};

exports.TwoToneAssistantPhoto = TwoToneAssistantPhoto;