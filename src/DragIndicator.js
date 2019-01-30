import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDragIndicator } from './FilledDragIndicator'
import { OutlineDragIndicator } from './OutlineDragIndicator'
import { RoundDragIndicator } from './RoundDragIndicator'
import { SharpDragIndicator } from './SharpDragIndicator'
import { TwoToneDragIndicator } from './TwoToneDragIndicator'

export const DragIndicator = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDragIndicator, OutlineDragIndicator, RoundDragIndicator, SharpDragIndicator, TwoToneDragIndicator)
