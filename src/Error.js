import { createThemedIcon } from './utils/createThemedIcon'
import { FilledError } from './FilledError'
import { OutlineError } from './OutlineError'
import { RoundError } from './RoundError'
import { SharpError } from './SharpError'
import { TwoToneError } from './TwoToneError'

export const Error = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledError, OutlineError, RoundError, SharpError, TwoToneError)
