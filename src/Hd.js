import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHd } from './FilledHd'
import { OutlineHd } from './OutlineHd'
import { RoundHd } from './RoundHd'
import { SharpHd } from './SharpHd'
import { TwoToneHd } from './TwoToneHd'

export const Hd = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHd, OutlineHd, RoundHd, SharpHd, TwoToneHd)
