import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowLeft } from './FilledArrowLeft'
import { OutlineArrowLeft } from './OutlineArrowLeft'
import { RoundArrowLeft } from './RoundArrowLeft'
import { SharpArrowLeft } from './SharpArrowLeft'
import { TwoToneArrowLeft } from './TwoToneArrowLeft'

export const ArrowLeft = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowLeft, OutlineArrowLeft, RoundArrowLeft, SharpArrowLeft, TwoToneArrowLeft)
