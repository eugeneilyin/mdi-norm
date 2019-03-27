"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneStayCurrentLandscape =
/*#__PURE__*/
function TwoToneStayCurrentLandscape(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 7h14v10H5z"
  }), _react.default.createElement("path", {
    d: "M21 5H3" + _fragments.bm + "L1 17" + _fragments.d + "h18" + _fragments.a + "V7" + _fragments.b + "zm-2 12H5V7h14z"
  }));
};

exports.TwoToneStayCurrentLandscape = TwoToneStayCurrentLandscape;