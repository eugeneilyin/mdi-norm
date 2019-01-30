"use strict";

var _babelHelpers = require("./babelHelpers.js");

exports.__esModule = true;

var createThemedIcon =
/*#__PURE__*/
function createThemedIcon(_ref, filled, outline, round, sharp, twoTone) {
  var theme = _ref.theme,
      rest = _babelHelpers.objectWithoutProperties(_ref, ["theme"]);

  return theme === 'outline' ? outline(rest) : theme === 'round' ? round(rest) : theme === 'sharp' ? sharp(rest) : theme === 'two-tone' ? twoTone(rest) : filled(rest);
};

exports.createThemedIcon = createThemedIcon;