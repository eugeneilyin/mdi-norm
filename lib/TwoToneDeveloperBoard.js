"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneDeveloperBoard =
/*#__PURE__*/
function TwoToneDeveloperBoard(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M4 19h14V5H4zm8-12h4v3h-4zm0 4h4v6h-4zM6 7h5v5H6zm0 6h5v4H6z"
  }), _react.default.createElement("path", {
    d: "M6 13h5v4H6zm0-6h5v5H6zm6 0h4v3h-4zm0 4h4v6h-4zm10-2V7h-2V5" + _fragments.b + "H4" + _fragments.be + "v-2h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14z"
  }));
};

exports.TwoToneDeveloperBoard = TwoToneDeveloperBoard;