"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAccessAlarms =
/*#__PURE__*/
function TwoToneAccessAlarms(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 6c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3.7 10.9L11 14V8h1.5v5.3l4 2.4-.8 1.2z"
  }), _react.default.createElement("path", {
    d: "M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9" + _fragments.bde + "M7.9 3.4L6.6 1.9 2 5.7l1.3 1.5z"
  }));
};

exports.TwoToneAccessAlarms = TwoToneAccessAlarms;