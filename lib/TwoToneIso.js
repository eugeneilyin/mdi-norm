"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneIso =
/*#__PURE__*/
function TwoToneIso(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 19V5L5 19zm-2-3.5V17h-5v-1.5z"
  }), _react.default.createElement("path", {
    d: "M12 15.5h5V17h-5z" + _fragments.dp + _fragments.bmv
  }));
};

exports.TwoToneIso = TwoToneIso;