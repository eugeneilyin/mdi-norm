"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCloudDone =
/*#__PURE__*/
function TwoToneCloudDone(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.li + "M10 17l-3.5-3.5 1.41-1.41L10 14.18l4.6-4.6 1.41 1.41z"
  }), _react.default.createElement("path", {
    d: _fragments.de + "m-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"
  }));
};

exports.TwoToneCloudDone = TwoToneCloudDone;