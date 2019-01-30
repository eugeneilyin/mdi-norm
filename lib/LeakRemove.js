"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLeakRemove = require("./FilledLeakRemove");

var _OutlineLeakRemove = require("./OutlineLeakRemove");

var _RoundLeakRemove = require("./RoundLeakRemove");

var _SharpLeakRemove = require("./SharpLeakRemove");

var _TwoToneLeakRemove = require("./TwoToneLeakRemove");

var LeakRemove =
/*#__PURE__*/
function LeakRemove(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLeakRemove.FilledLeakRemove, _OutlineLeakRemove.OutlineLeakRemove, _RoundLeakRemove.RoundLeakRemove, _SharpLeakRemove.SharpLeakRemove, _TwoToneLeakRemove.TwoToneLeakRemove);
};

exports.LeakRemove = LeakRemove;