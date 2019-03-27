"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDirectionsTransit =
/*#__PURE__*/
function TwoToneDirectionsTransit(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 4c-3.51 0-4.96.48-5.57 1h11.23c-.54-.54-1.95-1-5.66-1zM7.5 17h9" + _fragments.dl + "V12H6v3.5" + _fragments.fp + "zm8-4" + _fragments.cq + "m-7 0" + _fragments.cp + "S9.33 16 8.5 16 7 15.33 7 14.5 7.67 13 8.5 13z"
  }), _react.default.createElement("path", {
    d: "M4 6v9.5" + _fragments.ri + "V6c0-3.5-3.58-4-8-4-4 0-8 .5-8 4zm14 4h-5V7h5zm-6-6c3.71 0 5.12.46 5.66 1H6.43c.61-.52 2.06-1 5.57-1zM6 7h5v3H6zm0 5h12v3.5" + _fragments.ot + "h-9" + _fragments.l + "z"
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "14.5",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "14.5",
    r: "1.5"
  }));
};

exports.TwoToneDirectionsTransit = TwoToneDirectionsTransit;