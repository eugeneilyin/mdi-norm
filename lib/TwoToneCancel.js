"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCancel =
/*#__PURE__*/
function TwoToneCancel(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m5 11.59" + _fragments.bjt
  }), _react.default.createElement("path", {
    d: _fragments.bgq
  }));
};

exports.TwoToneCancel = TwoToneCancel;