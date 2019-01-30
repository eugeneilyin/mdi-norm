"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCollections = require("./FilledCollections");

var _OutlineCollections = require("./OutlineCollections");

var _RoundCollections = require("./RoundCollections");

var _SharpCollections = require("./SharpCollections");

var _TwoToneCollections = require("./TwoToneCollections");

var Collections =
/*#__PURE__*/
function Collections(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCollections.FilledCollections, _OutlineCollections.OutlineCollections, _RoundCollections.RoundCollections, _SharpCollections.SharpCollections, _TwoToneCollections.TwoToneCollections);
};

exports.Collections = Collections;