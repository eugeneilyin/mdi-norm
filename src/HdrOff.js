import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHdrOff } from './FilledHdrOff'
import { OutlineHdrOff } from './OutlineHdrOff'
import { RoundHdrOff } from './RoundHdrOff'
import { SharpHdrOff } from './SharpHdrOff'
import { TwoToneHdrOff } from './TwoToneHdrOff'

export const HdrOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHdrOff, OutlineHdrOff, RoundHdrOff, SharpHdrOff, TwoToneHdrOff)
