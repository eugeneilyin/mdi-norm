"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsBus = require("./FilledDirectionsBus");

var _OutlineDirectionsBus = require("./OutlineDirectionsBus");

var _RoundDirectionsBus = require("./RoundDirectionsBus");

var _SharpDirectionsBus = require("./SharpDirectionsBus");

var _TwoToneDirectionsBus = require("./TwoToneDirectionsBus");

var DirectionsBus =
/*#__PURE__*/
function DirectionsBus(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsBus.FilledDirectionsBus, _OutlineDirectionsBus.OutlineDirectionsBus, _RoundDirectionsBus.RoundDirectionsBus, _SharpDirectionsBus.SharpDirectionsBus, _TwoToneDirectionsBus.TwoToneDirectionsBus);
};

exports.DirectionsBus = DirectionsBus;