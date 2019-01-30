import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHdrOn } from './FilledHdrOn'
import { OutlineHdrOn } from './OutlineHdrOn'
import { RoundHdrOn } from './RoundHdrOn'
import { SharpHdrOn } from './SharpHdrOn'
import { TwoToneHdrOn } from './TwoToneHdrOn'

export const HdrOn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHdrOn, OutlineHdrOn, RoundHdrOn, SharpHdrOn, TwoToneHdrOn)
