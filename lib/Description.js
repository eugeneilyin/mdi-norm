"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDescription = require("./FilledDescription");

var _OutlineDescription = require("./OutlineDescription");

var _RoundDescription = require("./RoundDescription");

var _SharpDescription = require("./SharpDescription");

var _TwoToneDescription = require("./TwoToneDescription");

var Description =
/*#__PURE__*/
function Description(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDescription.FilledDescription, _OutlineDescription.OutlineDescription, _RoundDescription.RoundDescription, _SharpDescription.SharpDescription, _TwoToneDescription.TwoToneDescription);
};

exports.Description = Description;