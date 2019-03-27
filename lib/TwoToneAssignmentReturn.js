"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAssignmentReturn =
/*#__PURE__*/
function TwoToneAssignmentReturn(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 5v14h14V5zm11 9h-4v3l-5-5 5-5v3h4z"
  }), _react.default.createElement("path", {
    d: "M12 7l-5 5 5 5v-3h4v-4h-4zm7-4" + _fragments.mv
  }));
};

exports.TwoToneAssignmentReturn = TwoToneAssignmentReturn;