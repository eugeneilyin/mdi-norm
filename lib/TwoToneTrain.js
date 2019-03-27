"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTrain =
/*#__PURE__*/
function TwoToneTrain(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 4c-3.51 0-4.96.48-5.57 1h11.13c-.6-.52-2.05-1-5.56-1zM6 15.5" + _fragments.fp + "h9" + _fragments.dl + "V12H6zm9.5-2.5" + _fragments.cq + "m-7 0" + _fragments.cp + "S9.33 16 8.5 16 7 15.33 7 14.5 7.67 13 8.5 13z"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "14.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "14.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: _fragments.ts
  }));
};

exports.TwoToneTrain = TwoToneTrain;