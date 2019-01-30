import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermDeviceInformation } from './FilledPermDeviceInformation'
import { OutlinePermDeviceInformation } from './OutlinePermDeviceInformation'
import { RoundPermDeviceInformation } from './RoundPermDeviceInformation'
import { SharpPermDeviceInformation } from './SharpPermDeviceInformation'
import { TwoTonePermDeviceInformation } from './TwoTonePermDeviceInformation'

export const PermDeviceInformation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermDeviceInformation, OutlinePermDeviceInformation, RoundPermDeviceInformation, SharpPermDeviceInformation, TwoTonePermDeviceInformation)
