import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSms } from './FilledSms'
import { OutlineSms } from './OutlineSms'
import { RoundSms } from './RoundSms'
import { SharpSms } from './SharpSms'
import { TwoToneSms } from './TwoToneSms'

export const Sms = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSms, OutlineSms, RoundSms, SharpSms, TwoToneSms)
