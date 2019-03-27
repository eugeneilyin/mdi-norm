"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPhoto =
/*#__PURE__*/
function RoundPhoto(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M21 19V5" + _fragments.b + "H5" + _fragments.be + "zM8.9 13.98" + _fragments.ra + "c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z"
  }));
};

exports.RoundPhoto = RoundPhoto;