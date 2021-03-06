"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledPerson =
/*#__PURE__*/
function FilledPerson(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M12 12" + _fragments.cl + "zm0 2" + _fragments.lb
  }));
};

exports.FilledPerson = FilledPerson;