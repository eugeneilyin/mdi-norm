"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneRouter =
/*#__PURE__*/
function TwoToneRouter(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M15 15H5v4h14v-4zm-7 3" + _fragments.bpc
  }), _react.default.createElement("path", {
    d: _fragments.pq
  }));
};

exports.TwoToneRouter = TwoToneRouter;