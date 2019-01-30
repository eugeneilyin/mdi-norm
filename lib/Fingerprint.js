"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledFingerprint = require("./FilledFingerprint");

var _OutlineFingerprint = require("./OutlineFingerprint");

var _RoundFingerprint = require("./RoundFingerprint");

var _SharpFingerprint = require("./SharpFingerprint");

var _TwoToneFingerprint = require("./TwoToneFingerprint");

var Fingerprint =
/*#__PURE__*/
function Fingerprint(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledFingerprint.FilledFingerprint, _OutlineFingerprint.OutlineFingerprint, _RoundFingerprint.RoundFingerprint, _SharpFingerprint.SharpFingerprint, _TwoToneFingerprint.TwoToneFingerprint);
};

exports.Fingerprint = Fingerprint;