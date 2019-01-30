import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalTaxi } from './FilledLocalTaxi'
import { OutlineLocalTaxi } from './OutlineLocalTaxi'
import { RoundLocalTaxi } from './RoundLocalTaxi'
import { SharpLocalTaxi } from './SharpLocalTaxi'
import { TwoToneLocalTaxi } from './TwoToneLocalTaxi'

export const LocalTaxi = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalTaxi, OutlineLocalTaxi, RoundLocalTaxi, SharpLocalTaxi, TwoToneLocalTaxi)
