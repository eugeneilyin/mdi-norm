import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBackup } from './FilledBackup'
import { OutlineBackup } from './OutlineBackup'
import { RoundBackup } from './RoundBackup'
import { SharpBackup } from './SharpBackup'
import { TwoToneBackup } from './TwoToneBackup'

export const Backup = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBackup, OutlineBackup, RoundBackup, SharpBackup, TwoToneBackup)
