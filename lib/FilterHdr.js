"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFilterHdr = require("./FilledFilterHdr");

var _OutlineFilterHdr = require("./OutlineFilterHdr");

var _RoundFilterHdr = require("./RoundFilterHdr");

var _SharpFilterHdr = require("./SharpFilterHdr");

var _TwoToneFilterHdr = require("./TwoToneFilterHdr");

var FilterHdr =
/*#__PURE__*/
function FilterHdr(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFilterHdr.FilledFilterHdr, _OutlineFilterHdr.OutlineFilterHdr, _RoundFilterHdr.RoundFilterHdr, _SharpFilterHdr.SharpFilterHdr, _TwoToneFilterHdr.TwoToneFilterHdr);
};

exports.FilterHdr = FilterHdr;