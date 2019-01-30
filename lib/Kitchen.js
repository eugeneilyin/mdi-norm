"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledKitchen = require("./FilledKitchen");

var _OutlineKitchen = require("./OutlineKitchen");

var _RoundKitchen = require("./RoundKitchen");

var _SharpKitchen = require("./SharpKitchen");

var _TwoToneKitchen = require("./TwoToneKitchen");

var Kitchen =
/*#__PURE__*/
function Kitchen(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledKitchen.FilledKitchen, _OutlineKitchen.OutlineKitchen, _RoundKitchen.RoundKitchen, _SharpKitchen.SharpKitchen, _TwoToneKitchen.TwoToneKitchen);
};

exports.Kitchen = Kitchen;