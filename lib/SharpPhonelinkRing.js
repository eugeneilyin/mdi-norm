"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpPhonelinkRing =
/*#__PURE__*/
function SharpPhonelinkRing(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bfl + "M16 1H2v22h14zm-2 19H4V4h10z"
  }));
};

exports.SharpPhonelinkRing = SharpPhonelinkRing;