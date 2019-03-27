"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneListAlt =
/*#__PURE__*/
function TwoToneListAlt(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m6-12" + _fragments.wl
  }), _react.default.createElement("path", {
    d: "M11 7" + _fragments.wl + "M20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14z"
  }));
};

exports.TwoToneListAlt = TwoToneListAlt;