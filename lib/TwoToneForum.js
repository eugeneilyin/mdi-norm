"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneForum =
/*#__PURE__*/
function TwoToneForum(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 11V4H4v8.17L5.17 11z"
  }), _react.default.createElement("path", {
    d: "M16 13" + _fragments.f + "V3" + _fragments.g + "H3" + _fragments.e + "v14l4-4zm-12-.83V4h11v7H5.17zM22 7" + _fragments.g + "h-2v9H6v2" + _fragments.j + "h11l4 4z"
  }));
};

exports.TwoToneForum = TwoToneForum;