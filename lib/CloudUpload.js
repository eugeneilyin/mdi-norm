"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCloudUpload = require("./FilledCloudUpload");

var _OutlineCloudUpload = require("./OutlineCloudUpload");

var _RoundCloudUpload = require("./RoundCloudUpload");

var _SharpCloudUpload = require("./SharpCloudUpload");

var _TwoToneCloudUpload = require("./TwoToneCloudUpload");

var CloudUpload =
/*#__PURE__*/
function CloudUpload(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCloudUpload.FilledCloudUpload, _OutlineCloudUpload.OutlineCloudUpload, _RoundCloudUpload.RoundCloudUpload, _SharpCloudUpload.SharpCloudUpload, _TwoToneCloudUpload.TwoToneCloudUpload);
};

exports.CloudUpload = CloudUpload;