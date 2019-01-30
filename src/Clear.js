import { createThemedIcon } from './utils/createThemedIcon'
import { FilledClear } from './FilledClear'
import { OutlineClear } from './OutlineClear'
import { RoundClear } from './RoundClear'
import { SharpClear } from './SharpClear'
import { TwoToneClear } from './TwoToneClear'

export const Clear = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledClear, OutlineClear, RoundClear, SharpClear, TwoToneClear)
