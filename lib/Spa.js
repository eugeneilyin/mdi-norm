"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSpa = require("./FilledSpa");

var _OutlineSpa = require("./OutlineSpa");

var _RoundSpa = require("./RoundSpa");

var _SharpSpa = require("./SharpSpa");

var _TwoToneSpa = require("./TwoToneSpa");

var Spa =
/*#__PURE__*/
function Spa(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSpa.FilledSpa, _OutlineSpa.OutlineSpa, _RoundSpa.RoundSpa, _SharpSpa.SharpSpa, _TwoToneSpa.TwoToneSpa);
};

exports.Spa = Spa;