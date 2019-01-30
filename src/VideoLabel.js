import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVideoLabel } from './FilledVideoLabel'
import { OutlineVideoLabel } from './OutlineVideoLabel'
import { RoundVideoLabel } from './RoundVideoLabel'
import { SharpVideoLabel } from './SharpVideoLabel'
import { TwoToneVideoLabel } from './TwoToneVideoLabel'

export const VideoLabel = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVideoLabel, OutlineVideoLabel, RoundVideoLabel, SharpVideoLabel, TwoToneVideoLabel)
