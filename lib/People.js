"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPeople = require("./FilledPeople");

var _OutlinePeople = require("./OutlinePeople");

var _RoundPeople = require("./RoundPeople");

var _SharpPeople = require("./SharpPeople");

var _TwoTonePeople = require("./TwoTonePeople");

var People =
/*#__PURE__*/
function People(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPeople.FilledPeople, _OutlinePeople.OutlinePeople, _RoundPeople.RoundPeople, _SharpPeople.SharpPeople, _TwoTonePeople.TwoTonePeople);
};

exports.People = People;