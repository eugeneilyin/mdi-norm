import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLoop } from './FilledLoop'
import { OutlineLoop } from './OutlineLoop'
import { RoundLoop } from './RoundLoop'
import { SharpLoop } from './SharpLoop'
import { TwoToneLoop } from './TwoToneLoop'

export const Loop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLoop, OutlineLoop, RoundLoop, SharpLoop, TwoToneLoop)
