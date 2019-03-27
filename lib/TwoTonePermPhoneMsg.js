"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePermPhoneMsg =
/*#__PURE__*/
function TwoTonePermPhoneMsg(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15.2 18.21" + _fragments.oi + _fragments.bbp + "M14 8h5V5h-5z"
  }), _react.default.createElement("path", {
    d: "M20 15.5" + _fragments.dj + "M12 3v10l3-3h6V3zm7 5h-5V5h5z"
  }));
};

exports.TwoTonePermPhoneMsg = TwoTonePermPhoneMsg;