import { createThemedIcon } from './utils/createThemedIcon'
import { FilledChevronRight } from './FilledChevronRight'
import { OutlineChevronRight } from './OutlineChevronRight'
import { RoundChevronRight } from './RoundChevronRight'
import { SharpChevronRight } from './SharpChevronRight'
import { TwoToneChevronRight } from './TwoToneChevronRight'

export const ChevronRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledChevronRight, OutlineChevronRight, RoundChevronRight, SharpChevronRight, TwoToneChevronRight)
