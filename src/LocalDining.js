import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalDining } from './FilledLocalDining'
import { OutlineLocalDining } from './OutlineLocalDining'
import { RoundLocalDining } from './RoundLocalDining'
import { SharpLocalDining } from './SharpLocalDining'
import { TwoToneLocalDining } from './TwoToneLocalDining'

export const LocalDining = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalDining, OutlineLocalDining, RoundLocalDining, SharpLocalDining, TwoToneLocalDining)
