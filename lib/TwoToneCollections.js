"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCollections =
/*#__PURE__*/
function TwoToneCollections(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M8 16h12V4H8zm3.5-4.33l1.69 2.26 2.48-3.09L19 15H9z"
  }), _react.default.createElement("path", {
    d: "M8 2" + _fragments.cy + "h12" + _fragments.eh + "m12 14H8V4h12zm-4.33-5.17l-2.48 3.09-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14" + _fragments.d + "z"
  }));
};

exports.TwoToneCollections = TwoToneCollections;