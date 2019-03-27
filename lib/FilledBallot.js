"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledBallot =
/*#__PURE__*/
function FilledBallot(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M13 9.5h5v-2h-5zm0 7h5v-2h-5zm6 4.5H5" + _fragments.bo + "V5" + _fragments.ez + "h14" + _fragments.cm + "v14" + _fragments.nr + "zM6 11h5V6H6zm1-4h3v3H7zM6 18h5v-5H6zm1-4h3v3H7z"
  }));
};

exports.FilledBallot = FilledBallot;