"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledUpdate = require("./FilledUpdate");

var _OutlineUpdate = require("./OutlineUpdate");

var _RoundUpdate = require("./RoundUpdate");

var _SharpUpdate = require("./SharpUpdate");

var _TwoToneUpdate = require("./TwoToneUpdate");

var Update =
/*#__PURE__*/
function Update(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledUpdate.FilledUpdate, _OutlineUpdate.OutlineUpdate, _RoundUpdate.RoundUpdate, _SharpUpdate.SharpUpdate, _TwoToneUpdate.TwoToneUpdate);
};

exports.Update = Update;