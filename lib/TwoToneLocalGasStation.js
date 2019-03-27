"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalGasStation =
/*#__PURE__*/
function TwoToneLocalGasStation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 19h6v-7H6z"
  }), _react.default.createElement("path", {
    d: "M12 3" + _fragments.eo + _fragments.en + "zm0 10.5V19H6v-7h6zm0-3.5H6V5h6zm6 0" + _fragments.bj
  }));
};

exports.TwoToneLocalGasStation = TwoToneLocalGasStation;