import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRestore } from './FilledRestore'
import { OutlineRestore } from './OutlineRestore'
import { RoundRestore } from './RoundRestore'
import { SharpRestore } from './SharpRestore'
import { TwoToneRestore } from './TwoToneRestore'

export const Restore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRestore, OutlineRestore, RoundRestore, SharpRestore, TwoToneRestore)
