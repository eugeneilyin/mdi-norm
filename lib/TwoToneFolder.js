"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFolder =
/*#__PURE__*/
function TwoToneFolder(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M11.17 8l-.58-.59L9.17 6H4v12h16V8z"
  }), _react.default.createElement("path", {
    d: _fragments.bft + "V6h5.17l1.41 1.41.59.59H20z"
  }));
};

exports.TwoToneFolder = TwoToneFolder;