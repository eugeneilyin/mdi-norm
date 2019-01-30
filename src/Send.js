import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSend } from './FilledSend'
import { OutlineSend } from './OutlineSend'
import { RoundSend } from './RoundSend'
import { SharpSend } from './SharpSend'
import { TwoToneSend } from './TwoToneSend'

export const Send = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSend, OutlineSend, RoundSend, SharpSend, TwoToneSend)
