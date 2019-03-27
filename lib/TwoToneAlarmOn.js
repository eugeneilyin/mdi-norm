"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAlarmOn =
/*#__PURE__*/
function TwoToneAlarmOn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm-1.47 10.64l-3.18-3.18 1.06-1.06 2.13 2.13 4.93-4.95 1.06 1.06-6 6z"
  }), _react.default.createElement("path", {
    d: _fragments.tp
  }));
};

exports.TwoToneAlarmOn = TwoToneAlarmOn;