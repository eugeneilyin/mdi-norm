"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneEditLocation =
/*#__PURE__*/
function TwoToneEditLocation(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 3C8.69 3 6 5.69 6 9" + _fragments.vm + "zm-2.05 9.49" + _fragments.sm
  }), _react.default.createElement("path", {
    d: _fragments.bdu
  }));
};

exports.TwoToneEditLocation = TwoToneEditLocation;