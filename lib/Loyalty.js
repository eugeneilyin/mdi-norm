"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLoyalty = require("./FilledLoyalty");

var _OutlineLoyalty = require("./OutlineLoyalty");

var _RoundLoyalty = require("./RoundLoyalty");

var _SharpLoyalty = require("./SharpLoyalty");

var _TwoToneLoyalty = require("./TwoToneLoyalty");

var Loyalty =
/*#__PURE__*/
function Loyalty(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLoyalty.FilledLoyalty, _OutlineLoyalty.OutlineLoyalty, _RoundLoyalty.RoundLoyalty, _SharpLoyalty.SharpLoyalty, _TwoToneLoyalty.TwoToneLoyalty);
};

exports.Loyalty = Loyalty;