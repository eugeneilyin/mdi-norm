import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloudOff } from './FilledCloudOff'
import { OutlineCloudOff } from './OutlineCloudOff'
import { RoundCloudOff } from './RoundCloudOff'
import { SharpCloudOff } from './SharpCloudOff'
import { TwoToneCloudOff } from './TwoToneCloudOff'

export const CloudOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloudOff, OutlineCloudOff, RoundCloudOff, SharpCloudOff, TwoToneCloudOff)
