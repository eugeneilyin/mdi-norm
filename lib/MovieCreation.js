"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMovieCreation = require("./FilledMovieCreation");

var _OutlineMovieCreation = require("./OutlineMovieCreation");

var _RoundMovieCreation = require("./RoundMovieCreation");

var _SharpMovieCreation = require("./SharpMovieCreation");

var _TwoToneMovieCreation = require("./TwoToneMovieCreation");

var MovieCreation =
/*#__PURE__*/
function MovieCreation(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMovieCreation.FilledMovieCreation, _OutlineMovieCreation.OutlineMovieCreation, _RoundMovieCreation.RoundMovieCreation, _SharpMovieCreation.SharpMovieCreation, _TwoToneMovieCreation.TwoToneMovieCreation);
};

exports.MovieCreation = MovieCreation;