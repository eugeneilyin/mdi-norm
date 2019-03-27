"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCellWifi =
/*#__PURE__*/
function TwoToneCellWifi(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M22 5.97l-4 4.01v2.8l2-2V20h-2v2h4z"
  }), _react.default.createElement("path", {
    d: "M9.07 11.07" + _fragments.bov + "m9.01-5.14c-3.91-3.91-10.25-3.91-14.15 0l1.29 1.29c3.19-3.19 8.38-3.19 11.57 0zM15.5 8.5c-2.48-2.48-6.52-2.48-9 0l1.29 1.29c1.77-1.77 4.65-1.77 6.43 0zm2.5 4.28v-2.8L6 22h12z"
  }));
};

exports.TwoToneCellWifi = TwoToneCellWifi;