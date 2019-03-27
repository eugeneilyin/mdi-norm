"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneViewArray =
/*#__PURE__*/
function TwoToneViewArray(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M4 5h3v13H4zm14 0h3v13h-3zM8 18h9V5H8zm2-11h5v9h-5z"
  }), _react.default.createElement("path", {
    opacity: ".3",
    d: "M10 7h5v9h-5z"
  }));
};

exports.TwoToneViewArray = TwoToneViewArray;