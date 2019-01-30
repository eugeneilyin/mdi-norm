import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVolumeOff } from './FilledVolumeOff'
import { OutlineVolumeOff } from './OutlineVolumeOff'
import { RoundVolumeOff } from './RoundVolumeOff'
import { SharpVolumeOff } from './SharpVolumeOff'
import { TwoToneVolumeOff } from './TwoToneVolumeOff'

export const VolumeOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVolumeOff, OutlineVolumeOff, RoundVolumeOff, SharpVolumeOff, TwoToneVolumeOff)
