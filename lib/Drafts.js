"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDrafts = require("./FilledDrafts");

var _OutlineDrafts = require("./OutlineDrafts");

var _RoundDrafts = require("./RoundDrafts");

var _SharpDrafts = require("./SharpDrafts");

var _TwoToneDrafts = require("./TwoToneDrafts");

var Drafts =
/*#__PURE__*/
function Drafts(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDrafts.FilledDrafts, _OutlineDrafts.OutlineDrafts, _RoundDrafts.RoundDrafts, _SharpDrafts.SharpDrafts, _TwoToneDrafts.TwoToneDrafts);
};

exports.Drafts = Drafts;