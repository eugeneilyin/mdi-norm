"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInsertChart =
/*#__PURE__*/
function TwoToneInsertChart(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 5H5v14h14zM9 17" + _fragments.bgv
  }), _react.default.createElement("path", {
    d: "M3 5v14" + _fragments.fm + "V5" + _fragments.b + "H5" + _fragments.c + "zm2 0h14v14H5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
  }));
};

exports.TwoToneInsertChart = TwoToneInsertChart;