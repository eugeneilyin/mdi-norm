"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneChildFriendly =
/*#__PURE__*/
function TwoToneChildFriendly(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 4.34V8h3.66C18.05 6.3 16.7 4.95 15 4.34zM8.04 14.36l.44.67c1.19.16 2.19.92 2.68 1.97h2.68c.56-1.18 1.77-2 3.16-2 .15 0 .31.01.46.03l.29-.37c.4-.51.7-1.07.92-1.66H7.37c.32.67.57 1.19.67 1.36z"
  }), _react.default.createElement("path", {
    d: _fragments.hg
  }));
};

exports.TwoToneChildFriendly = TwoToneChildFriendly;