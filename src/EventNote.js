import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEventNote } from './FilledEventNote'
import { OutlineEventNote } from './OutlineEventNote'
import { RoundEventNote } from './RoundEventNote'
import { SharpEventNote } from './SharpEventNote'
import { TwoToneEventNote } from './TwoToneEventNote'

export const EventNote = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEventNote, OutlineEventNote, RoundEventNote, SharpEventNote, TwoToneEventNote)
