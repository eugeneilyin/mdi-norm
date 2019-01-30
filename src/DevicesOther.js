import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDevicesOther } from './FilledDevicesOther'
import { OutlineDevicesOther } from './OutlineDevicesOther'
import { RoundDevicesOther } from './RoundDevicesOther'
import { SharpDevicesOther } from './SharpDevicesOther'
import { TwoToneDevicesOther } from './TwoToneDevicesOther'

export const DevicesOther = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDevicesOther, OutlineDevicesOther, RoundDevicesOther, SharpDevicesOther, TwoToneDevicesOther)
