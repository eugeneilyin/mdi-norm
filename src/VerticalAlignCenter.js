import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVerticalAlignCenter } from './FilledVerticalAlignCenter'
import { OutlineVerticalAlignCenter } from './OutlineVerticalAlignCenter'
import { RoundVerticalAlignCenter } from './RoundVerticalAlignCenter'
import { SharpVerticalAlignCenter } from './SharpVerticalAlignCenter'
import { TwoToneVerticalAlignCenter } from './TwoToneVerticalAlignCenter'

export const VerticalAlignCenter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVerticalAlignCenter, OutlineVerticalAlignCenter, RoundVerticalAlignCenter, SharpVerticalAlignCenter, TwoToneVerticalAlignCenter)
