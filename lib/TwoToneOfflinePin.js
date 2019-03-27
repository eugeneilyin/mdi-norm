"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneOfflinePin =
/*#__PURE__*/
function TwoToneOfflinePin(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.cs + "m5 13H7v-2h10zm-6.7-3L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"
  }), _react.default.createElement("path", {
    d: _fragments.kf + _fragments.y + "m-5-5h10v2H7zm3.3-3.8L8.4 9.3 7 10.7l3.3 3.3L17 7.3l-1.4-1.4z"
  }));
};

exports.TwoToneOfflinePin = TwoToneOfflinePin;