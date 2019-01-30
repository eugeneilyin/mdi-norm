import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVideocam } from './FilledVideocam'
import { OutlineVideocam } from './OutlineVideocam'
import { RoundVideocam } from './RoundVideocam'
import { SharpVideocam } from './SharpVideocam'
import { TwoToneVideocam } from './TwoToneVideocam'

export const Videocam = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVideocam, OutlineVideocam, RoundVideocam, SharpVideocam, TwoToneVideocam)
