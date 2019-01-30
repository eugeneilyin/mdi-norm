"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalGroceryStore = require("./FilledLocalGroceryStore");

var _OutlineLocalGroceryStore = require("./OutlineLocalGroceryStore");

var _RoundLocalGroceryStore = require("./RoundLocalGroceryStore");

var _SharpLocalGroceryStore = require("./SharpLocalGroceryStore");

var _TwoToneLocalGroceryStore = require("./TwoToneLocalGroceryStore");

var LocalGroceryStore =
/*#__PURE__*/
function LocalGroceryStore(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalGroceryStore.FilledLocalGroceryStore, _OutlineLocalGroceryStore.OutlineLocalGroceryStore, _RoundLocalGroceryStore.RoundLocalGroceryStore, _SharpLocalGroceryStore.SharpLocalGroceryStore, _TwoToneLocalGroceryStore.TwoToneLocalGroceryStore);
};

exports.LocalGroceryStore = LocalGroceryStore;