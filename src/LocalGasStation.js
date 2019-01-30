import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalGasStation } from './FilledLocalGasStation'
import { OutlineLocalGasStation } from './OutlineLocalGasStation'
import { RoundLocalGasStation } from './RoundLocalGasStation'
import { SharpLocalGasStation } from './SharpLocalGasStation'
import { TwoToneLocalGasStation } from './TwoToneLocalGasStation'

export const LocalGasStation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalGasStation, OutlineLocalGasStation, RoundLocalGasStation, SharpLocalGasStation, TwoToneLocalGasStation)
