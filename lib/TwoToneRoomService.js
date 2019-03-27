"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRoomService =
/*#__PURE__*/
function TwoToneRoomService(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13c-1.03-2.58-3.55-4.41-6.5-4.41z"
  }), _react.default.createElement("path", {
    d: "M2 17h20v2H2zm11.84-9.21" + _fragments.sa + "M12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13c1.03-2.58 3.55-4.41 6.5-4.41z"
  }));
};

exports.TwoToneRoomService = TwoToneRoomService;