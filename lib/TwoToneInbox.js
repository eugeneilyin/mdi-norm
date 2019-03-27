"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInbox =
/*#__PURE__*/
function TwoToneInbox(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12.01 18c-1.48 0-2.75-.81-3.45-2H5v3h14v-3h-3.55c-.69 1.19-1.97 2-3.44 2z"
  }), _react.default.createElement("path", {
    d: "M19 3H5" + _fragments.c + "v14" + _fragments.cr + "h14" + _fragments.vl + "h-5" + _fragments.nr + "s-2-.9-2-2H5V5h14z"
  }));
};

exports.TwoToneInbox = TwoToneInbox;