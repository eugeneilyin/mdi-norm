"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalPostOffice =
/*#__PURE__*/
function TwoToneLocalPostOffice(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 11l8-5H4zM4 8v10h16V8l-8 5z"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.na + "m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"
  }));
};

exports.TwoToneLocalPostOffice = TwoToneLocalPostOffice;