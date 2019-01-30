"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhotoCamera = require("./FilledPhotoCamera");

var _OutlinePhotoCamera = require("./OutlinePhotoCamera");

var _RoundPhotoCamera = require("./RoundPhotoCamera");

var _SharpPhotoCamera = require("./SharpPhotoCamera");

var _TwoTonePhotoCamera = require("./TwoTonePhotoCamera");

var PhotoCamera =
/*#__PURE__*/
function PhotoCamera(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhotoCamera.FilledPhotoCamera, _OutlinePhotoCamera.OutlinePhotoCamera, _RoundPhotoCamera.RoundPhotoCamera, _SharpPhotoCamera.SharpPhotoCamera, _TwoTonePhotoCamera.TwoTonePhotoCamera);
};

exports.PhotoCamera = PhotoCamera;