"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconRouterFilled = require("./IconRouterFilled");

var _IconRouterOutlined = require("./IconRouterOutlined");

var _IconRouterRounded = require("./IconRouterRounded");

var _IconRouterSharp = require("./IconRouterSharp");

var _IconRouterTwoTone = require("./IconRouterTwoTone");

var IconRouter =
/*#__PURE__*/
function IconRouter(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconRouterFilled.IconRouterFilled, _IconRouterOutlined.IconRouterOutlined, _IconRouterRounded.IconRouterRounded, _IconRouterSharp.IconRouterSharp, _IconRouterTwoTone.IconRouterTwoTone);
};

exports.IconRouter = IconRouter;