"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAlbum =
/*#__PURE__*/
function TwoToneAlbum(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m0 12.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"
  }), _react.default.createElement("path", {
    d: _fragments.ku + "m0-12.5" + _fragments.tf + "m0 5.5" + _fragments.bj
  }));
};

exports.TwoToneAlbum = TwoToneAlbum;