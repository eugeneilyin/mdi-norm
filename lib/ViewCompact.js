"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewCompact = require("./FilledViewCompact");

var _OutlineViewCompact = require("./OutlineViewCompact");

var _RoundViewCompact = require("./RoundViewCompact");

var _SharpViewCompact = require("./SharpViewCompact");

var _TwoToneViewCompact = require("./TwoToneViewCompact");

var ViewCompact =
/*#__PURE__*/
function ViewCompact(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewCompact.FilledViewCompact, _OutlineViewCompact.OutlineViewCompact, _RoundViewCompact.RoundViewCompact, _SharpViewCompact.SharpViewCompact, _TwoToneViewCompact.TwoToneViewCompact);
};

exports.ViewCompact = ViewCompact;