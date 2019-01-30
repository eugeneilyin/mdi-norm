import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowDropUp } from './FilledArrowDropUp'
import { OutlineArrowDropUp } from './OutlineArrowDropUp'
import { RoundArrowDropUp } from './RoundArrowDropUp'
import { SharpArrowDropUp } from './SharpArrowDropUp'
import { TwoToneArrowDropUp } from './TwoToneArrowDropUp'

export const ArrowDropUp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowDropUp, OutlineArrowDropUp, RoundArrowDropUp, SharpArrowDropUp, TwoToneArrowDropUp)
