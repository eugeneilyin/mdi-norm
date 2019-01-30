import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFullscreen } from './FilledFullscreen'
import { OutlineFullscreen } from './OutlineFullscreen'
import { RoundFullscreen } from './RoundFullscreen'
import { SharpFullscreen } from './SharpFullscreen'
import { TwoToneFullscreen } from './TwoToneFullscreen'

export const Fullscreen = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFullscreen, OutlineFullscreen, RoundFullscreen, SharpFullscreen, TwoToneFullscreen)
