import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRotateLeft } from './FilledRotateLeft'
import { OutlineRotateLeft } from './OutlineRotateLeft'
import { RoundRotateLeft } from './RoundRotateLeft'
import { SharpRotateLeft } from './SharpRotateLeft'
import { TwoToneRotateLeft } from './TwoToneRotateLeft'

export const RotateLeft = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRotateLeft, OutlineRotateLeft, RoundRotateLeft, SharpRotateLeft, TwoToneRotateLeft)
