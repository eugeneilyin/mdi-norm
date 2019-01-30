import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVoiceChat } from './FilledVoiceChat'
import { OutlineVoiceChat } from './OutlineVoiceChat'
import { RoundVoiceChat } from './RoundVoiceChat'
import { SharpVoiceChat } from './SharpVoiceChat'
import { TwoToneVoiceChat } from './TwoToneVoiceChat'

export const VoiceChat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVoiceChat, OutlineVoiceChat, RoundVoiceChat, SharpVoiceChat, TwoToneVoiceChat)
