"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCreateNewFolder =
/*#__PURE__*/
function TwoToneCreateNewFolder(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M11.17 8L9.17 6H4v12h16V8zM14 10h2v2h2v2h-2v2h-2v-2" + _fragments.me
  }), _react.default.createElement("path", {
    d: "M20 6h-8l-2-2" + _fragments.ct + "L2 18" + _fragments.ej + "m0 12H4V6h5.17l1.41 1.41.59.59H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"
  }));
};

exports.TwoToneCreateNewFolder = TwoToneCreateNewFolder;