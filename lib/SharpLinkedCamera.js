"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var SharpLinkedCamera =
/*#__PURE__*/
function SharpLinkedCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "3"
  }), _react.default.createElement("path", {
    d: "M18 8h1.33c0-1.84-1.49-3.33-3.33-3.33V6c1.11 0 2 .89 2 2zH22c0-3.31-2.69-6-6-6v1.33c2.58 0 4.67 2.09 4.67 4.67zM15 7V4H9L7.17 6H2v16h20V9h-5" + _fragments.b + "zm-3 12" + _fragments.bv
  }));
};

exports.SharpLinkedCamera = SharpLinkedCamera;