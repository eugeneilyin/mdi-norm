"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneKeyboard =
/*#__PURE__*/
function TwoToneKeyboard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17h16V7H4zm13-9" + _fragments.fs + "m0 3" + _fragments.fs + "m-3-3" + _fragments.fs + "m0 3" + _fragments.fs + "m-3-3" + _fragments.yi + "m0 3h8v2H8zM5 8h2v2H5zm0 3h2v2H5z"
  }), _react.default.createElement("path", {
    d: "M20 5H4" + _fragments.bm + "L2 17" + _fragments.jo + "V7" + _fragments.b + "zm0 12H4V7h16zm-9-9" + _fragments.yi + "m-3 0" + _fragments.ve
  }));
};

exports.TwoToneKeyboard = TwoToneKeyboard;