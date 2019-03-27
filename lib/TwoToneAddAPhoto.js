"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAddAPhoto =
/*#__PURE__*/
function TwoToneAddAPhoto(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 7v3H5v10h16V8h-4.05l-1.83-2H9v1zm7 2" + _fragments.hl + "s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"
  }), _react.default.createElement("path", {
    d: "M21 6h-3.17L16 4H9v2h6.12l1.83 2H21v12H5V10H3v10" + _fragments.jo + "V8" + _fragments.b + "zM8 14" + _fragments.bin + "m5-3" + _fragments.kz + "zM5 9V6h3V4H5V1H3v3H0v2h3v3z"
  }));
};

exports.TwoToneAddAPhoto = TwoToneAddAPhoto;