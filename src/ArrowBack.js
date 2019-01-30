import { createThemedIcon } from './utils/createThemedIcon'
import { FilledArrowBack } from './FilledArrowBack'
import { OutlineArrowBack } from './OutlineArrowBack'
import { RoundArrowBack } from './RoundArrowBack'
import { SharpArrowBack } from './SharpArrowBack'
import { TwoToneArrowBack } from './TwoToneArrowBack'

export const ArrowBack = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledArrowBack, OutlineArrowBack, RoundArrowBack, SharpArrowBack, TwoToneArrowBack)
