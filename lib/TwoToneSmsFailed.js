"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSmsFailed =
/*#__PURE__*/
function TwoToneSmsFailed(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 17.17L5.17 16H20V4H4zM11 6h2v4h-2zm0 6" + _fragments.fs
  }), _react.default.createElement("path", {
    d: _fragments.kw + _fragments.baa + "m-9-4" + _fragments.fs + "m0-6h2v4h-2z"
  }));
};

exports.TwoToneSmsFailed = TwoToneSmsFailed;