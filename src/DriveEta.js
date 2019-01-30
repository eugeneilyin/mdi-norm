import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDriveEta } from './FilledDriveEta'
import { OutlineDriveEta } from './OutlineDriveEta'
import { RoundDriveEta } from './RoundDriveEta'
import { SharpDriveEta } from './SharpDriveEta'
import { TwoToneDriveEta } from './TwoToneDriveEta'

export const DriveEta = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDriveEta, OutlineDriveEta, RoundDriveEta, SharpDriveEta, TwoToneDriveEta)
