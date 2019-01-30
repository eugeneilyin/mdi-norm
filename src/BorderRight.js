import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBorderRight } from './FilledBorderRight'
import { OutlineBorderRight } from './OutlineBorderRight'
import { RoundBorderRight } from './RoundBorderRight'
import { SharpBorderRight } from './SharpBorderRight'
import { TwoToneBorderRight } from './TwoToneBorderRight'

export const BorderRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBorderRight, OutlineBorderRight, RoundBorderRight, SharpBorderRight, TwoToneBorderRight)
