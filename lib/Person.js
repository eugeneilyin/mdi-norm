"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPerson = require("./FilledPerson");

var _OutlinePerson = require("./OutlinePerson");

var _RoundPerson = require("./RoundPerson");

var _SharpPerson = require("./SharpPerson");

var _TwoTonePerson = require("./TwoTonePerson");

var Person =
/*#__PURE__*/
function Person(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPerson.FilledPerson, _OutlinePerson.OutlinePerson, _RoundPerson.RoundPerson, _SharpPerson.SharpPerson, _TwoTonePerson.TwoTonePerson);
};

exports.Person = Person;