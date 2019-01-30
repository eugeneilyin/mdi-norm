"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMovie = require("./FilledMovie");

var _OutlineMovie = require("./OutlineMovie");

var _RoundMovie = require("./RoundMovie");

var _SharpMovie = require("./SharpMovie");

var _TwoToneMovie = require("./TwoToneMovie");

var Movie =
/*#__PURE__*/
function Movie(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMovie.FilledMovie, _OutlineMovie.OutlineMovie, _RoundMovie.RoundMovie, _SharpMovie.SharpMovie, _TwoToneMovie.TwoToneMovie);
};

exports.Movie = Movie;