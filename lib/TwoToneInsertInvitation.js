"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInsertInvitation =
/*#__PURE__*/
function TwoToneInsertInvitation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 5H5v2h14z"
  }), _react.default.createElement("path", {
    d: "M5 21h14" + _fragments.a + "V5" + _fragments.b + "h-1" + _fragments.mm + "H5c-1.11 0-1.99.9-1.99 2L3 19" + _fragments.cr + "zM5 7V5h14v2zm0 2h14v10H5zm7 3h5v5h-5z"
  }));
};

exports.TwoToneInsertInvitation = TwoToneInsertInvitation;