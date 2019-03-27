"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInsertComment =
/*#__PURE__*/
function TwoToneInsertComment(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 16h14.83L20 17.17V4H4zM6 6h12v2H6zm0 3h12v2H6zm0 3h12v2H6z"
  }), _react.default.createElement("path", {
    d: _fragments.bgm + "m0 2v13.17L18.83 16H4V4zM6 12" + _fragments.bkq + "m0-3h12v2H6z"
  }));
};

exports.TwoToneInsertComment = TwoToneInsertComment;