"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPlace = require("./FilledPlace");

var _OutlinePlace = require("./OutlinePlace");

var _RoundPlace = require("./RoundPlace");

var _SharpPlace = require("./SharpPlace");

var _TwoTonePlace = require("./TwoTonePlace");

var Place =
/*#__PURE__*/
function Place(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPlace.FilledPlace, _OutlinePlace.OutlinePlace, _RoundPlace.RoundPlace, _SharpPlace.SharpPlace, _TwoTonePlace.TwoTonePlace);
};

exports.Place = Place;