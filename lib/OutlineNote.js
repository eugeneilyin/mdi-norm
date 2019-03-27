"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineNote =
/*#__PURE__*/
function OutlineNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M16 4H4" + _fragments.c + "v12.01" + _fragments.mk + "h16" + _fragments.a + "v-8zM4 18.01V6h11v5h5v7.01z"
  }));
};

exports.OutlineNote = OutlineNote;