import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPermPhoneMsg } from './FilledPermPhoneMsg'
import { OutlinePermPhoneMsg } from './OutlinePermPhoneMsg'
import { RoundPermPhoneMsg } from './RoundPermPhoneMsg'
import { SharpPermPhoneMsg } from './SharpPermPhoneMsg'
import { TwoTonePermPhoneMsg } from './TwoTonePermPhoneMsg'

export const PermPhoneMsg = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPermPhoneMsg, OutlinePermPhoneMsg, RoundPermPhoneMsg, SharpPermPhoneMsg, TwoTonePermPhoneMsg)
