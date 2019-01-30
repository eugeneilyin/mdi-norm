import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderTop } from './FilledBorderTop'
import { OutlineBorderTop } from './OutlineBorderTop'
import { RoundBorderTop } from './RoundBorderTop'
import { SharpBorderTop } from './SharpBorderTop'
import { TwoToneBorderTop } from './TwoToneBorderTop'

export const BorderTop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderTop, OutlineBorderTop, RoundBorderTop, SharpBorderTop, TwoToneBorderTop)
