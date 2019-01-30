import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDoneOutline } from './FilledDoneOutline'
import { OutlineDoneOutline } from './OutlineDoneOutline'
import { RoundDoneOutline } from './RoundDoneOutline'
import { SharpDoneOutline } from './SharpDoneOutline'
import { TwoToneDoneOutline } from './TwoToneDoneOutline'

export const DoneOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDoneOutline, OutlineDoneOutline, RoundDoneOutline, SharpDoneOutline, TwoToneDoneOutline)
