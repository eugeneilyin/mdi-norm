"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundMusicNote =
/*#__PURE__*/
function RoundMusicNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 5v8.55" + _fragments.mz + "V7h2" + _fragments.a + "s-.9-2-2-2h-2" + _fragments.c + "z"
  }));
};

exports.RoundMusicNote = RoundMusicNote;