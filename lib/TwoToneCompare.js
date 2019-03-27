"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCompare =
/*#__PURE__*/
function TwoToneCompare(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M19 5h-5v7l5 6zm-9 13v-6l-5 6z"
  }), _react.default.createElement("path", {
    d: "M19 3h-5v2h5v13l-5-6v9h5" + _fragments.br + "m-7-2h-2v2H5" + _fragments.bd + "h5v2h2zm-2 17H5l5-6z"
  }));
};

exports.TwoToneCompare = TwoToneCompare;