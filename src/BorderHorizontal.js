import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderHorizontal } from './FilledBorderHorizontal'
import { OutlineBorderHorizontal } from './OutlineBorderHorizontal'
import { RoundBorderHorizontal } from './RoundBorderHorizontal'
import { SharpBorderHorizontal } from './SharpBorderHorizontal'
import { TwoToneBorderHorizontal } from './TwoToneBorderHorizontal'

export const BorderHorizontal = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderHorizontal, OutlineBorderHorizontal, RoundBorderHorizontal, SharpBorderHorizontal, TwoToneBorderHorizontal)
