import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVisibilityOff } from './FilledVisibilityOff'
import { OutlineVisibilityOff } from './OutlineVisibilityOff'
import { RoundVisibilityOff } from './RoundVisibilityOff'
import { SharpVisibilityOff } from './SharpVisibilityOff'
import { TwoToneVisibilityOff } from './TwoToneVisibilityOff'

export const VisibilityOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVisibilityOff, OutlineVisibilityOff, RoundVisibilityOff, SharpVisibilityOff, TwoToneVisibilityOff)
