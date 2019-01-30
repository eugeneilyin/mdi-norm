import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHotTub } from './FilledHotTub'
import { OutlineHotTub } from './OutlineHotTub'
import { RoundHotTub } from './RoundHotTub'
import { SharpHotTub } from './SharpHotTub'
import { TwoToneHotTub } from './TwoToneHotTub'

export const HotTub = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHotTub, OutlineHotTub, RoundHotTub, SharpHotTub, TwoToneHotTub)
