"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var FilledDomainDisabled =
/*#__PURE__*/
function FilledDomainDisabled(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    d: "M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6" + _fragments.fs + "M1.3 1.8L.1 3.1 2 5v16h16l3 3 1.3-1.3-21-20.9zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm4 8H8v-2h2zm0-4H8v-2h2zm2 4v-2h2l2 2z"
  }));
};

exports.FilledDomainDisabled = FilledDomainDisabled;