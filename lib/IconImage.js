"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconImageFilled = require("./IconImageFilled");

var _IconImageOutlined = require("./IconImageOutlined");

var _IconImageRounded = require("./IconImageRounded");

var _IconImageSharp = require("./IconImageSharp");

var _IconImageTwoTone = require("./IconImageTwoTone");

var IconImage =
/*#__PURE__*/
function IconImage(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconImageFilled.IconImageFilled, _IconImageOutlined.IconImageOutlined, _IconImageRounded.IconImageRounded, _IconImageSharp.IconImageSharp, _IconImageTwoTone.IconImageTwoTone);
};

exports.IconImage = IconImage;