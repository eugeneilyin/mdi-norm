import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalPharmacy } from './FilledLocalPharmacy'
import { OutlineLocalPharmacy } from './OutlineLocalPharmacy'
import { RoundLocalPharmacy } from './RoundLocalPharmacy'
import { SharpLocalPharmacy } from './SharpLocalPharmacy'
import { TwoToneLocalPharmacy } from './TwoToneLocalPharmacy'

export const LocalPharmacy = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalPharmacy, OutlineLocalPharmacy, RoundLocalPharmacy, SharpLocalPharmacy, TwoToneLocalPharmacy)
