"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneImageSearch =
/*#__PURE__*/
function TwoToneImageSearch(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M17.7 11.53c-.7.31-1.45.47-2.21.47C12.46 12 10 9.53 10 6.5c0-.17.01-.34.03-.5H4v14h14v-8.17zM5.5 18l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18z"
  }), _react.default.createElement("path", {
    d: "M10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 6.5" + _fragments.qv + "c.44-.7.7-1.51.7-2.39" + _fragments.qw + "M18 20H4V6h6.03c.06-.72.27-1.39.58-2H4" + _fragments.be + "v-6.17l-2-2z"
  }));
};

exports.TwoToneImageSearch = TwoToneImageSearch;