import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRotateRight } from './FilledRotateRight'
import { OutlineRotateRight } from './OutlineRotateRight'
import { RoundRotateRight } from './RoundRotateRight'
import { SharpRotateRight } from './SharpRotateRight'
import { TwoToneRotateRight } from './TwoToneRotateRight'

export const RotateRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRotateRight, OutlineRotateRight, RoundRotateRight, SharpRotateRight, TwoToneRotateRight)
