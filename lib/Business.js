"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBusiness = require("./FilledBusiness");

var _OutlineBusiness = require("./OutlineBusiness");

var _RoundBusiness = require("./RoundBusiness");

var _SharpBusiness = require("./SharpBusiness");

var _TwoToneBusiness = require("./TwoToneBusiness");

var Business =
/*#__PURE__*/
function Business(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBusiness.FilledBusiness, _OutlineBusiness.OutlineBusiness, _RoundBusiness.RoundBusiness, _SharpBusiness.SharpBusiness, _TwoToneBusiness.TwoToneBusiness);
};

exports.Business = Business;