"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDomain = require("./FilledDomain");

var _OutlineDomain = require("./OutlineDomain");

var _RoundDomain = require("./RoundDomain");

var _SharpDomain = require("./SharpDomain");

var _TwoToneDomain = require("./TwoToneDomain");

var Domain =
/*#__PURE__*/
function Domain(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDomain.FilledDomain, _OutlineDomain.OutlineDomain, _RoundDomain.RoundDomain, _SharpDomain.SharpDomain, _TwoToneDomain.TwoToneDomain);
};

exports.Domain = Domain;