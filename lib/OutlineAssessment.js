"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineAssessment =
/*#__PURE__*/
function OutlineAssessment(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: _fragments.qi + "M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
  }));
};

exports.OutlineAssessment = OutlineAssessment;