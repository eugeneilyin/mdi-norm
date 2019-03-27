"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneAnnouncement =
/*#__PURE__*/
function TwoToneAnnouncement(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 4v13.17l.59-.59.58-.58H20V4zm9 11" + _fragments.zt + "V5h2z"
  }), _react.default.createElement("path", {
    d: _fragments.kw + "m0 14H5.17l-.59.59-.58.58V4h16zM11 5h2v6h-2zm0 8" + _fragments.fs
  }));
};

exports.TwoToneAnnouncement = TwoToneAnnouncement;