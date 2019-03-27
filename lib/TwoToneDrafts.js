"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDrafts =
/*#__PURE__*/
function TwoToneDrafts(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 15.36l-8-5.02V18h16l-.01-7.63z"
  }), _react.default.createElement("path", {
    d: _fragments.bau + "M12 3.32L19.99 8v.01L12 13 4 8zM4 18v-7.66l8 5.02 7.99-4.99L20 18z"
  }));
};

exports.TwoToneDrafts = TwoToneDrafts;