import { createThemedIcon } from './utils/createThemedIcon';
import { IconPaletteFilled } from './IconPaletteFilled';
import { IconPaletteOutlined } from './IconPaletteOutlined';
import { IconPaletteRounded } from './IconPaletteRounded';
import { IconPaletteSharp } from './IconPaletteSharp';
import { IconPaletteTwoTone } from './IconPaletteTwoTone';
export var IconPalette =
/*#__PURE__*/
function IconPalette(props) {
  return createThemedIcon(props, IconPaletteFilled, IconPaletteOutlined, IconPaletteRounded, IconPaletteSharp, IconPaletteTwoTone);
};