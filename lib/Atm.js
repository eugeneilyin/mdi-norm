"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAtm = require("./FilledAtm");

var _OutlineAtm = require("./OutlineAtm");

var _RoundAtm = require("./RoundAtm");

var _SharpAtm = require("./SharpAtm");

var _TwoToneAtm = require("./TwoToneAtm");

var Atm =
/*#__PURE__*/
function Atm(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAtm.FilledAtm, _OutlineAtm.OutlineAtm, _RoundAtm.RoundAtm, _SharpAtm.SharpAtm, _TwoToneAtm.TwoToneAtm);
};

exports.Atm = Atm;