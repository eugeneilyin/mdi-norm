import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpeakerNotes } from './FilledSpeakerNotes'
import { OutlineSpeakerNotes } from './OutlineSpeakerNotes'
import { RoundSpeakerNotes } from './RoundSpeakerNotes'
import { SharpSpeakerNotes } from './SharpSpeakerNotes'
import { TwoToneSpeakerNotes } from './TwoToneSpeakerNotes'

export const SpeakerNotes = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpeakerNotes, OutlineSpeakerNotes, RoundSpeakerNotes, SharpSpeakerNotes, TwoToneSpeakerNotes)
