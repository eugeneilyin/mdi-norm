import { createThemedIcon } from './utils/createThemedIcon'
import { FilledImportantDevices } from './FilledImportantDevices'
import { OutlineImportantDevices } from './OutlineImportantDevices'
import { RoundImportantDevices } from './RoundImportantDevices'
import { SharpImportantDevices } from './SharpImportantDevices'
import { TwoToneImportantDevices } from './TwoToneImportantDevices'

export const ImportantDevices = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledImportantDevices, OutlineImportantDevices, RoundImportantDevices, SharpImportantDevices, TwoToneImportantDevices)
