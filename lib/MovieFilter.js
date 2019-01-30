"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMovieFilter = require("./FilledMovieFilter");

var _OutlineMovieFilter = require("./OutlineMovieFilter");

var _RoundMovieFilter = require("./RoundMovieFilter");

var _SharpMovieFilter = require("./SharpMovieFilter");

var _TwoToneMovieFilter = require("./TwoToneMovieFilter");

var MovieFilter =
/*#__PURE__*/
function MovieFilter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMovieFilter.FilledMovieFilter, _OutlineMovieFilter.OutlineMovieFilter, _RoundMovieFilter.RoundMovieFilter, _SharpMovieFilter.SharpMovieFilter, _TwoToneMovieFilter.TwoToneMovieFilter);
};

exports.MovieFilter = MovieFilter;