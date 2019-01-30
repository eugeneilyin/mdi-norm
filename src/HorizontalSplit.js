import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHorizontalSplit } from './FilledHorizontalSplit'
import { OutlineHorizontalSplit } from './OutlineHorizontalSplit'
import { RoundHorizontalSplit } from './RoundHorizontalSplit'
import { SharpHorizontalSplit } from './SharpHorizontalSplit'
import { TwoToneHorizontalSplit } from './TwoToneHorizontalSplit'

export const HorizontalSplit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHorizontalSplit, OutlineHorizontalSplit, RoundHorizontalSplit, SharpHorizontalSplit, TwoToneHorizontalSplit)
