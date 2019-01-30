import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEventAvailable } from './FilledEventAvailable'
import { OutlineEventAvailable } from './OutlineEventAvailable'
import { RoundEventAvailable } from './RoundEventAvailable'
import { SharpEventAvailable } from './SharpEventAvailable'
import { TwoToneEventAvailable } from './TwoToneEventAvailable'

export const EventAvailable = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEventAvailable, OutlineEventAvailable, RoundEventAvailable, SharpEventAvailable, TwoToneEventAvailable)
