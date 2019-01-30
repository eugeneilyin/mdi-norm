"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPool = require("./FilledPool");

var _OutlinePool = require("./OutlinePool");

var _RoundPool = require("./RoundPool");

var _SharpPool = require("./SharpPool");

var _TwoTonePool = require("./TwoTonePool");

var Pool =
/*#__PURE__*/
function Pool(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPool.FilledPool, _OutlinePool.OutlinePool, _RoundPool.RoundPool, _SharpPool.SharpPool, _TwoTonePool.TwoTonePool);
};

exports.Pool = Pool;