import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderAll } from './FilledBorderAll'
import { OutlineBorderAll } from './OutlineBorderAll'
import { RoundBorderAll } from './RoundBorderAll'
import { SharpBorderAll } from './SharpBorderAll'
import { TwoToneBorderAll } from './TwoToneBorderAll'

export const BorderAll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderAll, OutlineBorderAll, RoundBorderAll, SharpBorderAll, TwoToneBorderAll)
