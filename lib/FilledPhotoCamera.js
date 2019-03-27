"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledPhotoCamera =
/*#__PURE__*/
function FilledPhotoCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), _react.default.createElement("path", {
    d: "M9 2L7.17 4" + _fragments.gx + "V6" + _fragments.b + "h-3.17L15 2zm3 15" + _fragments.bv
  }));
};

exports.FilledPhotoCamera = FilledPhotoCamera;