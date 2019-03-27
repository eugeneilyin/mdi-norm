"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneGetApp =
/*#__PURE__*/
function TwoToneGetApp(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M14.17 11H13V5h-2v6H9.83L12 13.17z"
  }), _react.default.createElement("path", {
    d: "M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z"
  }));
};

exports.TwoToneGetApp = TwoToneGetApp;