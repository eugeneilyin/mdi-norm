"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledMusicNote =
/*#__PURE__*/
function FilledMusicNote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 3v10.55" + _fragments.bel + "V7h4V3z"
  }));
};

exports.FilledMusicNote = FilledMusicNote;