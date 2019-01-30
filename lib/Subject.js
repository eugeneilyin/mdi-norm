"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledSubject = require("./FilledSubject");

var _OutlineSubject = require("./OutlineSubject");

var _RoundSubject = require("./RoundSubject");

var _SharpSubject = require("./SharpSubject");

var _TwoToneSubject = require("./TwoToneSubject");

var Subject =
/*#__PURE__*/
function Subject(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledSubject.FilledSubject, _OutlineSubject.OutlineSubject, _RoundSubject.RoundSubject, _SharpSubject.SharpSubject, _TwoToneSubject.TwoToneSubject);
};

exports.Subject = Subject;