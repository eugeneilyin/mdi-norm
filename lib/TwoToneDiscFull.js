"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDiscFull =
/*#__PURE__*/
function TwoToneDiscFull(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 6" + _fragments.fw + "m0 8" + _fragments.bp
  }), _react.default.createElement("path", {
    d: "M20 14" + _fragments.fs + "M10 4" + _fragments.ec + "m0 14" + _fragments.dm + "M20 7h2v5h-2zm-10 3" + _fragments.dn
  }));
};

exports.TwoToneDiscFull = TwoToneDiscFull;