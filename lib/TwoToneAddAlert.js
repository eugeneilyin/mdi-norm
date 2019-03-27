"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAddAlert =
/*#__PURE__*/
function TwoToneAddAlert(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 6" + _fragments.qy + "v7h10v-7" + _fragments.js + "zm4 7" + _fragments.blq + "V8h2v3h3z"
  }), _react.default.createElement("path", {
    d: _fragments.lk + "V3" + _fragments.ha + "v1.17" + _fragments.uk + "zm-2 1H7v-7" + _fragments.uj + "s5 2.24 5 5zm-4-7V8" + _fragments.bbd + "z"
  }));
};

exports.TwoToneAddAlert = TwoToneAddAlert;