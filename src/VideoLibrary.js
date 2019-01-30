import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVideoLibrary } from './FilledVideoLibrary'
import { OutlineVideoLibrary } from './OutlineVideoLibrary'
import { RoundVideoLibrary } from './RoundVideoLibrary'
import { SharpVideoLibrary } from './SharpVideoLibrary'
import { TwoToneVideoLibrary } from './TwoToneVideoLibrary'

export const VideoLibrary = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVideoLibrary, OutlineVideoLibrary, RoundVideoLibrary, SharpVideoLibrary, TwoToneVideoLibrary)
