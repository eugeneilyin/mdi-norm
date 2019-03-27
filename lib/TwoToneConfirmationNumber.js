"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneConfirmationNumber =
/*#__PURE__*/
function TwoToneConfirmationNumber(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.biq + "M11 7" + _fragments.gq + "m0 4" + _fragments.fs
  }), _react.default.createElement("path", {
    d: "M22 10V6" + _fragments.gn + "H4c-1.1 0-1.99.89-1.99 2" + _fragments.ly + "M11 15" + _fragments.bfw + "m0-4" + _fragments.fs
  }));
};

exports.TwoToneConfirmationNumber = TwoToneConfirmationNumber;