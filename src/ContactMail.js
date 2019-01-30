import { createThemedIcon } from './utils/createThemedIcon'
import { FilledContactMail } from './FilledContactMail'
import { OutlineContactMail } from './OutlineContactMail'
import { RoundContactMail } from './RoundContactMail'
import { SharpContactMail } from './SharpContactMail'
import { TwoToneContactMail } from './TwoToneContactMail'

export const ContactMail = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledContactMail, OutlineContactMail, RoundContactMail, SharpContactMail, TwoToneContactMail)
