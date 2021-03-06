"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneHome =
/*#__PURE__*/
function TwoToneHome(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
  }));
};

exports.TwoToneHome = TwoToneHome;