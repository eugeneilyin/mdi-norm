"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalMovies = require("./FilledLocalMovies");

var _OutlineLocalMovies = require("./OutlineLocalMovies");

var _RoundLocalMovies = require("./RoundLocalMovies");

var _SharpLocalMovies = require("./SharpLocalMovies");

var _TwoToneLocalMovies = require("./TwoToneLocalMovies");

var LocalMovies =
/*#__PURE__*/
function LocalMovies(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalMovies.FilledLocalMovies, _OutlineLocalMovies.OutlineLocalMovies, _RoundLocalMovies.RoundLocalMovies, _SharpLocalMovies.SharpLocalMovies, _TwoToneLocalMovies.TwoToneLocalMovies);
};

exports.LocalMovies = LocalMovies;