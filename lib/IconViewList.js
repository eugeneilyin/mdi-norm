"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconViewListFilled = require("./IconViewListFilled");

var _IconViewListOutlined = require("./IconViewListOutlined");

var _IconViewListRounded = require("./IconViewListRounded");

var _IconViewListSharp = require("./IconViewListSharp");

var _IconViewListTwoTone = require("./IconViewListTwoTone");

var IconViewList =
/*#__PURE__*/
function IconViewList(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconViewListFilled.IconViewListFilled, _IconViewListOutlined.IconViewListOutlined, _IconViewListRounded.IconViewListRounded, _IconViewListSharp.IconViewListSharp, _IconViewListTwoTone.IconViewListTwoTone);
};

exports.IconViewList = IconViewList;