import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVerticalSplit } from './FilledVerticalSplit'
import { OutlineVerticalSplit } from './OutlineVerticalSplit'
import { RoundVerticalSplit } from './RoundVerticalSplit'
import { SharpVerticalSplit } from './SharpVerticalSplit'
import { TwoToneVerticalSplit } from './TwoToneVerticalSplit'

export const VerticalSplit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVerticalSplit, OutlineVerticalSplit, RoundVerticalSplit, SharpVerticalSplit, TwoToneVerticalSplit)
