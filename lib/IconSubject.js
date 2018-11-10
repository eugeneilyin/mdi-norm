"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconSubjectFilled = require("./IconSubjectFilled");

var _IconSubjectOutlined = require("./IconSubjectOutlined");

var _IconSubjectRounded = require("./IconSubjectRounded");

var _IconSubjectSharp = require("./IconSubjectSharp");

var _IconSubjectTwoTone = require("./IconSubjectTwoTone");

var IconSubject =
/*#__PURE__*/
function IconSubject(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconSubjectFilled.IconSubjectFilled, _IconSubjectOutlined.IconSubjectOutlined, _IconSubjectRounded.IconSubjectRounded, _IconSubjectSharp.IconSubjectSharp, _IconSubjectTwoTone.IconSubjectTwoTone);
};

exports.IconSubject = IconSubject;