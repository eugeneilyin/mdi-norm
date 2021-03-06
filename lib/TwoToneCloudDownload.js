"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneCloudDownload =
/*#__PURE__*/
function TwoToneCloudDownload(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: _fragments.li + "M12 17l-4-4h2.55v-3h2.91v3H16z"
  }), _react.default.createElement("path", {
    d: _fragments.de + "m-5.55-8h-2.9v3H8l4 4 4-4h-2.55z"
  }));
};

exports.TwoToneCloudDownload = TwoToneCloudDownload;