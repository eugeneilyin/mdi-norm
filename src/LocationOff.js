import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocationOff } from './FilledLocationOff'
import { OutlineLocationOff } from './OutlineLocationOff'
import { RoundLocationOff } from './RoundLocationOff'
import { SharpLocationOff } from './SharpLocationOff'
import { TwoToneLocationOff } from './TwoToneLocationOff'

export const LocationOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocationOff, OutlineLocationOff, RoundLocationOff, SharpLocationOff, TwoToneLocationOff)
