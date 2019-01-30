import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalShipping } from './FilledLocalShipping'
import { OutlineLocalShipping } from './OutlineLocalShipping'
import { RoundLocalShipping } from './RoundLocalShipping'
import { SharpLocalShipping } from './SharpLocalShipping'
import { TwoToneLocalShipping } from './TwoToneLocalShipping'

export const LocalShipping = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalShipping, OutlineLocalShipping, RoundLocalShipping, SharpLocalShipping, TwoToneLocalShipping)
