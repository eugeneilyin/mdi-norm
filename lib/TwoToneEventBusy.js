"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEventBusy =
/*#__PURE__*/
function TwoToneEventBusy(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5h14v2H5z"
  }), _react.default.createElement("path", {
    d: _fragments.sj + "m0-12H5V5h14zM9.29 17.47l2.44-2.44 2.44 2.44 1.06-1.06-2.44-2.44 2.44-2.44-1.06-1.06-2.44 2.44-2.44-2.44-1.06 1.06 2.44 2.44-2.44 2.44z"
  }));
};

exports.TwoToneEventBusy = TwoToneEventBusy;