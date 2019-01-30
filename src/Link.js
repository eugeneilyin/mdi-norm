import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLink } from './FilledLink'
import { OutlineLink } from './OutlineLink'
import { RoundLink } from './RoundLink'
import { SharpLink } from './SharpLink'
import { TwoToneLink } from './TwoToneLink'

export const Link = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLink, OutlineLink, RoundLink, SharpLink, TwoToneLink)
