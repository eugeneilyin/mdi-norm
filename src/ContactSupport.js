import { createThemedIcon } from './utils/createThemedIcon'
import { FilledContactSupport } from './FilledContactSupport'
import { OutlineContactSupport } from './OutlineContactSupport'
import { RoundContactSupport } from './RoundContactSupport'
import { SharpContactSupport } from './SharpContactSupport'
import { TwoToneContactSupport } from './TwoToneContactSupport'

export const ContactSupport = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledContactSupport, OutlineContactSupport, RoundContactSupport, SharpContactSupport, TwoToneContactSupport)
