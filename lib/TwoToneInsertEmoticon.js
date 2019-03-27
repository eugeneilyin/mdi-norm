"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInsertEmoticon =
/*#__PURE__*/
function TwoToneInsertEmoticon(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.te + "m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"
  }), _react.default.createElement("circle", {
    cx: "15.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M11.99 2" + _fragments.bb
  }), _react.default.createElement("circle", {
    cx: "8.5",
    cy: "9.5",
    r: "1.5"
  }), _react.default.createElement("path", {
    d: "M12 17.5" + _fragments.yq
  }));
};

exports.TwoToneInsertEmoticon = TwoToneInsertEmoticon;