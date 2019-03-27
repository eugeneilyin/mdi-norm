"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var OutlineNewReleases =
/*#__PURE__*/
function OutlineNewReleases(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18" + _fragments.rl + "zm-4.51 2.11l.26 2.79-2.74.62-1.43 2.41" + _fragments.bat + "zM11 15" + _fragments.fs + "m0-8h2v6h-2z"
  }));
};

exports.OutlineNewReleases = OutlineNewReleases;