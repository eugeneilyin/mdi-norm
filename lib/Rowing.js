"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRowing = require("./FilledRowing");

var _OutlineRowing = require("./OutlineRowing");

var _RoundRowing = require("./RoundRowing");

var _SharpRowing = require("./SharpRowing");

var _TwoToneRowing = require("./TwoToneRowing");

var Rowing =
/*#__PURE__*/
function Rowing(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRowing.FilledRowing, _OutlineRowing.OutlineRowing, _RoundRowing.RoundRowing, _SharpRowing.SharpRowing, _TwoToneRowing.TwoToneRowing);
};

exports.Rowing = Rowing;