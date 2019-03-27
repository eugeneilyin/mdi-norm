"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLibraryAdd =
/*#__PURE__*/
function TwoToneLibraryAdd(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 16h12V4H8zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3z"
  }), _react.default.createElement("path", {
    d: "M4 22h14v-2H4V6H2v14" + _fragments.d + "zM8 2" + _fragments.cy + "h12" + _fragments.eh + "m12 14H8V4h12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"
  }));
};

exports.TwoToneLibraryAdd = TwoToneLibraryAdd;