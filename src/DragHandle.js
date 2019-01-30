import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDragHandle } from './FilledDragHandle'
import { OutlineDragHandle } from './OutlineDragHandle'
import { RoundDragHandle } from './RoundDragHandle'
import { SharpDragHandle } from './SharpDragHandle'
import { TwoToneDragHandle } from './TwoToneDragHandle'

export const DragHandle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDragHandle, OutlineDragHandle, RoundDragHandle, SharpDragHandle, TwoToneDragHandle)
