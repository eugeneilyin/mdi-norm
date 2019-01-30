"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsCar = require("./FilledDirectionsCar");

var _OutlineDirectionsCar = require("./OutlineDirectionsCar");

var _RoundDirectionsCar = require("./RoundDirectionsCar");

var _SharpDirectionsCar = require("./SharpDirectionsCar");

var _TwoToneDirectionsCar = require("./TwoToneDirectionsCar");

var DirectionsCar =
/*#__PURE__*/
function DirectionsCar(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsCar.FilledDirectionsCar, _OutlineDirectionsCar.OutlineDirectionsCar, _RoundDirectionsCar.RoundDirectionsCar, _SharpDirectionsCar.SharpDirectionsCar, _TwoToneDirectionsCar.TwoToneDirectionsCar);
};

exports.DirectionsCar = DirectionsCar;