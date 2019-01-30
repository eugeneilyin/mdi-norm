"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsBike = require("./FilledDirectionsBike");

var _OutlineDirectionsBike = require("./OutlineDirectionsBike");

var _RoundDirectionsBike = require("./RoundDirectionsBike");

var _SharpDirectionsBike = require("./SharpDirectionsBike");

var _TwoToneDirectionsBike = require("./TwoToneDirectionsBike");

var DirectionsBike =
/*#__PURE__*/
function DirectionsBike(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsBike.FilledDirectionsBike, _OutlineDirectionsBike.OutlineDirectionsBike, _RoundDirectionsBike.RoundDirectionsBike, _SharpDirectionsBike.SharpDirectionsBike, _TwoToneDirectionsBike.TwoToneDirectionsBike);
};

exports.DirectionsBike = DirectionsBike;