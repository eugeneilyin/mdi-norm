import { createThemedIcon } from './utils/createThemedIcon'
import { FilledContacts } from './FilledContacts'
import { OutlineContacts } from './OutlineContacts'
import { RoundContacts } from './RoundContacts'
import { SharpContacts } from './SharpContacts'
import { TwoToneContacts } from './TwoToneContacts'

export const Contacts = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledContacts, OutlineContacts, RoundContacts, SharpContacts, TwoToneContacts)
