"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPageview = require("./FilledPageview");

var _OutlinePageview = require("./OutlinePageview");

var _RoundPageview = require("./RoundPageview");

var _SharpPageview = require("./SharpPageview");

var _TwoTonePageview = require("./TwoTonePageview");

var Pageview =
/*#__PURE__*/
function Pageview(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPageview.FilledPageview, _OutlinePageview.OutlinePageview, _RoundPageview.RoundPageview, _SharpPageview.SharpPageview, _TwoTonePageview.TwoTonePageview);
};

exports.Pageview = Pageview;