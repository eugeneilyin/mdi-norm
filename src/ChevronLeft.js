import { createThemedIcon } from './utils/createThemedIcon'
import { FilledChevronLeft } from './FilledChevronLeft'
import { OutlineChevronLeft } from './OutlineChevronLeft'
import { RoundChevronLeft } from './RoundChevronLeft'
import { SharpChevronLeft } from './SharpChevronLeft'
import { TwoToneChevronLeft } from './TwoToneChevronLeft'

export const ChevronLeft = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledChevronLeft, OutlineChevronLeft, RoundChevronLeft, SharpChevronLeft, TwoToneChevronLeft)
