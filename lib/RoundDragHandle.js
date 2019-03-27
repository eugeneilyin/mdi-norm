"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundDragHandle =
/*#__PURE__*/
function RoundDragHandle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M19 9H5" + _fragments.bf + "h14" + _fragments.o + "zM5 15h14" + _fragments.o + "H5" + _fragments.bf + "z"
  }));
};

exports.RoundDragHandle = RoundDragHandle;