"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneStar =
/*#__PURE__*/
function TwoToneStar(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1" + _fragments.blw
  }), _react.default.createElement("path", {
    d: _fragments.ww
  }));
};

exports.TwoToneStar = TwoToneStar;