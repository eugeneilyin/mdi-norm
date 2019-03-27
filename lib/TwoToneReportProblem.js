"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneReportProblem =
/*#__PURE__*/
function TwoToneReportProblem(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 5.99L4.47 19h15.06zM13 18" + _fragments.me + "m-2-4v-4h2v4z"
  }), _react.default.createElement("path", {
    d: "M12 2L1 21h22zm0 3.99L19.53 19H4.47zM11 16" + _fragments.fs + "m0-6h2v4h-2z"
  }));
};

exports.TwoToneReportProblem = TwoToneReportProblem;