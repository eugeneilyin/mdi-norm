"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalConvenienceStore = require("./FilledLocalConvenienceStore");

var _OutlineLocalConvenienceStore = require("./OutlineLocalConvenienceStore");

var _RoundLocalConvenienceStore = require("./RoundLocalConvenienceStore");

var _SharpLocalConvenienceStore = require("./SharpLocalConvenienceStore");

var _TwoToneLocalConvenienceStore = require("./TwoToneLocalConvenienceStore");

var LocalConvenienceStore =
/*#__PURE__*/
function LocalConvenienceStore(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalConvenienceStore.FilledLocalConvenienceStore, _OutlineLocalConvenienceStore.OutlineLocalConvenienceStore, _RoundLocalConvenienceStore.RoundLocalConvenienceStore, _SharpLocalConvenienceStore.SharpLocalConvenienceStore, _TwoToneLocalConvenienceStore.TwoToneLocalConvenienceStore);
};

exports.LocalConvenienceStore = LocalConvenienceStore;