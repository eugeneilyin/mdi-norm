"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCameraRoll =
/*#__PURE__*/
function TwoToneCameraRoll(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 5H9V3H7v2H4v15h8v-2h8V7h-8zm-1 12H9v-2h2zm0-7H9V8h2zm6-2" + _fragments.fs + "m0 7" + _fragments.fs + "m-4-7" + _fragments.fs + "m0 7" + _fragments.fs
  }), _react.default.createElement("path", {
    d: _fragments.bal
  }));
};

exports.TwoToneCameraRoll = TwoToneCameraRoll;