"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFolderSpecial =
/*#__PURE__*/
function TwoToneFolderSpecial(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M11.17 8l-2-2H4v12h16V8zM15 9l1.19 2.79 3.03.26-2.3 1.99.69 2.96L15 15.47 12.39 17l.69-2.96-2.3-1.99 3.03-.26z"
  }), _react.default.createElement("path", {
    d: _fragments.bbq
  }));
};

exports.TwoToneFolderSpecial = TwoToneFolderSpecial;