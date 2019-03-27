"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledCellWifi =
/*#__PURE__*/
function FilledCellWifi(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 22h16V6z"
  }), _react.default.createElement("path", {
    d: "M18 10L6 22h12zM3.93 5.93l1.29 1.29c3.19-3.19 8.38-3.19 11.57 0l1.29-1.29c-3.91-3.91-10.25-3.91-14.15 0z" + _fragments.bov + "M6.5 8.5l1.29 1.29c1.77-1.77 4.65-1.77 6.43 0L15.5 8.5c-2.48-2.48-6.52-2.48-9 0z"
  }));
};

exports.FilledCellWifi = FilledCellWifi;