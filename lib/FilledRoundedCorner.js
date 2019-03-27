"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledRoundedCorner =
/*#__PURE__*/
function FilledRoundedCorner(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.bcl + "M21 8" + _fragments.js + "h-5v2h5c1.65 0 3 1.35 3 3v5h2z"
  }));
};

exports.FilledRoundedCorner = FilledRoundedCorner;