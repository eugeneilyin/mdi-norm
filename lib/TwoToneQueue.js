"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneQueue =
/*#__PURE__*/
function TwoToneQueue(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 16h12V4H8zm1-7h4V5h2v4h4v2h-4v4h-2v-4H9z"
  }), _react.default.createElement("path", {
    d: "M2 20" + _fragments.d + "h14v-2H4V6H2zM20 2" + _fragments.ng + "m0 14H8V4h12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z"
  }));
};

exports.TwoToneQueue = TwoToneQueue;