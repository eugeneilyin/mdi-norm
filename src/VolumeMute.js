import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVolumeMute } from './FilledVolumeMute'
import { OutlineVolumeMute } from './OutlineVolumeMute'
import { RoundVolumeMute } from './RoundVolumeMute'
import { SharpVolumeMute } from './SharpVolumeMute'
import { TwoToneVolumeMute } from './TwoToneVolumeMute'

export const VolumeMute = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVolumeMute, OutlineVolumeMute, RoundVolumeMute, SharpVolumeMute, TwoToneVolumeMute)
