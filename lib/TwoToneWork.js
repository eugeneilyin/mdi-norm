"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneWork =
/*#__PURE__*/
function TwoToneWork(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 8h16v11H4z"
  }), _react.default.createElement("path", {
    d: "M20 6h-4V4" + _fragments.cw + "h-4" + _fragments.jk + "v2" + _fragments.ct + "L2 19" + _fragments.ej + "M10 4h4v2h-4zm10 15H4V8h16z"
  }));
};

exports.TwoToneWork = TwoToneWork;