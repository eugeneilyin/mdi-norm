"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneTimerOff =
/*#__PURE__*/
function TwoToneTimerOff(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 6c-1.12 0-2.18.27-3.12.74L11 8.86V8h2v2.86l5.26 5.26c.47-.94.74-2 .74-3.12 0-3.87-3.13-7-7-7zm0 14c1.29 0 2.49-.35 3.52-.96L5.96 9.48C5.35 10.51 5 11.71 5 13c0 3.87 3.13 7 7 7z"
  }), _react.default.createElement("path", {
    d: "M12 6" + _fragments.bio + _fragments.op + "C16.07 4.74 14.12 4 12 4c-1.68 0-3.25.47-4.59 1.27l1.47 1.47c.94-.47 2-.74 3.12-.74zm-1 2v.86l2 2V8zM9 1h6v2H9zM3.16 3.86L1.75 5.27 4.5 8.02C3.56 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.41-1.41z" + _fragments.box
  }));
};

exports.TwoToneTimerOff = TwoToneTimerOff;