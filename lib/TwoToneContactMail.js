"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneContactMail =
/*#__PURE__*/
function TwoToneContactMail(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M2 19h20V5H2zM14 6h7v5h-7zM9 6" + _fragments.kz + "zM3 16.59C3 14.08 6.97 13 9 13s6 1.08 6 3.58V18H3z"
  }), _react.default.createElement("path", {
    d: "M22 3" + _fragments.rw + "m0 16H2V5h20zM21 6h-7v5h7zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7" + _fragments.tt
  }));
};

exports.TwoToneContactMail = TwoToneContactMail;