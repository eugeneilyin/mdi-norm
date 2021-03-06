"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRecentActors =
/*#__PURE__*/
function TwoToneRecentActors(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 7H3v10h10zM8 8c1.07 0 1.95.87 1.95 1.95 0 1.07-.87 1.95-1.95 1.95s-1.95-.87-1.95-1.95S6.93 8 8 8zm3.89 8H4.11v-.65c0-1.3 2.59-1.95 3.89-1.95s3.89.65 3.89 1.95z"
  }), _react.default.createElement("path", {
    d: "M21 5h2v14h-2zm-4 0h2v14h-2zm-3 14" + _fragments.zi + "H2" + _fragments.bbt + "zM3 7h10v10H3z"
  }), _react.default.createElement("circle", {
    cx: "8",
    cy: "9.94",
    r: "1.95"
  }), _react.default.createElement("path", {
    d: "M8 13.4c-1.3 0-3.89.65-3.89 1.95V16h7.78v-.65c0-1.3-2.59-1.95-3.89-1.95z"
  }));
};

exports.TwoToneRecentActors = TwoToneRecentActors;