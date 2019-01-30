import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDone } from './FilledDone'
import { OutlineDone } from './OutlineDone'
import { RoundDone } from './RoundDone'
import { SharpDone } from './SharpDone'
import { TwoToneDone } from './TwoToneDone'

export const Done = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDone, OutlineDone, RoundDone, SharpDone, TwoToneDone)
