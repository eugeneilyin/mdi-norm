import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMarkunreadMailbox } from './FilledMarkunreadMailbox'
import { OutlineMarkunreadMailbox } from './OutlineMarkunreadMailbox'
import { RoundMarkunreadMailbox } from './RoundMarkunreadMailbox'
import { SharpMarkunreadMailbox } from './SharpMarkunreadMailbox'
import { TwoToneMarkunreadMailbox } from './TwoToneMarkunreadMailbox'

export const MarkunreadMailbox = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMarkunreadMailbox, OutlineMarkunreadMailbox, RoundMarkunreadMailbox, SharpMarkunreadMailbox, TwoToneMarkunreadMailbox)
