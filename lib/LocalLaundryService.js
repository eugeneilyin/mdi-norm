"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalLaundryService = require("./FilledLocalLaundryService");

var _OutlineLocalLaundryService = require("./OutlineLocalLaundryService");

var _RoundLocalLaundryService = require("./RoundLocalLaundryService");

var _SharpLocalLaundryService = require("./SharpLocalLaundryService");

var _TwoToneLocalLaundryService = require("./TwoToneLocalLaundryService");

var LocalLaundryService =
/*#__PURE__*/
function LocalLaundryService(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalLaundryService.FilledLocalLaundryService, _OutlineLocalLaundryService.OutlineLocalLaundryService, _RoundLocalLaundryService.RoundLocalLaundryService, _SharpLocalLaundryService.SharpLocalLaundryService, _TwoToneLocalLaundryService.TwoToneLocalLaundryService);
};

exports.LocalLaundryService = LocalLaundryService;