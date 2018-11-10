"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _IconPaymentFilled = require("./IconPaymentFilled");

var _IconPaymentOutlined = require("./IconPaymentOutlined");

var _IconPaymentRounded = require("./IconPaymentRounded");

var _IconPaymentSharp = require("./IconPaymentSharp");

var _IconPaymentTwoTone = require("./IconPaymentTwoTone");

var IconPayment =
/*#__PURE__*/
function IconPayment(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _IconPaymentFilled.IconPaymentFilled, _IconPaymentOutlined.IconPaymentOutlined, _IconPaymentRounded.IconPaymentRounded, _IconPaymentSharp.IconPaymentSharp, _IconPaymentTwoTone.IconPaymentTwoTone);
};

exports.IconPayment = IconPayment;