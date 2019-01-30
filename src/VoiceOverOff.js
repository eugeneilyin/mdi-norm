import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVoiceOverOff } from './FilledVoiceOverOff'
import { OutlineVoiceOverOff } from './OutlineVoiceOverOff'
import { RoundVoiceOverOff } from './RoundVoiceOverOff'
import { SharpVoiceOverOff } from './SharpVoiceOverOff'
import { TwoToneVoiceOverOff } from './TwoToneVoiceOverOff'

export const VoiceOverOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVoiceOverOff, OutlineVoiceOverOff, RoundVoiceOverOff, SharpVoiceOverOff, TwoToneVoiceOverOff)
