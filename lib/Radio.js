"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRadio = require("./FilledRadio");

var _OutlineRadio = require("./OutlineRadio");

var _RoundRadio = require("./RoundRadio");

var _SharpRadio = require("./SharpRadio");

var _TwoToneRadio = require("./TwoToneRadio");

var Radio =
/*#__PURE__*/
function Radio(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRadio.FilledRadio, _OutlineRadio.OutlineRadio, _RoundRadio.RoundRadio, _SharpRadio.SharpRadio, _TwoToneRadio.TwoToneRadio);
};

exports.Radio = Radio;