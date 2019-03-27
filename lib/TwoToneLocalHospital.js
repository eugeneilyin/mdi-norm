"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLocalHospital =
/*#__PURE__*/
function TwoToneLocalHospital(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.blc + "m2-8.5h3.5V7h3v3.5H17v3h-3.5V17h-3v-3.5H7z"
  }), _react.default.createElement("path", {
    d: "M21 5" + _fragments.b + "H5" + _fragments.bm + "L3 19" + _fragments.fm + "zm-2 14H5V5h14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z"
  }));
};

exports.TwoToneLocalHospital = TwoToneLocalHospital;