import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDevices } from './FilledDevices'
import { OutlineDevices } from './OutlineDevices'
import { RoundDevices } from './RoundDevices'
import { SharpDevices } from './SharpDevices'
import { TwoToneDevices } from './TwoToneDevices'

export const Devices = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDevices, OutlineDevices, RoundDevices, SharpDevices, TwoToneDevices)
