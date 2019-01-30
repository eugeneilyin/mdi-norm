import { createThemedIcon } from './utils/createThemedIcon'
import { FilledContactPhone } from './FilledContactPhone'
import { OutlineContactPhone } from './OutlineContactPhone'
import { RoundContactPhone } from './RoundContactPhone'
import { SharpContactPhone } from './SharpContactPhone'
import { TwoToneContactPhone } from './TwoToneContactPhone'

export const ContactPhone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledContactPhone, OutlineContactPhone, RoundContactPhone, SharpContactPhone, TwoToneContactPhone)
