"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDescription =
/*#__PURE__*/
function TwoToneDescription(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 4H6v16h12V9h-5zm3 14H8v-2h8zm0-6v2H8v-2z"
  }), _react.default.createElement("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10" + _fragments.bmn
  }));
};

exports.TwoToneDescription = TwoToneDescription;