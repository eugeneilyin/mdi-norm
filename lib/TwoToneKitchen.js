"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneKitchen =
/*#__PURE__*/
function TwoToneKitchen(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 5h2v3H8zm0 7h2v5H8zm-2 8h12v-9.02H6zm2-8h2v5H8zM6 9h12V4H6zm2-4h2v3H8z"
  }), _react.default.createElement("path", {
    d: _fragments.bgo
  }));
};

exports.TwoToneKitchen = TwoToneKitchen;