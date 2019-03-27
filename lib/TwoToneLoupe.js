"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLoupe =
/*#__PURE__*/
function TwoToneLoupe(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-5-9h4V7h2v4h4v2h-4v4h-2v-4H7z"
  }), _react.default.createElement("path", {
    d: "M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5h8" + _fragments.a + "v-8c0-5.51-4.49-10-10-10S2 6.49 2 12s4.49 10 10 10zm0-18" + _fragments.bax + "z"
  }));
};

exports.TwoToneLoupe = TwoToneLoupe;