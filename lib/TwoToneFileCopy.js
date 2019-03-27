"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFileCopy =
/*#__PURE__*/
function TwoToneFileCopy(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M14 7H8v14h11v-9h-5z"
  }), _react.default.createElement("path", {
    d: "M16 1H4" + _fragments.c + "v14h2V3h12zm-1 4H8" + _fragments.bm + "L6 21" + _fragments.ls + "H19" + _fragments.a + "V11zm4 16H8V7h6v5h5z"
  }));
};

exports.TwoToneFileCopy = TwoToneFileCopy;