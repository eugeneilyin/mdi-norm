"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneViewAgenda =
/*#__PURE__*/
function TwoToneViewAgenda(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M20 3" + _fragments.bab + "V4" + _fragments.g + "zm-1 6H4V5h15zm1 4" + _fragments.bab + "v-6" + _fragments.g + "zm-1 6H4v-4h15z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 15h15v4H4zM4 5h15v4H4z"
  }));
};

exports.TwoToneViewAgenda = TwoToneViewAgenda;