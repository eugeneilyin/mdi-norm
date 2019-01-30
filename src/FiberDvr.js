import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFiberDvr } from './FilledFiberDvr'
import { OutlineFiberDvr } from './OutlineFiberDvr'
import { RoundFiberDvr } from './RoundFiberDvr'
import { SharpFiberDvr } from './SharpFiberDvr'
import { TwoToneFiberDvr } from './TwoToneFiberDvr'

export const FiberDvr = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFiberDvr, OutlineFiberDvr, RoundFiberDvr, SharpFiberDvr, TwoToneFiberDvr)
