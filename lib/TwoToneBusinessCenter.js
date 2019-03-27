"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneBusinessCenter =
/*#__PURE__*/
function TwoToneBusinessCenter(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 17H9v-1H5v3h14v-3h-4zM4 14h5v-3h6v3h5V9H4z"
  }), _react.default.createElement("path", {
    d: _fragments.bew + "m9 14H5v-3h4v1h6v-1h4zm-8-4v-2h2v2zm9-1h-5v-3H9v3H4V9h16z"
  }));
};

exports.TwoToneBusinessCenter = TwoToneBusinessCenter;