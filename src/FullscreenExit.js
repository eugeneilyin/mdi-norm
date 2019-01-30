import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFullscreenExit } from './FilledFullscreenExit'
import { OutlineFullscreenExit } from './OutlineFullscreenExit'
import { RoundFullscreenExit } from './RoundFullscreenExit'
import { SharpFullscreenExit } from './SharpFullscreenExit'
import { TwoToneFullscreenExit } from './TwoToneFullscreenExit'

export const FullscreenExit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFullscreenExit, OutlineFullscreenExit, RoundFullscreenExit, SharpFullscreenExit, TwoToneFullscreenExit)
