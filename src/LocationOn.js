import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocationOn } from './FilledLocationOn'
import { OutlineLocationOn } from './OutlineLocationOn'
import { RoundLocationOn } from './RoundLocationOn'
import { SharpLocationOn } from './SharpLocationOn'
import { TwoToneLocationOn } from './TwoToneLocationOn'

export const LocationOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocationOn, OutlineLocationOn, RoundLocationOn, SharpLocationOn, TwoToneLocationOn)
