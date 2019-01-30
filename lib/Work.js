"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledWork = require("./FilledWork");

var _OutlineWork = require("./OutlineWork");

var _RoundWork = require("./RoundWork");

var _SharpWork = require("./SharpWork");

var _TwoToneWork = require("./TwoToneWork");

var Work =
/*#__PURE__*/
function Work(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledWork.FilledWork, _OutlineWork.OutlineWork, _RoundWork.RoundWork, _SharpWork.SharpWork, _TwoToneWork.TwoToneWork);
};

exports.Work = Work;