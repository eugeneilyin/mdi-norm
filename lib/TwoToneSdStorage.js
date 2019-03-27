"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSdStorage =
/*#__PURE__*/
function TwoToneSdStorage(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M6 8.83V20h12V4h-7.17zM15 7h2v4h-2zm-3 0h2v4h-2zm-1 4H9V7h2z"
  }), _react.default.createElement("path", {
    d: _fragments.bnm
  }));
};

exports.TwoToneSdStorage = TwoToneSdStorage;