"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledEditAttributes = require("./FilledEditAttributes");

var _OutlineEditAttributes = require("./OutlineEditAttributes");

var _RoundEditAttributes = require("./RoundEditAttributes");

var _SharpEditAttributes = require("./SharpEditAttributes");

var _TwoToneEditAttributes = require("./TwoToneEditAttributes");

var EditAttributes =
/*#__PURE__*/
function EditAttributes(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledEditAttributes.FilledEditAttributes, _OutlineEditAttributes.OutlineEditAttributes, _RoundEditAttributes.RoundEditAttributes, _SharpEditAttributes.SharpEditAttributes, _TwoToneEditAttributes.TwoToneEditAttributes);
};

exports.EditAttributes = EditAttributes;