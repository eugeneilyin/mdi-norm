import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVerticalAlignTop } from './FilledVerticalAlignTop'
import { OutlineVerticalAlignTop } from './OutlineVerticalAlignTop'
import { RoundVerticalAlignTop } from './RoundVerticalAlignTop'
import { SharpVerticalAlignTop } from './SharpVerticalAlignTop'
import { TwoToneVerticalAlignTop } from './TwoToneVerticalAlignTop'

export const VerticalAlignTop = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVerticalAlignTop, OutlineVerticalAlignTop, RoundVerticalAlignTop, SharpVerticalAlignTop, TwoToneVerticalAlignTop)
