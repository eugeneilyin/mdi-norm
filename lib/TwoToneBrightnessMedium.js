"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBrightnessMedium =
/*#__PURE__*/
function TwoToneBrightnessMedium(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.er + "M12 18V6" + _fragments.bih + "s-2.69 6-6 6z"
  }), _react.default.createElement("path", {
    d: _fragments.r + "M12 6v12c3.31 0 6-2.69 6-6s-2.69-6-6-6z"
  }));
};

exports.TwoToneBrightnessMedium = TwoToneBrightnessMedium;