"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledLinkedCamera =
/*#__PURE__*/
function FilledLinkedCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "3.2"
  }), _react.default.createElement("path", {
    d: "M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33"
  }), _react.default.createElement("path", {
    d: "M17 9" + _fragments.cw + "V4H9L7.17 6" + _fragments.gx + "V9zm-5 10" + _fragments.bv
  }));
};

exports.FilledLinkedCamera = FilledLinkedCamera;