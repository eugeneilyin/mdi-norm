"use strict";

var _babelHelpers = require("./utils/babelHelpers.js");

exports.__esModule = true;

var _react = _babelHelpers.interopRequireDefault(require("react"));

var _Icon = require("./Icon");

var _fragments = require("./fragments");

var TwoToneWhereToVote =
/*#__PURE__*/
function TwoToneWhereToVote(props) {
  return _react.default.createElement(_Icon.Icon, props, _react.default.createElement("path", {
    opacity: ".3",
    d: "M12 3C8.69 3 6 5.69 6 9" + _fragments.vm + "zm-1.53 11l-3.18-3.18L8.71 9.4l1.77 1.77 4.6-4.6 1.41 1.41z"
  }), _react.default.createElement("path", {
    d: _fragments.da + "m3.07-13.9l-4.6 4.6L8.71 9.4l-1.42 1.42L10.47 14l6.01-6.01z"
  }));
};

exports.TwoToneWhereToVote = TwoToneWhereToVote;