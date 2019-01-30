import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpeakerGroup } from './FilledSpeakerGroup'
import { OutlineSpeakerGroup } from './OutlineSpeakerGroup'
import { RoundSpeakerGroup } from './RoundSpeakerGroup'
import { SharpSpeakerGroup } from './SharpSpeakerGroup'
import { TwoToneSpeakerGroup } from './TwoToneSpeakerGroup'

export const SpeakerGroup = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpeakerGroup, OutlineSpeakerGroup, RoundSpeakerGroup, SharpSpeakerGroup, TwoToneSpeakerGroup)
