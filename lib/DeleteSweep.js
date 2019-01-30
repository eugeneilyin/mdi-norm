"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDeleteSweep = require("./FilledDeleteSweep");

var _OutlineDeleteSweep = require("./OutlineDeleteSweep");

var _RoundDeleteSweep = require("./RoundDeleteSweep");

var _SharpDeleteSweep = require("./SharpDeleteSweep");

var _TwoToneDeleteSweep = require("./TwoToneDeleteSweep");

var DeleteSweep =
/*#__PURE__*/
function DeleteSweep(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDeleteSweep.FilledDeleteSweep, _OutlineDeleteSweep.OutlineDeleteSweep, _RoundDeleteSweep.RoundDeleteSweep, _SharpDeleteSweep.SharpDeleteSweep, _TwoToneDeleteSweep.TwoToneDeleteSweep);
};

exports.DeleteSweep = DeleteSweep;