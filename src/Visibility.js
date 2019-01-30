import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVisibility } from './FilledVisibility'
import { OutlineVisibility } from './OutlineVisibility'
import { RoundVisibility } from './RoundVisibility'
import { SharpVisibility } from './SharpVisibility'
import { TwoToneVisibility } from './TwoToneVisibility'

export const Visibility = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVisibility, OutlineVisibility, RoundVisibility, SharpVisibility, TwoToneVisibility)
