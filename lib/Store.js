"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledStore = require("./FilledStore");

var _OutlineStore = require("./OutlineStore");

var _RoundStore = require("./RoundStore");

var _SharpStore = require("./SharpStore");

var _TwoToneStore = require("./TwoToneStore");

var Store =
/*#__PURE__*/
function Store(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledStore.FilledStore, _OutlineStore.OutlineStore, _RoundStore.RoundStore, _SharpStore.SharpStore, _TwoToneStore.TwoToneStore);
};

exports.Store = Store;