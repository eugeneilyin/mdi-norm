import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVolumeUp } from './FilledVolumeUp'
import { OutlineVolumeUp } from './OutlineVolumeUp'
import { RoundVolumeUp } from './RoundVolumeUp'
import { SharpVolumeUp } from './SharpVolumeUp'
import { TwoToneVolumeUp } from './TwoToneVolumeUp'

export const VolumeUp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVolumeUp, OutlineVolumeUp, RoundVolumeUp, SharpVolumeUp, TwoToneVolumeUp)
