"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledRouter = require("./FilledRouter");

var _OutlineRouter = require("./OutlineRouter");

var _RoundRouter = require("./RoundRouter");

var _SharpRouter = require("./SharpRouter");

var _TwoToneRouter = require("./TwoToneRouter");

var Router =
/*#__PURE__*/
function Router(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledRouter.FilledRouter, _OutlineRouter.OutlineRouter, _RoundRouter.RoundRouter, _SharpRouter.SharpRouter, _TwoToneRouter.TwoToneRouter);
};

exports.Router = Router;