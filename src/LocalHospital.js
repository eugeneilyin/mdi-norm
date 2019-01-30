import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalHospital } from './FilledLocalHospital'
import { OutlineLocalHospital } from './OutlineLocalHospital'
import { RoundLocalHospital } from './RoundLocalHospital'
import { SharpLocalHospital } from './SharpLocalHospital'
import { TwoToneLocalHospital } from './TwoToneLocalHospital'

export const LocalHospital = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalHospital, OutlineLocalHospital, RoundLocalHospital, SharpLocalHospital, TwoToneLocalHospital)
