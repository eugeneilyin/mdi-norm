import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAlternateEmail } from './FilledAlternateEmail'
import { OutlineAlternateEmail } from './OutlineAlternateEmail'
import { RoundAlternateEmail } from './RoundAlternateEmail'
import { SharpAlternateEmail } from './SharpAlternateEmail'
import { TwoToneAlternateEmail } from './TwoToneAlternateEmail'

export const AlternateEmail = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAlternateEmail, OutlineAlternateEmail, RoundAlternateEmail, SharpAlternateEmail, TwoToneAlternateEmail)
