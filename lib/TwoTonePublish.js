"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoTonePublish =
/*#__PURE__*/
function TwoTonePublish(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M9.83 12H11v6h2v-6h1.17L12 9.83z"
  }), _react.default.createElement("path", {
    d: "M5 4h14v2H5zm7 3l-7 7h4v6h6v-6h4zm1 5v6h-2v-6H9.83L12 9.83 14.17 12z"
  }));
};

exports.TwoTonePublish = TwoTonePublish;