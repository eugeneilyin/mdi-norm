import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWallpaper } from './FilledWallpaper'
import { OutlineWallpaper } from './OutlineWallpaper'
import { RoundWallpaper } from './RoundWallpaper'
import { SharpWallpaper } from './SharpWallpaper'
import { TwoToneWallpaper } from './TwoToneWallpaper'

export const Wallpaper = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWallpaper, OutlineWallpaper, RoundWallpaper, SharpWallpaper, TwoToneWallpaper)
