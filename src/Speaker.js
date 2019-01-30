import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpeaker } from './FilledSpeaker'
import { OutlineSpeaker } from './OutlineSpeaker'
import { RoundSpeaker } from './RoundSpeaker'
import { SharpSpeaker } from './SharpSpeaker'
import { TwoToneSpeaker } from './TwoToneSpeaker'

export const Speaker = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpeaker, OutlineSpeaker, RoundSpeaker, SharpSpeaker, TwoToneSpeaker)
