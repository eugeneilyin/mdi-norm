"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledViewStream = require("./FilledViewStream");

var _OutlineViewStream = require("./OutlineViewStream");

var _RoundViewStream = require("./RoundViewStream");

var _SharpViewStream = require("./SharpViewStream");

var _TwoToneViewStream = require("./TwoToneViewStream");

var ViewStream =
/*#__PURE__*/
function ViewStream(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledViewStream.FilledViewStream, _OutlineViewStream.OutlineViewStream, _RoundViewStream.RoundViewStream, _SharpViewStream.SharpViewStream, _TwoToneViewStream.TwoToneViewStream);
};

exports.ViewStream = ViewStream;