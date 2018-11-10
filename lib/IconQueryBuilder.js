"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconQueryBuilderFilled = require("./IconQueryBuilderFilled");

var _IconQueryBuilderOutlined = require("./IconQueryBuilderOutlined");

var _IconQueryBuilderRounded = require("./IconQueryBuilderRounded");

var _IconQueryBuilderSharp = require("./IconQueryBuilderSharp");

var _IconQueryBuilderTwoTone = require("./IconQueryBuilderTwoTone");

var IconQueryBuilder =
/*#__PURE__*/
function IconQueryBuilder(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconQueryBuilderFilled.IconQueryBuilderFilled, _IconQueryBuilderOutlined.IconQueryBuilderOutlined, _IconQueryBuilderRounded.IconQueryBuilderRounded, _IconQueryBuilderSharp.IconQueryBuilderSharp, _IconQueryBuilderTwoTone.IconQueryBuilderTwoTone);
};

exports.IconQueryBuilder = IconQueryBuilder;