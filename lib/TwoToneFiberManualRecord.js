"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneFiberManualRecord =
/*#__PURE__*/
function TwoToneFiberManualRecord(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 18" + _fragments.bkl
  }), _react.default.createElement("path", {
    d: "M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-14" + _fragments.bih + "s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"
  }));
};

exports.TwoToneFiberManualRecord = TwoToneFiberManualRecord;