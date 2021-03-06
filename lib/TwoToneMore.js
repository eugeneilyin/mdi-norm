"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneMore =
/*#__PURE__*/
function TwoToneMore(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M7.06 5L2.4 12l4.67 7H22V5zM19 10.5" + _fragments.cq + "m-5 0" + _fragments.cq + "m-5 0" + _fragments.cq
  }), _react.default.createElement("path", {
    d: _fragments.ub + "c.36.53.97.89 1.66.89H22" + _fragments.br + "m0 16H7.07L2.4 12l4.66-7H22z"
  }), _react.default.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "1.5"
  }), _react.default.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.5"
  }));
};

exports.TwoToneMore = TwoToneMore;