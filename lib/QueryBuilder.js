"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledQueryBuilder = require("./FilledQueryBuilder");

var _OutlineQueryBuilder = require("./OutlineQueryBuilder");

var _RoundQueryBuilder = require("./RoundQueryBuilder");

var _SharpQueryBuilder = require("./SharpQueryBuilder");

var _TwoToneQueryBuilder = require("./TwoToneQueryBuilder");

var QueryBuilder =
/*#__PURE__*/
function QueryBuilder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledQueryBuilder.FilledQueryBuilder, _OutlineQueryBuilder.OutlineQueryBuilder, _RoundQueryBuilder.RoundQueryBuilder, _SharpQueryBuilder.SharpQueryBuilder, _TwoToneQueryBuilder.TwoToneQueryBuilder);
};

exports.QueryBuilder = QueryBuilder;