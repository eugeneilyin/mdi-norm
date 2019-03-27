"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneLayersClear =
/*#__PURE__*/
function TwoToneLayersClear(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 13.47l.67-.53-5.02-5.02L6.26 9zm0-8.94l-1.17.91 5.02 5.03L17.74 9z"
  }), _react.default.createElement("path", {
    d: _fragments.qr
  }));
};

exports.TwoToneLayersClear = TwoToneLayersClear;