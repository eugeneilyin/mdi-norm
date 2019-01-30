import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPlusOne } from './FilledPlusOne'
import { OutlinePlusOne } from './OutlinePlusOne'
import { RoundPlusOne } from './RoundPlusOne'
import { SharpPlusOne } from './SharpPlusOne'
import { TwoTonePlusOne } from './TwoTonePlusOne'

export const PlusOne = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPlusOne, OutlinePlusOne, RoundPlusOne, SharpPlusOne, TwoTonePlusOne)
