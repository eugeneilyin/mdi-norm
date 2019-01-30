import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeviceUnknown } from './FilledDeviceUnknown'
import { OutlineDeviceUnknown } from './OutlineDeviceUnknown'
import { RoundDeviceUnknown } from './RoundDeviceUnknown'
import { SharpDeviceUnknown } from './SharpDeviceUnknown'
import { TwoToneDeviceUnknown } from './TwoToneDeviceUnknown'

export const DeviceUnknown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeviceUnknown, OutlineDeviceUnknown, RoundDeviceUnknown, SharpDeviceUnknown, TwoToneDeviceUnknown)
