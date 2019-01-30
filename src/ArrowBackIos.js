import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowBackIos } from './FilledArrowBackIos'
import { OutlineArrowBackIos } from './OutlineArrowBackIos'
import { RoundArrowBackIos } from './RoundArrowBackIos'
import { SharpArrowBackIos } from './SharpArrowBackIos'
import { TwoToneArrowBackIos } from './TwoToneArrowBackIos'

export const ArrowBackIos = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowBackIos, OutlineArrowBackIos, RoundArrowBackIos, SharpArrowBackIos, TwoToneArrowBackIos)
