import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVerticalAlignBottom } from './FilledVerticalAlignBottom'
import { OutlineVerticalAlignBottom } from './OutlineVerticalAlignBottom'
import { RoundVerticalAlignBottom } from './RoundVerticalAlignBottom'
import { SharpVerticalAlignBottom } from './SharpVerticalAlignBottom'
import { TwoToneVerticalAlignBottom } from './TwoToneVerticalAlignBottom'

export const VerticalAlignBottom = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVerticalAlignBottom, OutlineVerticalAlignBottom, RoundVerticalAlignBottom, SharpVerticalAlignBottom, TwoToneVerticalAlignBottom)
