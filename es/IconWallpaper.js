import { createThemedIcon } from './utils/createThemedIcon';
import { IconWallpaperFilled } from './IconWallpaperFilled';
import { IconWallpaperOutlined } from './IconWallpaperOutlined';
import { IconWallpaperRounded } from './IconWallpaperRounded';
import { IconWallpaperSharp } from './IconWallpaperSharp';
import { IconWallpaperTwoTone } from './IconWallpaperTwoTone';
export var IconWallpaper =
/*#__PURE__*/
function IconWallpaper(props) {
  return createThemedIcon(props, IconWallpaperFilled, IconWallpaperOutlined, IconWallpaperRounded, IconWallpaperSharp, IconWallpaperTwoTone);
};