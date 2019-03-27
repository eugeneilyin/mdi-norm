"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneKeyboardHide =
/*#__PURE__*/
function TwoToneKeyboardHide(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 15h16V5H4zm13-9" + _fragments.fs + "m0 3" + _fragments.fs + "m-3-3" + _fragments.fs + "m0 3" + _fragments.fs + "m-3-3" + _fragments.yh + "m0 3h8v2H8zM5 6h2v2H5zm0 3h2v2H5z"
  }), _react.default.createElement("path", {
    d: "M20 3H4" + _fragments.bm + "L2 15" + _fragments.d + "h16" + _fragments.br + "m0 12H4V5h16zm-9-9" + _fragments.yh + "M5 9" + _fragments.ve + "m-5 17l4-4H8z"
  }));
};

exports.TwoToneKeyboardHide = TwoToneKeyboardHide;