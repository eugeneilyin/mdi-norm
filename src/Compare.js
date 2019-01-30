import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCompare } from './FilledCompare'
import { OutlineCompare } from './OutlineCompare'
import { RoundCompare } from './RoundCompare'
import { SharpCompare } from './SharpCompare'
import { TwoToneCompare } from './TwoToneCompare'

export const Compare = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCompare, OutlineCompare, RoundCompare, SharpCompare, TwoToneCompare)
