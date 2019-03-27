"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneHowToVote =
/*#__PURE__*/
function TwoToneHowToVote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 19h14v1H5z"
  }), _react.default.createElement("path", {
    d: _fragments.yj + "m1 7H5v-1h14z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M12.048 12.905L8.505 9.362l4.95-4.95 3.543 3.543z"
  }), _react.default.createElement("path", {
    d: "M19.11 7.25L14.16 2.3c-.38-.4-1.01-.4-1.4-.01L6.39 8.66" + _fragments.dc + "l4.95 4.95" + _fragments.du + "l6.36-6.36" + _fragments.fo + "zm-7.06 5.65L8.51 9.36l4.95-4.95L17 7.95z"
  }));
};

exports.TwoToneHowToVote = TwoToneHowToVote;