import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSettingsBackupRestore } from './FilledSettingsBackupRestore'
import { OutlineSettingsBackupRestore } from './OutlineSettingsBackupRestore'
import { RoundSettingsBackupRestore } from './RoundSettingsBackupRestore'
import { SharpSettingsBackupRestore } from './SharpSettingsBackupRestore'
import { TwoToneSettingsBackupRestore } from './TwoToneSettingsBackupRestore'

export const SettingsBackupRestore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSettingsBackupRestore, OutlineSettingsBackupRestore, RoundSettingsBackupRestore, SharpSettingsBackupRestore, TwoToneSettingsBackupRestore)
