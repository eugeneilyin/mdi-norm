import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReorder } from './FilledReorder'
import { OutlineReorder } from './OutlineReorder'
import { RoundReorder } from './RoundReorder'
import { SharpReorder } from './SharpReorder'
import { TwoToneReorder } from './TwoToneReorder'

export const Reorder = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReorder, OutlineReorder, RoundReorder, SharpReorder, TwoToneReorder)
