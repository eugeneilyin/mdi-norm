"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAddCircle =
/*#__PURE__*/
function TwoToneAddCircle(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m5 9h-4v4h-2v-4H7v-2h4V7h2v4h4z"
  }), _react.default.createElement("path", {
    d: _fragments.bpe + "m-1-5" + _fragments.i + _fragments.y
  }));
};

exports.TwoToneAddCircle = TwoToneAddCircle;