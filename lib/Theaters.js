"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTheaters = require("./FilledTheaters");

var _OutlineTheaters = require("./OutlineTheaters");

var _RoundTheaters = require("./RoundTheaters");

var _SharpTheaters = require("./SharpTheaters");

var _TwoToneTheaters = require("./TwoToneTheaters");

var Theaters =
/*#__PURE__*/
function Theaters(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTheaters.FilledTheaters, _OutlineTheaters.OutlineTheaters, _RoundTheaters.RoundTheaters, _SharpTheaters.SharpTheaters, _TwoToneTheaters.TwoToneTheaters);
};

exports.Theaters = Theaters;