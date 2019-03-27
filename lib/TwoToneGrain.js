"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneGrain =
/*#__PURE__*/
function TwoToneGrain(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M18 8" + _fragments.dg + "m0 8" + _fragments.dg + "M6 8" + _fragments.dn + "m8 0" + _fragments.dn + "m-4 8" + _fragments.dg + "m0-12" + _fragments.dn + "m4 12" + _fragments.dn + "m-8 4" + _fragments.dg
  }));
};

exports.TwoToneGrain = TwoToneGrain;