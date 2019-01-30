"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVerifiedUser = require("./FilledVerifiedUser");

var _OutlineVerifiedUser = require("./OutlineVerifiedUser");

var _RoundVerifiedUser = require("./RoundVerifiedUser");

var _SharpVerifiedUser = require("./SharpVerifiedUser");

var _TwoToneVerifiedUser = require("./TwoToneVerifiedUser");

var VerifiedUser =
/*#__PURE__*/
function VerifiedUser(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVerifiedUser.FilledVerifiedUser, _OutlineVerifiedUser.OutlineVerifiedUser, _RoundVerifiedUser.RoundVerifiedUser, _SharpVerifiedUser.SharpVerifiedUser, _TwoToneVerifiedUser.TwoToneVerifiedUser);
};

exports.VerifiedUser = VerifiedUser;