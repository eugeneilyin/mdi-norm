import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeviceHub } from './FilledDeviceHub'
import { OutlineDeviceHub } from './OutlineDeviceHub'
import { RoundDeviceHub } from './RoundDeviceHub'
import { SharpDeviceHub } from './SharpDeviceHub'
import { TwoToneDeviceHub } from './TwoToneDeviceHub'

export const DeviceHub = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeviceHub, OutlineDeviceHub, RoundDeviceHub, SharpDeviceHub, TwoToneDeviceHub)
