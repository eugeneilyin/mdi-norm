"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneChangeHistory =
/*#__PURE__*/
function TwoToneChangeHistory(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 7.77L5.61 18h12.78z"
  }), _react.default.createElement("path", {
    d: "M12 4L2 20h20zm0 3.77L18.39 18H5.61z"
  }));
};

exports.TwoToneChangeHistory = TwoToneChangeHistory;