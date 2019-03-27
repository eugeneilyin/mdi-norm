"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCallToAction =
/*#__PURE__*/
function TwoToneCallToAction(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M3 19h18V5H3zm2-4h14v3H5z"
  }), _react.default.createElement("path", {
    d: _fragments.xh + "M5 15h14v3H5z"
  }));
};

exports.TwoToneCallToAction = TwoToneCallToAction;