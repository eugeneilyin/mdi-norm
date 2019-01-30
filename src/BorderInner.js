import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderInner } from './FilledBorderInner'
import { OutlineBorderInner } from './OutlineBorderInner'
import { RoundBorderInner } from './RoundBorderInner'
import { SharpBorderInner } from './SharpBorderInner'
import { TwoToneBorderInner } from './TwoToneBorderInner'

export const BorderInner = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderInner, OutlineBorderInner, RoundBorderInner, SharpBorderInner, TwoToneBorderInner)
