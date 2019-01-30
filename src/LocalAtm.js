import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalAtm } from './FilledLocalAtm'
import { OutlineLocalAtm } from './OutlineLocalAtm'
import { RoundLocalAtm } from './RoundLocalAtm'
import { SharpLocalAtm } from './SharpLocalAtm'
import { TwoToneLocalAtm } from './TwoToneLocalAtm'

export const LocalAtm = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalAtm, OutlineLocalAtm, RoundLocalAtm, SharpLocalAtm, TwoToneLocalAtm)
