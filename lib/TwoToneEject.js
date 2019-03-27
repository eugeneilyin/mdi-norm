"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var TwoToneEject =
/*#__PURE__*/
function TwoToneEject(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 8.6L9.07 13h5.86z"
  }), _react.default.createElement("path", {
    d: "M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6l2.93 4.4H9.07z"
  }));
};

exports.TwoToneEject = TwoToneEject;