"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneInsertDriveFile =
/*#__PURE__*/
function TwoToneInsertDriveFile(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M13 4H6v16h12V9h-5z"
  }), _react.default.createElement("path", {
    d: "M20 8l-6-6H6" + _fragments.bm + "L4 20" + _fragments.lt + "zm-2 12H6V4h7v5h5z"
  }));
};

exports.TwoToneInsertDriveFile = TwoToneInsertDriveFile;