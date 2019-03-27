"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoTonePermIdentity =
/*#__PURE__*/
function TwoTonePermIdentity(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    opacity: ".3",
    cx: "12",
    cy: "8",
    r: "2"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2z"
  }), _react.default.createElement("path", {
    d: "M12 12" + _fragments.co + "m0 7c-2.67 0-8 1.34-8 4v3h16v-3" + _fragments.bdl
  }));
};

exports.TwoTonePermIdentity = TwoTonePermIdentity;