"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledToc = require("./FilledToc");

var _OutlineToc = require("./OutlineToc");

var _RoundToc = require("./RoundToc");

var _SharpToc = require("./SharpToc");

var _TwoToneToc = require("./TwoToneToc");

var Toc =
/*#__PURE__*/
function Toc(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledToc.FilledToc, _OutlineToc.OutlineToc, _RoundToc.RoundToc, _SharpToc.SharpToc, _TwoToneToc.TwoToneToc);
};

exports.Toc = Toc;