"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledCameraEnhance =
/*#__PURE__*/
function FilledCameraEnhance(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M9 3L7.17 5" + _fragments.gx + "V7" + _fragments.b + "h-3.17L15 3zm3 15" + _fragments.bv
  }), _react.default.createElement("path", {
    d: "M12 17l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"
  }));
};

exports.FilledCameraEnhance = FilledCameraEnhance;