import { createThemedIcon } from './utils/createThemedIcon'
import { IconWallpaperFilled } from './IconWallpaperFilled'
import { IconWallpaperOutlined } from './IconWallpaperOutlined'
import { IconWallpaperRounded } from './IconWallpaperRounded'
import { IconWallpaperSharp } from './IconWallpaperSharp'
import { IconWallpaperTwoTone } from './IconWallpaperTwoTone'

export const IconWallpaper = /*#__PURE__*/ props =>
  createThemedIcon(props, IconWallpaperFilled, IconWallpaperOutlined, IconWallpaperRounded, IconWallpaperSharp, IconWallpaperTwoTone)
