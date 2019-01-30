import { objectWithoutProperties } from "./babelHelpers.js";
export var createThemedIcon =
/*#__PURE__*/
function createThemedIcon(_ref, filled, outline, round, sharp, twoTone) {
  var theme = _ref.theme,
      rest = objectWithoutProperties(_ref, ["theme"]);
  return theme === 'outline' ? outline(rest) : theme === 'round' ? round(rest) : theme === 'sharp' ? sharp(rest) : theme === 'two-tone' ? twoTone(rest) : filled(rest);
};