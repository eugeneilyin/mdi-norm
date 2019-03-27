"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var RoundPhotoCamera =
/*#__PURE__*/
function RoundPhotoCamera(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), _react.default.createElement("path", {
    d: "M20 4" + _fragments.qp + "L7.17 4" + _fragments.na + "m-8 13" + _fragments.bv
  }));
};

exports.RoundPhotoCamera = RoundPhotoCamera;