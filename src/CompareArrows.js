import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCompareArrows } from './FilledCompareArrows'
import { OutlineCompareArrows } from './OutlineCompareArrows'
import { RoundCompareArrows } from './RoundCompareArrows'
import { SharpCompareArrows } from './SharpCompareArrows'
import { TwoToneCompareArrows } from './TwoToneCompareArrows'

export const CompareArrows = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCompareArrows, OutlineCompareArrows, RoundCompareArrows, SharpCompareArrows, TwoToneCompareArrows)
