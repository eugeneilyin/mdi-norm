import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalParking } from './FilledLocalParking'
import { OutlineLocalParking } from './OutlineLocalParking'
import { RoundLocalParking } from './RoundLocalParking'
import { SharpLocalParking } from './SharpLocalParking'
import { TwoToneLocalParking } from './TwoToneLocalParking'

export const LocalParking = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalParking, OutlineLocalParking, RoundLocalParking, SharpLocalParking, TwoToneLocalParking)
