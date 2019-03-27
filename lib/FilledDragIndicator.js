"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledDragIndicator =
/*#__PURE__*/
function FilledDragIndicator(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M11 18" + _fragments.nr + "s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8" + _fragments.dn + "m0-6" + _fragments.dn + "m6 4" + _fragments.dg + "m0 2" + _fragments.dn + "m0 6" + _fragments.dn
  }));
};

exports.FilledDragIndicator = FilledDragIndicator;