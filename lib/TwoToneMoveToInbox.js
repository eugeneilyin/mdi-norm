"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMoveToInbox =
/*#__PURE__*/
function TwoToneMoveToInbox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12.01 18c-1.48 0-2.75-.81-3.45-2H5v3h14v-3h-3.55c-.69 1.19-1.97 2-3.44 2z"
  }), _react.default.createElement("path", {
    d: _fragments.bfc
  }));
};

exports.TwoToneMoveToInbox = TwoToneMoveToInbox;