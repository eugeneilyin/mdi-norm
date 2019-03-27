"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMessage =
/*#__PURE__*/
function TwoToneMessage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M20 4H4v13.17L5.17 16H20zm-2 10" + _fragments.bgu
  }), _react.default.createElement("path", {
    d: "M20 18" + _fragments.a + "V4" + _fragments.b + "H4" + _fragments.bm + "L2 22l4-4zm-16-.83V4h16v12H5.17zM6 12" + _fragments.bkq + "m0-3h12v2H6z"
  }));
};

exports.TwoToneMessage = TwoToneMessage;