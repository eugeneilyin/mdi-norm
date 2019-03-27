"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEdit =
/*#__PURE__*/
function TwoToneEdit(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M5 18.08V19h.92l9.06-9.06-.92-.92z"
  }), _react.default.createElement("path", {
    d: "M20.71 7.04" + _fragments.fo + _fragments.bnx + "l-1.83 1.83 3.75 3.75 1.83-1.83z" + _fragments.bjb + "M5.92 19H5v-.92l9.06-9.06.92.92z"
  }));
};

exports.TwoToneEdit = TwoToneEdit;