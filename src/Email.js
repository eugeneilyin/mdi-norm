import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEmail } from './FilledEmail'
import { OutlineEmail } from './OutlineEmail'
import { RoundEmail } from './RoundEmail'
import { SharpEmail } from './SharpEmail'
import { TwoToneEmail } from './TwoToneEmail'

export const Email = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEmail, OutlineEmail, RoundEmail, SharpEmail, TwoToneEmail)
