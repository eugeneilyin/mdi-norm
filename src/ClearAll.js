import { createThemedIcon } from './utils/createThemedIcon'
import { FilledClearAll } from './FilledClearAll'
import { OutlineClearAll } from './OutlineClearAll'
import { RoundClearAll } from './RoundClearAll'
import { SharpClearAll } from './SharpClearAll'
import { TwoToneClearAll } from './TwoToneClearAll'

export const ClearAll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledClearAll, OutlineClearAll, RoundClearAll, SharpClearAll, TwoToneClearAll)
