"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocationSearching = require("./FilledLocationSearching");

var _OutlineLocationSearching = require("./OutlineLocationSearching");

var _RoundLocationSearching = require("./RoundLocationSearching");

var _SharpLocationSearching = require("./SharpLocationSearching");

var _TwoToneLocationSearching = require("./TwoToneLocationSearching");

var LocationSearching =
/*#__PURE__*/
function LocationSearching(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocationSearching.FilledLocationSearching, _OutlineLocationSearching.OutlineLocationSearching, _RoundLocationSearching.RoundLocationSearching, _SharpLocationSearching.SharpLocationSearching, _TwoToneLocationSearching.TwoToneLocationSearching);
};

exports.LocationSearching = LocationSearching;