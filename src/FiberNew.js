import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFiberNew } from './FilledFiberNew'
import { OutlineFiberNew } from './OutlineFiberNew'
import { RoundFiberNew } from './RoundFiberNew'
import { SharpFiberNew } from './SharpFiberNew'
import { TwoToneFiberNew } from './TwoToneFiberNew'

export const FiberNew = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFiberNew, OutlineFiberNew, RoundFiberNew, SharpFiberNew, TwoToneFiberNew)
