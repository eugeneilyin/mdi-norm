"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCloudCircle = require("./FilledCloudCircle");

var _OutlineCloudCircle = require("./OutlineCloudCircle");

var _RoundCloudCircle = require("./RoundCloudCircle");

var _SharpCloudCircle = require("./SharpCloudCircle");

var _TwoToneCloudCircle = require("./TwoToneCloudCircle");

var CloudCircle =
/*#__PURE__*/
function CloudCircle(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCloudCircle.FilledCloudCircle, _OutlineCloudCircle.OutlineCloudCircle, _RoundCloudCircle.RoundCloudCircle, _SharpCloudCircle.SharpCloudCircle, _TwoToneCloudCircle.TwoToneCloudCircle);
};

exports.CloudCircle = CloudCircle;