"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledPhonelinkRing =
/*#__PURE__*/
function FilledPhonelinkRing(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bfl + "M14 1H4" + _fragments.c + "v18" + _fragments.ey + "zm0 19H4V4h10z"
  }));
};

exports.FilledPhonelinkRing = FilledPhonelinkRing;