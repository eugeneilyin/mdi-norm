import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDoneAll } from './FilledDoneAll'
import { OutlineDoneAll } from './OutlineDoneAll'
import { RoundDoneAll } from './RoundDoneAll'
import { SharpDoneAll } from './SharpDoneAll'
import { TwoToneDoneAll } from './TwoToneDoneAll'

export const DoneAll = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDoneAll, OutlineDoneAll, RoundDoneAll, SharpDoneAll, TwoToneDoneAll)
