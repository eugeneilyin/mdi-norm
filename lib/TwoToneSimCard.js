"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSimCard =
/*#__PURE__*/
function TwoToneSimCard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 8.83V20h12V4h-7.17zM9 19H7v-2h2zm0-4H7v-4h2zm6-4h2v4h-2zm0 6" + _fragments.fs + "m-4-6" + _fragments.fs + "m0 4h2v4h-2z"
  }), _react.default.createElement("path", {
    d: _fragments.bep
  }));
};

exports.TwoToneSimCard = TwoToneSimCard;