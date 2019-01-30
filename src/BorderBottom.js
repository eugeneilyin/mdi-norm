import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderBottom } from './FilledBorderBottom'
import { OutlineBorderBottom } from './OutlineBorderBottom'
import { RoundBorderBottom } from './RoundBorderBottom'
import { SharpBorderBottom } from './SharpBorderBottom'
import { TwoToneBorderBottom } from './TwoToneBorderBottom'

export const BorderBottom = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderBottom, OutlineBorderBottom, RoundBorderBottom, SharpBorderBottom, TwoToneBorderBottom)
