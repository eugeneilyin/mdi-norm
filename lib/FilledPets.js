"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var FilledPets =
/*#__PURE__*/
function FilledPets(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "4.5",
    cy: "9.5",
    r: "2.5"
  }), _react.default.createElement("circle", {
    cx: "9",
    cy: "5.5",
    r: "2.5"
  }), _react.default.createElement("circle", {
    cx: "15",
    cy: "5.5",
    r: "2.5"
  }), _react.default.createElement("circle", {
    cx: "19.5",
    cy: "9.5",
    r: "2.5"
  }), _react.default.createElement("path", {
    d: "M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"
  }));
};

exports.FilledPets = FilledPets;