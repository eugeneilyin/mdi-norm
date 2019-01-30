import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDuo } from './FilledDuo'
import { OutlineDuo } from './OutlineDuo'
import { RoundDuo } from './RoundDuo'
import { SharpDuo } from './SharpDuo'
import { TwoToneDuo } from './TwoToneDuo'

export const Duo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDuo, OutlineDuo, RoundDuo, SharpDuo, TwoToneDuo)
