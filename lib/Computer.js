"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledComputer = require("./FilledComputer");

var _OutlineComputer = require("./OutlineComputer");

var _RoundComputer = require("./RoundComputer");

var _SharpComputer = require("./SharpComputer");

var _TwoToneComputer = require("./TwoToneComputer");

var Computer =
/*#__PURE__*/
function Computer(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledComputer.FilledComputer, _OutlineComputer.OutlineComputer, _RoundComputer.RoundComputer, _SharpComputer.SharpComputer, _TwoToneComputer.TwoToneComputer);
};

exports.Computer = Computer;