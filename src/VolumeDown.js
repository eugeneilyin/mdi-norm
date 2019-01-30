import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVolumeDown } from './FilledVolumeDown'
import { OutlineVolumeDown } from './OutlineVolumeDown'
import { RoundVolumeDown } from './RoundVolumeDown'
import { SharpVolumeDown } from './SharpVolumeDown'
import { TwoToneVolumeDown } from './TwoToneVolumeDown'

export const VolumeDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVolumeDown, OutlineVolumeDown, RoundVolumeDown, SharpVolumeDown, TwoToneVolumeDown)
