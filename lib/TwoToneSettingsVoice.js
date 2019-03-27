"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneSettingsVoice =
/*#__PURE__*/
function TwoToneSettingsVoice(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 11c.56 0 .99-.44.99-1L13 4" + _fragments.bu + "v6" + _fragments.j + "z"
  }), _react.default.createElement("path", {
    d: "M7 22h2v2H7zm5-9" + _fragments.ou + "L15 4" + _fragments.us
  }));
};

exports.TwoToneSettingsVoice = TwoToneSettingsVoice;