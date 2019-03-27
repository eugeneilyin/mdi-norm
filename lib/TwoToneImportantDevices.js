"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneImportantDevices =
/*#__PURE__*/
function TwoToneImportantDevices(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M18 13h5v7h-5z"
  }), _react.default.createElement("path", {
    d: _fragments.bbn + "M2 4h18v5h2V4" + _fragments.gn + "H2C.89 2 0 2.89 0 4v12" + _fragments.cr + "h7v2H7v2h8v-2h-2v-2h2v-2H2zm9 2" + _fragments.xz + "h-3.03z"
  }));
};

exports.TwoToneImportantDevices = TwoToneImportantDevices;