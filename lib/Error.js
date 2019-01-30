"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledError = require("./FilledError");

var _OutlineError = require("./OutlineError");

var _RoundError = require("./RoundError");

var _SharpError = require("./SharpError");

var _TwoToneError = require("./TwoToneError");

var Error =
/*#__PURE__*/
function Error(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledError.FilledError, _OutlineError.OutlineError, _RoundError.RoundError, _SharpError.SharpError, _TwoToneError.TwoToneError);
};

exports.Error = Error;