import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFreeBreakfast } from './FilledFreeBreakfast'
import { OutlineFreeBreakfast } from './OutlineFreeBreakfast'
import { RoundFreeBreakfast } from './RoundFreeBreakfast'
import { SharpFreeBreakfast } from './SharpFreeBreakfast'
import { TwoToneFreeBreakfast } from './TwoToneFreeBreakfast'

export const FreeBreakfast = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFreeBreakfast, OutlineFreeBreakfast, RoundFreeBreakfast, SharpFreeBreakfast, TwoToneFreeBreakfast)
