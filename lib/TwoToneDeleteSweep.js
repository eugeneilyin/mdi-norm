"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDeleteSweep =
/*#__PURE__*/
function TwoToneDeleteSweep(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 10h6v8H5z"
  }), _react.default.createElement("path", {
    d: _fragments.bgi + "m2-8h6v8H5zm5-6H6L5 5H2v2h12V5h-3z"
  }));
};

exports.TwoToneDeleteSweep = TwoToneDeleteSweep;