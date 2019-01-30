"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLeakAdd = require("./FilledLeakAdd");

var _OutlineLeakAdd = require("./OutlineLeakAdd");

var _RoundLeakAdd = require("./RoundLeakAdd");

var _SharpLeakAdd = require("./SharpLeakAdd");

var _TwoToneLeakAdd = require("./TwoToneLeakAdd");

var LeakAdd =
/*#__PURE__*/
function LeakAdd(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLeakAdd.FilledLeakAdd, _OutlineLeakAdd.OutlineLeakAdd, _RoundLeakAdd.RoundLeakAdd, _SharpLeakAdd.SharpLeakAdd, _TwoToneLeakAdd.TwoToneLeakAdd);
};

exports.LeakAdd = LeakAdd;