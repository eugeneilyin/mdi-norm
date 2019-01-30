import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpeakerNotesOff } from './FilledSpeakerNotesOff'
import { OutlineSpeakerNotesOff } from './OutlineSpeakerNotesOff'
import { RoundSpeakerNotesOff } from './RoundSpeakerNotesOff'
import { SharpSpeakerNotesOff } from './SharpSpeakerNotesOff'
import { TwoToneSpeakerNotesOff } from './TwoToneSpeakerNotesOff'

export const SpeakerNotesOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpeakerNotesOff, OutlineSpeakerNotesOff, RoundSpeakerNotesOff, SharpSpeakerNotesOff, TwoToneSpeakerNotesOff)
