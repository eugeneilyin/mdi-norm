"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneError =
/*#__PURE__*/
function TwoToneError(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 4" + _fragments.ec + "m1 13" + _fragments.zt + "V7h2z"
  }), _react.default.createElement("path", {
    d: "M11.99 2" + _fragments.bb + "m-1-5" + _fragments.fs + "m0-8h2v6h-2z"
  }));
};

exports.TwoToneError = TwoToneError;