import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMail } from './FilledMail'
import { OutlineMail } from './OutlineMail'
import { RoundMail } from './RoundMail'
import { SharpMail } from './SharpMail'
import { TwoToneMail } from './TwoToneMail'

export const Mail = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMail, OutlineMail, RoundMail, SharpMail, TwoToneMail)
