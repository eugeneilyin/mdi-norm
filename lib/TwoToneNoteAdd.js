"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneNoteAdd =
/*#__PURE__*/
function TwoToneNoteAdd(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 4H6v16h12V9h-5zm3 10v2" + _fragments.blq + "v-3h2v3z"
  }), _react.default.createElement("path", {
    d: "M13 11" + _fragments.bbd + "h-3zm1-9" + _fragments.bmn
  }));
};

exports.TwoToneNoteAdd = TwoToneNoteAdd;